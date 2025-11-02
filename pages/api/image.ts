import type { NextApiHandler } from "next";
import { IncomingForm } from "formidable";
import cloudinary from "../../lib/cloudinary";
import db from "../../utils/db";
import Image from "../../models/Image";

// Tắt bodyParser để formidable xử lý request
export const config = {
  api: { bodyParser: false },
};

// Hàm tiện ích để parse form multipart/form-data, hỗ trợ multiples
const parseForm = (req: any): Promise<{ files: any; fields: any }> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ files, fields });
    });
  });
};

const handler: NextApiHandler = (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST": {
      const { multiple } = req.query;
      if (multiple === "true") {
        return uploadMultipleImages(req, res);
      }
      return uploadNewImage(req, res);
    }
    case "GET":
      return readAllImages(req, res);
    default:
      return res.status(404).send("Not found!");
  }
};

// Upload một ảnh lên Cloudinary
const uploadNewImage: NextApiHandler = async (req, res) => {
  try {
    const { files, fields } = await parseForm(req);
    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
    const altText = fields.altText || "";

    // Validate loại file
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(imageFile.mimetype)) {
      return res.status(400).json({ error: 'Chỉ hỗ trợ file JPEG, JPG, PNG, WEBP' });
    }

    const { secure_url: url, public_id } = await cloudinary.uploader.upload(
      imageFile.filepath,
      { folder: "tantruonggiang" }
    );

    // Lưu vào database
    await db.connectDb();
    const image = new Image({
      src: url,
      altText: altText,
      publicId: public_id,
    });
    await image.save();

    res.json({ 
      src: url, 
      id: image._id,
      altText: image.altText 
    });
  } catch (error: any) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).json({ error: error.message });
  }
};

// Upload nhiều ảnh lên Cloudinary cùng lúc
const uploadMultipleImages: NextApiHandler = async (req, res) => {
  try {
    const { files, fields } = await parseForm(req);
    const imageFiles = Array.isArray(files.image) ? files.image : [files.image];
    const uploadedImages: any[] = [];

    // Validate và upload từng file
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    await db.connectDb();
    
    for (const file of imageFiles) {
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({ error: 'Chỉ hỗ trợ file JPEG, JPG, PNG, WEBP' });
      }
      const { secure_url: url, public_id } = await cloudinary.uploader.upload(
        file.filepath,
        { folder: "tantruonggiang" }
      );
      
      // Lưu vào database
      const image = new Image({
        src: url,
        altText: "",
        publicId: public_id,
      });
      await image.save();
      
      uploadedImages.push({
        src: url,
        id: image._id,
        altText: image.altText
      });
    }

    res.json({ src: uploadedImages });
  } catch (error: any) {
    console.error('Error uploading multiple images to Cloudinary:', error);
    res.status(500).json({ error: error.message });
  }
};

// Đọc danh sách ảnh từ Cloudinary (tạm thời cho đến khi migration hoàn thành)
const readAllImages: NextApiHandler = async (req, res) => {
  try {
    // Lấy ảnh từ Cloudinary
    const { resources } = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      prefix: "tantruonggiang",
      max_results: 1000,
    });

    // Lấy ảnh từ database để có Alt Text
    await db.connectDb();
    const dbImages = await Image.find();
    const dbImageMap = new Map(dbImages.map(img => [img.src, img]));

    // Kết hợp ảnh từ Cloudinary với Alt Text từ database
    const formattedImages = resources.map((resource: any) => {
      const dbImage = dbImageMap.get(resource.secure_url);
      return {
        id: dbImage?._id || resource.public_id, // Dùng public_id làm ID tạm thời nếu chưa có trong DB
        src: resource.secure_url,
        altText: dbImage?.altText || ""
      };
    });

    res.json({ images: formattedImages });
  } catch (error: any) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: error.message });
  }
};

export default handler;
