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
import styles from '../../../styles/MMAUniviPage.module.css';

export default function MMAUniviPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
                <div>
                    
                    <h1 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                        Đồng Phục MMA Chuyên Nghiệp 
                        <span className="text-yellow-300"> Nâng Tầm Hiệu Suất Chiến Đấu</span>
                    </h1>
                    <p className="text-lg text-slate-200 max-w-5xl leading-relaxed">
                        Khám phá bộ sưu tập đồng phục MMA cao cấp từ Univi Sport - Giải pháp toàn diện cho võ sĩ MMA và các câu lạc bộ võ thuật chuyên nghiệp
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
                        Tại Sao Lựa Chọn Trang Phục MMA Chuyên Nghiệp Là Điều Cần Thiết?
                    </h2>
                </div>
                
                <div className="space-y-4">
                    <p className={`${styles.bodyText}`}>
                        MMA (Mixed Martial Arts – Võ Thuật Tổng Hợp) không đơn thuần là một môn thể thao, đó là một đấu trường thực sự, nơi hội tụ những tinh hoa của các trường phái võ thuật khác nhau, nơi thử thách tột cùng sức mạnh thể chất, kỹ thuật chiến đấu và một ý chí sắt đá không thể khuất phục. Để đứng vững và chiến thắng trong môi trường khắc nghiệt này, mỗi võ sĩ không chỉ cần khổ luyện mà còn phải trang bị cho mình những &quot;vũ khí&quot; tối ưu.
                    </p>
                    <p className={`${styles.bodyText}`}>
                        Khác biệt hoàn toàn với quần áo thông thường, <span className={`${styles.highlightText}`}>đồng phục MMA chuyên dụng</span> được thiết kế và sản xuất với những tính năng ưu việt. Đầu tư vào đồng phục MMA chất lượng mang lại nhiều lợi ích không ngờ:
                    </p>
                </div>

                <div className="grid gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Độ bền tối thượng – Chịu đựng mọi thử thách</h3>
                                <p className={`${styles.bodyText}`}>Trang phục MMA phải chịu được những lực kéo, ghì, siết cực lớn cùng các va chạm mạnh mẽ liên tục. Chất liệu và kết cấu đường may phải đảm bảo độ bền vượt trội để không bị rách hay hư hỏng giữa chừng.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Linh hoạt không giới hạn – Tự do trong từng đòn thế</h3>
                                <p className={`${styles.bodyText}`}>Từ những cú đá cao hiểm hóc, những kỹ thuật vật lộn phức tạp đến các đòn khóa siết tinh vi, trang phục phải cho phép võ sĩ thực hiện mọi chuyển động một cách tự do nhất, không chút gò bó hay cản trở.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Heart className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Kiểm soát độ ẩm và thoáng khí hiệu quả</h3>
                                <p className={`${styles.bodyText}`}>Giữ cho cơ thể võ sĩ luôn khô ráo, duy trì nhiệt độ ổn định và sự tập trung cao độ, ngay cả trong những hiệp đấu kéo dài và căng thẳng tột độ.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Bảo vệ da và giảm thiểu ma sát</h3>
                                <p className={`${styles.bodyText}`}>Bề mặt vải và thiết kế đường may thông minh giúp hạn chế tối đa trầy xước, kích ứng da khi tiếp xúc với thảm tập (mat) hoặc trong các tình huống grappling với đối thủ.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Trophy className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Thể hiện tinh thần chiến binh và sự chuyên nghiệp</h3>
                                <p className={`${styles.bodyText}`}>Thiết kế mạnh mẽ, hiện đại của đồng phục không chỉ phản ánh cá tính của võ sĩ mà còn khẳng định sự đầu tư nghiêm túc và chuyên nghiệp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="my-8 text-center">
                <figure className="inline-block rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/images/mma/mma-1.jpg"
                        alt="Võ sĩ MMA trong đồng phục Univi, thể hiện sức mạnh và bản lĩnh trên đấu trường"
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
                        Univi Sport – Giải Pháp Đồng Phục MMA Tối Ưu
                    </h2>
                </div>
                
                <div className="space-y-4 mb-6">
                    <p className={`${styles.bodyText}`}>
                        Thấu hiểu sâu sắc những yêu cầu khắc nghiệt và tinh thần thượng võ của MMA, <span className={`${styles.highlightText}`}>Đồng Phục Univi</span> (thuộc Univi Sport) tự hào mang đến các giải pháp đồng phục MMA được chế tác chuyên biệt, nơi sức mạnh của chất liệu hòa quyện cùng bản lĩnh trong từng đường nét thiết kế. Với hơn <span className={`${styles.highlightText}`}>8 năm kinh nghiệm</span> trong ngành sản xuất đồng phục thể thao chất lượng cao, Univi đã khẳng định vị thế là đối tác tin cậy của nhiều đơn vị thể thao và các câu lạc bộ võ thuật danh tiếng trên toàn quốc.
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
                                <span className={`${styles.bodyText} ml-2`}>Chúng tôi kiên định với chính sách &quot;không tính phí nếu sản phẩm không đạt chuẩn&quot;.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Shield className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className={`${styles.highlightText}`}>An toàn tuyệt đối cho mỗi chiến binh:</span>
                                <span className={`${styles.bodyText} ml-2`}>Tất cả chất liệu vải được sử dụng đều trải qua quy trình kiểm định nghiêm ngặt về độ an toàn với da, cam kết không chứa các hóa chất độc hại như Formaldehyde hay các amin thơm từ thuốc nhuộm Azo.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className={`${styles.highlightText}`}>Giải pháp chuyên dụng cho MMA:</span>
                                <span className={`${styles.bodyText} ml-2`}>Đặc biệt dành cho MMA, Univi tập trung vào việc nghiên cứu và ứng dụng các dòng vải kỹ thuật cao như <span className={`${styles.highlightText}`}>UNIVI-DRY PRO</span> và <span className={`${styles.highlightText}`}>UNIVI - BLENED</span>, có khả năng chịu lực vượt trội và tối ưu hóa cho mọi chuyển động đối kháng.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                        src="/images/mma/mma-2.jpg"
                        alt="Đồng phục MMA Univi với chất liệu kỹ thuật cao UNIVI-DRY PRO, bền bỉ và thoáng khí"
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
                        Khám Phá Đặc Điểm Vượt Trội Của Đồng Phục MMA Univi
                    </h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Mỗi sản phẩm đồng phục MMA từ Univi là kết tinh của quá trình nghiên cứu kỹ lưỡng và sự đầu tư nghiêm túc vào chất lượng.
                </p>
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.1 Chất liệu siêu bền bỉ – Chịu đựng mọi va chạm, thách thức mọi giới hạn
                    </h3>
                    <p className="text-slate-600 mb-6">
                        Univi <span className="text-[#105d97] font-semibold">&quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện&quot;</span>.
                    </p>
                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                UNIVI-DRY PRO
                            </h4>
                            <p className="text-slate-600">Với đặc tính NHANH KHÔ ưu việt, khả năng CẢN BỤI và độ bền cơ học cao, dòng vải này giúp võ sĩ luôn duy trì trạng thái khô ráo, sạch sẽ và trang phục giữ được form dáng lâu dài.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                UNIVI - BLENDED
                            </h4>
                            <p className="text-slate-600">Sự kết hợp thông minh này mang lại các đặc tính như nhẹ, mềm mịn, mát và độ bền màu cao, đồng thời vẫn đảm bảo khả năng chịu lực cần thiết cho các hoạt động đối kháng.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Sợi Vải Gia Cường
                            </h4>
                            <p className="text-slate-600">Univi ưu tiên sử dụng các loại sợi tổng hợp cao cấp như Polyester tỷ trọng cao, Nylon/Polyamide kết hợp với Elastane/Spandex với tỷ lệ tối ưu, mang lại độ bền kéo và khả năng chống mài mòn vượt trội.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.2 Thiết kế tối ưu cho tự do ra đòn – Phá vỡ mọi rào cản chuyển động
                    </h3>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <CheckCircle className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Độ Co Giãn Đa Chiều (4-Way Stretch):</span>
                                <span className="text-slate-600 ml-2">Chất liệu vải tích hợp công nghệ co giãn 4 chiều, cho phép phạm vi chuyển động không giới hạn, từ những cú đá cao, những pha vật ngã đến các kỹ thuật siết khóa phức tạp dưới sàn.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <Shield className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Form Dáng Ergonomic, Ôm Sát Thông Minh:</span>
                                <span className="text-slate-600 ml-2">Thiết kế được nghiên cứu kỹ lưỡng theo đường nét cơ thể và đặc thù vận động của võ sĩ MMA, vừa đảm bảo ôm sát để giảm thiểu sự vướng víu, không tạo lợi thế cho đối thủ khi grappling.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <Star className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Đường May Gia Cố Chắc Chắn:</span>
                                <span className="text-slate-600 ml-2">Univi không chỉ chú trọng đến &quot;đường may tinh tế&quot; mà còn gia cường gấp nhiều lần bằng các mũi chỉ chuyên dụng tại các điểm chịu áp lực lớn như đũng quần, nách áo, các đường ráp nối chính.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                            src="/images/mma/mma-3.jpg"
                            alt="Áo rash guard và quần short MMA Univi, thiết kế ergonomic hỗ trợ mọi đòn thế"
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                            className="transition-transform duration-300"
                            quality={80}
                        />
                    </figure>
                </div>

                <div className="bg-gradient-to-r from-[#105d97]/5 to-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.3 Công nghệ kiểm soát thân nhiệt và độ ẩm vượt trội
                    </h3>
                    <p className="text-slate-600 mb-4">
                        <span className={`${styles.textGradient} font-bold`}>Univi mang đến</span> công nghệ tiên tiến giúp kiểm soát thân nhiệt và độ ẩm hiệu quả:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Moisture-Wicking
                            </h4>
                            <p className="text-slate-600">Công nghệ tiên tiến giúp kéo mồ hôi từ bề mặt da ra lớp ngoài của vải và nhanh chóng làm bay hơi.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Breathable Fabric
                            </h4>
                            <p className="text-slate-600">Cấu trúc sợi vải và thiết kế thông minh cho phép không khí lưu thông dễ dàng, giúp điều hòa nhiệt độ cơ thể.</p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-2xl p-6 md:p-8 mb-4 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">4</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Lợi Ích Vượt Trội Khi Chọn Đồng Phục MMA Chính Hãng Univi
                    </h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    <span className={`${styles.textGradient} font-bold`}>Đầu tư vào đồng phục MMA Univi</span> là đầu tư cho sức khỏe, hiệu suất và hình ảnh của bạn:
                </p>

                <div className="grid gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Tối ưu hóa sức mạnh và kỹ thuật thi đấu</h3>
                                <p className="text-slate-600">Khi trang phục không còn là rào cản, võ sĩ có thể tự do giải phóng toàn bộ tiềm năng, tung ra những đòn thế chuẩn xác, mạnh mẽ và uy lực nhất.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Bảo vệ cơ thể hiệu quả, giảm thiểu chấn thương</h3>
                                <p className="text-slate-600">Chất liệu bền bỉ và thiết kế thông minh giúp giảm thiểu ma sát da, hỗ trợ giữ ấm và bảo vệ các nhóm cơ, hạn chế nguy cơ trầy xước và các chấn thương nhẹ.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Duy trì sự tập trung cao độ và tinh thần chiến đấu bền bỉ</h3>
                                <p className="text-slate-600">Sự thoải mái, khô thoáng và nhẹ nhàng mà trang phục mang lại giúp võ sĩ duy trì sự tập trung hoàn toàn vào đối thủ và chiến thuật, không bị phân tâm bởi các yếu tố khó chịu từ bên ngoài.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Thể hiện đẳng cấp, sự chuyên nghiệp và tinh thần đồng đội</h3>
                                <p className="text-slate-600">Một bộ đồng phục chất lượng, được thiết kế riêng biệt không chỉ khẳng định sự đầu tư nghiêm túc và chuyên nghiệp của cá nhân võ sĩ mà còn là biểu tượng cho sức mạnh và bản sắc của cả một câu lạc bộ.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Độ bền thách thức thời gian và những buổi tập khắc nghiệt nhất</h3>
                                <p className="text-slate-600">Đồng phục MMA Univi được chế tác để đồng hành cùng võ sĩ qua hàng trăm, hàng ngàn giờ tập luyện và những trận chiến nảy lửa nhất, khẳng định giá trị đầu tư bền vững.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <Image
                        src="/images/mma/mma-7.jpg"
                        alt="Sơ đồ quy trình đặt may đồng phục MMA chuyên nghiệp tại Univi, nhanh chóng và hiệu quả"
                        width={800}
                        height={400}
                        layout="responsive"
                        sizes="(max-width: 800px) 100vw, 800px"
                        quality={80}
                    />
                </figure>
            </div>
            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">5</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Quy Trình Đặt May Đồng Phục MMA Univi Chuyên Nghiệp – Nhanh Chóng – Dễ Dàng
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Univi cam kết</span> mang đến trải nghiệm đặt hàng thuận tiện và chuyên nghiệp nhất:
                </p>
                <ol className="grid gap-4 mb-8">
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Tư Vấn Chuyên Sâu:</strong> Đội ngũ chuyên gia của Univi sẵn sàng lắng nghe và phân tích mọi yêu cầu của bạn: mục đích sử dụng, số lượng dự kiến, ý tưởng thiết kế, yêu cầu đặc biệt về chất liệu và ngân sách.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Thiết kế Miễn Phí & Chỉnh Sửa Linh Hoạt:</strong> Đội ngũ thiết kế đầy sáng tạo của Univi sẽ dựa trên ý tưởng của bạn để phát triển những mẫu thiết kế 2D, 3D trực quan, đầy uy lực và cá tính.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>May Mẫu (Nếu cần thiết) & Báo Giá Chi Tiết:</strong> Đối với các đơn hàng lớn hoặc thiết kế phức tạp, Univi sẵn sàng hỗ trợ sản xuất mẫu thực tế để bạn trực tiếp kiểm tra chất lượng sản phẩm.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Ký Hợp Đồng & Tiến Hành Sản Xuất:</strong> Khi hợp đồng được thống nhất, đơn hàng của bạn sẽ được đưa vào sản xuất tại xưởng may hiện đại của Univi với công nghệ tiên tiến.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Kiểm Tra Chất Lượng Sản Phẩm (KCS) Kỹ Lưỡng:</strong> Trước khi xuất xưởng, mỗi sản phẩm đều phải vượt qua quy trình kiểm tra chất lượng đa tầng, khắt khe nhất.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Giao Hàng Toàn Quốc & Thanh Toán Linh Hoạt:</strong> Univi hỗ trợ giao hàng tận nơi trên toàn quốc, đúng tiến độ cam kết. Chúng tôi chấp nhận nhiều hình thức thanh toán linh hoạt.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Chăm sóc sau bán hàng & Chính Sách Bảo Hành Ưu Việt:</strong> Univi tự hào với &quot;Chế Độ Bảo Hành và Hậu Mãi tốt nhất&quot;. Chúng tôi luôn sẵn sàng hỗ trợ mọi vấn đề phát sinh và giải đáp thắc mắc của quý khách hàng.
                    </li>
                </ol>
            </article>
            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <Image
                        src="/images/mma/mma-4.jpg"
                        alt="Đồng phục MMA Univi thể hiện tinh thần thượng võ, sẵn sàng cho mọi thử thách"
                        width={800}
                        height={400}
                        layout="responsive"
                        sizes="(max-width: 800px) 100vw, 800px"
                        quality={80}
                    />
                </figure>
            </div>

            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">6</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Univi Sport – Đối Tác Đồng Hành Nâng Tầm Thương Hiệu Câu Lạc Bộ MMA & Trải Nghiệm Võ Sĩ
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Univi</span> không chỉ đơn thuần là nhà cung cấp đồng phục, chúng tôi mong muốn trở thành đối tác chiến lược, mang đến <span className="text-[#105d97] font-semibold">&quot;GIẢI PHÁP SMART SPORT UNIFORM CHO CÁC CÂU LẠC BỘ MMA&quot;</span>. Chúng tôi giúp các câu lạc bộ MMA nâng cao hình ảnh thương hiệu, tạo sự khác biệt và mang đến trải nghiệm tốt nhất cho võ sĩ thông qua những bộ đồng phục chất lượng, được thiết kế riêng.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Với kinh nghiệm hợp tác cùng các đơn vị thể thao uy tín, Univi hiểu rõ những thách thức và cơ hội trong ngành. Chúng tôi cam kết mang lại những sản phẩm đồng phục MMA không chỉ đẹp về mẫu mã, vượt trội về chất lượng mà còn có mức giá hợp lý, <span className={`${styles.textGradient} font-bold`}>&quot;chỉ từ 99.000 đ cho các sản phẩm trung cao cấp&quot;</span>, tạo ra giá trị thực sự cho mọi khách hàng.
                </p>
            </article>

            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <Image
                        src="/images/mma/mma-5.jpg"
                        alt="Võ sĩ trong đồng phục MMA Univi, sẵn sàng khai hỏa đam mê và thống trị đấu trường"
                        width={800}
                        height={400}
                        layout="responsive"
                        sizes="(max-width: 800px) 100vw, 800px"
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
                        Bứt Tốc Giới Hạn, Chinh Phục Đấu Trường Cùng Đồng Phục MMA Univi Ngay Hôm Nay!
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Tại Univi Sport</span>, chúng tôi không chỉ tạo ra những bộ đồng phục MMA, chúng tôi kiến tạo những người bạn đồng hành đáng tin cậy trên mỗi trận chiến bạn chinh phục. Chúng tôi tin rằng, một bộ trang phục tốt sẽ góp phần không nhỏ vào thành công và niềm vui của mỗi võ sĩ.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Với các công nghệ vải tiên tiến và độc quyền như <span className="text-[#105d97] font-semibold">UNIVI-DRY PRO</span> và <span className="text-[#105d97] font-semibold">UNIVI - BLENED</span>, Univi cam kết mang lại trải nghiệm MMA vượt trội, giúp bạn luôn cảm thấy khô thoáng, nhẹ nhàng, được bảo vệ tối ưu và tự tin thể hiện hết mình. Kinh nghiệm cung cấp đồng phục cho nhiều sự kiện thể thao và các câu lạc bộ MMA uy tín trên cả nước là minh chứng rõ ràng nhất cho năng lực và sự tận tâm của Univi.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Bạn đã sẵn sàng cho những trận chiến mới, những trải nghiệm MMA tuyệt vời hơn? Đừng để trang phục giới hạn tiềm năng của bạn!
                </p>
            </article>

            {/* Contact Section */}
            <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-xl font-bold mb-4">
                           Nhận Tư Vấn & Báo Giá Đồng Phục MMA Univi Ngay Hôm Nay!
                        </h3>
                        <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                            Đã đến lúc nâng cấp &quot;bộ giáp&quot; của bạn, sẵn sàng cho những trận chiến mới với một đẳng cấp khác biệt. Đừng để trang phục trở thành giới hạn của bạn.
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
                            Chế tác sức mạnh, định hình nhà vô địch!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}