import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../../styles/YogaPilatesUniviPage.module.css';

export default function YogaPilatesUniviPage() {
  return (
    <>
      <article className="container mx-auto px-4 mt-4 bg-gray-50 min-h-screen">
        <div className="mx-auto py-8">
          <h2 className={`${styles.yogaTitle}`}>1. Yoga & Pilates – Hành Trình Kết Nối Cơ Thể, Tâm Hồn: Tầm Quan Trọng Của Trang Phục Phù Hợp</h2>
          <p className={`${styles.yogaText}`}>
            Yoga và Pilates không chỉ là những bài tập thể chất, mà còn là hành trình khám phá, kết nối sâu sắc giữa cơ thể và tâm hồn. Để mỗi khoảnh khắc trên thảm tập thực sự trọn vẹn, để dòng chảy năng lượng được tự do tuôn chảy, trang phục bạn chọn đóng một vai trò không hề nhỏ. Một bộ đồ tập phù hợp không chỉ mang lại sự thoải mái, mà còn là người bạn đồng hành, hỗ trợ bạn chinh phục từng tư thế, lắng nghe từng hơi thở.
          </p>
          <p className={`${styles.yogaText}`}>Tại sao trang phục chuyên biệt lại tối quan trọng trong Yoga & Pilates?</p>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Tự do chuyển động tuyệt đối:</span> Các asana Yoga hay chuỗi động tác Pilates đòi hỏi sự linh hoạt và biên độ chuyển động lớn. Trang phục chuyên dụng được thiết kế để co giãn tối đa, không gây cản trở, giúp bạn thực hiện mọi tư thế một cách dễ dàng và chuẩn xác.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Thấm hút mồ hôi & thoáng khí hiệu quả:</span> Giữ cho cơ thể luôn khô ráo, thoáng mát ngay cả khi bạn thực hiện những bài tập sâu và thử thách, giúp duy trì sự tập trung và ngăn ngừa cảm giác khó chịu.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Cảm giác &quot;như làn da thứ hai&quot;:</span> Sự mềm mại, nhẹ nhàng của chất liệu cao cấp, cùng thiết kế ôm vừa vặn nhưng không gò bó, mang lại cảm giác thoải mái tuyệt đối, giúp bạn quên đi sự hiện diện của trang phục để hoàn toàn đắm chìm vào buổi tập.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>An toàn và kín đáo:</span> Với những tư thế đảo ngược, uốn dẻo hay xoạc chân, trang phục có độ che phủ tốt, không bị xô lệch hay trở nên &quot;phản chủ&quot; là điều vô cùng cần thiết để bạn tự tin tập luyện.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Nâng cao trải nghiệm và sự tập trung:</span> Khi không còn bận tâm về trang phục, bạn có thể tập trung hoàn toàn vào kỹ thuật, hơi thở và những cảm nhận tinh tế từ sâu bên trong cơ thể, từ đó kết nối sâu hơn với chính mình.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-yoga-pilates-univi-mem-mai-co-gian.jpg"
              alt="Đồng phục Yoga Pilates Univi với chất liệu mềm mại co giãn, nâng niu từng chuyển động trên thảm tập."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.yogaImage}`}
              quality={80}
              priority={true}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Univi Sport – Đồng Hành Cùng Bạn Trên Thảm Tập Yoga & Pilates Với Trang Phục Hoàn Hảo</h2>
          <p className={`${styles.yogaText}`}>
            Thấu hiểu những yêu cầu đặc thù và mong muốn của cộng đồng Yoga & Pilates, Đồng Phục Univi (thuộc Univi Sport) tự hào mang đến những giải pháp trang phục được thiết kế chuyên biệt, nâng niu từng chuyển động và tôn vinh vẻ đẹp của bạn. Với hơn 8 năm kinh nghiệm trong lĩnh vực thiết kế và sản xuất đồng phục thể thao cao cấp, Univi đã trở thành đối tác tin cậy của hàng trăm doanh nghiệp, câu lạc bộ và các tín đồ thể thao trên khắp cả nước.
          </p>
          <p className={`${styles.yogaText}`}>Cam kết về chất lượng &quot;Made by Univi&quot; luôn là kim chỉ nam trong mọi hoạt động của chúng tôi:</p>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}>Chúng tôi <span className={`${styles.yogaHighlight}`}>không tính phí nếu sản phẩm không đạt chuẩn</span>, bởi sự hài lòng và tin tưởng của bạn là ưu tiên hàng đầu.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Tất cả chất liệu vải đều được kiểm định an toàn với da</span>, không chứa các hóa chất độc hại như Formaldehyde hay các amin thơm từ thuốc nhuộm Azo, vốn có thể gây hại cho da và sức khỏe khi tiếp xúc lâu dài. An toàn cho làn da bạn là điều Univi đặc biệt chú trọng.</li>
          </ul>
          <p className={`${styles.yogaText}`}>
            Univi Sport không ngừng &quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện. Đặc biệt, với Yoga và Pilates, chúng tôi tự hào giới thiệu dòng vải <span className={`${styles.yogaHighlight}`}>UNIVI – SUPER COOL</span>, một lựa chọn hoàn hảo cho những ai tìm kiếm sự thoải mái và hiệu suất tối ưu.
          </p>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/chat-lieu-univi-super-cool-yoga-pilates.jpg"
              alt="Chất liệu Univi Super Cool co giãn 4 chiều, thấm hút mồ hôi hiệu quả dành cho Yoga và Pilates."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.yogaImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Khám Phá Sự Khác Biệt Tinh Tế Trong Đồng Phục Yoga - Pilates Từ Univi</h2>
          <p className={`${styles.yogaText}`}>
            Mỗi bộ đồng phục Yoga - Pilates từ Univi là sự kết hợp giữa công nghệ dệt may tiên tiến và sự thấu hiểu sâu sắc nhu cầu của người tập.
          </p>
          <h3 className={`${styles.yogaSubtitle}`}>Chất Liệu &quot;Như Làn Da Thứ Hai&quot; – Nâng Niu Mọi Cảm Xúc:</h3>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>UNIVI – SUPER COOL (Polyamide x Elastane/Spandex):</span> Đây chính là &quot;ngôi sao&quot; trong bộ sưu tập trang phục Yoga và Pilates của Univi. Dòng vải này được cấu tạo chính từ sợi Polyamide, mang đến những đặc tính vượt trội:</li>
            <ul className={`${styles.yogaList}`}>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>MỀM – MƯỢT – MÁT – MỊN:</span> Đúng như tên gọi, UNIVI – SUPER COOL mang lại cảm giác mát lạnh, mềm mại và trơn mượt ngay khi chạm vào da, tạo sự dễ chịu tuyệt đối.</li>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Co giãn 4 chiều hoàn hảo:</span> Độ đàn hồi cực cao cho phép vải chuyển động theo từng cử động của cơ thể, dù là những tư thế Yoga phức tạp hay các bài tập Pilates đòi hỏi sự kiểm soát và linh hoạt.</li>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Thấm hút mồ hôi và nhanh khô:</span> Giúp bạn luôn cảm thấy khô thoáng, nhẹ nhàng, ngay cả trong những buổi tập cường độ cao.</li>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Thoáng khí tối ưu:</span> Cấu trúc vải đặc biệt cho phép không khí lưu thông dễ dàng, ngăn ngừa cảm giác bí bách.</li>
            </ul>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>UNIVI - BLENED:</span> Univi cũng mang đến các lựa chọn vải pha trộn thông minh, ví dụ như sự kết hợp giữa Cotton hữu cơ mềm mại với Polyester và Spandex để tăng độ bền, khả năng quản lý độ ẩm và độ co giãn. Dòng vải này phù hợp cho những ai yêu thích cảm giác tự nhiên, thân thiện với môi trường mà vẫn đảm bảo hiệu suất tập luyện.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>An toàn tuyệt đối:</span> Như đã cam kết, tất cả các chất liệu đều được kiểm định nghiêm ngặt, không chứa hóa chất gây hại, bảo vệ làn da nhạy cảm của bạn trong suốt quá trình tập luyện.</li>
          </ul>
          <h3 className={`${styles.yogaSubtitle}`}>Thiết Kế Tinh Tế - Tôn Dáng & Giải Phóng Chuyển Động:</h3>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Form dáng khoa học, tôn vinh đường cong:</span> Trang phục Yoga - Pilates của Univi được thiết kế để ôm vừa vặn cơ thể, giúp bạn (và cả huấn luyện viên) dễ dàng quan sát và điều chỉnh từng tư thế, đảm bảo tính chính xác và hiệu quả. Thiết kế này tôn lên vẻ đẹp tự nhiên của cơ thể mà không hề gây cảm giác gò bó.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>&quot;Đường may tinh tế&quot; - Chăm chút từng chi tiết:</span> Univi đặc biệt chú trọng đến kỹ thuật may. Chúng tôi ưu tiên sử dụng đường may phẳng (flatlock seams) để &quot;sản phẩm không chỉ đẹp mà còn bền&quot;, quan trọng hơn cả là giảm thiểu tối đa sự cọ xát lên da, không gây vết hằn hay cảm giác khó chịu, ngay cả khi bạn thực hiện những tư thế kéo giãn sâu trong thời gian dài.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Thiết kế thông minh, tối ưu công năng:</span></li>
            <ul className={`${styles.yogaList}`}>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Quần Legging:</span> Thường có thiết kế cạp cao giúp ôm gọn vòng bụng, hỗ trợ phần lưng dưới và mang lại cảm giác an toàn, tự tin trong mọi tư thế, kể cả những tư thế đảo ngược.</li>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Áo Bra Thể Thao:</span> Cung cấp độ nâng đỡ vừa phải, phù hợp với các hoạt động có cường độ tác động thấp đến trung bình như Yoga và Pilates. Thiết kế lưng đa dạng (racerback, criss-cross, basic) không chỉ tăng tính thẩm mỹ mà còn đảm bảo sự thoải mái cho vùng vai và lưng.</li>
              <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Áo Tập (Tank Top, T-shirt):</span> Có độ dài và độ rộng được tính toán kỹ lưỡng, đảm bảo sự kín đáo cần thiết khi bạn cúi người hay thực hiện các động tác xoắn vặn, đồng thời không gây vướng víu.</li>
            </ul>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Phong cách và màu sắc đa dạng:</span> Từ những gam màu trung tính, pastel nhẹ nhàng, trang nhã, gợi cảm giác thư thái, an nhiên, đến những màu sắc và họa tiết cá tính, nổi bật, giúp bạn tự do thể hiện phong cách riêng trên thảm tập.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Độ bền vượt trội:</span> Chất liệu cao cấp cùng kỹ thuật may chắc chắn đảm bảo sản phẩm Univi giữ được form dáng, màu sắc và chất lượng sau nhiều lần giặt.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Giải pháp tùy chỉnh cho studio và huấn luyện viên:</span> Univi nhận thiết kế và sản xuất theo yêu cầu riêng, giúp bạn xây dựng hình ảnh thương hiệu đồng bộ, chuyên nghiệp với logo và màu sắc đặc trưng.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/ao-bra-the-thao-yoga-pilates-univi-thoang-khi.jpg"
              alt="Áo bra thể thao Yoga Pilates Univi thoáng khí, thiết kế nâng đỡ vừa phải và đa dạng kiểu dáng."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.yogaImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Lợi Ích Không Thể Bỏ Qua Khi Chọn Đồng Phục Yoga - Pilates Univi</h2>
          <p className={`${styles.yogaText}`}>
            Đầu tư vào một bộ đồng phục Yoga - Pilates chất lượng từ Univi là bạn đang đầu tư cho chính trải nghiệm và sức khỏe của mình:
          </p>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Tối ưu hóa trải nghiệm tập luyện:</span> Khi cơ thể được nâng niu trong sự mềm mại, co giãn và thoáng mát, bạn có thể hoàn toàn đắm chìm vào từng hơi thở, từng chuyển động, cảm nhận sâu sắc sự kết nối giữa thân và tâm.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Tự tin thể hiện bản thân trong mọi tư thế:</span> Không còn lo lắng về trang phục xô lệch hay gây khó chịu, bạn tự do khám phá giới hạn của cơ thể, chinh phục những tư thế mới một cách đầy hứng khởi.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Bảo vệ làn da và sức khỏe toàn diện:</span> Với cam kết về chất liệu an toàn, không hóa chất độc hại, làn da của bạn sẽ được bảo vệ, tránh khỏi những nguy cơ kích ứng hay các vấn đề sức khỏe tiềm ẩn.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Xây dựng hình ảnh chuyên nghiệp và gắn kết:</span> Đối với các huấn luyện viên và studio, đồng phục Univi giúp tạo dựng hình ảnh chuyên nghiệp, uy tín và tăng cường sự gắn kết giữa các thành viên.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Đầu tư thông minh và bền vững:</span> Chất lượng vượt trội đồng nghĩa với tuổi thọ sản phẩm cao, giúp bạn tiết kiệm chi phí và có người bạn đồng hành đáng tin cậy trên con đường chăm sóc sức khỏe.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/quan-legging-yoga-pilates-cap-cao-univi.jpg"
              alt="Quần legging Yoga Pilates cạp cao Univi ôm dáng, co giãn tối ưu giúp tự tin thực hiện mọi tư thế."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.yogaImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Đa Dạng Lựa Chọn Đồng Phục Yoga - Pilates Tinh Tế Tại Univi</h2>
          <p className={`${styles.yogaText}`}>
            Univi Sport mang đến một thế giới trang phục Yoga và Pilates phong phú, đáp ứng mọi sở thích và nhu cầu:
          </p>
          <h3 className={`${styles.yogaSubtitle}`}>Dành cho Nữ:</h3>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Quần Legging Yoga/Pilates:</span> &quot;Must-have item&quot; với đa dạng kiểu dáng: cạp cao tôn dáng, cạp thường thoải mái; độ dài khác nhau (dài, lửng, 7/8). Chất liệu co giãn tối đa, không bai dão, không lộ vùng nhạy cảm. Nhiều lựa chọn màu sắc từ cơ bản đến thời thượng, cùng các họa tiết tinh tế.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Áo Bra Thể Thao (Sports Bra):</span> Thiết kế chuyên biệt cho Yoga và Pilates với độ nâng đỡ vừa phải, đảm bảo sự thoải mái mà vẫn giữ được sự ổn định. Kiểu dáng lưng đa dạng (racerback, criss-cross, dây mảnh) không chỉ đẹp mắt mà còn giúp giải phóng chuyển động cho vùng vai.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Áo Tank Top, Áo Thun Tập:</span> Form dáng đa dạng từ ôm sát tôn dáng đến suông rộng thoải mái. Chất liệu mềm mại, thấm hút mồ hôi, mang lại cảm giác nhẹ nhàng, bay bổng trong từng chuyển động.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Áo Khoác Nhẹ/Cover-up:</span> Những chiếc áo khoác mỏng nhẹ, cardigan hay áo trùm ngoài phong cách, lý tưởng để khoác lên người trước và sau buổi tập, giữ ấm cơ thể và hoàn thiện phong cách athleisure của bạn.</li>
          </ul>
          <div className="my-6">
            <figure className="max-w-[800px] mx-auto">
              <Image
                src="/images/gym/ao-tank-top-yoga-pilates-univi-mem-mai-tham-hut.jpg"
                alt="Áo tank top Yoga Pilates Univi mềm mại, thấm hút mồ hôi, tạo cảm giác nhẹ nhàng khi tập luyện."
                width={800}
                height={400}
                layout="responsive"
                sizes="(max-width: 800px) 100vw, 800px"
                className={`${styles.yogaImage}`}
                quality={80}
              />
            </figure>
          </div>
          <h3 className={`${styles.yogaSubtitle}`}>Dành cho Nam:</h3>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Quần Short/Legging Nam:</span> Thiết kế chuyên biệt đảm bảo sự co giãn, thoải mái tối đa cho các động tác Yoga và Pilates của nam giới.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Áo Thun/Tank Top Nam:</span> Chất liệu thấm hút tốt, form dáng nam tính, không gây cản trở vận động.</li>
          </ul>
          <h3 className={`${styles.yogaSubtitle}`}>Đồng Phục Cho Giáo Viên & Studio Yoga/Pilates:</h3>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}>Univi nhận thiết kế và sản xuất đồng phục theo yêu cầu đặc thù của từng studio, từ kiểu dáng, màu sắc đến việc in/thêu logo, tên studio, slogan một cách tinh tế và chuyên nghiệp.</li>
            <li className={`${styles.yogaListItem}`}>Đảm bảo tính đồng bộ, giúp nâng cao nhận diện thương hiệu và tạo không khí chuyên nghiệp, gắn kết cho phòng tập.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/quy-trinh-dat-may-dong-phuc-yoga-tai-univi-5-buoc.jpg"
              alt="Sơ đồ 5 bước quy trình đặt may đồng phục Yoga chuyên nghiệp tại Univi."
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.yogaImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Quy Trình Đặt May Đồng Phục Yoga - Pilates Univi Đơn Giản & Chuyên Nghiệp</h2>
          <p className={`${styles.yogaText}`}>
            Univi cam kết mang đến trải nghiệm đặt hàng dễ dàng, minh bạch và chuyên nghiệp:
          </p>
          <ol className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Tư Vấn Tận Tâm:</span> Hãy liên hệ với Univi qua hotline, email hoặc website. Chia sẻ nhu cầu, số lượng, ý tưởng thiết kế (nếu có) của bạn. Đội ngũ tư vấn viên giàu kinh nghiệm của chúng tôi sẽ lắng nghe và giúp bạn lựa chọn chất liệu, kiểu dáng phù hợp nhất với ngân sách và mục tiêu.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Thiết Kế Sáng Tạo (Hoàn Toàn Miễn Phí):</span> Dựa trên những trao đổi, đội ngũ thiết kế của Univi sẽ hiện thực hóa ý tưởng của bạn thành các mẫu thiết kế demo trực quan. Bạn có thể yêu cầu chỉnh sửa không giới hạn cho đến khi hoàn toàn hài lòng với mẫu thiết kế.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Duyệt Mẫu & Báo Giá Minh Bạch:</span> Sau khi bạn chốt thiết kế cuối cùng, Univi sẽ gửi báo giá chi tiết, rõ ràng và cạnh tranh nhất. Đối với các đơn hàng lớn, chúng tôi có thể hỗ trợ may mẫu để bạn kiểm tra chất lượng thực tế.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Sản Xuất Chuẩn Mực:</span> Khi hợp đồng được ký kết, đơn hàng của bạn sẽ được đưa vào quy trình sản xuất tại xưởng may hiện đại của Univi, với đội ngũ công nhân lành nghề và sự giám sát chất lượng chặt chẽ ở từng công đoạn.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Kiểm Tra Chất Lượng (KCS) Kỹ Lưỡng:</span> Trước khi đến tay bạn, 100% sản phẩm đều phải trải qua khâu kiểm tra chất lượng cuối cùng, đảm bảo từng đường kim mũi chỉ, màu sắc, chi tiết in/thêu và form dáng đều hoàn hảo.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Giao Hàng Nhanh Chóng & Thanh Toán Thuận Tiện:</span> Univi hỗ trợ giao hàng tận nơi trên toàn quốc. Chúng tôi chấp nhận nhiều hình thức thanh toán linh hoạt, tạo sự thuận tiện tối đa cho khách hàng.</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Chính Sách Bảo Hành và Hậu Mãi Chu Đáo:</span> Univi tự hào với &quot;Chế Độ Bảo Hành và Hậu Mãi tốt nhất&quot;. Chúng tôi luôn sẵn sàng lắng nghe, hỗ trợ và giải quyết mọi vấn đề phát sinh (nếu có) một cách nhanh chóng và tận tâm.</li>
          </ol>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Univi Sport – Nơi Chất Lượng Gặp Gỡ Đam Mê Yoga & Pilates Bất Tận</h2>
          <p className={`${styles.yogaText}`}>
            Tại Univi Sport, chúng tôi không chỉ tạo ra những bộ đồng phục – chúng tôi kiến tạo những trải nghiệm. Chúng tôi tin rằng, khi bạn khoác lên mình bộ trang phục Yoga - Pilates từ Univi, bạn sẽ cảm nhận được sự đầu tư và tâm huyết trong từng sợi vải, từng đường may.
          </p>
          <p className={`${styles.yogaText}`}>
            Đặc biệt, với dòng vải <span className={`${styles.yogaHighlight}`}>UNIVI – SUPER COOL</span>, chúng tôi tự tin mang đến một giải pháp hoàn hảo, đáp ứng những yêu cầu khắt khe nhất của bộ môn này: sự <span className={`${styles.yogaHighlight}`}>MỀM MẠI</span> vuốt ve làn da, sự <span className={`${styles.yogaHighlight}`}>MƯỢT MÀ</span> trong từng chuyển động, cảm giác <span className={`${styles.yogaHighlight}`}>MÁT LẠNH</span> xua tan nóng bức, và sự <span className={`${styles.yogaHighlight}`}>MỊN MÀNG</span> đến bất ngờ. Univi không chỉ bán trang phục, chúng tôi mong muốn được đồng hành, thấu hiểu và góp phần vào hành trình tìm về sự cân bằng, an nhiên và sức khỏe viên mãn của bạn.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.yogaTitle}`}>Tìm Về Sự Cân Bằng & An Nhiên Cùng Đồng Phục Yoga - Pilates Univi Ngay Hôm Nay!</h2>
          <p className={`${styles.yogaText}`}>
            Đã đến lúc bạn xứng đáng được trải nghiệm sự khác biệt từ những bộ đồng phục Yoga - Pilates được thiết kế bằng cả trái tim và sự chuyên nghiệp. Hãy để Univi Sport chắp cánh cho những giờ phút thăng hoa, những khoảnh khắc tĩnh tại và những khám phá tuyệt vời trên thảm tập của bạn!
          </p>
          <p className={`${styles.yogaText}`}>
            Liên hệ ngay với Univi Sport để được tư vấn chi tiết, xem mẫu và nhận báo giá ưu đãi nhất:
          </p>
          <ul className={`${styles.yogaList}`}>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Hotline:</span> 083 420 4999</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Email:</span> Yenlb.univi@gmail.com</li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Website:</span> <Link href="https://dongphucunivi.com" legacyBehavior><a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">dongphucunivi.com</a></Link></li>
            <li className={`${styles.yogaListItem}`}><span className={`${styles.yogaHighlight}`}>Địa chỉ:</span> D4, 180 Thanh Bình, Mộ Lao, Hà Đông, Hà Nội</li>
          </ul>
          <p className={`${styles.yogaText}`}>
            <span className={`${styles.yogaHighlight}`}>Univi Sport – Your Uniform, Your Brand!</span> Nâng niu từng khoảnh khắc, định hình phong cách Yoga & Pilates của bạn!
          </p>
        </div>
      </article>
    </>
  );
}