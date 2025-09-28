import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../../styles/PoloUniviPage.module.css';

export default function PoloUniviPage() {
  return (
    <>
      <article className="container mx-auto px-4 mt-4">
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Áo Polo Đồng Phục – Sự Kết Hợp Hoàn Hảo Giữa Thanh Lịch và Năng Động</h2>
          <p className={`${styles.poloText}`}>
            Áo polo, với thiết kế cổ bẻ đặc trưng và chất liệu vải thường là Pique co giãn, từ lâu đã vượt ra khỏi ranh giới của một trang phục thể thao đơn thuần để trở thành một biểu tượng của sự thanh lịch, năng động và chuyên nghiệp. Ngày nay, áo polo đồng phục là lựa chọn hàng đầu của vô số doanh nghiệp, tổ chức, trường học và đội nhóm nhờ vào sự kết hợp hoàn hảo giữa tính thẩm mỹ và tính ứng dụng cao.
          </p>
          <p className={`${styles.poloText}`}>Tại sao áo polo lại được ưa chuộng và trở thành giải pháp đồng phục lý tưởng?</p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Tính linh hoạt và đa dụng vượt trội:</span> Áo polo dễ dàng thích ứng với nhiều môi trường và mục đích sử dụng khác nhau, từ không gian công sở chuyên nghiệp, các sự kiện trang trọng, hoạt động đội nhóm năng động, đến việc sử dụng làm quà tặng doanh nghiệp ý nghĩa.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Vẻ ngoài chuyên nghiệp, lịch sự mà vẫn thoải mái:</span> So với áo sơ mi truyền thống, áo polo mang lại sự chỉn chu cần thiết mà vẫn giữ được nét trẻ trung, năng động và đặc biệt là sự thoải mái tối đa.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Công cụ xây dựng và quảng bá hình ảnh thương hiệu:</span> Với bề mặt vải rộng và phẳng, áo polo là không gian lý tưởng để in hoặc thêu logo, slogan, tên công ty, góp phần tăng cường nhận diện thương hiệu.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Tạo sự thoải mái và tự tin cho người mặc:</span> Chất liệu vải cao cấp, có khả năng co giãn và thấm hút mồ hôi tốt giúp nhân viên luôn cảm thấy tự tin, thoải mái.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Góp phần xây dựng tinh thần đồng đội:</span> Sự đồng bộ trong trang phục tạo nên một hình ảnh gắn kết, chuyên nghiệp, đồng thời thể hiện niềm tự hào và sự thuộc về của mỗi cá nhân.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-thanh-lich.jpg"
              alt="Nhân viên trong áo polo đồng phục Univi, kết hợp thanh lịch và năng động"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
              priority={true}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Univi – Đẳng Cấp Áo Polo Đồng Phục, Khẳng Định Vị Thế Thương Hiệu</h2>
          <p className={`${styles.poloText}`}>
            Thấu hiểu tầm quan trọng và những giá trị mà áo polo đồng phục mang lại, Đồng Phục Univi tự hào là đơn vị xưởng may chuyên cung cấp các giải pháp đồng phục thể thao, đồng phục công ty, đồng phục công sở, và đặc biệt là áo polo cao cấp. Với hơn 8 năm kinh nghiệm, Univi đã khẳng định được vị thế và uy tín, trở thành đối tác chiến lược được tin tưởng bởi hàng trăm doanh nghiệp như: Sun Group, Premier Village, Sun World, Thanh Cong Group, Tập đoàn Than Khoáng Sản Việt Nam, KickFit Sport, Fitcare, Yoko Onsen Quang Hanh…
          </p>
          <p className={`${styles.poloText}`}>Cam kết vàng từ Univi:</p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Chất lượng sản phẩm luôn được đặt lên hàng đầu:</span> Univi kiên định với chính sách &quot;Không tính phí nếu sản phẩm không đạt chuẩn.&quot;</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>An toàn tuyệt đối cho sức khỏe người mặc:</span> Tất cả chất liệu vải được kiểm định an toàn với da, nói không với hóa chất độc hại.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Sự am hiểu sâu sắc về chất liệu và kỹ thuật:</span> Đội ngũ chuyên gia đảm bảo mỗi chiếc áo polo có form dáng chuẩn, độ bền cao và thoải mái.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-doi-tac-tin-cay.jpg"
              alt="Áo polo đồng phục Univi với thiết kế chuyên nghiệp, khẳng định uy tín thương hiệu"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Trải Nghiệm Sự Khác Biệt Với Chất Liệu và Thiết Kế Áo Polo Đồng Phục Univi</h2>
          <p className={`${styles.poloText}`}>
            Univi mang đến sự khác biệt vượt trội thông qua việc đầu tư kỹ lưỡng vào chất liệu vải và quy trình thiết kế, sản xuất.
          </p>
          <h3 className={`${styles.poloSubtitle}`}>Đa Dạng Chất Liệu Vải Cao Cấp – Đáp Ứng Mọi Nhu Cầu</h3>
          <p className={`${styles.poloText}`}>
            Univi cung cấp một danh mục phong phú các lựa chọn vải may áo polo, được tuyển chọn cẩn thận dựa trên chất lượng, độ bền, tính thẩm mỹ và sự thoải mái:
          </p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Cotton 100%:</span> Mềm mại, thoáng khí, thấm hút mồ hôi tốt, phù hợp cho môi trường năng động.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Piquecool (Vải cá sấu mắt chim):</span> Co giãn, thoáng khí, giữ form dáng, mang lại vẻ ngoài lịch lãm.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Lacoste USA:</span> Cao cấp, dày dặn, mịn màng, bền màu, thể hiện sự sang trọng.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Polyester Cao Cấp (PET):</span> Bền màu, chống nhăn, dễ bảo quản, phù hợp đơn hàng lớn.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Polyamide:</span> Mềm mại, nhẹ, nhanh khô, độ bền cao, phù hợp áo polo thể thao.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Vải Pha Trộn Thông Minh:</span> Kết hợp ưu điểm của Cotton, Spandex, Polyester cho độ co giãn và bền đẹp.</li>
          </ul>
          <h3 className={`${styles.poloSubtitle}`}>Thiết Kế Tinh Tế - Form Dáng Chuẩn Mực</h3>
          <p className={`${styles.poloText}`}>
            Đội ngũ thiết kế của Univi sáng tạo, cập nhật xu hướng, đặt yếu tố chuyên nghiệp và bản sắc thương hiệu lên hàng đầu.
          </p>
          <h4 className={`${styles.poloSubtitle}`}>Kiểu dáng đa dạng, phù hợp mọi phong cách:</h4>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Polo Classic:</span> Truyền thống, lịch sự, phù hợp nhiều môi trường.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Polo Slim-fit:</span> Hiện đại, ôm vừa vặn, trẻ trung, năng động.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Polo có phối màu:</span> Tạo điểm nhấn tinh tế, thể hiện sự sáng tạo.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Thiết kế riêng cho nam và nữ:</span> Vừa vặn, tôn dáng, mang lại sự tự tin.</li>
          </ul>
          <h4 className={`${styles.poloSubtitle}`}>Sự chăm chút tỉ mỉ trong từng chi tiết:</h4>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Cổ áo:</span> Gia công kỹ lưỡng, đứng form, không bai dão.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Trụ áo:</span> Nẹp cúc may chắc chắn, hài hòa với thiết kế.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Tay áo:</span> Bo tay co giãn hoặc tay suông, tùy chọn.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Đường xẻ tà:</span> Tăng sự thoải mái khi vận động.</li>
          </ul>
          <h4 className={`${styles.poloSubtitle}`}>&quot;Đường may tinh tế&quot;:</h4>
          <p className={`${styles.poloText}`}>
            Univi áp dụng kỹ thuật may tiên tiến, đảm bảo đường kim mũi chỉ đều đặn, chắc chắn, tinh xảo, mang lại sản phẩm bền đẹp.
          </p>
          <h4 className={`${styles.poloSubtitle}`}>Công Nghệ In/Thêu Logo Hiện Đại:</h4>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>In lụa:</span> Phù hợp đơn hàng lớn, màu sắc tươi sáng, bền cao.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>In decal chuyển nhiệt:</span> Họa tiết phức tạp, sắc nét, đa màu sắc.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Thêu vi tính:</span> Sang trọng, bền gần như vĩnh cửu.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-chat-lieu-cao-cap.jpg"
              alt="Áo polo đồng phục Univi với chất liệu Piquecool, Lacoste, Cotton, mang lại sự thoải mái"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Lợi Ích Vượt Trội Khi Doanh Nghiệp Lựa Chọn Áo Polo Đồng Phục Univi</h2>
          <p className={`${styles.poloText}`}>
            Đầu tư vào áo polo đồng phục từ Univi mang lại những giá trị thiết thực:
          </p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Xây dựng hình ảnh thương hiệu chuyên nghiệp:</span> Tạo ấn tượng tốt đẹp, tin cậy với khách hàng, đối tác.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Tăng cường sự đoàn kết nội bộ:</span> Nhân viên gắn bó, tự hào, có động lực cống hiến.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Giải pháp marketing hiệu quả:</span> Logo trên áo là &quot;biển quảng cáo di động&quot;.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Thoải mái, tự tin, nâng cao hiệu suất:</span> Chất liệu cao cấp, form dáng chuẩn.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Tối ưu chi phí dài hạn:</span> Sản phẩm bền đẹp, giảm tần suất thay mới.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-nang-tam-hinh-anh.jpg"
              alt="Đội ngũ trong áo polo đồng phục Univi, nâng tầm hình ảnh và tinh thần đoàn kết"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Ứng Dụng Đa Dạng và Linh Hoạt Của Áo Polo Đồng Phục Univi</h2>
          <p className={`${styles.poloText}`}>
            Với thiết kế đa năng, áo polo đồng phục Univi phù hợp cho:
          </p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}>Đồng phục nhân viên văn phòng, công ty, tập đoàn.</li>
            <li className={`${styles.poloListItem}`}>Đồng phục nhân viên kinh doanh, bán hàng, dịch vụ khách hàng.</li>
            <li className={`${styles.poloListItem}`}>Đồng phục cho sự kiện, hội thảo, triển lãm thương mại.</li>
            <li className={`${styles.poloListItem}`}>Đồng phục đội nhóm, câu lạc bộ thể thao, trường học.</li>
            <li className={`${styles.poloListItem}`}>Đồng phục cho team building, ngoại khóa, du lịch công ty.</li>
            <li className={`${styles.poloListItem}`}>Quà tặng doanh nghiệp ý nghĩa, có giá trị quảng bá cao.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-da-nang.jpg"
              alt="Áo polo đồng phục Univi đa năng, phù hợp cho văn phòng, sự kiện, và team building"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Quy Trình Đặt May Áo Polo Đồng Phục Tại Univi</h2>
          <p className={`${styles.poloText}`}>
            Univi cam kết mang đến quy trình làm việc tối ưu, chuyên nghiệp, minh bạch:
          </p>
          <ol className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Tiếp Nhận Yêu Cầu & Tư Vấn:</span> Chia sẻ số lượng, kiểu dáng, chất liệu, màu sắc, ngân sách.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Thiết Kế Mẫu Miễn Phí:</span> Phác thảo mẫu demo, điều chỉnh không giới hạn.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>May Mẫu Thực Tế & Báo Giá:</span> Hỗ trợ may mẫu, cung cấp báo giá chi tiết.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Ký Hợp Đồng & Sản Xuất:</span> Triển khai sản xuất tại xưởng hiện đại.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Kiểm Tra Chất Lượng (KCS):</span> Kiểm tra tỉ mỉ từng sản phẩm.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Giao Hàng Đúng Hẹn:</span> Giao hàng an toàn, đúng tiến độ trên toàn quốc.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Bảo Hành & Hậu Mãi:</span> Bảo hành chất lượng, hỗ trợ tận tâm.</li>
          </ol>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/quy-trinh-dat-may-ao-polo-univi.jpg"
              alt="Quy trình may áo polo đồng phục Univi chuyên nghiệp, minh bạch và nhanh chóng"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Tại Sao Hàng Trăm Doanh Nghiệp Lớn Tin Tưởng Lựa Chọn Áo Polo Đồng Phục</h2>
          <p className={`${styles.poloText}`}>
            Sự tín nhiệm từ Sun Group, KickFit Sport, Thanh Cong Group là minh chứng cho giá trị Univi mang lại:
          </p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Kinh nghiệm dày dặn:</span> Hơn 8 năm đáp ứng yêu cầu khắt khe.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Chất lượng vượt trội:</span> Đa dạng chất liệu, kiểu dáng cao cấp.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Thiết kế sáng tạo:</span> Cập nhật xu hướng, tôn vinh bản sắc thương hiệu.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Giá cả hợp lý:</span> Giá trị đầu tư tối ưu.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Năng lực sản xuất lớn:</span> Đáp ứng số lượng và tiến độ.</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Dịch vụ tận tâm:</span> Minh bạch, chu đáo từ tư vấn đến hậu mãi.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-lua-chon-hang-dau.jpg"
              alt="Doanh nghiệp tin chọn áo polo đồng phục Univi nhờ chất lượng và dịch vụ vượt trội"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.poloTitle}`}>Nâng Tầm Hình Ảnh Thương Hiệu Cùng Giải Pháp Áo Polo Đồng Phục Đẳng Cấp</h2>
          <p className={`${styles.poloText}`}>
            Hãy để những chiếc áo polo đồng phục từ Univi trở thành một phần không thể thiếu trong việc xây dựng hình ảnh chuyên nghiệp, năng động, hiện đại và gắn kết cho doanh nghiệp của bạn.
          </p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}>Liên hệ Univi ngay hôm nay để nhận tư vấn chuyên nghiệp và báo giá chi tiết!</li>
            <li className={`${styles.poloListItem}`}>Khám phá bộ sưu tập các mẫu áo polo đồng phục ấn tượng và mới nhất!</li>
            <li className={`${styles.poloListItem}`}>Thiết kế áo polo mang đậm dấu ấn riêng cùng đội ngũ sáng tạo của Univi!</li>
          </ul>
          <p className={`${styles.poloText}`}>Liên hệ ngay để được tư vấn miễn phí và nhận báo giá ưu đãi:</p>
          <ul className={`${styles.poloList}`}>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Hotline:</span> 083 420 4999</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Email:</span> Yenlb.univi@gmail.com</li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Website:</span> <Link href="https://dongphucunivi.com" legacyBehavior><a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">dongphucunivi.com</a></Link></li>
            <li className={`${styles.poloListItem}`}><span className={`${styles.poloHighlight}`}>Địa chỉ:</span> D4, 180 Thanh Bình, Mộ Lao, Hà Đông, Hà Nội</li>
          </ul>
          <p className={`${styles.poloText}`}>
            <span className={`${styles.poloHighlight}`}>Univi Sport – Your Uniform, Your Brand!</span> Tự tin khẳng định dấu ấn riêng cùng đồng phục Áo Polo chuyên nghiệp!
          </p>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-khang-dinh-dang-cap.jpg"
              alt="Áo polo đồng phục Univi giúp doanh nghiệp khẳng định đẳng cấp và bản sắc thương hiệu"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.poloImage}`}
              quality={80}
            />
          </figure>
        </div>
      </article>
    </>
  );
}