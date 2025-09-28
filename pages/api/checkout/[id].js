// /pages/api/orders/[id].js
import db from "../../../utils/db";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  await db.connectDb();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const order = await Order.findById(id);
        if (!order)
          return res.status(404).json({ message: "Đơn hàng không tồn tại" });
        return res.status(200).json(order);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "PUT":
      try {
        // Lấy các trường cần cập nhật từ body
        // Lưu ý: Bạn có thể áp dụng các kiểm tra quyền, chỉ cho phép người dùng sửa đơn hàng khi ở trạng thái "pending"
        const {
          shippingAddress,
          phone,
          name,
          note,
          coupon,
          discount,
          totalPrice,
          totalAfterDiscount,
          status, // cập nhật trạng thái đơn hàng (có thể do admin thay đổi)
        } = req.body;

        const updatedFields = {};
        if (shippingAddress) updatedFields.shippingAddress = shippingAddress;
        if (phone) updatedFields.phone = phone;
        if (name) updatedFields.name = name;
        if (note !== undefined) updatedFields.note = note;
        if (coupon !== undefined) updatedFields.coupon = coupon;
        if (discount !== undefined) updatedFields.discount = discount;
        if (totalPrice !== undefined) updatedFields.totalPrice = totalPrice;
        if (totalAfterDiscount !== undefined)
          updatedFields.totalAfterDiscount = totalAfterDiscount;
        if (status) updatedFields.status = status;

        const order = await Order.findByIdAndUpdate(id, updatedFields, {
          new: true,
        });
        if (!order)
          return res.status(404).json({ message: "Đơn hàng không tồn tại" });
        return res.status(200).json(order);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "DELETE":
      try {
        // Thay vì xóa hoàn toàn, ta có thể cập nhật trạng thái thành "cancelled" (hủy đơn hàng)
        const order = await Order.findByIdAndUpdate(
          id,
          { status: "cancelled" },
          { new: true }
        );
        if (!order)
          return res.status(404).json({ message: "Đơn hàng không tồn tại" });
        return res.status(200).json(order);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} không được hỗ trợ`);
  }
}
