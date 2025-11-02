import Link from 'next/link';
import Image from 'next/image';
import {
    Zap,
    Shield,
    Heart,
    Trophy,
    Users,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Star
} from 'lucide-react';
import styles from '../../../styles/TeamBuildingUniviPage.module.css';

export default function TeamBuildingUniviPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
                <div>
                    <h1 className="text-2xl font-bold mb-4 leading-tight">
                        Đồng Phục Team Building Chuyên Nghiệp 
                        <span className="text-yellow-300"> Gắn Kết Sức Mạnh Tập Thể</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                        Khám phá bộ sưu tập đồng phục Team Building cao cấp từ Univi Sport - Giải pháp toàn diện cho doanh nghiệp, tổ chức và đội nhóm chuyên nghiệp
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <article className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">1</span>
                    </div>
                    <h2 className={`${styles.articleTitle}`}>
                        Tại Sao Lựa Chọn Đồng Phục Team Building Là Điều Cần Thiết?
                    </h2>
                </div>
                
                <div className="space-y-4">
                    <p className={`${styles.bodyText}`}>
                        Trong bối cảnh doanh nghiệp hiện đại không ngừng tìm kiếm các giải pháp nâng cao hiệu suất làm việc và xây dựng văn hóa nội bộ vững mạnh, các hoạt động Team Building đã trở thành một phần không thể thiếu. Đây không chỉ là những chuyến đi, những trò chơi vận động, mà còn là cơ hội quý báu để mỗi cá nhân thấu hiểu, sẻ chia và xích lại gần nhau hơn.
                    </p>
                    <p className={`${styles.bodyText}`}>
                        Khác biệt hoàn toàn với quần áo thông thường, <span className={`${styles.highlightText}`}>đồng phục Team Building chuyên dụng</span> được thiết kế và sản xuất với những tính năng ưu việt. Đầu tư vào đồng phục Team Building chất lượng mang lại nhiều lợi ích không ngờ:
                    </p>
                </div>

                <div className="grid gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Tạo dựng sự đồng nhất và tinh thần bình đẳng</h3>
                                <p className={`${styles.bodyText}`}>Khi khoác lên mình chiếc áo chung, mọi khoảng cách về vị trí, phòng ban dường như được xóa bỏ, tạo nên một sân chơi công bằng, nơi tất cả các thành viên đều cảm thấy mình là một phần không thể tách rời của một tập thể đoàn kết.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Trophy className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Khơi dậy niềm tự hào và ý thức thuộc về tổ chức</h3>
                                <p className={`${styles.bodyText}`}>Đồng phục mang logo, màu sắc và thông điệp của doanh nghiệp giúp mỗi cá nhân cảm nhận rõ hơn sự gắn kết với tập thể, từ đó khơi dậy niềm tự hào và mong muốn đóng góp vào thành công chung.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Tăng cường khả năng nhận diện và tinh thần đội nhóm</h3>
                                <p className={`${styles.bodyText}`}>Trong các hoạt động thi đua, cạnh tranh, đồng phục giúp dễ dàng phân biệt các đội, tạo nên một không khí sôi nổi, hào hứng và thúc đẩy tinh thần chiến đấu vì màu cờ sắc áo của đội mình.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Heart className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Công cụ hiệu quả để truyền tải thông điệp và văn hóa doanh nghiệp</h3>
                                <p className={`${styles.bodyText}`}>Những thiết kế sáng tạo, slogan ý nghĩa hay màu sắc đặc trưng được thể hiện trên áo đồng phục là một cách trực quan và sinh động để truyền tải mục tiêu, giá trị cốt lõi và bản sắc văn hóa của doanh nghiệp đến từng thành viên.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Lưu giữ những kỷ niệm đáng nhớ và ý nghĩa</h3>
                                <p className={`${styles.bodyText}`}>Sau mỗi chương trình Team Building, chiếc áo đồng phục không chỉ là một món đồ lưu niệm mà còn là vật chứng cho những khoảnh khắc vui vẻ, những thử thách đã cùng nhau vượt qua và những mối quan hệ đồng nghiệp thêm phần gắn bó.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Kiến tạo một không khí vui tươi, năng động và đầy màu sắc cho sự kiện</h3>
                                <p className={`${styles.bodyText}`}>Sự đồng bộ và rực rỡ của những chiếc áo Team Building góp phần tạo nên một bức tranh tổng thể đầy sức sống và ấn tượng cho toàn bộ chương trình.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/khach-hang/gofit/chuoi-phong-tap-gofit.webp"
              alt="Nhóm nhân viên trong đồng phục Team Building Univi, thể hiện tinh thần đoàn kết và sức mạnh tập thể"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.teamImage}`}
              quality={80}
              priority={true}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.teamTitle}`}>2. Univi – Đối Tác Chiến Lược Mang Đến Giải Pháp Đồng Phục Team Building Sáng Tạo và Chất Lượng</h2>
          <p className={`${styles.teamText}`}>
            Thấu hiểu sâu sắc tầm quan trọng và những giá trị mà đồng phục mang lại cho các hoạt động Team Building, Đồng Phục Univi tự hào là đơn vị có kinh nghiệm và năng lực trong việc &quot;thiết kế và sản xuất các dòng đồng phục cho doanh nghiệp, công ty, ... đồng phục teambuilding cho các doanh nghiệp vừa và nhỏ&quot; ngay từ những ngày đầu thành lập.
          </p>
          <p className={`${styles.teamText}`}>
            Với hơn 8 năm kinh nghiệm trong ngành thiết kế và sản xuất đồng phục, Univi đã khẳng định được uy tín và vị thế của mình, trở thành đối tác tin cậy của hàng trăm doanh nghiệp, tập đoàn và đội nhóm lớn nhỏ trên cả nước, bao gồm những tên tuổi hàng đầu như Sun Group, Premier Village, Sun World, Thanh Cong Group... Những khách hàng này thường xuyên tổ chức các hoạt động tập thể quy mô, và Univi tự hào đã góp phần vào sự thành công của các chương trình đó thông qua những giải pháp đồng phục chất lượng.
          </p>
          <p className={`${styles.teamText}`}>Cam kết vững chắc từ Univi cho mỗi sản phẩm đồng phục Team Building:</p>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Chất lượng vượt trội, đảm bảo sự thoải mái tối đa cho mọi hoạt động:</span> Univi hiểu rằng trang phục Team Building phải đáp ứng yêu cầu vận động liên tục và trong các điều kiện đa dạng. Do đó, chất lượng vải, đường may và độ bền của sản phẩm luôn là ưu tiên hàng đầu. Chúng tôi duy trì cam kết &quot;không tính phí nếu sản phẩm không đạt chuẩn.&quot;</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>An toàn tuyệt đối cho sức khỏe của mọi thành viên tham gia:</span> Univi cam kết &quot;Tất cả chất liệu vải mà Univi sử dụng đều được kiểm định an toàn với da&quot; không chứa các hóa chất độc hại, đảm bảo sự thoải mái và an tâm cho người mặc.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Thiết kế sáng tạo, truyền tải trọn vẹn tinh thần và thông điệp của đội nhóm:</span> Đội ngũ thiết kế của Univi không chỉ tập trung vào việc tạo ra những chiếc áo đẹp mắt, mà còn nỗ lực &quot;thổi hồn&quot; vào từng sản phẩm, giúp chúng trở thành biểu tượng cho tinh thần đoàn kết và mục tiêu chung của chương trình Team Building.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/khach-hang/gofit/8.jpg"
              alt="Đồng phục Team Building Univi với chất liệu thoáng mát, thiết kế sáng tạo, phù hợp mọi hoạt động"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.teamImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.teamTitle}`}>3. Khám Phá Những Yếu Tố Tạo Nên Sự Khác Biệt Của Đồng Phục Team Building Univi</h2>
          <p className={`${styles.teamText}`}>
            Univi mang đến những giải pháp đồng phục Team Building được đầu tư kỹ lưỡng từ chất liệu, thiết kế đến công nghệ sản xuất, đảm bảo đáp ứng mọi yêu cầu khắt khe nhất.
          </p>
          <h3 className={`${styles.teamSubtitle}`}>3.1 Chất Liệu Vải Được Tuyển Chọn Kỹ Lưỡng – Đảm Bảo Sự Thoải Mái &quot;Quẩy&quot; Hết Mình Trong Mọi Hoạt Động:</h3>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Cotton 100% Cao Cấp:</span> Với ưu điểm vượt trội về sự mềm mại tự nhiên, khả năng thấm hút mồ hôi cực tốt và độ thoáng mát cao, Cotton 100% là lựa chọn lý tưởng cho các hoạt động ngoài trời, những trò chơi vận động đòi hỏi sự thoải mái tối đa.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Polyester Cao Cấp (PET) / Thun Lạnh / Các Dòng Vải Thể Thao Chuyên Dụng:</span> Những chất liệu này nổi bật với trọng lượng nhẹ, khả năng nhanh khô vượt trội, độ bền màu cao, ít nhăn nhàu và độ co giãn tốt. Đặc biệt phù hợp cho các trò chơi vận động mạnh, các hoạt động dưới nước, hoặc những chương trình Team Building có yêu cầu cao về độ bền và khả năng giữ form của trang phục.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Các Loại Vải Pha Trộn Thông Minh (Cotton/Poly, Cotton/Spandex...):</span> Là sự kết hợp tối ưu những ưu điểm của nhiều loại sợi khác nhau, ví dụ như Cotton pha Polyester giúp tăng độ bền và giảm nhăn mà vẫn giữ được sự mềm mại, hay Cotton pha Spandex giúp tăng cường độ co giãn, mang lại sự thoải mái tối đa khi vận động. Univi cam kết thực hiện quy trình &quot;lựa chọn cẩn thận chất liệu vải và sản xuất riêng có nguồn gốc rõ ràng.&quot;</li>
          </ul>
          <h3 className={`${styles.teamSubtitle}`}>3.2 Thiết Kế Độc Đáo, Sáng Tạo – In Đậm Dấu Ấn &quot;Chất Riêng&quot; Của &quot;Team Ta&quot;:</h3>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Kiểu dáng đa dạng, năng động, phù hợp với mọi concept chương trình:</span></li>
            <ul className={`${styles.teamList}`}>
              <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Áo Thun Cổ Tròn (T-shirt):</span> Đây là lựa chọn phổ biến và linh hoạt nhất cho đồng phục Team Building, dễ dàng kết hợp, mang lại sự thoải mái tối đa và là không gian sáng tạo vô tận cho các thiết kế in ấn độc đáo.</li>
              <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Áo Polo:</span> Mang lại vẻ ngoài lịch sự, chỉn chu hơn mà vẫn giữ được sự năng động cần thiết, rất phù hợp cho các chương trình Team Building kết hợp với các buổi hội thảo, đào tạo hoặc gặp gỡ đối tác.</li>
              <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Áo Ba Lỗ/Tank Top (Tùy chọn theo yêu cầu):</span> Lựa chọn lý tưởng cho các hoạt động thể thao dưới nước, các trò chơi vận động cường độ cao hoặc trong điều kiện thời tiết nóng bức.</li>
            </ul>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Bảng màu sắc bùng nổ, bắt trọn &quot;trend&quot; và cá tính đội nhóm:</span> Từ những gam màu cơ bản, trang nhã đến những màu sắc rực rỡ, nổi bật, Univi đều có khả năng đáp ứng, giúp đội nhóm của bạn thực sự tỏa sáng và thể hiện đúng tinh thần của chương trình.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Dịch vụ tư vấn và thiết kế hoàn toàn miễn phí, sáng tạo không giới hạn:</span> Đội ngũ designer chuyên nghiệp của Univi sẽ đồng hành cùng bạn từ khâu lên ý tưởng, phác thảo đến hoàn thiện mẫu thiết kế cuối cùng, đảm bảo mỗi chiếc áo không chỉ đẹp mắt mà còn truyền tải trọn vẹn thông điệp, slogan và tinh thần độc đáo của đội nhóm bạn.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>&quot;Đường may tinh tế&quot; – Cam kết chất lượng ngay cả trên sản phẩm Team Building:</span> Dù là trang phục cho các hoạt động vui chơi, Univi vẫn đảm bảo từng đường kim mũi chỉ được thực hiện một cách chắc chắn, gọn gàng và thẩm mỹ, mang lại sự thoải mái tối đa và độ bền vượt trội cho sản phẩm.</li>
          </ul>
          <h3 className={`${styles.teamSubtitle}`}>3.3 Công Nghệ In/Thêu Hiện Đại – Đảm Bảo Slogan Rõ Nét, Hình Ảnh Bền Lâu Theo Thời Gian:</h3>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>In lụa (Screen Printing):</span> Giải pháp tối ưu cho các đơn hàng số lượng lớn, đặc biệt với các thiết kế có màu sắc đơn giản, mang lại chất lượng in sắc nét, màu sắc tươi sáng và độ bền cao.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>In decal chuyển nhiệt (Heat Transfer Printing):</span> Cho phép in ấn các họa tiết phức tạp, đa dạng màu sắc, hình ảnh chi tiết với độ sắc nét vượt trội, phù hợp với nhiều loại chất liệu vải.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>In kỹ thuật số trực tiếp lên vải (DTG - Direct to Garment):</span> Công nghệ hiện đại cho phép in trực tiếp lên bề mặt vải, tạo ra hình ảnh mềm mại, màu sắc trung thực và chi tiết cao, đặc biệt phù hợp cho các thiết kế có độ phức tạp cao hoặc đơn hàng số lượng ít.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Thêu vi tính (Embroidery):</span> Mang lại vẻ sang trọng, chuyên nghiệp và độ bền gần như vĩnh cửu cho logo, tên đội nhóm hoặc các chi tiết nhỏ cần sự tinh xảo. Đội ngũ chuyên gia của Univi sẽ tư vấn giúp quý khách hàng lựa chọn công nghệ in/thêu phù hợp nhất với chất liệu vải, số lượng đặt hàng và đặc điểm của thiết kế, nhằm đảm bảo tối ưu hóa chi phí sản xuất mà vẫn đạt được chất lượng thẩm mỹ cao nhất và độ bền tối ưu cho sản phẩm.</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/khach-hang/fitcare/12.jpg"
              alt="Đồng phục Team Building Univi với thiết kế độc đáo, in logo sắc nét, thể hiện văn hóa doanh nghiệp"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.teamImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.teamTitle}`}>4. &quot;Lên Đồ&quot; Team Building Univi – Những Lợi Ích Vượt Trội &quot;Đếm Không Xể&quot;!</h2>
          <p className={`${styles.teamText}`}>
            Đầu tư vào những chiếc áo đồng phục Team Building chất lượng từ Univi mang lại nhiều giá trị cộng hưởng, góp phần quan trọng vào sự thành công của chương trình:
          </p>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Gắn kết tình đồng đội mạnh mẽ và bền chặt hơn:</span> Chiếc áo chung như một sợi dây vô hình, kéo mọi thành viên lại gần nhau hơn, xóa bỏ những rào cản thường ngày, tạo nên một tập thể đoàn kết, thấu hiểu và sẵn sàng hỗ trợ lẫn nhau.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Khơi dậy tinh thần &quot;chiến đấu&quot; hết mình và niềm tự hào về đội nhóm:</span> Khi khoác lên mình chiếc áo mang màu sắc và biểu tượng của đội, mỗi thành viên sẽ cảm nhận được tinh thần tập thể trỗi dậy mạnh mẽ, sẵn sàng cống hiến và &quot;cháy&quot; hết mình trong mọi thử thách.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Tạo nên những khoảnh khắc đáng nhớ và những khung hình &quot;chất lừ&quot; để đời:</span> Những bức ảnh cả đội cùng nhau rạng rỡ trong màu áo đồng phục sẽ là những kỷ niệm không thể nào quên, minh chứng cho một chương trình Team Building thành công và ý nghĩa.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Nâng cao hình ảnh chuyên nghiệp, năng động và sự quan tâm của doanh nghiệp đối với đời sống tinh thần của nhân viên:</span> Việc đầu tư vào đồng phục Team Building thể hiện sự trân trọng và quan tâm của ban lãnh đạo đối với đội ngũ, góp phần xây dựng một hình ảnh doanh nghiệp tích cực và thu hút.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Đảm bảo sự thoải mái vận động tối đa, giúp mọi thành viên tự tin tham gia mọi hoạt động:</span> Chất liệu vải tốt, form dáng phù hợp giúp mọi người thoải mái &quot;bung xõa&quot; năng lượng, tự do tham gia vào các trò chơi và thử thách mà không cảm thấy gò bó hay khó chịu.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.teamTitle}`}>5. Áo Team Building Univi – &quot;Cân&quot; Mọi Concept, &quot;Chất&quot; Mọi Cuộc Chơi, Phù Hợp Mọi Quy Mô!</h2>
          <p className={`${styles.teamText}`}>
            Với kinh nghiệm và năng lực sản xuất của mình, Univi tự tin đáp ứng mọi ý tưởng và nhu cầu về áo Team Building cho các mục đích đa dạng:
          </p>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}>Team Building Công Ty (Company Outing, Corporate Trip, Year End Party).</li>
            <li className={`${styles.teamListItem}`}>Team Building Dã Ngoại, Vận Động Ngoài Trời, Các Giải Thể Thao Nội Bộ.</li>
            <li className={`${styles.teamListItem}`}>Team Building Kết Hợp Với Các Chương Trình Hội Thảo, Đào Tạo, Workshop.</li>
            <li className={`${styles.teamListItem}`}>Đồng Phục Cho Các Câu Lạc Bộ, Hội Nhóm, Lớp Học, Trường Học.</li>
            <li className={`${styles.teamListItem}`}>Áo Đồng Phục Cho Các Sự Kiện Cộng Đồng, Chương Trình Tình Nguyện Viên.</li>
            <li className={`${styles.teamListItem}`}>Và bất kỳ chương trình, sự kiện nào cần đến sự đồng lòng, nhất trí và dấu ấn riêng của một tập thể!</li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/khach-hang/fitcare/19.jpg"
              alt="Đa dạng kiểu dáng đồng phục Team Building Univi, từ áo thun đến polo, phù hợp mọi chương trình"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.teamImage}`}
              quality={80}
            />
          </figure>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.teamTitle}`}>6. Đặt May Áo Team Building Tại Univi – Quy Trình Đơn Giản, Nhanh Chóng và Hỗ Trợ &quot;Hết Nấc&quot;!</h2>
          <p className={`${styles.teamText}`}>
            Univi cam kết mang đến một quy trình đặt hàng áo Team Building được tối ưu hóa, đảm bảo sự dễ dàng, nhanh chóng và chuyên nghiệp cho quý khách hàng:
          </p>
          <ol className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>&quot;Brainstorm&quot; Ý Tưởng Sáng Tạo Cùng Đội Ngũ Chuyên Gia Univi:</span> Hãy chia sẻ với chúng tôi về chủ đề và thông điệp chính của chương trình Team Building, số lượng thành viên dự kiến, màu sắc yêu thích hoặc màu sắc nhận diện thương hiệu, slogan, logo (nếu có), và ngân sách dự kiến cho hạng mục đồng phục.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Hiện Thực Hóa Ý Tưởng Với Dịch Vụ Thiết Kế &quot;Chất Phát Ngất&quot; (Hoàn Toàn Miễn Phí!):</span> Đội ngũ designer tài năng và đầy nhiệt huyết của Univi sẽ lắng nghe và biến những ý tưởng của bạn thành các mẫu thiết kế áo Team Building độc đáo, ấn tượng và trực quan. Chúng tôi hỗ trợ chỉnh sửa không giới hạn cho đến khi bạn cảm thấy hoàn toàn &quot;ưng cái bụng&quot; với mẫu thiết kế.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Tư Vấn Lựa Chọn Chất Liệu Vải &quot;Xịn Sò&quot; và Duyệt Mẫu &quot;Đã Con Mắt&quot;:</span> Univi sẽ tư vấn chi tiết về các loại chất liệu vải phù hợp nhất với tính chất hoạt động và ngân sách của bạn (ví dụ: Cotton 100% cho sự thoáng mát, Polyester thể thao cho độ bền và nhanh khô, hay thun lạnh cho cảm giác mát mẻ). Đối với các đơn hàng có số lượng lớn, Univi sẵn sàng hỗ trợ may mẫu thực tế để bạn có thể trực tiếp cảm nhận chất lượng vải, form dáng và màu sắc sản phẩm.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Xác Nhận Đơn Hàng & Univi &quot;Vào Việc&quot; Với Tốc Độ và Sự Chính Xác Cao:</span> Sau khi tất cả các yếu tố về thiết kế, chất liệu, số lượng và giá cả được thống nhất, hợp đồng sẽ được ký kết. Univi sẽ nhanh chóng triển khai sản xuất với quy trình được kiểm soát chặt chẽ, đảm bảo tiến độ và chất lượng như đã cam kết.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Kiểm Tra Kỹ Lưỡng Từng &quot;Đường Kim Mũi Chỉ&quot; Trước Khi Xuất Xưởng:</span> Mỗi chiếc áo Team Building trước khi đến tay bạn đều được đội ngũ KCS (Kiểm soát Chất lượng Sản phẩm) của chúng tôi &quot;soi&quot; một cách kỹ lưỡng, đảm bảo không có bất kỳ lỗi nhỏ nào về đường may, hình in/thêu hay chất liệu.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Giao Hàng &quot;Thần Tốc&quot; Đến Tận Nơi Trên Toàn Quốc.</span></li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Dịch Vụ Hậu Mãi &quot;Như Người Nhà&quot; – An Tâm Tuyệt Đối:</span> Univi tự hào với &quot;Chế Độ Bảo Hành và Hậu Mãi tốt nhất&quot; thị trường. Chúng tôi cam kết hỗ trợ và giải quyết mọi vấn đề liên quan đến sản phẩm một cách nhanh chóng và tận tâm, đảm bảo sự hài lòng trọn vẹn cho quý khách hàng.</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
          <h2 className={`${styles.teamTitle}`}>7. Tại Sao Hàng Trăm Doanh Nghiệp và Đội Nhóm Tin Tưởng Lựa Chọn Univi Để &quot;Lên Đồ&quot; Cho Chương Trình Team Building?</h2>
          <p className={`${styles.teamText}`}>
            Sự lựa chọn đồng hành của hàng trăm doanh nghiệp lớn nhỏ và các đội nhóm trên cả nước là minh chứng thuyết phục nhất cho những giá trị mà Univi mang lại:
          </p>
          <ul className={`${styles.teamList}`}>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Kinh nghiệm &quot;dày dặn&quot; và sự am hiểu sâu sắc trong lĩnh vực đồng phục Team Building:</span> Chúng tôi đã &quot;chinh chiến&quot; và góp phần vào sự thành công của vô số chương trình, sự kiện lớn nhỏ.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Chất lượng vải &quot;miễn chê&quot;, đường may &quot;khỏi phải nghĩ&quot;:</span> Univi cam kết mang đến những sản phẩm không chỉ đẹp mắt mà còn đảm bảo sự thoải mái tối đa khi vận động và độ bền vượt trội theo thời gian.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Thiết kế sáng tạo, không &quot;đụng hàng&quot;:</span> Bắt trọn tinh thần và thông điệp của đội nhóm, giúp tập thể của bạn thực sự nổi bật.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Giá cả hợp lý, cạnh tranh và hoàn toàn xứng đáng với chất lượng sản phẩm và dịch vụ:</span></li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Năng lực sản xuất &quot;khủng&quot;:</span> Sẵn sàng đáp ứng mọi yêu cầu về số lượng, kể cả những đơn hàng gấp cần tiến độ nhanh chóng.</li>
            <li className={`${styles.teamListItem}`}><span className={`${styles.teamHighlight}`}>Đội ngũ tư vấn viên &quot;có tâm&quot;, nhiệt tình và đội ngũ hỗ trợ khách hàng &quot;có tầm&quot;, chuyên nghiệp.</span></li>
          </ul>
        </div>
        <div className="my-4">
          <figure className="max-w-[800px] mx-auto">
            <Image
              src="/khach-hang/fitcare/17.jpg"
              alt="Doanh nghiệp tin tưởng đồng phục Team Building Univi nhờ chất lượng vượt trội và thiết kế sáng tạo"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              className={`${styles.teamImage}`}
              quality={80}
            />
          </figure>
        </div>
            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">8</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Sẵn Sàng Cho Một Mùa Team Building &quot;Bùng Nổ&quot; Cảm Xúc và Gắn Kết?
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Tại Univi Sport</span>, chúng tôi không chỉ tạo ra những bộ đồng phục Team Building, chúng tôi kiến tạo những người bạn đồng hành đáng tin cậy trên hành trình xây dựng tinh thần đoàn kết. Chúng tôi tin rằng, một bộ trang phục tốt sẽ góp phần không nhỏ vào thành công và niềm vui của mỗi thành viên.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Đừng để chương trình Team Building của doanh nghiệp hay đội nhóm bạn thiếu đi những chiếc áo đồng phục &quot;chất lừ&quot;, ý nghĩa và góp phần tạo nên những kỷ niệm không thể nào phai mờ. Với các công nghệ vải tiên tiến và độc quyền, Univi cam kết mang lại trải nghiệm đồng phục vượt trội, giúp bạn luôn cảm thấy thoải mái, tự tin và thể hiện hết mình.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Bạn đã sẵn sàng cho những bước tiến mới, những trải nghiệm Team Building tuyệt vời hơn? Đừng để trang phục giới hạn tiềm năng của bạn!
                </p>
            </article>

            {/* Contact Section */}
            <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-xl font-bold mb-4">
                           Nhận Tư Vấn & Báo Giá Đồng Phục Team Building Univi Ngay Hôm Nay!
                        </h3>
                        <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                            Đã đến lúc nâng cấp chương trình Team Building của bạn với những bộ đồng phục đẳng cấp từ <span className="text-yellow-300 font-bold">Univi Sport</span>! Đừng để trang phục kém chất lượng cản trở hành trình gắn kết đội nhóm của bạn.
                        </p>
                        <p className="text-sm text-blue-100 mb-6">
                            Liên hệ ngay với Univi để được tư vấn miễn phí, nhận thiết kế độc quyền và báo giá ưu đãi nhất:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-[#105d97]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-yellow-300">Hotline</div>
                                    <div className={`${styles.contactInfo}`}>083 420 4999</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-[#105d97]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-yellow-300">Email</div>
                                    <div className={`${styles.contactInfo}`}>dongphucunivi@gmail.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-[#105d97]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-yellow-300">Địa chỉ</div>
                                    <div className={`${styles.contactInfo}`}>D14, 180 Thanh Bình, Hà Đông</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm">
                            Univi Sport – Your Uniform, Your Brand!
                        </div>
                        <p className="text-blue-100 mt-3 font-medium">
                            Tự tin khẳng định dấu ấn riêng cùng đồng phục Team Building chuyên nghiệp!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}