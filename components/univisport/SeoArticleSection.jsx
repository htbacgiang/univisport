import Link from 'next/link';
import Image from 'next/image';

const SeoArticleSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* Introduction Section */}
        <article className="bg-white rounded-lg p-4 md:p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-lg mr-2">1.</span>
            <h2 className="text-xl md:text-xl font-bold">
              Giới thiệu về Đồng phục Univi - Thương hiệu Đồng phục Thể thao Việt
            </h2>
          </div>

          <div className="space-y-3">
            <p className="text-base mb-2">
              Đồng phục Univi là một thương hiệu đồ thể thao thuộc hệ sinh thái của UNIVI. Với 5 năm kinh nghiệm 
              trong ngành sản xuất hàng may mặc, chúng tôi tự hào là đơn vị chuyên nghiên cứu, sản xuất và cung cấp 
              các sản phẩm <span className="font-semibold">đồng phục thể thao chất lượng cao</span>.
            </p>
            <p className="text-base mb-2">
              Tất cả các dòng vải mà UNIVI đưa về thị trường Việt Nam đều là <span className="font-semibold">độc quyền</span>, được nghiên cứu và chọn lọc 
              từ các nhà máy sản xuất vải lớn nhất trên thế giới, những đơn vị chuyên cung cấp cho các thương hiệu 
              thời trang thể thao lớn. Sản phẩm của chúng tôi được sản xuất từ những chất liệu an toàn và được kiểm 
              định nghiêm ngặt theo đúng quy định của Nhà nước, bảo vệ sức khỏe người tiêu dùng.
            </p>
            <p className="text-base mb-2">
              Với quy trình sản xuất khép kín tại xưởng rộng gần <span className="font-semibold">1000m²</span> ở Hải Dương và công suất lên đến <span className="font-semibold">50.000 sản 
              phẩm mỗi tháng</span>, UNIVI kiểm soát chất lượng từ A đến Z, loại bỏ hoàn toàn các chi phí trung gian không 
              cần thiết. Điều này giúp chúng tôi tối ưu chi phí sản xuất và mang đến những sản phẩm chất lượng cao 
              với giá thành hợp lý.
            </p>
            <p className="text-base mb-2">
              Đồng phục Univi cung cấp các dòng sản phẩm đa dạng cho nhiều môn thể thao như <span className="font-semibold">Gym, Yoga, Chạy bộ, Golf, 
              Tennis, Pickleball, Bơi lội</span>. Mục tiêu của chúng tôi là trở thành thương hiệu thể thao quốc dân, đưa những 
              sản phẩm chất lượng của người Việt đến tay người Việt.
            </p>
            <p className="text-base mb-2">
              Đồng phục Univi cam kết không ngừng nỗ lực hoàn thiện và nâng cao chất lượng sản phẩm để cùng Quý khách 
              hàng tự tin chinh phục người tiêu dùng.
            </p>
          </div>
        </article>

        {/* Hình ảnh 1 */}
        <div className="my-6 text-center">
          <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/gym/dong-phuc-gym-univi-nhom-5-nguoi-phong-gym.jpg"
              alt="Áo thun thể thao Univi công nghệ Uni Dry giúp người mặc khô thoáng khi tập gym"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="transition-transform"
            />
 
          </figure>
        </div>

        {/* Main Differences Section */}
        <article className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-lg mr-2">2.</span>
            <h2 className="text-xl md:text-xl font-bold">
              Sự khác biệt của đồng phục thể thao Univi
            </h2>
          </div>
          
          <p className="text-base mb-6">
            Tại sao bạn nên chọn đồng phục thể thao Univi thay vì các lựa chọn khác? Câu trả lời nằm ở ba yếu tố cốt lõi: 
            chất liệu độc quyền, công nghệ tiên tiến và quy trình sản xuất được kiểm soát chặt chẽ.
          </p>

          {/* Subsection 2.1 */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">
              2.1 Chất liệu độc quyền, được kiểm định nghiêm ngặt
            </h3>
            <p className="text-base mb-2">
              Univi tự tin khẳng định tất cả các dòng vải đưa ra thị trường đều là <span className="font-semibold">độc quyền</span>. Những loại vải này được 
              Univi nghiên cứu và chọn lọc từ các nhà máy sản xuất vải lớn nhất thế giới. Đây là các nhà cung cấp cho 
              nhiều thương hiệu thời trang thể thao nổi tiếng trên toàn cầu. Tất cả sản phẩm của Univi đều được làm từ 
              những chất liệu an toàn, đã được kiểm định nghiêm ngặt theo đúng quy định của Nhà nước về các chất gây hại 
              như formaldehyde hay amin thơm chuyển hóa từ thuốc nhuộm Azo, giúp bảo vệ sức khỏe người tiêu dùng.
            </p>
          </div>

          {/* Subsection 2.2 */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">
              2.2 Công nghệ vải chuyên dụng
            </h3>
            <p className="text-base mb-4">
              Univi sở hữu gần <span className="font-semibold">50 dòng vải thể thao chuyên dụng cao cấp</span>. Mỗi loại vải được thiết kế để tối ưu hóa hiệu 
              suất cho từng bộ môn cụ thể.
            </p>
            <div className="grid gap-3">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                <h4 className="font-bold text-base mb-1">
                  Uni Dry
                </h4>
                <p className="text-base">Công nghệ độc quyền giúp kiểm soát chuyển động một chiều của các phân tử nước, 
                cho phép hơi ẩm thoát ra ngoài và bay hơi nhanh chóng, mang lại cảm giác khô thoáng, mát mẻ cho người mặc.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                <h4 className="font-bold text-base mb-1">
                  UNIVI-DRY PRO
                </h4>
                <p className="text-base">Dòng vải này cực kỳ phù hợp cho các hoạt động ngoài trời, với đặc tính 
                CẢN NẮNG – CẢN GIÓ – CẢN BỤI – NHANH KHÔ.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                <h4 className="font-bold text-base mb-1">
                  UNIVI-SUPER COOL
                </h4>
                <p className="text-base">Dòng vải chủ yếu từ sợi Polyamide, mang lại cảm giác MỀM – MƯỢT – MÁT – MỊN. 
                Đây là lựa chọn lý tưởng cho Yoga, Pilates và các bộ môn đòi hỏi sự co giãn cao.</p>
              </div>
            </div>
          </div>

          {/* Subsection 2.3 */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">
              2.3 Quy trình sản xuất khép kín
            </h3>
            <p className="text-base mb-2">
              Univi áp dụng quy trình sản xuất khép kín, kiểm soát chất lượng từ A đến Z. Từ khâu nghiên cứu chất liệu, 
              thiết kế mẫu mã đến sản xuất và hoàn thiện sản phẩm, Univi chủ động trong tất cả các khâu, loại bỏ hoàn toàn 
              các chi phí trung gian không cần thiết. Điều này giúp Univi tối ưu hóa chi phí sản xuất mà vẫn đảm bảo được 
              chất lượng cao nhất. Mỗi sản phẩm đều được chăm chút tỉ mỉ từ đường kim mũi chỉ, thể hiện sự hoàn thiện mượt mà.
            </p>
          </div>
        </article>

        {/* Hình ảnh 3 */}
        <div className="my-6 text-center">
          <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/gym/dong-phuc-gym-univi-nhom-7-nguoi-trang-den.jpg"
              alt="Bộ sưu tập đồng phục thể thao Univi cho gym, yoga, chạy bộ và kickfit"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="transition-transform"
            />

          </figure>
        </div>

        {/* Products by Sport Section */}
        <article className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-lg mr-2">3.</span>
            <h2 className="text-xl md:text-xl font-bold">
              Đồng phục thể thao Univi cho từng bộ môn
            </h2>
          </div>
          
          <p className="text-base mb-6">
            Univi không chỉ sản xuất đồng phục, mà còn tạo ra những trang phục được &quot;may đo&quot; riêng cho từng bộ môn, 
            tối ưu hóa hiệu suất và sự thoải mái cho người mặc.
          </p>

          {/* Gym & MMA */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">
              3.1 Gym & MMA: Giải phóng sức mạnh
            </h3>
            <p className="text-base mb-3">
              Trong môi trường tập luyện cường độ cao như Gym và MMA, trang phục cần đáp ứng những yêu cầu khắt khe về 
              độ bền và khả năng co giãn. Đồng phục Gym và MMA của Univi được thiết kế để:
            </p>
            <div className="grid gap-2">
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Hỗ trợ cơ bắp:</span>
                  <span className="ml-2">Chất liệu có khả năng tạo lực nén nhẹ, cải thiện lưu thông máu và giảm 
                  tích tụ axit lactic, giúp hạn chế mệt mỏi và đau nhức sau những bài tập nặng.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Chống ma sát:</span>
                  <span className="ml-2">Đường may phẳng (flatlock seams) giúp giảm thiểu tối đa sự cọ xát lên da, 
                  tránh gây kích ứng hay phồng rộp trong quá trình vận động mạnh.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Thấm hút và nhanh khô:</span>
                  <span className="ml-2">Với các công nghệ vải như UNIVI-DRY PRO, trang phục giúp người 
                  mặc luôn khô ráo và thoáng mát, duy trì sự tập trung cao độ.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hình ảnh 4 */}
          <div className="my-6 text-center">
            <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src="/images/gym/dong-phuc-gym-univi-nam-trang-den-quan-short.jpg"
                alt="Huấn luyện viên mặc đồng phục Gym Univi với form dáng tối ưu, hỗ trợ vận động cường độ cao"
                width={800}
                height={400}
                layout="responsive"
                sizes="(max-width: 800px) 100vw, 800px"
                className="transition-transform"
              />
       
            </figure>
          </div>

          {/* Yoga & Pilates */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">
              3.2 Yoga & Pilates: Nâng niu từng chuyển động
            </h3>
            <p className="text-base mb-3">
              Với các bộ môn đòi hỏi sự linh hoạt và kết nối sâu sắc giữa cơ thể và tâm hồn, trang phục cần mang lại cảm 
              giác nhẹ nhàng, thoải mái tuyệt đối. Đồng phục Yoga và Pilates của Univi với chất liệu UNIVI-SUPER COOL là 
              lựa chọn hoàn hảo:
            </p>
            <div className="grid gap-2">
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">&quot;Như làn da thứ hai&quot;:</span>
                  <span className="ml-2">Chất liệu mềm mại, mượt mà và mát mịn, ôm vừa vặn nhưng không gò bó, 
                  giúp người mặc hoàn toàn đắm chìm vào buổi tập.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Co giãn 4 chiều hoàn hảo:</span>
                  <span className="ml-2">Độ đàn hồi cực cao cho phép người mặc thực hiện mọi tư thế Yoga 
                  phức tạp hay chuỗi động tác Pilates một cách dễ dàng và chuẩn xác.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">An toàn và kín đáo:</span>
                  <span className="ml-2">Trang phục có độ che phủ tốt, không bị xô lệch hay &quot;phản chủ&quot;, giúp 
                  người tập tự tin trong mọi tư thế, kể cả những tư thế đảo ngược.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chạy bộ & Đạp xe */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">
              3.3 Chạy bộ & Đạp xe: Bứt phá giới hạn tốc độ
            </h3>
            <p className="text-base mb-3">
              Đối với những người yêu thích chạy bộ và đạp xe, trang phục cần tối ưu hóa hiệu suất và bảo vệ cơ thể khỏi 
              các yếu tố môi trường. Đồng phục của Univi cho các bộ môn này được thiết kế với:
            </p>
            <div className="grid gap-2">
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Công nghệ UNIVI-DRY PRO:</span>
                  <span className="ml-2">Có khả năng cản nắng, cản gió và cản bụi, bảo vệ người mặc khỏi 
                  những tác động của môi trường ngoài trời.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Trọng lượng siêu nhẹ:</span>
                  <span className="ml-2">Giảm thiểu tối đa sức nặng không cần thiết, giúp người mặc di chuyển 
                  thanh thoát và tiết kiệm năng lượng trên từng cây số.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <span className="font-semibold">Giảm ma sát:</span>
                  <span className="ml-2">Đường may phẳng giúp bảo vệ làn da nhạy cảm của bạn khỏi nguy cơ bị phồng rộp, 
                  một vấn đề thường gặp khi chạy các cự ly dài.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hình ảnh 6 */}
          <div className="my-6 text-center">
            <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src="/images/gym/dong-phuc-gym.jpg"
                alt="Đồng phục chạy bộ Univi bứt phá tốc độ, thấm hút mồ hôi hiệu quả"
                width={800}
                height={400}
                layout="responsive"
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="transition-transform"
              />
             
            </figure>
          </div>

          {/* Đồng phục cho phòng tập */}
          <div className="bg-gradient-to-r from-[#105d97]/5 to-blue-50 rounded-xl p-4">
            <h3 className="text-base font-bold mb-2">
              3.4 Đồng phục cho phòng tập và đội nhóm: Giải pháp toàn diện
            </h3>
            <p className="text-base mb-3">
              Univi cung cấp giải pháp <span className="font-semibold">&quot;Smart Sports Uniform&quot;</span> nhằm giải quyết thực trạng trang phục thiếu chuyên nghiệp tại 
              các chuỗi phòng tập.
            </p>
            <div className="grid gap-2">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div>
                  <span className="font-semibold">Xây dựng thương hiệu:</span>
                  <span className="ml-2">Đồng phục giúp đồng bộ hóa hình ảnh của nhân viên, tạo sự chuyên 
                  nghiệp và uy tín cao trong mắt khách hàng.</span>
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div>
                  <span className="font-semibold">Tiết kiệm chi phí:</span>
                  <span className="ml-2">Univi cung cấp sản phẩm có chất liệu tốt và độ bền cao, giúp các đối tác 
                  tiết kiệm chi phí đầu tư đồng phục hàng năm.</span>
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div>
                  <span className="font-semibold">Tăng lợi nhuận:</span>
                  <span className="ml-2">Phòng tập có thể cung cấp thêm sản phẩm đồng phục cho khách hàng đăng ký gói 
                  tập, tạo thêm doanh thu mà không tốn chi phí quảng cáo.</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Hình ảnh 7 */}
        <div className="my-6 text-center">
          <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/gym/dong-phuc-pt-gym.jpg"
              alt="Đồng phục phòng gym Univi thể hiện sự chuyên nghiệp và gắn kết thương hiệu"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="transition-transform"
            />
      
          </figure>
        </div>

        {/* Why Choose Univi Section */}
        <article className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-lg mr-2">4.</span>
            <h2 className="text-xl md:text-xl font-bold">
              Lựa chọn Univi - Lựa chọn giá trị bền vững
            </h2>
          </div>
          
          <p className="text-base mb-6">
            Khi quyết định hợp tác với Univi, khách hàng không chỉ nhận được sản phẩm mà còn là một giải pháp toàn diện 
            và một mối quan hệ đối tác lâu dài. Univi cam kết mang lại những giá trị vượt trội và bền vững:
          </p>

          <div className="grid gap-3">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4 hover:shadow-md transition-all">
              <div>
                <h3 className="font-bold text-base mb-2">Giá trị sản phẩm vượt xa chi phí</h3>
                <p className="text-base">
                  Với Univi, giá trị của một sản phẩm không chỉ nằm ở mức giá. Nó còn nằm ở tính năng, sự hài lòng và trải 
                  nghiệm mà nó mang lại. Univi cam kết mang đến sản phẩm với giá trị vượt xa số tiền khách hàng bỏ ra, với 
                  chất liệu vải thể thao cao cấp và giá thành rất Việt Nam, giúp mọi người dễ dàng tiếp cận sản phẩm chất lượng.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4 hover:shadow-md transition-all">
              <div>
                <h3 className="font-bold text-base mb-2">Hợp tác toàn diện và chuyên nghiệp</h3>
                <p className="text-base">
                  Univi không chỉ đơn thuần bán sản phẩm mà còn là đối tác đồng hành. Chúng tôi tư vấn chiến lược marketing, 
                  xây dựng thương hiệu và phát triển sản phẩm để cùng khách hàng tăng trưởng bền vững. Đối với các chuỗi phòng 
                  tập và đội nhóm, Univi cung cấp giải pháp &quot;Smart Sports Uniform&quot; để chuẩn hóa hình ảnh, tăng tính chuyên nghiệp 
                  và lợi thế cạnh tranh.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4 hover:shadow-md transition-all">
              <div>
                <h3 className="font-bold text-base mb-2">Uy tín đã được khẳng định</h3>
                <p className="text-base">
                  Sự tin tưởng của các đối tác lớn là minh chứng rõ ràng nhất cho năng lực và uy tín của Univi. Chúng tôi là nhà 
                  cung cấp lâu năm cho nhiều tập đoàn lớn và uy tín tại Việt Nam như Sun Group, Vingroup và Tập đoàn Than Khoáng 
                  Sản Việt Nam.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4 hover:shadow-md transition-all">
              <div>
                <h3 className="font-bold text-base mb-2">Đóng góp vào nền kinh tế Việt Nam</h3>
                <p className="text-base">
                  Bằng cách hợp tác với Univi, khách hàng đang đóng góp vào sự phát triển của ngành sản xuất trong nước. Univi 
                  không chỉ tạo ra sản phẩm chất lượng cao mà còn tạo việc làm cho người lao động Việt, đồng thời giúp khách hàng 
                  tự chủ nguồn cung, giảm rủi ro từ các biến động quốc tế. Univi cũng hướng tới mục tiêu trở thành thương hiệu 
                  thể thao quốc dân, khẳng định chất lượng thời trang Việt Nam trên trường quốc tế.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Hình ảnh 10 */}
        <div className="my-6 text-center">
          <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/gym/dong-phuc-huan-luyen-vien.jpg"
              alt="Univi Sport - Your Uniform, Your Brand - Đồng phục thể thao khẳng định phong cách"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="transition-transform"
            />
         
          </figure>
        </div>

        {/* Conclusion & CTA */}
        <div className="bg-[#105d97] text-white rounded-lg p-6 mt-6">
          <div>
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-xl font-bold mb-3">
                Liên Hệ Ngay Để Nhận Tư Vấn Chuyên Nghiệp!
              </h3>
              <p className="text-base text-blue-100 max-w-5xl mx-auto mb-3">
                Univi không chỉ đơn thuần là một nhà sản xuất đồng phục thể thao, mà là một đối tác chiến lược, cung cấp các 
                giải pháp toàn diện và chuyên biệt cho từng nhu cầu. Với cam kết về chất lượng, công nghệ độc quyền và quy 
                trình sản xuất khép kín, Univi mang đến những sản phẩm không chỉ có tính thẩm mỹ cao mà còn tối ưu hóa hiệu 
                suất và sự thoải mái cho người mặc.
              </p>
              <p className="text-sm text-blue-100 mb-4">
                Để nâng cấp trải nghiệm luyện tập và khẳng định phong cách riêng, hãy để <span className="text-yellow-300 font-bold">Univi</span> đồng hành cùng bạn trên mọi 
                hành trình thể thao.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-white/20 text-white px-3 py-2 rounded-lg font-bold text-sm">
                Univi Sport – Your Uniform, Your Brand!
              </div>
              <p className="text-blue-100 mt-2 font-medium">
                Tự tin bứt phá mọi giới hạn cùng đồng phục thể thao chuyên nghiệp!
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keywords (hidden) */}
        <div className="sr-only">
          <p>
            Keywords: Đồng phục thể thao, áo thể thao, đồ tập gym, đồng phục yoga, đồng phục chạy bộ, đồng phục Univi, 
            đồng phục thể thao chất lượng cao, đồng phục thể thao giá rẻ
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeoArticleSection;
