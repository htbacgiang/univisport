import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  hex: {
    type: String,
    required: true,
    trim: true,
    match: [/^#([0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8})$/i, "Invalid hex color code"],
  },
  image: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (url) =>
        /^\/(image\/upload\/)?v\d+\/[^\s]+\.[a-zA-Z]{3,4}$/.test(url) ||
        /^https?:\/\/[^\s$.?#].[^\s]*$/.test(url),
      message: "Invalid image path or URL",
    },
  },
});

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    maSanPham: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/^[A-Za-z0-9_-]+$/, "Product code must contain only letters, numbers, underscores, or hyphens"],
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    originalPrice: {
      type: Number,
      min: 0,
    },
    content: {
      type: String,
      default: "",
      trim: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    categoryNameVN: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    colors: [colorSchema],
    image: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (url) =>
          /^\/image\/upload\/v\d+\/[^\s]+\.[a-zA-Z]{3,4}$/.test(url) ||
          /^https?:\/\/[^\s$.?#].[^\s]*$/.test(url),
        message: "Invalid image path or URL",
      },
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviewCount: {
      type: Number,
      min: 0,
      default: 0,
    },
    material: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes with case-insensitive collation
productSchema.index({ id: 1 }, { unique: true });
productSchema.index({ maSanPham: 1 }, { unique: true, collation: { locale: "en", strength: 2 } });
productSchema.index({ slug: 1 }, { unique: true, collation: { locale: "en", strength: 2 } });
productSchema.index({ category: 1 });
productSchema.index({ isNew: 1 });
productSchema.index({ isFeatured: 1 });
productSchema.index({ createdAt: -1 });

// Error handling middleware
productSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(`Validation failed: ${error.message}`));
  } else {
    next(error);
  }
});

let Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;