import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Heart, Shield, Zap, Users, CheckCircle, ArrowRight, Phone, Mail, Globe, MapPin, Star, Dumbbell, Trophy } from 'lucide-react';
import styles from '../../../styles/PickleballUniviPage.module.css';

export default function YogaPilatesUniviPage() {
  return (
    <>
  
      <div className="min-h-screen bg-gray-50">
      
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
            <div>
             
              <h1 className="text-2xl font-bold mb-4 leading-tight">
                Đồng Phục Yoga & Pilates Univi
                <span className="text-yellow-300"> Tự Do Chuyển Động, Kết Nối Cơ Thể Và Tâm Hồn</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200  leading-relaxed">
                Khám phá bộ sưu tập đồng phục Yoga & Pilates chuyên dụng từ Univi Sport - Chất liệu siêu mềm mại, co giãn 4 chiều, thấm hút mồ hôi vượt trội. Thiết kế như làn da thứ hai, nâng niu từng chuyển động trên thảm tập, giúp bạn hoàn toàn đắm chìm vào hành trình kết nối cơ thể và tâm hồn.
              </p>
            </div>
          </div>

          {/* Section 1: Tầm Quan Trọng Của Trang Phục */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">1</span>
              </div>
              <h2 className="text-xl md:text-xl font-bold text-slate-800">
                Yoga & Pilates – Hành Trình Kết Nối Cơ Thể, Tâm Hồn: Tầm Quan Trọng Của Trang Phục Phù Hợp
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Yoga và Pilates không chỉ là những bài tập thể chất, mà còn là hành trình khám phá, kết nối sâu sắc giữa cơ thể và tâm hồn. Để mỗi khoảnh khắc trên thảm tập thực sự trọn vẹn, để dòng chảy năng lượng được tự do tuôn chảy, trang phục bạn chọn đóng một vai trò không hề nhỏ. Một bộ đồ tập phù hợp không chỉ mang lại sự thoải mái, mà còn là người bạn đồng hành, hỗ trợ bạn chinh phục từng tư thế, lắng nghe từng hơi thở.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Tại sao trang phục chuyên biệt lại tối quan trọng trong Yoga & Pilates?
            </p>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Tự do chuyển động tuyệt đối</h3>
                    <p className="text-slate-600">Các asana Yoga hay chuỗi động tác Pilates đòi hỏi sự linh hoạt và biên độ chuyển động lớn. Trang phục chuyên dụng được thiết kế để co giãn tối đa, không gây cản trở, giúp bạn thực hiện mọi tư thế một cách dễ dàng và chuẩn xác.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Thấm hút mồ hôi & thoáng khí hiệu quả</h3>
                    <p className="text-slate-600">Giữ cho cơ thể luôn khô ráo, thoáng mát ngay cả khi bạn thực hiện những bài tập sâu và thử thách, giúp duy trì sự tập trung và ngăn ngừa cảm giác khó chịu.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Cảm giác &quot;như làn da thứ hai&quot;</h3>
                    <p className="text-slate-600">Sự mềm mại, nhẹ nhàng của chất liệu cao cấp, cùng thiết kế ôm vừa vặn nhưng không gò bó, mang lại cảm giác thoải mái tuyệt đối, giúp bạn quên đi sự hiện diện của trang phục để hoàn toàn đắm chìm vào buổi tập.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">An toàn và kín đáo</h3>
                    <p className="text-slate-600">Với những tư thế đảo ngược, uốn dẻo hay xoạc chân, trang phục có độ che phủ tốt, không bị xô lệch hay trở nên &quot;phản chủ&quot; là điều vô cùng cần thiết để bạn tự tin tập luyện.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Nâng cao trải nghiệm và sự tập trung</h3>
                    <p className="text-slate-600">Khi không còn bận tâm về trang phục, bạn có thể tập trung hoàn toàn vào kỹ thuật, hơi thở và những cảm nhận tinh tế từ sâu bên trong cơ thể, từ đó kết nối sâu hơn với chính mình.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Image Section */}
          <div className="my-8 text-center">
            <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/yoga.jpg"
              alt="Đồng phục Yoga Pilates Univi với chất liệu mềm mại co giãn, nâng niu từng chuyển động trên thảm tập."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-lg"
              quality={80}
              priority={true}
            />
          </figure>
        </div>

          {/* Section 2: Univi Sport */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">2</span>
              </div>
              <h2 className="text-xl md:text-xl font-bold text-slate-800">
                Univi Sport – Đồng Hành Cùng Bạn Trên Thảm Tập Yoga & Pilates Với Trang Phục Hoàn Hảo
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Thấu hiểu những yêu cầu đặc thù và mong muốn của cộng đồng Yoga & Pilates, Đồng Phục Univi (thuộc Univi Sport) tự hào mang đến những giải pháp trang phục được thiết kế chuyên biệt, nâng niu từng chuyển động và tôn vinh vẻ đẹp của bạn. Với hơn 8 năm kinh nghiệm trong lĩnh vực thiết kế và sản xuất đồng phục thể thao cao cấp, Univi đã trở thành đối tác tin cậy của hàng trăm doanh nghiệp, câu lạc bộ và các tín đồ thể thao trên khắp cả nước.
          </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Cam kết về chất lượng &quot;Made by Univi&quot; luôn là kim chỉ nam trong mọi hoạt động của chúng tôi:
            </p>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Cam kết chất lượng tuyệt đối
                </h3>
                <p className="text-slate-600">Chúng tôi <strong>không tính phí nếu sản phẩm không đạt chuẩn</strong>, bởi sự hài lòng và tin tưởng của bạn là ưu tiên hàng đầu.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  An toàn cho làn da
                </h3>
                <p className="text-slate-600"><strong>Tất cả chất liệu vải đều được kiểm định an toàn với da</strong>, không chứa các hóa chất độc hại như Formaldehyde hay các amin thơm từ thuốc nhuộm Azo, vốn có thể gây hại cho da và sức khỏe khi tiếp xúc lâu dài.</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Univi Sport không ngừng &quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện. Đặc biệt, với Yoga và Pilates, chúng tôi tự hào giới thiệu dòng vải <strong className="text-[#105d97]">UNIVI – SUPER COOL</strong>, một lựa chọn hoàn hảo cho những ai tìm kiếm sự thoải mái và hiệu suất tối ưu.
          </p>
        </div>
          </article>

          {/* Image Section */}
          <div className="my-8 text-center">
            <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/yoga-1.jpg"
              alt="Chất liệu Univi Super Cool co giãn 4 chiều, thấm hút mồ hôi hiệu quả dành cho Yoga và Pilates."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-lg"
              quality={80}
            />
          </figure>
        </div>

          {/* Section 3: Khám Phá Sự Khác Biệt */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">3</span>
              </div>
              <h2 className="text-xl md:text-xl font-bold text-slate-800">
                Khám Phá Sự Khác Biệt Tinh Tế Trong Đồng Phục Yoga - Pilates Từ Univi
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Mỗi bộ đồng phục Yoga - Pilates từ Univi là sự kết hợp giữa công nghệ dệt may tiên tiến và sự thấu hiểu sâu sắc nhu cầu của người tập.
          </p>

            <h3 className="text-xl font-bold text-[#105d97] mb-6">Chất Liệu &quot;Như Làn Da Thứ Hai&quot; – Nâng Niu Mọi Cảm Xúc:</h3>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                 
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">UNIVI – SUPER COOL (Polyamide x Elastane/Spandex)</h3>
                    <p className="text-slate-600 mb-4">Đây chính là &quot;ngôi sao&quot; trong bộ sưu tập trang phục Yoga và Pilates của Univi. Dòng vải này được cấu tạo chính từ sợi Polyamide, mang đến những đặc tính vượt trội:</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                       
                          <h4 className="font-bold text-[#105d97] text-lg">MỀM – MƯỢT – MÁT – MỊN</h4>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed ">Đúng như tên gọi, UNIVI – SUPER COOL mang lại cảm giác mát lạnh, mềm mại và trơn mượt ngay khi chạm vào da, tạo sự dễ chịu tuyệt đối.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                          
                          <h4 className="font-bold text-[#105d97] text-lg">Co giãn 4 chiều hoàn hảo</h4>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed">Độ đàn hồi cực cao cho phép vải chuyển động theo từng cử động của cơ thể, dù là những tư thế Yoga phức tạp hay các bài tập Pilates đòi hỏi sự kiểm soát và linh hoạt.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                         
                          <h4 className="font-bold text-[#105d97] text-lg">Thấm hút mồ hôi và nhanh khô</h4>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed ml-11">Giúp bạn luôn cảm thấy khô thoáng, nhẹ nhàng, ngay cả trong những buổi tập cường độ cao.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                        
                          <h4 className="font-bold text-[#105d97] text-lg">Thoáng khí tối ưu</h4>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed ml-11">Cấu trúc vải đặc biệt cho phép không khí lưu thông dễ dàng, ngăn ngừa cảm giác bí bách.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  UNIVI - BLENED
                </h3>
                <p className="text-slate-600">Univi cũng mang đến các lựa chọn vải pha trộn thông minh, ví dụ như sự kết hợp giữa Cotton hữu cơ mềm mại với Polyester và Spandex để tăng độ bền, khả năng quản lý độ ẩm và độ co giãn. Dòng vải này phù hợp cho những ai yêu thích cảm giác tự nhiên, thân thiện với môi trường mà vẫn đảm bảo hiệu suất tập luyện.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  An toàn tuyệt đối
                </h3>
                <p className="text-slate-600">Như đã cam kết, tất cả các chất liệu đều được kiểm định nghiêm ngặt, không chứa hóa chất gây hại, bảo vệ làn da nhạy cảm của bạn trong suốt quá trình tập luyện.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#105d97] mb-6 mt-8">Thiết Kế Tinh Tế - Tôn Dáng & Giải Phóng Chuyển Động:</h3>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Form dáng khoa học, tôn vinh đường cong
                </h3>
                <p className="text-slate-600">Trang phục Yoga - Pilates của Univi được thiết kế để ôm vừa vặn cơ thể, giúp bạn (và cả huấn luyện viên) dễ dàng quan sát và điều chỉnh từng tư thế, đảm bảo tính chính xác và hiệu quả. Thiết kế này tôn lên vẻ đẹp tự nhiên của cơ thể mà không hề gây cảm giác gò bó.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  &quot;Đường may tinh tế&quot; - Chăm chút từng chi tiết
                </h3>
                <p className="text-slate-600">Univi đặc biệt chú trọng đến kỹ thuật may. Chúng tôi ưu tiên sử dụng đường may phẳng (flatlock seams) để &quot;sản phẩm không chỉ đẹp mà còn bền&quot;, quan trọng hơn cả là giảm thiểu tối đa sự cọ xát lên da, không gây vết hằn hay cảm giác khó chịu, ngay cả khi bạn thực hiện những tư thế kéo giãn sâu trong thời gian dài.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Thiết kế thông minh, tối ưu công năng
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                     
                      <h4 className="font-bold text-[#105d97] text-lg">Quần Legging</h4>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed ">Thường có thiết kế cạp cao giúp ôm gọn vòng bụng, hỗ trợ phần lưng dưới và mang lại cảm giác an toàn, tự tin trong mọi tư thế, kể cả những tư thế đảo ngược.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      
                      <h4 className="font-bold text-[#105d97] text-lg">Áo Bra Thể Thao</h4>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">Cung cấp độ nâng đỡ vừa phải, phù hợp với các hoạt động có cường độ tác động thấp đến trung bình như Yoga và Pilates. Thiết kế lưng đa dạng (racerback, criss-cross, basic) không chỉ tăng tính thẩm mỹ mà còn đảm bảo sự thoải mái cho vùng vai và lưng.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/60 to-white/40 rounded-xl p-3 border border-white/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      
                      <h4 className="font-bold text-[#105d97] text-lg">Áo Tập (Tank Top, T-shirt)</h4>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed ">Có độ dài và độ rộng được tính toán kỹ lưỡng, đảm bảo sự kín đáo cần thiết khi bạn cúi người hay thực hiện các động tác xoắn vặn, đồng thời không gây vướng víu.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Phong cách và màu sắc đa dạng
                </h3>
                <p className="text-slate-600">Từ những gam màu trung tính, pastel nhẹ nhàng, trang nhã, gợi cảm giác thư thái, an nhiên, đến những màu sắc và họa tiết cá tính, nổi bật, giúp bạn tự do thể hiện phong cách riêng trên thảm tập.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Độ bền vượt trội
                </h3>
                <p className="text-slate-600">Chất liệu cao cấp cùng kỹ thuật may chắc chắn đảm bảo sản phẩm Univi giữ được form dáng, màu sắc và chất lượng sau nhiều lần giặt.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Giải pháp tùy chỉnh cho studio và huấn luyện viên
                </h3>
                <p className="text-slate-600">Univi nhận thiết kế và sản xuất theo yêu cầu riêng, giúp bạn xây dựng hình ảnh thương hiệu đồng bộ, chuyên nghiệp với logo và màu sắc đặc trưng.</p>
              </div>
        </div>
          </article>

          {/* Image Section */}
          <div className="my-8 text-center">
            <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/vai-yoga.jpg"
              alt="Áo bra thể thao Yoga Pilates Univi thoáng khí, thiết kế nâng đỡ vừa phải và đa dạng kiểu dáng."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-lg"
              quality={80}
            />
          </figure>
        </div>

          {/* Section 4: Lợi Ích */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">4</span>
              </div>
              <h2 className="text-xl md:text-xl font-bold text-slate-800">
                Lợi Ích Không Thể Bỏ Qua Khi Chọn Đồng Phục Yoga - Pilates Univi
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Đầu tư vào một bộ đồng phục Yoga - Pilates chất lượng từ Univi là bạn đang đầu tư cho chính trải nghiệm và sức khỏe của mình:
          </p>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Tối ưu hóa trải nghiệm tập luyện</h3>
                    <p className="text-slate-600">Khi cơ thể được nâng niu trong sự mềm mại, co giãn và thoáng mát, bạn có thể hoàn toàn đắm chìm vào từng hơi thở, từng chuyển động, cảm nhận sâu sắc sự kết nối giữa thân và tâm.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Tự tin thể hiện bản thân trong mọi tư thế</h3>
                    <p className="text-slate-600">Không còn lo lắng về trang phục xô lệch hay gây khó chịu, bạn tự do khám phá giới hạn của cơ thể, chinh phục những tư thế mới một cách đầy hứng khởi.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Bảo vệ làn da và sức khỏe toàn diện</h3>
                    <p className="text-slate-600">Với cam kết về chất liệu an toàn, không hóa chất độc hại, làn da của bạn sẽ được bảo vệ, tránh khỏi những nguy cơ kích ứng hay các vấn đề sức khỏe tiềm ẩn.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Xây dựng hình ảnh chuyên nghiệp và gắn kết</h3>
                    <p className="text-slate-600">Đối với các huấn luyện viên và studio, đồng phục Univi giúp tạo dựng hình ảnh chuyên nghiệp, uy tín và tăng cường sự gắn kết giữa các thành viên.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Đầu tư thông minh và bền vững</h3>
                    <p className="text-slate-600">Chất lượng vượt trội đồng nghĩa với tuổi thọ sản phẩm cao, giúp bạn tiết kiệm chi phí và có người bạn đồng hành đáng tin cậy trên con đường chăm sóc sức khỏe.</p>
                  </div>
                </div>
              </div>
        </div>
          </article>

          {/* Image Section */}
          <div className="my-8 text-center">
            <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/yoga-5.webp"
              alt="Quần legging Yoga Pilates cạp cao Univi ôm dáng, co giãn tối ưu giúp tự tin thực hiện mọi tư thế."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-lg"
              quality={80}
            />
          </figure>
        </div>

          {/* Section 5: Đa Dạng Lựa Chọn */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">5</span>
              </div>
              <h2 className="text-xl md:text-xl font-bold text-slate-800">
                Đa Dạng Lựa Chọn Đồng Phục Yoga - Pilates Tinh Tế Tại Univi
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Univi Sport mang đến một thế giới trang phục Yoga và Pilates phong phú, đáp ứng mọi sở thích và nhu cầu:
          </p>

            <h3 className="text-xl font-bold text-[#105d97] mb-6">Dành cho Nữ:</h3>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Quần Legging Yoga/Pilates
                </h3>
                <p className="text-slate-600">&quot;Must-have item&quot; với đa dạng kiểu dáng: cạp cao tôn dáng, cạp thường thoải mái; độ dài khác nhau (dài, lửng, 7/8). Chất liệu co giãn tối đa, không bai dão, không lộ vùng nhạy cảm. Nhiều lựa chọn màu sắc từ cơ bản đến thời thượng, cùng các họa tiết tinh tế.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Áo Bra Thể Thao (Sports Bra)
                </h3>
                <p className="text-slate-600">Thiết kế chuyên biệt cho Yoga và Pilates với độ nâng đỡ vừa phải, đảm bảo sự thoải mái mà vẫn giữ được sự ổn định. Kiểu dáng lưng đa dạng (racerback, criss-cross, dây mảnh) không chỉ đẹp mắt mà còn giúp giải phóng chuyển động cho vùng vai.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Áo Tank Top, Áo Thun Tập
                </h3>
                <p className="text-slate-600">Form dáng đa dạng từ ôm sát tôn dáng đến suông rộng thoải mái. Chất liệu mềm mại, thấm hút mồ hôi, mang lại cảm giác nhẹ nhàng, bay bổng trong từng chuyển động.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Áo Khoác Nhẹ/Cover-up
                </h3>
                <p className="text-slate-600">Những chiếc áo khoác mỏng nhẹ, cardigan hay áo trùm ngoài phong cách, lý tưởng để khoác lên người trước và sau buổi tập, giữ ấm cơ thể và hoàn thiện phong cách athleisure của bạn.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#105d97] mb-6 mt-8">Dành cho Nam:</h3>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Dumbbell className="w-5 h-5" />
                  Quần Short/Legging Nam
                </h3>
                <p className="text-slate-600">Thiết kế chuyên biệt đảm bảo sự co giãn, thoải mái tối đa cho các động tác Yoga và Pilates của nam giới.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Áo Thun/Tank Top Nam
                </h3>
                <p className="text-slate-600">Chất liệu thấm hút tốt, form dáng nam tính, không gây cản trở vận động.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#105d97] mb-6 mt-8">Đồng Phục Cho Giáo Viên & Studio Yoga/Pilates:</h3>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Thiết kế tùy chỉnh chuyên nghiệp
                </h3>
                <p className="text-slate-600">Univi nhận thiết kế và sản xuất đồng phục theo yêu cầu đặc thù của từng studio, từ kiểu dáng, màu sắc đến việc in/thêu logo, tên studio, slogan một cách tinh tế và chuyên nghiệp.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Đồng bộ và gắn kết
                </h3>
                <p className="text-slate-600">Đảm bảo tính đồng bộ, giúp nâng cao nhận diện thương hiệu và tạo không khí chuyên nghiệp, gắn kết cho phòng tập.</p>
              </div>
        </div>
          </article>

          {/* Image Section */}
          <div className="my-8 text-center">
            <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/yoga-4.jpg"
              alt="Sơ đồ 5 bước quy trình đặt may đồng phục Yoga chuyên nghiệp tại Univi."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-lg"
              quality={80}
            />
          </figure>
        </div>

          {/* Section 6: Quy Trình Đặt May */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">6</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                Quy Trình Đặt May Đồng Phục Yoga - Pilates Univi Đơn Giản & Chuyên Nghiệp
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Univi cam kết mang đến trải nghiệm đặt hàng dễ dàng, minh bạch và chuyên nghiệp:
          </p>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Tư Vấn Tận Tâm</h3>
                    <p className="text-slate-600">Hãy liên hệ với Univi qua hotline, email hoặc website. Chia sẻ nhu cầu, số lượng, ý tưởng thiết kế (nếu có) của bạn. Đội ngũ tư vấn viên giàu kinh nghiệm của chúng tôi sẽ lắng nghe và giúp bạn lựa chọn chất liệu, kiểu dáng phù hợp nhất với ngân sách và mục tiêu.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Thiết Kế Sáng Tạo (Hoàn Toàn Miễn Phí)</h3>
                    <p className="text-slate-600">Dựa trên những trao đổi, đội ngũ thiết kế của Univi sẽ hiện thực hóa ý tưởng của bạn thành các mẫu thiết kế demo trực quan. Bạn có thể yêu cầu chỉnh sửa không giới hạn cho đến khi hoàn toàn hài lòng với mẫu thiết kế.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Duyệt Mẫu & Báo Giá Minh Bạch</h3>
                    <p className="text-slate-600">Sau khi bạn chốt thiết kế cuối cùng, Univi sẽ gửi báo giá chi tiết, rõ ràng và cạnh tranh nhất. Đối với các đơn hàng lớn, chúng tôi có thể hỗ trợ may mẫu để bạn kiểm tra chất lượng thực tế.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Sản Xuất Chuẩn Mực</h3>
                    <p className="text-slate-600">Khi hợp đồng được ký kết, đơn hàng của bạn sẽ được đưa vào quy trình sản xuất tại xưởng may hiện đại của Univi, với đội ngũ công nhân lành nghề và sự giám sát chất lượng chặt chẽ ở từng công đoạn.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Kiểm Tra Chất Lượng (KCS) Kỹ Lưỡng</h3>
                    <p className="text-slate-600">Trước khi đến tay bạn, 100% sản phẩm đều phải trải qua khâu kiểm tra chất lượng cuối cùng, đảm bảo từng đường kim mũi chỉ, màu sắc, chi tiết in/thêu và form dáng đều hoàn hảo.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Giao Hàng Nhanh Chóng & Thanh Toán Thuận Tiện</h3>
                    <p className="text-slate-600">Univi hỗ trợ giao hàng tận nơi trên toàn quốc. Chúng tôi chấp nhận nhiều hình thức thanh toán linh hoạt, tạo sự thuận tiện tối đa cho khách hàng.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3   hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                  <div>
                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Chính Sách Bảo Hành và Hậu Mãi Chu Đáo</h3>
                    <p className="text-slate-600">Univi tự hào với &quot;Chế Độ Bảo Hành và Hậu Mãi tốt nhất&quot;. Chúng tôi luôn sẵn sàng lắng nghe, hỗ trợ và giải quyết mọi vấn đề phát sinh (nếu có) một cách nhanh chóng và tận tâm.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Section 7: Nơi Chất Lượng Gặp Gỡ Đam Mê */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">7</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                Univi Sport – Nơi Chất Lượng Gặp Gỡ Đam Mê Yoga & Pilates Bất Tận
              </h2>
        </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Tại Univi Sport, chúng tôi không chỉ tạo ra những bộ đồng phục – chúng tôi kiến tạo những trải nghiệm. Chúng tôi tin rằng, khi bạn khoác lên mình bộ trang phục Yoga - Pilates từ Univi, bạn sẽ cảm nhận được sự đầu tư và tâm huyết trong từng sợi vải, từng đường may.
          </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Đặc biệt, với dòng vải <strong className="text-[#105d97]">UNIVI – SUPER COOL</strong>, chúng tôi tự tin mang đến một giải pháp hoàn hảo, đáp ứng những yêu cầu khắt khe nhất của bộ môn này: sự <strong className="text-[#105d97]">MỀM MẠI</strong> vuốt ve làn da, sự <strong className="text-[#105d97]">MƯỢT MÀ</strong> trong từng chuyển động, cảm giác <strong className="text-[#105d97]">MÁT LẠNH</strong> xua tan nóng bức, và sự <strong className="text-[#105d97]">MỊN MÀNG</strong> đến bất ngờ. Univi không chỉ bán trang phục, chúng tôi mong muốn được đồng hành, thấu hiểu và góp phần vào hành trình tìm về sự cân bằng, an nhiên và sức khỏe viên mãn của bạn.
            </p>
          </article>
          
           {/* Image Section */}
           <div className="my-8 text-center">
            <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/chat-lieu-vai.jpg"
              alt="Sơ đồ 5 bước quy trình đặt may đồng phục Yoga chuyên nghiệp tại Univi."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-lg"
              quality={80}
            />
          </figure>
        </div>
          {/* Section 8: Tìm Về Sự Cân Bằng */}
          <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                <span className="text-white font-bold text-lg leading-none">8</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                Tìm Về Sự Cân Bằng & An Nhiên Cùng Đồng Phục Yoga - Pilates Univi Ngay Hôm Nay!
              </h2>
        </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Đã đến lúc bạn xứng đáng được trải nghiệm sự khác biệt từ những bộ đồng phục Yoga - Pilates được thiết kế bằng cả trái tim và sự chuyên nghiệp. Hãy để Univi Sport chắp cánh cho những giờ phút thăng hoa, những khoảnh khắc tĩnh tại và những khám phá tuyệt vời trên thảm tập của bạn!
          </p>

            <div className="mt-8 text-center">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong className="text-[#105d97]">Univi Sport – Your Uniform, Your Brand!</strong> Nâng niu từng khoảnh khắc, định hình phong cách Yoga & Pilates của bạn!
          </p>
        </div>
      </article>

          {/* Contact Section */}
          <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Sẵn Sàng Bắt Đầu Hành Trình Yoga & Pilates?
                </h2>
              </div>
              
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Hãy để Univi Sport đồng hành cùng bạn trên con đường tìm về sự cân bằng và an nhiên
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-lg mb-2">Hotline</p>
                  <p className="text-blue-100">083 420 4999</p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-lg mb-2">Email</p>
                  <p className="text-blue-100">dongphucunivi@gmail.com</p>
                </div>


                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-lg mb-2">Địa chỉ</p>
                  <p className="text-blue-100">D14, 180 Thanh Bình, Hà Đông</p>
                </div>
              </div>

              <div className="inline-block bg-white/20 px-6 py-3 rounded-full text-sm font-medium">
                ✨ Chất liệu UNIVI SUPER COOL • 🧘‍♀️ Thiết kế chuyên biệt • 🌿 An toàn tuyệt đối
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}