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
import styles from '../../../styles/PoloUniviPage.module.css';

export default function PoloUniviPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="w-8 h-8 text-white" />
                        <span className="text-white font-semibold">UNIVI SPORT</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                        Đồng Phục Áo Polo Chuyên Nghiệp 
                        <span className="text-yellow-300"> Nâng Tầm Hình Ảnh Doanh Nghiệp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                        Khám phá bộ sưu tập áo polo đồng phục cao cấp từ Univi Sport - Giải pháp toàn diện cho doanh nghiệp, tổ chức và đội nhóm chuyên nghiệp
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
                        Tại Sao Lựa Chọn Áo Polo Đồng Phục Là Điều Cần Thiết?
                    </h2>
                </div>
                
                <div className="space-y-4">
                    <p className={`${styles.bodyText}`}>
                        Áo polo, với thiết kế cổ bẻ đặc trưng và chất liệu vải thường là Pique co giãn, từ lâu đã vượt ra khỏi ranh giới của một trang phục thể thao đơn thuần để trở thành một biểu tượng của sự thanh lịch, năng động và chuyên nghiệp. Ngày nay, áo polo đồng phục là lựa chọn hàng đầu của vô số doanh nghiệp, tổ chức, trường học và đội nhóm.
                    </p>
                    <p className={`${styles.bodyText}`}>
                        Khác biệt hoàn toàn với quần áo thông thường, <span className={`${styles.highlightText}`}>áo polo đồng phục chuyên dụng</span> được thiết kế và sản xuất với những tính năng ưu việt. Đầu tư vào áo polo chất lượng mang lại nhiều lợi ích không ngờ:
                    </p>
                </div>

                <div className="grid gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Tính linh hoạt và đa dụng vượt trội</h3>
                                <p className={`${styles.bodyText}`}>Áo polo dễ dàng thích ứng với nhiều môi trường và mục đích sử dụng khác nhau, từ không gian công sở chuyên nghiệp, các sự kiện trang trọng, hoạt động đội nhóm năng động, đến việc sử dụng làm quà tặng doanh nghiệp ý nghĩa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Vẻ ngoài chuyên nghiệp, lịch sự mà vẫn thoải mái</h3>
                                <p className={`${styles.bodyText}`}>So với áo sơ mi truyền thống, áo polo mang lại sự chỉn chu cần thiết mà vẫn giữ được nét trẻ trung, năng động và đặc biệt là sự thoải mái tối đa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Trophy className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Công cụ xây dựng và quảng bá hình ảnh thương hiệu</h3>
                                <p className={`${styles.bodyText}`}>Với bề mặt vải rộng và phẳng, áo polo là không gian lý tưởng để in hoặc thêu logo, slogan, tên công ty, góp phần tăng cường nhận diện thương hiệu.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Heart className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Tạo sự thoải mái và tự tin cho người mặc</h3>
                                <p className={`${styles.bodyText}`}>Chất liệu vải cao cấp, có khả năng co giãn và thấm hút mồ hôi tốt giúp nhân viên luôn cảm thấy tự tin, thoải mái trong mọi hoạt động.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Góp phần xây dựng tinh thần đồng đội</h3>
                                <p className={`${styles.bodyText}`}>Sự đồng bộ trong trang phục tạo nên một hình ảnh gắn kết, chuyên nghiệp, đồng thời thể hiện niềm tự hào và sự thuộc về của mỗi cá nhân.</p>
                            </div>
                        </div>
                    </div>
        </div>
            </article>
            <div className="my-8 text-center">
                <figure className="inline-block rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/chay-bo/cong-so-2.webp"
              alt="Nhân viên trong áo polo đồng phục Univi, kết hợp thanh lịch và năng động"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              quality={80}
              priority={true}
            />
          </figure>
        </div>
            <article className="bg-white rounded-lg p-6 mb-4 shadow-sm border-l-4 border-[#105d97]">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">2</span>
                    </div>
                    <h2 className={`${styles.articleTitle}`}>
                        Univi Sport – Giải Pháp Áo Polo Đồng Phục Tối Ưu
                    </h2>
                </div>
                
                <div className="space-y-4 mb-6">
                    <p className={`${styles.bodyText}`}>
                        Thấu hiểu tầm quan trọng và những giá trị mà áo polo đồng phục mang lại, <span className={`${styles.highlightText}`}>Đồng Phục Univi</span> (thuộc Univi Sport) tự hào là đơn vị xưởng may chuyên cung cấp các giải pháp đồng phục thể thao, đồng phục công ty, đồng phục công sở, và đặc biệt là áo polo cao cấp. Với hơn <span className={`${styles.highlightText}`}>8 năm kinh nghiệm</span>, Univi đã khẳng định được vị thế và uy tín, trở thành đối tác chiến lược được tin tưởng bởi hàng trăm doanh nghiệp như: Sun Group, Premier Village, Sun World, Thanh Cong Group, Tập đoàn Than Khoáng Sản Việt Nam, KickFit Sport, Fitcare, Yoko Onsen Quang Hanh…
                    </p>
                    <p className={`${styles.bodyText}`}>
                        Sứ mệnh của Univi Sport là tạo ra một thương hiệu phục vụ tất cả mọi người... xứng đáng được tiếp cận với những sản phẩm quần áo chất lượng cao mang lại sự hỗ trợ và thoải mái đặc biệt&quot;. Chúng tôi không ngừng nghiên cứu chuyên sâu về chất liệu và công nghệ may để mỗi sản phẩm đến tay bạn đều là sự kết hợp hoàn hảo giữa tính năng và thẩm mỹ.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className={`${styles.sectionTitle} flex items-center gap-2`}>
                        <Star className="w-5 h-5" />
                        Univi cam kết:
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className={`${styles.highlightText}`}>Chất lượng sản phẩm đặt lên hàng đầu:</span>
                                <span className={`${styles.bodyText} ml-2`}>Univi kiên định với chính sách &quot;Không tính phí nếu sản phẩm không đạt chuẩn&quot;.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Shield className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className={`${styles.highlightText}`}>An toàn tuyệt đối cho sức khỏe người mặc:</span>
                                <span className={`${styles.bodyText} ml-2`}>Tất cả chất liệu vải được kiểm định an toàn với da, nói không với hóa chất độc hại như Formaldehyde hay các amin thơm từ thuốc nhuộm Azo.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className={`${styles.highlightText}`}>Giải pháp chuyên dụng cho áo polo:</span>
                                <span className={`${styles.bodyText} ml-2`}>Đội ngũ chuyên gia đảm bảo mỗi chiếc áo polo có form dáng chuẩn, độ bền cao và thoải mái, được thiết kế để tối ưu hóa hiệu suất và mang lại sự thoải mái tối đa.</span>
                            </div>
                        </div>
                    </div>
        </div>
            </article>
            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src="/images/dong-phuc-ao-polo.jpg"
              alt="Áo polo đồng phục Univi với thiết kế chuyên nghiệp, khẳng định uy tín thương hiệu"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
                        className="transition-transform duration-300"
              quality={80}
            />
          </figure>
        </div>
            <article className="bg-white rounded-2xl p-6 md:p-8 mb-6 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">3</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Khám Phá Đặc Điểm Vượt Trội Của Áo Polo Đồng Phục Univi
                    </h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Mỗi sản phẩm áo polo đồng phục từ Univi là kết tinh của quá trình nghiên cứu kỹ lưỡng và sự đầu tư nghiêm túc vào chất lượng.
                </p>
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.1 Chất liệu vải cao cấp – Đáp ứng mọi nhu cầu
                    </h3>
                    <p className="text-slate-600 mb-6">
                        Univi <span className="text-[#105d97] font-semibold">&quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện&quot;</span>.
                    </p>
                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Cotton 100%
                            </h4>
                            <p className="text-slate-600">Mềm mại, thoáng khí, thấm hút mồ hôi tốt, phù hợp cho môi trường năng động.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Piquecool (Vải cá sấu mắt chim)
                            </h4>
                            <p className="text-slate-600">Co giãn, thoáng khí, giữ form dáng, mang lại vẻ ngoài lịch lãm.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Trophy className="w-5 h-5" />
                                Lacoste USA
                            </h4>
                            <p className="text-slate-600">Cao cấp, dày dặn, mịn màng, bền màu, thể hiện sự sang trọng.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Polyester Cao Cấp (PET)
                            </h4>
                            <p className="text-slate-600">Bền màu, chống nhăn, dễ bảo quản, phù hợp đơn hàng lớn.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.2 Thiết kế tinh tế – Form dáng chuẩn mực
                    </h3>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <CheckCircle className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Kiểu dáng đa dạng:</span>
                                <span className="text-slate-600 ml-2">Polo Classic (truyền thống, lịch sự), Polo Slim-fit (hiện đại, ôm vừa vặn), Polo có phối màu (tạo điểm nhấn tinh tế).</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <Shield className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Chi tiết tinh tế:</span>
                                <span className="text-slate-600 ml-2">Cổ áo gia công kỹ lưỡng, đứng form, không bai dão. Trụ áo nẹp cúc may chắc chắn, hài hòa với thiết kế.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <Star className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Đường may tinh tế:</span>
                                <span className="text-slate-600 ml-2">Univi áp dụng kỹ thuật may tiên tiến, đảm bảo đường kim mũi chỉ đều đặn, chắc chắn, tinh xảo, mang lại sản phẩm bền đẹp.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#105d97]/5 to-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.3 Công nghệ in/thêu logo hiện đại
                    </h3>
                    <p className="text-slate-600 mb-4">
                        <span className={`${styles.textGradient} font-bold`}>Univi mang đến</span> các công nghệ in/thêu tiên tiến:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                In lụa
                            </h4>
                            <p className="text-slate-600">Phù hợp đơn hàng lớn, màu sắc tươi sáng, bền cao.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                In decal chuyển nhiệt
                            </h4>
                            <p className="text-slate-600">Họa tiết phức tạp, sắc nét, đa màu sắc.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                <Trophy className="w-5 h-5" />
                                Thêu vi tính
                            </h4>
                            <p className="text-slate-600">Sang trọng, bền gần như vĩnh cửu.</p>
                        </div>
                    </div>
        </div>
            </article>
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
            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">7</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Nâng Tầm Hình Ảnh Thương Hiệu Cùng Giải Pháp Áo Polo Đồng Phục Đẳng Cấp
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Tại Univi Sport</span>, chúng tôi không chỉ tạo ra những bộ đồng phục áo polo, chúng tôi kiến tạo những người bạn đồng hành đáng tin cậy trên hành trình xây dựng hình ảnh doanh nghiệp. Chúng tôi tin rằng, một bộ trang phục tốt sẽ góp phần không nhỏ vào thành công và niềm vui của mỗi nhân viên.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Hãy để những chiếc áo polo đồng phục từ Univi trở thành một phần không thể thiếu trong việc xây dựng hình ảnh chuyên nghiệp, năng động, hiện đại và gắn kết cho doanh nghiệp của bạn. Với các công nghệ vải tiên tiến và độc quyền, Univi cam kết mang lại trải nghiệm áo polo vượt trội, giúp bạn luôn cảm thấy thoải mái, tự tin và thể hiện hết mình.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Bạn đã sẵn sàng cho những bước tiến mới, những trải nghiệm áo polo đồng phục tuyệt vời hơn? Đừng để trang phục giới hạn tiềm năng của bạn!
                </p>
            </article>

            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
            <Image
              src="/images/gym/dong-phuc-ao-polo-univi-khang-dinh-dang-cap.jpg"
              alt="Áo polo đồng phục Univi giúp doanh nghiệp khẳng định đẳng cấp và bản sắc thương hiệu"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
              quality={80}
            />
          </figure>
        </div>

            {/* Contact Section */}
            <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-xl font-bold mb-4">
                           Nhận Tư Vấn & Báo Giá Áo Polo Đồng Phục Univi Ngay Hôm Nay!
                        </h3>
                        <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                            Đã đến lúc nâng cấp hình ảnh doanh nghiệp của bạn với những bộ áo polo đồng phục đẳng cấp từ <span className="text-yellow-300 font-bold">Univi Sport</span>! Đừng để trang phục kém chất lượng cản trở hành trình xây dựng thương hiệu của bạn.
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
                            Tự tin khẳng định dấu ấn riêng cùng đồng phục áo polo chuyên nghiệp!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}