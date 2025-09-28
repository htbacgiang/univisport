import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../../styles/RunningUniviPage.module.css';

export default function RunningUniviPage() {
  return (
    <>
      <article className="container mx-auto px-4 mt-4 bg-gray-50 min-h-screen">
        <div className="mx-auto py-8">
          <h2 className={`${styles.runningTitle}`}>1. Chinh Phục Mọi Cung Đường: Sức Mạnh Từ Đồng Phục Chạy Bộ Chuyên Dụng</h2>
          <p className={`${styles.runningText}`}>
            Chạy bộ không chỉ là một môn thể thao rèn luyện sức bền, mà còn là hành trình khám phá giới hạn bản thân, tận hưởng niềm vui vận động và hòa mình vào cộng đồng. Dù bạn là một vận động viên chuyên nghiệp, một người chạy bộ vì đam mê hay mới bắt đầu làm quen với những kilomet đầu tiên, việc lựa chọn trang phục phù hợp chính là bước đệm quan trọng để mỗi sải chân thêm tự tin và hiệu quả.
          </p>
          <p className={`${styles.runningText}`}>Tại sao quần áo chạy bộ chuyên dụng lại là yếu tố then chốt cho mọi runner?</p>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Thoáng khí tối đa & Nhanh khô vượt trội:</span> Công nghệ vải tiên tiến giúp mồ hôi thoát hơi nhanh chóng, giữ cho cơ thể bạn luôn khô ráo, thoáng mát, điều hòa thân nhiệt hiệu quả, tránh cảm giác nặng nề, ẩm ướt khó chịu, đặc biệt trong những buổi chạy dài hoặc dưới thời tiết nóng bức.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Trọng lượng siêu nhẹ:</span> Mỗi gram trên trang phục đều được tính toán để giảm thiểu tối đa sức nặng không cần thiết, giúp bạn di chuyển thanh thoát, tiết kiệm năng lượng và cảm thấy nhẹ nhàng hơn trên từng cây số.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Giảm ma sát, chống phồng rộp (Chafe-free):</span> Với thiết kế đường may phẳng, tinh tế cùng chất liệu mềm mại, co giãn, đồng phục chạy bộ chuyên dụng giúp bảo vệ làn da nhạy cảm của bạn khỏi nguy cơ bị phồng rộp, trầy xước do ma sát, một vấn đề thường gặp khi chạy các cự ly dài.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Hỗ trợ vận động tự do:</span> Sự co giãn tuyệt vời của vải và thiết kế ergonomic cho phép bạn thực hiện mọi chuyển động một cách tự nhiên nhất, từ những sải chân dài đến những cú nước rút mạnh mẽ mà không hề cảm thấy gò bó hay cản trở.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>An toàn hơn trên mọi nẻo đường:</span> Nhiều loại trang phục chạy bộ tích hợp khả năng chống tia UV, bảo vệ làn da bạn khỏi tác hại của ánh nắng mặt trời. Bên cạnh đó, các chi tiết phản quang giúp tăng khả năng được nhận diện khi bạn chạy trong điều kiện thiếu sáng, đảm bảo an toàn tối đa.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-chay-bo-univi-but-pha-toc-do.jpg"
              alt="Vận động viên chạy bộ trong đồng phục Univi bứt phá tốc độ, chinh phục mọi cung đường"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.runningImage}`}
              quality={80}
              priority={true}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>2. Univi Sport – Đồng Hành Cùng Runner Trên Mọi Nẻo Đường Với Đồng Phục Ưu Việt</h2>
          <p className={`${styles.runningText}`}>
            Thấu hiểu những đòi hỏi khắt khe của môn chạy bộ, Đồng Phục Univi (thuộc Univi Sport) tự hào mang đến những giải pháp đồng phục chạy bộ được thiết kế chuyên biệt, kết hợp hoàn hảo giữa công nghệ vật liệu tiên tiến và sự am hiểu sâu sắc về vận động học. Với hơn 8 năm kinh nghiệm trong lĩnh vực thiết kế và sản xuất đồng phục thể thao cao cấp, Univi đã trở thành đối tác tin cậy của hàng trăm doanh nghiệp, câu lạc bộ thể thao và các sự kiện chạy bộ lớn nhỏ trên toàn quốc.
          </p>
          <p className={`${styles.runningText}`}>Cam kết về chất lượng &quot;Made by Univi&quot; luôn là ưu tiên hàng đầu:</p>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}>Chúng tôi <span className={`${styles.runningHighlight}`}>không tính phí nếu sản phẩm không đạt chuẩn</span>, bởi sự hài lòng và tin tưởng của bạn là thước đo thành công của Univi.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Tất cả chất liệu vải đều được kiểm định an toàn với da</span>, không chứa các hóa chất độc hại như Formaldehyde hay các amin thơm từ thuốc nhuộm Azo, đảm bảo an toàn tuyệt đối cho sức khỏe của bạn, ngay cả khi vận động cường độ cao và ra nhiều mồ hôi.</li>
          </ul>
          <p className={`${styles.runningText}`}>
            Univi Sport không ngừng &quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện&quot;. Đặc biệt, đối với trang phục chạy bộ, chúng tôi tự hào ứng dụng các dòng vải kỹ thuật cao như <span className={`${styles.runningHighlight}`}>UNIVI-DRY PRO</span> và <span className={`${styles.runningHighlight}`}>UNIVI - BLENED</span>, được thiết kế để tối ưu hóa hiệu suất, mang lại sự thoải mái và bảo vệ tối đa cho người chạy.
          </p>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-chay-bo-univi-univi-dry-pro.jpg"
              alt="Đồng phục chạy bộ Univi công nghệ UNIVI-DRY PRO siêu nhẹ, thoáng khí, nhanh khô"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.runningImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>3. Khám Phá Công Nghệ Đằng Sau Sự Ưu Việt Của Đồng Phục Chạy Bộ Univi</h2>
          <p className={`${styles.runningText}`}>
            Mỗi sản phẩm đồng phục chạy bộ Univi là kết tinh của quá trình nghiên cứu, ứng dụng công nghệ và sự tỉ mỉ trong từng chi tiết.
          </p>
          <h3 className={`${styles.runningSubtitle}`}>3.1 Chất Liệu Vải Kỹ Thuật Cao – Chìa Khóa Cho Hiệu Suất Đỉnh Cao:</h3>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>UNIVI-DRY PRO:</span> Đây là dòng vải &quot;át chủ bài&quot; được Univi ưu tiên sử dụng cho đồng phục chạy bộ, với những đặc tính được thiết kế chuyên biệt cho các hoạt động ngoài trời cường độ cao:</li>
            <ul className={`${styles.runningList}`}>
              <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>NHANH KHÔ (Quick-Dry):</span> Tính năng này đứng đầu danh sách ưu tiên, giúp mồ hôi bay hơi một cách nhanh chóng nhất, giữ cho cơ thể runner luôn khô ráo, nhẹ nhàng và thoải mái, ngăn ngừa cảm giác lạnh khi gió thổi qua.</li>
              <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>CẢN NẮNG (UV Protection):</span> Lớp bảo vệ hiệu quả, giúp làn da bạn tránh khỏi những tác động tiêu cực của tia cực tím trong những buổi chạy dưới trời nắng.</li>
              <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>CẢN GIÓ (Wind Resistance - nhẹ):</span> Giảm thiểu tác động của gió nhẹ, giúp duy trì nhiệt độ cơ thể ổn định hơn.</li>
              <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>CẢN BỤI (Dust Resistance):</span> Giữ cho trang phục của bạn sạch sẽ hơn, đặc biệt hữu ích khi chạy trail hoặc trong môi trường đô thị.</li>
            </ul>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>UNIVI - BLENED:</span> Sự kết hợp thông minh giữa các loại sợi cao cấp như Polyester, Polyamide và Elastane (Spandex) tạo nên một dòng vải đa năng với nhiều ưu điểm vượt trội:</li>
            <ul className={`${styles.runningList}`}>
              <li className={`${styles.runningListItem}`}>Tính năng <span className={`${styles.runningHighlight}`}>Nhanh khô, mềm mịn, mát lạnh và siêu nhẹ</span>.</li>
              <li className={`${styles.runningListItem}`}>Khả năng <span className={`${styles.runningHighlight}`}>Chống tia UV cao hơn</span>, tăng cường bảo vệ da.</li>
              <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Chống nhăn nhàu và rất bền màu</span>, giúp trang phục luôn như mới sau nhiều lần sử dụng và giặt giũ.</li>
            </ul>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Polyester Cao Cấp (PET) và Vải Lưới (Mesh) Thông Minh:</span> Univi cũng sử dụng các loại Polyester cao cấp với đặc tính nhẹ, bền, kết hợp cùng các mảng vải lưới (mesh) được bố trí một cách khoa học ở những vùng cơ thể cần thoát nhiệt nhanh (như lưng, dưới cánh tay, hai bên sườn), giúp tăng cường tối đa độ thoáng khí và làm mát.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Công nghệ thấm hút ẩm (Moisture-Wicking) tích hợp:</span> Cơ chế hoạt động thông minh này giúp kéo mồ hôi từ bề mặt da lên lớp ngoài của vải, nơi mồ hôi sẽ nhanh chóng bay hơi, giữ cho làn da bạn luôn khô thoáng và dễ chịu.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>An toàn tuyệt đối cho da:</span> Ngay cả khi ma sát liên tục trong quá trình chạy dài, chất liệu vải của Univi vẫn đảm bảo sự êm ái, không gây kích ứng hay mẩn ngứa.</li>
          </ul>
          <h3 className={`${styles.runningSubtitle}`}>3.2 Thiết Kế Khí Động Học & Tối Ưu Vận Động:</h3>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Form dáng Ergonomic – Theo sát từng chuyển động:</span> Trang phục chạy bộ Univi được nghiên cứu và cắt may theo form dáng ergonomic, ôm vừa vặn theo hình dáng cơ thể nhưng không gây bó sát khó chịu. Thiết kế này hỗ trợ tối đa các chuyển động tự nhiên của cơ thể khi chạy, từ sải chân, nhịp thở đến cử động của cánh tay.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Đường may phẳng (Flatlock Seams) – Xóa tan nỗi lo chafing:</span> Một trong những &quot;ác mộng&quot; của runner đường dài là chafing (phồng rộp da do ma sát). Univi ứng dụng công nghệ may phẳng tiên tiến, loại bỏ hoàn toàn các đường gân nổi bên trong áo quần, giúp giảm thiểu tối đa nguy cơ ma sát. Univi &quot;may thật kỹ lưỡng cả hai mặt để sản phẩm không chỉ đẹp mà còn bền&quot;, mang lại sự thoải mái tuyệt đối ngay cả trên những quãng đường ultra.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Các chi tiết thông hơi chiến lược (Ventilation Panels):</span> Không chỉ dừng lại ở chất liệu thoáng khí, Univi còn khéo léo bố trí các mảng vải lưới hoặc các lỗ thông hơi được cắt laser ở những vùng cơ thể thường đổ nhiều mồ hôi như lưng, dưới cánh tay, hai bên sườn, giúp tăng cường lưu thông không khí và làm mát cơ thể một cách hiệu quả.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Trọng lượng siêu nhẹ – Nhẹ như không:</span> Mỗi gram trên trang phục đều được Univi tính toán và tối ưu hóa, giúp bạn cảm thấy nhẹ nhàng nhất, như không mặc gì, để hoàn toàn tập trung vào nhịp chạy và mục tiêu phía trước.</li>
          </ul>
          <div className="my-6">
            <figure className="max-w-[800px] mx-auto">
              <Image
                src="/images/gym/dong-phuc-chay-bo-univi-flatlock-seams.jpg"
                alt="Đường may phẳng (Flatlock Seams) trên đồng phục chạy bộ Univi chống ma sát, bảo vệ da khi vận động"
                width={800}
                height={400}
                layout="responsive"
                sizes="(max-width: 800px) 100vw, 800px"
                className={`${styles.runningImage}`}
                quality={80}
              />
            </figure>
          </div>
          <h3 className={`${styles.runningSubtitle}`}>3.3 Tính Năng Hỗ Trợ & An Toàn Quan Trọng:</h3>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Chi tiết phản quang (Reflective Elements):</span> Để đảm bảo an toàn cho các runner thường xuyên luyện tập vào sáng sớm hoặc chiều tối, Univi có thể tích hợp các chi tiết phản quang (logo, sọc, họa tiết nhỏ) trên áo và quần. Những chi tiết này sẽ phát sáng khi có ánh đèn chiếu vào, giúp người và phương tiện khác dễ dàng nhận diện bạn từ xa.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Chống tia UV (UPF Protection):</span> Với các dòng vải chuyên dụng như UNIVI-DRY PRO và UNIVI - BLENED, làn da của bạn sẽ được bảo vệ hiệu quả khỏi tác hại của tia cực tím (UVA/UVB) khi chạy bộ dưới nắng.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Túi nhỏ tiện lợi:</span> Một số thiết kế quần chạy bộ hoặc áo của Univi có thể được trang bị túi nhỏ có khóa kéo kín đáo hoặc túi lưới ẩn, đủ để bạn đựng những vật dụng cần thiết như chìa khóa, thẻ xe, hoặc một vài gói gel năng lượng cho những buổi chạy dài.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Thiết Kế Theo Yêu Cầu Cho Câu Lạc Bộ Chạy & Sự Kiện Thể Thao:</span> Univi cung cấp dịch vụ thiết kế và sản xuất đồng phục chạy bộ theo yêu cầu, từ màu sắc chủ đạo, họa tiết, đến việc in ấn logo, tên đội, tên giải, slogan một cách chuyên nghiệp, sắc nét và bền đẹp, góp phần xây dựng hình ảnh và tinh thần đồng đội mạnh mẽ.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-chay-bo-univi-ergonomic-design.jpg"
              alt="Thiết kế ergonomic ôm sát cơ thể giúp vận động tự do trong đồng phục chạy bộ Univi"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.runningImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>4. Lợi Ích Vượt Trội Khi Trang Bị Đồng Phục Chạy Bộ Cao Cấp Univi</h2>
          <p className={`${styles.runningText}`}>
            Đầu tư vào đồng phục chạy bộ Univi không chỉ là sở hữu một bộ trang phục, mà còn là trang bị cho mình những lợi ích thiết thực:
          </p>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Nâng cao thành tích và hiệu suất:</span> Khi cơ thể luôn khô thoáng, nhẹ nhàng, không bị phân tâm bởi sự khó chịu hay ma sát, bạn có thể duy trì tốc độ, sức bền và sự tập trung tốt hơn, từ đó cải thiện thành tích cá nhân.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Bảo vệ cơ thể toàn diện:</span> Trang phục Univi giúp chống nắng hiệu quả, giảm thiểu nguy cơ phồng rộp da do ma sát, đồng thời hỗ trợ điều hòa thân nhiệt, giúp cơ thể thích ứng tốt hơn với mọi điều kiện thời tiết.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Tự tin chinh phục mọi mục tiêu:</span> Một bộ trang phục chạy bộ đẹp mắt, chuyên nghiệp và vừa vặn sẽ tiếp thêm động lực và sự tự tin để bạn vượt qua mọi giới hạn của bản thân, chinh phục những cự ly mới.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Độ bền cao cho mọi hành trình:</span> Với chất liệu cao cấp và kỹ thuật may tiên tiến, đồng phục chạy bộ Univi có độ bền vượt trội, sẵn sàng đồng hành cùng bạn qua nhiều mùa giải và hàng ngàn kilomet đường chạy.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Khẳng định dấu ấn cá nhân và tinh thần đội nhóm:</span> Với các tùy chọn thiết kế riêng, bạn và câu lạc bộ của mình sẽ trở nên nổi bật, chuyên nghiệp và gắn kết hơn trên mọi đường đua.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-chay-bo-univi-reflective-elements.jpg"
              alt="Chi tiết phản quang trên đồng phục chạy bộ Univi tăng khả năng nhận diện khi chạy thiếu sáng"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.runningImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>5. Đa Dạng Sản Phẩm Đồng Phục Chạy Bộ Univi Cho Mọi Runner</h2>
          <p className={`${styles.runningText}`}>
            Univi Sport mang đến danh mục sản phẩm đồng phục chạy bộ phong phú, đáp ứng nhu cầu đa dạng của cộng đồng runner:
          </p>
          <h3 className={`${styles.runningSubtitle}`}>Áo Chạy Bộ:</h3>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Áo Singlet/Tank Top:</span> Thiết kế sát nách hoặc ba lỗ, sử dụng chất liệu siêu nhẹ, thoáng khí tối đa, là lựa chọn lý tưởng cho những ngày hè oi ả hoặc khi bạn cần đạt hiệu suất cao nhất trong thi đấu.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Áo T-shirt (ngắn tay, dài tay):</span> Sử dụng các chất liệu kỹ thuật như UNIVI-DRY PRO, UNIVI - BLENED, thấm hút mồ hôi tốt, khô nhanh. Áo dài tay có thể giúp chống nắng toàn diện hơn hoặc giữ ấm nhẹ cho cơ thể khi thời tiết se lạnh.</li>
          </ul>
          <h3 className={`${styles.runningSubtitle}`}>Quần Chạy Bộ:</h3>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Quần Short:</span> Đa dạng kiểu dáng như quần short 2 lớp (lớp lót bên trong co giãn, lớp ngoài siêu nhẹ), quần short 1 lớp tối giản, quần có túi tiện lợi. Chiều dài khác nhau phù hợp với sở thích và nhu cầu của mỗi người.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Quần Legging/Tights:</span> Thiết kế ôm sát giúp hỗ trợ cơ bắp, giảm rung động, đồng thời giữ ấm hiệu quả trong điều kiện thời tiết lạnh. Chất liệu co giãn 4 chiều mang lại sự thoải mái tối đa.</li>
          </ul>
          <h3 className={`${styles.runningSubtitle}`}>Phụ Kiện:</h3>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Áo khoác chạy bộ (Running Jacket):</span> Siêu nhẹ, có khả năng cản gió tốt, chống nước nhẹ, dễ dàng gấp gọn và mang theo.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Thiết kế riêng biệt cho Nam và Nữ:</span> Univi luôn chú trọng đến sự khác biệt về vóc dáng, cấu trúc cơ thể và nhu cầu vận động của runner nam và nữ, từ đó mang đến những thiết kế được tối ưu hóa cho từng giới, đảm bảo sự vừa vặn và thoải mái nhất.</li>
          </ul>
        </div>
        <div className="my-6">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/images/gym/dong-phuc-chay-bo-univi-dat-may-nhanh-chong.jpg"
              alt="Quy trình đặt may đồng phục chạy bộ Univi đơn giản, nhanh chóng và chuyên nghiệp"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.runningImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>6. Quy Trình Đặt May Đồng Phục Chạy Bộ Univi Đơn Giản, Nhanh Chóng Và Chuyên Nghiệp</h2>
          <p className={`${styles.runningText}`}>
            Univi cam kết mang đến trải nghiệm đặt hàng thuận tiện và hài lòng nhất cho quý khách:
          </p>
          <ol className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Tư Vấn Chuyên Sâu:</span> Hãy chia sẻ với Univi về nhu cầu của bạn: bạn cần đồng phục cho cá nhân, câu lạc bộ hay giải chạy? Số lượng dự kiến? Yêu cầu về chất liệu (UNIVI-DRY PRO, UNIVI - BLENED, hay các loại khác?), kiểu dáng, tính năng (chống nắng, phản quang,...), và ngân sách. Đội ngũ tư vấn viên giàu kinh nghiệm của chúng tôi sẽ lắng nghe và tư vấn giải pháp phù hợp nhất.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Thiết Kế Sáng Tạo (Hoàn Toàn Miễn Phí):</span> Dựa trên những thông tin bạn cung cấp, đội ngũ thiết kế của Univi sẽ hiện thực hóa ý tưởng của bạn thành các mẫu thiết kế 2D, 3D trực quan, sinh động. Bạn có thể yêu cầu chỉnh sửa không giới hạn cho đến khi hoàn toàn hài lòng với mẫu thiết kế đồng phục chạy bộ của mình.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Duyệt Mẫu & Báo Giá Cạnh Tranh:</span> Sau khi bạn chốt thiết kế cuối cùng, Univi sẽ gửi báo giá chi tiết, rõ ràng và cạnh tranh nhất. Đối với các đơn hàng lớn hoặc yêu cầu đặc thù, chúng tôi sẵn sàng hỗ trợ may mẫu thực tế để bạn trực tiếp kiểm tra chất liệu, form dáng và chất lượng sản phẩm.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Sản Xuất Chính Xác và Nhanh Chóng:</span> Khi hợp đồng được ký kết, đơn hàng của bạn sẽ được đưa vào quy trình sản xuất hiện đại tại xưởng may của Univi. Chúng tôi cam kết sử dụng đúng chất liệu đã thống nhất, áp dụng kỹ thuật may tiên tiến và đảm bảo độ chính xác, đồng đều cho từng sản phẩm.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Kiểm Tra Chất Lượng (KCS) Nghiêm Ngặt:</span> Trước khi đến tay bạn, 100% sản phẩm đồng phục chạy bộ đều phải trải qua khâu kiểm tra chất lượng cuối cùng, bao gồm kiểm tra chất liệu, đường may, chi tiết in/thêu, form dáng và các thông số kỹ thuật khác.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Giao Hàng Toàn Quốc Đúng Hẹn:</span> Univi hợp tác với các đơn vị vận chuyển uy tín, đảm bảo giao hàng tận nơi trên toàn quốc, đúng tiến độ đã cam kết.</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Chính Sách Bảo Hành và Hậu Mãi Tận Tâm:</span> Univi tự hào với &quot;Chế Độ Bảo Hành và Hậu Mãi tốt nhất&quot;. Chúng tôi bảo hành chất lượng áo, logo và sẵn sàng lắng nghe, hỗ trợ giải quyết mọi vấn đề phát sinh (nếu có) một cách nhanh chóng và tận tâm, đảm bảo sự hài lòng tuyệt đối cho quý khách hàng.</li>
          </ol>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>7. Univi Sport – Chắp Cánh Cho Đam Mê Chạy Bộ Không Giới Hạn Của Bạn</h2>
          <p className={`${styles.runningText}`}>
            Tại Univi Sport, chúng tôi không chỉ tạo ra những bộ đồng phục chạy bộ, chúng tôi kiến tạo những người bạn đồng hành đáng tin cậy trên mỗi kilomet bạn chinh phục. Chúng tôi tin rằng, một bộ trang phục tốt sẽ góp phần không nhỏ vào thành công và niềm vui của mỗi runner.
          </p>
          <p className={`${styles.runningText}`}>
            Với các công nghệ vải tiên tiến và độc quyền như <span className={`${styles.runningHighlight}`}>UNIVI-DRY PRO</span> và <span className={`${styles.runningHighlight}`}>UNIVI - BLENED</span>, Univi cam kết mang lại trải nghiệm chạy bộ vượt trội, giúp bạn luôn cảm thấy khô thoáng, nhẹ nhàng, được bảo vệ tối ưu và tự tin thể hiện hết mình. Kinh nghiệm cung cấp đồng phục cho nhiều sự kiện thể thao và các câu lạc bộ chạy bộ uy tín trên cả nước là minh chứng rõ ràng nhất cho năng lực và sự tận tâm của Univi.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.runningTitle}`}>8. Bứt Tốc Giới Hạn, Chinh Phục Cung Đường Cùng Đồng Phục Chạy Bộ Univi Ngay Hôm Nay!</h2>
          <p className={`${styles.runningText}`}>
            Bạn đã sẵn sàng cho những kỷ lục mới, những trải nghiệm chạy bộ tuyệt vời hơn? Đừng để trang phục giới hạn tiềm năng của bạn!
          </p>
          <p className={`${styles.runningText}`}>
            Liên hệ ngay với Univi Sport để được tư vấn chi tiết, nhận thiết kế độc quyền và báo giá ưu đãi nhất cho đồng phục chạy bộ của bạn hoặc đội nhóm:
          </p>
          <ul className={`${styles.runningList}`}>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Hotline:</span> 083 420 4999</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Email:</span> Yenlb.univi@gmail.com</li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Website:</span> <Link href="https://dongphucunivi.com" legacyBehavior><a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">dongphucunivi.com</a></Link></li>
            <li className={`${styles.runningListItem}`}><span className={`${styles.runningHighlight}`}>Địa chỉ:</span> D4, 180 Thanh Bình, Mộ Lao, Hà Đông, Hà Nội</li>
          </ul>
          <p className={`${styles.runningText}`}>
            <span className={`${styles.runningHighlight}`}>Univi Sport – Your Uniform, Your Brand!</span> Tiếp lửa đam mê, bứt phá mọi giới hạn!
          </p>
        </div>
      </article>
    </>
  );
}