import Head from "next/head";
import DefaultLayout from "../components/layout/DefaultLayout";

export default function OrderGuide() {
  const meta = {
    title: "Hướng dẫn đặt hàng - Đồng Phục Univi",
    description: "Hướng dẫn chi tiết cách đặt hàng thiết kế và in đồng phục theo yêu cầu tại Đồng Phục Univi. Quy trình tư vấn, thiết kế và sản xuất.",
    keywords: "hướng dẫn đặt hàng, thiết kế đồng phục, in đồng phục theo yêu cầu, đồng phục univi",
    robots: "index, follow",
    author: "Đồng Phục Univi",
    canonical: "https://dongphucunivi.com/huong-dan-dat-hang",
  };

  return (
    <DefaultLayout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content={meta.robots} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:image" content="https://dongphucunivi.com/images/banner-univi.webp" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://dongphucunivi.com/images/banner-univi.webp" />
      </Head>
      <div className="h-[80px]"></div>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="">
             <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
               Hướng dẫn đặt hàng
             </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Ngày cập nhật:</strong> {new Date().toLocaleDateString('vi-VN')}
              </p>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Tổng quan</h2>
                 <p className="text-gray-700 leading-relaxed mb-4">
                   Hướng dẫn này sẽ giúp bạn dễ dàng đặt hàng thiết kế và in đồng phục theo yêu cầu tại Đồng Phục Univi. 
                   Chúng tôi chuyên thiết kế và sản xuất đồng phục theo đúng nhu cầu của khách hàng với chất lượng cao nhất.
                 </p>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Quy trình đặt hàng</h2>
                 <div className="space-y-6">
                   <div className="bg-blue-50 p-6 rounded-lg">
                     <h3 className="text-xl font-medium text-blue-900 mb-3">Bước 1: Tư vấn và trao đổi yêu cầu</h3>
                     <ul className="list-disc list-inside text-blue-800 space-y-2">
                       <li>Liên hệ với chúng tôi qua hotline hoặc email</li>
                       <li>Mô tả chi tiết nhu cầu đồng phục (loại, số lượng, mục đích sử dụng)</li>
                       <li>Thảo luận về thiết kế, màu sắc, logo, thông điệp</li>
                       <li>Chia sẻ hình ảnh tham khảo hoặc ý tưởng thiết kế</li>
                     </ul>
                   </div>

                   <div className="bg-green-50 p-6 rounded-lg">
                     <h3 className="text-xl font-medium text-green-900 mb-3">Bước 2: Thiết kế và báo giá</h3>
                     <ul className="list-disc list-inside text-green-800 space-y-2">
                       <li>Chúng tôi thiết kế mẫu đồng phục theo yêu cầu</li>
                       <li>Gửi bản thiết kế để khách hàng xem xét và chỉnh sửa</li>
                       <li>Báo giá chi tiết dựa trên thiết kế và số lượng</li>
                       <li>Thảo luận về thời gian sản xuất và giao hàng</li>
                     </ul>
                   </div>

                   <div className="bg-yellow-50 p-6 rounded-lg">
                     <h3 className="text-xl font-medium text-yellow-900 mb-3">Bước 3: Xác nhận đơn hàng</h3>
                     <ul className="list-disc list-inside text-yellow-800 space-y-2">
                       <li>Khách hàng duyệt và phê duyệt thiết kế cuối cùng</li>
                       <li>Xác nhận số lượng, kích thước, màu sắc</li>
                       <li>Ký hợp đồng và thanh toán đặt cọc (nếu có)</li>
                       <li>Bắt đầu quá trình sản xuất</li>
                     </ul>
                   </div>

                   <div className="bg-purple-50 p-6 rounded-lg">
                     <h3 className="text-xl font-medium text-purple-900 mb-3">Bước 4: Sản xuất và kiểm tra chất lượng</h3>
                     <ul className="list-disc list-inside text-purple-800 space-y-2">
                       <li>Chúng tôi tiến hành sản xuất theo thiết kế đã duyệt</li>
                       <li>Kiểm tra chất lượng từng sản phẩm</li>
                       <li>Chụp ảnh mẫu sản phẩm để khách hàng xác nhận</li>
                       <li>Hoàn thiện và đóng gói sản phẩm</li>
                     </ul>
                   </div>

                   <div className="bg-red-50 p-6 rounded-lg">
                     <h3 className="text-xl font-medium text-red-900 mb-3">Bước 5: Giao hàng và thanh toán</h3>
                     <ul className="list-disc list-inside text-red-800 space-y-2">
                       <li>Giao hàng đến địa chỉ khách hàng yêu cầu</li>
                       <li>Khách hàng kiểm tra và nhận hàng</li>
                       <li>Thanh toán số tiền còn lại</li>
                       <li>Hỗ trợ sau bán hàng nếu cần thiết</li>
                     </ul>
                   </div>
                 </div>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Thông tin cần cung cấp khi đặt hàng</h2>
                 <div className="bg-gray-100 p-6 rounded-lg">
                   <h3 className="text-xl font-medium text-gray-800 mb-4">Thông tin cơ bản</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <h4 className="text-lg font-medium text-gray-700 mb-3">Thông tin sản phẩm:</h4>
                       <ul className="list-disc list-inside text-gray-600 space-y-1">
                         <li>Loại đồng phục (áo thun, áo polo, áo khoác, quần, v.v.)</li>
                         <li>Số lượng cần sản xuất</li>
                         <li>Kích thước và số lượng theo từng size</li>
                         <li>Màu sắc chủ đạo</li>
                         <li>Chất liệu vải mong muốn</li>
                       </ul>
                     </div>
                     <div>
                       <h4 className="text-lg font-medium text-gray-700 mb-3">Thông tin thiết kế:</h4>
                       <ul className="list-disc list-inside text-gray-600 space-y-1">
                         <li>Logo công ty/tổ chức (file vector hoặc hình ảnh chất lượng cao)</li>
                         <li>Nội dung text cần in/thêu</li>
                         <li>Vị trí đặt logo và text</li>
                         <li>Màu sắc của logo và text</li>
                         <li>Phong cách thiết kế mong muốn</li>
                       </ul>
                     </div>
                   </div>
                   <div className="mt-4">
                     <h4 className="text-lg font-medium text-gray-700 mb-3">Thông tin giao hàng:</h4>
                     <ul className="list-disc list-inside text-gray-600 space-y-1">
                       <li>Địa chỉ giao hàng chi tiết</li>
                       <li>Thời gian cần giao hàng</li>
                       <li>Thông tin liên hệ người nhận hàng</li>
                       <li>Yêu cầu đặc biệt về đóng gói (nếu có)</li>
                     </ul>
                   </div>
                 </div>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Phương thức thanh toán</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-blue-50 p-4 rounded-lg">
                     <h3 className="text-lg font-medium text-blue-900 mb-2">💳 Thanh toán online</h3>
                     <ul className="text-blue-800 space-y-1">
                       <li>• Chuyển khoản ngân hàng</li>
                       <li>• Thẻ ATM nội địa</li>
                       <li>• Thẻ tín dụng/ghi nợ quốc tế</li>
                       <li>• Ví điện tử (MoMo, ZaloPay)</li>
                       <li>• Internet Banking</li>
                     </ul>
                   </div>
                   
                   <div className="bg-green-50 p-4 rounded-lg">
                     <h3 className="text-lg font-medium text-green-900 mb-2">💰 Thanh toán theo đợt</h3>
                     <ul className="text-green-800 space-y-1">
                       <li>• Đặt cọc 30-50% khi ký hợp đồng</li>
                       <li>• Thanh toán 50-70% còn lại khi giao hàng</li>
                       <li>• COD (Cash on Delivery) cho đơn hàng nhỏ</li>
                       <li>• Thanh toán tại xưởng sản xuất</li>
                     </ul>
                   </div>
                 </div>
                 <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                   <h3 className="text-lg font-medium text-yellow-900 mb-2">📋 Lưu ý về thanh toán</h3>
                   <ul className="text-yellow-800 space-y-1">
                     <li>• Đơn hàng trên 10 triệu VNĐ: Đặt cọc tối thiểu 30%</li>
                     <li>• Đơn hàng dưới 10 triệu VNĐ: Có thể thanh toán toàn bộ khi giao hàng</li>
                     <li>• Hỗ trợ thanh toán theo đợt cho đơn hàng lớn</li>
                     <li>• Cung cấp hóa đơn VAT theo yêu cầu</li>
                   </ul>
                 </div>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Thời gian sản xuất và giao hàng</h2>
                 <div className="space-y-4">
                   <div>
                     <h3 className="text-xl font-medium text-gray-800 mb-2">5.1. Thời gian sản xuất</h3>
                     <ul className="list-disc list-inside text-gray-700 space-y-1">
                       <li><strong>Đơn hàng nhỏ (dưới 50 sản phẩm):</strong> 3-5 ngày làm việc</li>
                       <li><strong>Đơn hàng trung bình (50-200 sản phẩm):</strong> 5-7 ngày làm việc</li>
                       <li><strong>Đơn hàng lớn (trên 200 sản phẩm):</strong> 7-14 ngày làm việc</li>
                       <li><strong>Đơn hàng đặc biệt (thiết kế phức tạp):</strong> 10-21 ngày làm việc</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h3 className="text-xl font-medium text-gray-800 mb-2">5.2. Thời gian giao hàng</h3>
                     <ul className="list-disc list-inside text-gray-700 space-y-1">
                       <li><strong>Hà Nội & TP.HCM:</strong> 1-2 ngày làm việc</li>
                       <li><strong>Các tỉnh thành khác:</strong> 2-5 ngày làm việc</li>
                       <li><strong>Vùng sâu, vùng xa:</strong> 5-7 ngày làm việc</li>
                       <li><strong>Giao hàng nhanh:</strong> Có thể sắp xếp theo yêu cầu</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h3 className="text-xl font-medium text-gray-800 mb-2">5.3. Phí vận chuyển</h3>
                     <ul className="list-disc list-inside text-gray-700 space-y-1">
                       <li><strong>Miễn phí:</strong> Đơn hàng từ 5 triệu VNĐ</li>
                       <li><strong>30.000 VNĐ:</strong> Đơn hàng dưới 5 triệu VNĐ</li>
                       <li><strong>50.000 VNĐ:</strong> Giao hàng nhanh (trong ngày)</li>
                       <li><strong>Giao hàng tận nơi:</strong> Có thể sắp xếp cho đơn hàng lớn</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h3 className="text-xl font-medium text-gray-800 mb-2">5.4. Theo dõi tiến độ sản xuất</h3>
                     <p className="text-gray-700 leading-relaxed">
                       Chúng tôi sẽ cập nhật tiến độ sản xuất cho khách hàng:
                     </p>
                     <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                       <li>Email xác nhận đơn hàng và thời gian sản xuất</li>
                       <li>Hình ảnh mẫu sản phẩm khi hoàn thành</li>
                       <li>Thông báo khi bắt đầu sản xuất</li>
                       <li>Thông báo khi hoàn thành và chuẩn bị giao hàng</li>
                       <li>Mã vận đơn để theo dõi giao hàng</li>
                     </ul>
                   </div>
                 </div>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Kiểm tra và nhận hàng</h2>
                 <div className="bg-yellow-50 p-6 rounded-lg">
                   <h3 className="text-xl font-medium text-yellow-900 mb-3">⚠️ Lưu ý quan trọng khi nhận hàng</h3>
                   <ul className="list-disc list-inside text-yellow-800 space-y-2">
                     <li>Kiểm tra kỹ sản phẩm trước khi ký nhận</li>
                     <li>Đảm bảo số lượng, kích thước, màu sắc đúng như đơn hàng</li>
                     <li>Kiểm tra chất lượng in/thêu logo và text</li>
                     <li>Kiểm tra tình trạng sản phẩm (không bị lỗi, rách, bẩn)</li>
                     <li>So sánh với thiết kế đã duyệt trước đó</li>
                     <li>Nếu có vấn đề, từ chối nhận hàng và liên hệ ngay với chúng tôi</li>
                     <li>Giữ lại hóa đơn và phiếu giao hàng</li>
                   </ul>
                 </div>
                 <div className="mt-4 bg-green-50 p-4 rounded-lg">
                   <h3 className="text-lg font-medium text-green-900 mb-2">✅ Cam kết chất lượng</h3>
                   <ul className="text-green-800 space-y-1">
                     <li>• Sản phẩm đúng thiết kế đã duyệt</li>
                     <li>• Chất lượng in/thêu sắc nét, bền màu</li>
                     <li>• Đúng số lượng và kích thước yêu cầu</li>
                     <li>• Đóng gói cẩn thận, không bị hư hỏng</li>
                     <li>• Hỗ trợ sửa chữa nếu có lỗi từ phía sản xuất</li>
                   </ul>
                 </div>
               </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Hỗ trợ khách hàng</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">📞 Liên hệ trực tiếp</h3>
                    <p className="text-blue-800 mb-2">Hotline: 083 420 4999</p>
                    <p className="text-blue-800 mb-2">Email: info@dongphucunivi.com</p>
                    <p className="text-blue-800">Thời gian: 8:00 - 22:00 (T2-CN)</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-green-900 mb-2">💬 Hỗ trợ online</h3>
                    <p className="text-green-800 mb-2">Chat trực tiếp trên website</p>
                    <p className="text-green-800 mb-2">Facebook: @dongphucunivi</p>
                    <p className="text-green-800">Zalo: 083 420 4999</p>
                  </div>
                </div>
              </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Câu hỏi thường gặp</h2>
                 <div className="space-y-4">
                   <div className="border-l-4 border-blue-500 pl-4">
                     <h3 className="text-lg font-medium text-gray-800 mb-2">Tôi có thể chỉnh sửa thiết kế sau khi đã duyệt không?</h3>
                     <p className="text-gray-700">
                       Có thể chỉnh sửa nhỏ trước khi bắt đầu sản xuất. Nếu đã sản xuất, 
                       việc chỉnh sửa sẽ phát sinh thêm chi phí và thời gian.
                     </p>
                   </div>
                   
                   <div className="border-l-4 border-green-500 pl-4">
                     <h3 className="text-lg font-medium text-gray-800 mb-2">Làm sao để biết giá cả chính xác?</h3>
                     <p className="text-gray-700">
                       Giá cả phụ thuộc vào số lượng, chất liệu, kỹ thuật in/thêu và độ phức tạp thiết kế. 
                       Chúng tôi sẽ báo giá chi tiết sau khi trao đổi yêu cầu cụ thể.
                     </p>
                   </div>
                   
                   <div className="border-l-4 border-yellow-500 pl-4">
                     <h3 className="text-lg font-medium text-gray-800 mb-2">Tôi có thể hủy đơn hàng không?</h3>
                     <p className="text-gray-700">
                       Có thể hủy trước khi bắt đầu sản xuất. Nếu đã sản xuất, 
                       chúng tôi sẽ tính phí theo tỷ lệ hoàn thành công việc.
                     </p>
                   </div>
                   
                   <div className="border-l-4 border-purple-500 pl-4">
                     <h3 className="text-lg font-medium text-gray-800 mb-2">Có hỗ trợ thiết kế logo không?</h3>
                     <p className="text-gray-700">
                       Có, chúng tôi có đội ngũ thiết kế chuyên nghiệp có thể hỗ trợ thiết kế logo 
                       và toàn bộ bộ nhận diện thương hiệu cho khách hàng.
                     </p>
                   </div>
                 </div>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Mẹo đặt hàng hiệu quả</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-purple-50 p-4 rounded-lg">
                     <h3 className="text-lg font-medium text-purple-900 mb-2">💡 Tiết kiệm chi phí</h3>
                     <ul className="text-purple-800 space-y-1">
                       <li>• Đặt hàng số lượng lớn để được giá tốt hơn</li>
                       <li>• Chọn chất liệu phù hợp với ngân sách</li>
                       <li>• Tối ưu hóa thiết kế để giảm chi phí in/thêu</li>
                       <li>• Đặt hàng sớm để tránh phí gấp rút</li>
                     </ul>
                   </div>
                   
                   <div className="bg-pink-50 p-4 rounded-lg">
                     <h3 className="text-lg font-medium text-pink-900 mb-2">🎯 Thiết kế hiệu quả</h3>
                     <ul className="text-pink-800 space-y-1">
                       <li>• Chuẩn bị sẵn logo và nội dung text</li>
                       <li>• Tham khảo các mẫu thiết kế có sẵn</li>
                       <li>• Mô tả rõ ràng ý tưởng thiết kế</li>
                       <li>• Liên hệ tư vấn để được hỗ trợ tốt nhất</li>
                     </ul>
                   </div>
                 </div>
                 <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                   <h3 className="text-lg font-medium text-blue-900 mb-2">⏰ Lên kế hoạch thời gian</h3>
                   <ul className="text-blue-800 space-y-1">
                     <li>• Đặt hàng trước ít nhất 1-2 tuần so với thời gian cần sử dụng</li>
                     <li>• Dành thời gian cho việc chỉnh sửa thiết kế</li>
                     <li>• Có kế hoạch dự phòng cho trường hợp cần gấp</li>
                     <li>• Thông báo rõ ràng về deadline với chúng tôi</li>
                   </ul>
                 </div>
               </section>

               <section className="mb-8">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Liên hệ hỗ trợ</h2>
                 <div className="bg-gray-100 p-6 rounded-lg text-center">
                   <p className="text-gray-700 mb-4">
                     Nếu bạn cần hỗ trợ thêm về quy trình đặt hàng hoặc tư vấn thiết kế, đừng ngần ngại liên hệ với chúng tôi:
                   </p>
                   <div className="space-y-2">
                     <p className="text-gray-700"><strong>Hotline:</strong> 083 420 4999</p>
                     <p className="text-gray-700"><strong>Email:</strong> info@dongphucunivi.com</p>
                     <p className="text-gray-700"><strong>Website:</strong> https://dongphucunivi.com</p>
                     <p className="text-gray-600 text-sm mt-4">
                       <strong>Thời gian làm việc:</strong> 8:00 - 22:00 (Thứ 2 - Chủ nhật)<br/>
                       <strong>Dịch vụ:</strong> Tư vấn miễn phí, thiết kế chuyên nghiệp, sản xuất chất lượng cao
                     </p>
                   </div>
                 </div>
               </section>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
