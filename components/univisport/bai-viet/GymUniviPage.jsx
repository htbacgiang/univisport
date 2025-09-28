import Link from 'next/link';
import Image from 'next/image';
import {
    Dumbbell,
    Shield,
    Zap,
    Heart,
    Trophy,
    Users,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    Globe,
    MapPin,
    Star
} from 'lucide-react';
import styles from '../../../styles/GymUniviPage.module.css';

export default function GymUniviPage() {
    return (
        <div className="min-h-screen bg-gray-50">
        
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Dumbbell className="w-8 h-8 text-white" />
                            <span className="text-white font-semibold">UNIVI SPORT</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                            Đồng Phục Gym Chuyên Nghiệp
                            <br />
                            <span className="text-yellow-300">Nâng Tầm Hiệu Suất Tập Luyện</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Khám phá bộ sưu tập đồng phục gym cao cấp từ Univi Sport - Giải pháp toàn diện cho gymer và các chuỗi phòng tập chuyên nghiệp
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
                            Tại Sao Lựa Chọn Trang Phục Gym Chuyên Nghiệp Là Điều Cần Thiết?
                        </h2>
                    </div>
                    
                    <div className="space-y-4">
                        <p className={`${styles.bodyText}`}>
                            Phong trào tập Gym và rèn luyện sức khỏe đang ngày càng lan tỏa mạnh mẽ trong cộng đồng người Việt. Từ những bạn trẻ mong muốn sở hữu vóc dáng săn chắc đến những người trung niên tìm kiếm sự dẻo dai, phòng Gym đã trở thành điểm đến quen thuộc. Tuy nhiên, để mỗi buổi tập thực sự hiệu quả và mang lại trải nghiệm tốt nhất, việc lựa chọn trang phục đóng vai trò vô cùng thiết yếu.
                        </p>
                        <p className={`${styles.bodyText}`}>
                            Khác biệt hoàn toàn với quần áo thông thường, <span className={`${styles.highlightText}`}>đồng phục Gym chuyên dụng</span> được thiết kế và sản xuất với những tính năng ưu việt. Đầu tư vào đồ tập Gym chất lượng mang lại nhiều lợi ích không ngờ:
                        </p>
                    </div>

                    <div className="grid gap-4 mt-6">
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#105d97]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Tối ưu sự thoải mái & linh hoạt</h3>
                                    <p className={`${styles.bodyText}`}>Chất liệu co giãn 4 chiều, thiết kế thông minh giúp bạn tự do thực hiện mọi động tác, từ những bài tập tạ nặng đến các chuỗi cardio cường độ cao hay những tư thế yoga phức tạp.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#105d97]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Heart className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Hỗ trợ vận động hiệu quả</h3>
                                    <p className={`${styles.bodyText}`}>Trang phục chuyên dụng có thể tạo lực nén nhẹ lên cơ bắp, cải thiện lưu thông máu, giảm tích tụ axit lactic, từ đó hạn chế mệt mỏi, đau nhức và nguy cơ chuột rút. Đường may phẳng, tinh tế cũng giảm ma sát, giúp bạn tập trung hoàn toàn vào bài tập.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#105d97]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Shield className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Khả năng thấm hút mồ hôi & thoáng khí vượt trội</h3>
                                    <p className={`${styles.bodyText}`}>Giữ cho cơ thể luôn khô ráo, thoáng mát ngay cả khi bạn &quot;đốt cháy&quot; calo hết mình. Điều này không chỉ tạo cảm giác dễ chịu mà còn ngăn ngừa sự phát triển của vi khuẩn gây mùi.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#105d97]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Đảm bảo an toàn, phòng tránh chấn thương</h3>
                                    <p className={`${styles.bodyText}`}>Trang phục phù hợp giúp bảo vệ cơ thể, giảm thiểu nguy cơ trầy xước hay các chấn thương không đáng có do quần áo vướng víu hoặc không đủ độ co giãn.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#105d97]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Trophy className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Tăng sự tự tin & động lực tập luyện</h3>
                                    <p className={`${styles.bodyText}`}>Khoác lên mình bộ đồ tập vừa vặn, thời trang và chuyên nghiệp chắc chắn sẽ giúp bạn cảm thấy tự tin hơn, có thêm động lực để chinh phục những mục tiêu sức khỏe của mình.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#105d97]">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Users className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Thể hiện phong cách và sự chuyên nghiệp</h3>
                                    <p className={`${styles.bodyText}`}>Đặc biệt đối với Huấn luyện viên cá nhân (PT) và nhân viên phòng Gym, đồng phục chỉn chu, mang dấu ấn thương hiệu sẽ tạo dựng hình ảnh chuyên nghiệp và đáng tin cậy trong mắt khách hàng.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="my-8 text-center">
                    <figure className="inline-block rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/gym/dong-phuc-gym-univi-nhom-5-nguoi-phong-gym.jpg"
                            alt="Gymer năng động trong bộ đồng phục Gym Univi, thể hiện sự thoải mái và phong cách chuyên nghiệp."
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </figure>
                </div>

                <article className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#105d97]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">2</span>
                        </div>
                        <h2 className={`${styles.articleTitle}`}>
                            Univi Sport – Giải Pháp Đồng Phục Gym Tối Ưu
                        </h2>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                        <p className={`${styles.bodyText}`}>
                            Thấu hiểu những nhu cầu và mong muốn đó, <span className={`${styles.highlightText}`}>Đồng Phục Univi</span> (thuộc Univi Sport) tự hào mang đến các giải pháp đồng phục Gym toàn diện, chất lượng cao, đáp ứng mọi yêu cầu của cá nhân gymer, đội ngũ PT và các chuỗi phòng tập chuyên nghiệp. Với hơn <span className={`${styles.highlightText}`}>8 năm kinh nghiệm</span> trong lĩnh vực thiết kế và sản xuất đồng phục thể thao cao cấp, Univi đã khẳng định vị thế là đối tác tin cậy của hàng trăm doanh nghiệp, trong đó có những tên tuổi lớn trong ngành thể hình và chăm sóc sức khỏe như <span className={`${styles.highlightText}`}>KickFit Sport, Fitcare</span>.
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
                                    <span className={`${styles.bodyText} ml-2`}>Chúng tôi &quot;không tính phí nếu sản phẩm không đạt chuẩn&quot;.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className={`${styles.highlightText}`}>An toàn tuyệt đối cho người mặc:</span>
                                    <span className={`${styles.bodyText} ml-2`}>Tất cả chất liệu vải đều được kiểm định an toàn với da, không chứa hóa chất độc hại như Formaldehyde hay các amin thơm từ thuốc nhuộm Azo.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Zap className="w-4 h-4 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className={`${styles.highlightText}`}>Giải pháp &quot;SMART SPORT UNIFORM&quot;:</span>
                                    <span className={`${styles.bodyText} ml-2`}>Đặc biệt dành cho các chuỗi phòng tập, Univi cung cấp giải pháp đồng phục thông minh, giúp nâng tầm thương hiệu và giải quyết &quot;thực trạng việc sử dụng trang phục... kém chất lượng, không mang tính chuyên dụng&quot; hay &quot;trang phục của chính nhân viên... chưa được đầu tư tương xứng với vị thế của thương hiệu&quot;.</span>
                                </div>
                            </div>
                        </div>
                </div>
                </article>
                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                            src="/images/gym/dong-phuc-gym-univi-nhom-7-nguoi-trang-den.jpg"
                            alt="Đồng phục Gym Univi cho PT và nhân viên phòng tập, thể hiện sự chuyên nghiệp và năng động."
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                            className="transition-transform duration-300"
                        />
                    </figure>
                </div>
                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">3</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Khám Phá Đặc Điểm Vượt Trội Của Đồng Phục Gym Univi
                        </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Mỗi sản phẩm đồng phục Gym từ Univi là kết tinh của quá trình nghiên cứu kỹ lưỡng và sự đầu tư nghiêm túc vào chất lượng.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.1 Chất liệu vải chuyên dụng – Chìa khóa cho hiệu suất tối đa
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Univi <span className="text-[#105d97] font-semibold">&quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện&quot;</span>.
                        </p>
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    UNIVI-DRY PRO
                                </h4>
                                <p className="text-slate-600">Với đặc tính CẢN NẮNG – CẢN GIÓ – CẢN BỤI – NHANH KHÔ, dòng vải này cực kỳ linh hoạt, phù hợp cho các bài tập cardio cường độ cao, các buổi tập ngoài trời hoặc những ai ưa thích sự khô thoáng tức thì.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    UNIVI – SUPER COOL (Polyamide)
                                </h4>
                                <p className="text-slate-600">Nổi bật với đặc tính MỀM – MƯỢT – MÁT – MỊN. Đây là lựa chọn hoàn hảo cho các lớp Yoga, Dance, Group X trong phòng Gym, hoặc cho những gymer yêu thích cảm giác nhẹ nhàng, mát lạnh và thoải mái tối đa trên da.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    UNIVI - BLENDED
                                </h4>
                                <p className="text-slate-600">Sự kết hợp thông minh này mang đến những ưu điểm vượt trội như nhanh khô, mềm mịn, mát, nhẹ, chống tia UV cao hơn, chống nhăn và rất bền màu. Đây là dòng vải đa năng, đáp ứng tốt hầu hết các yêu cầu của trang phục Gym.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Star className="w-5 h-5" />
                                    Các chất liệu khác
                                </h4>
                                <p className="text-slate-600">Polyester cao cấp (PET), Piquecool, Cotton 100% chất lượng cao (tùy thuộc vào dòng sản phẩm cụ thể và mục đích sử dụng). Tất cả các chất liệu đều đảm bảo các tính năng cốt lõi cho đồ tập Gym: co giãn 4 chiều linh hoạt, siêu thấm hút mồ hôi, nhanh khô, thoáng khí vượt trội, nhẹ và bền màu. Đồng thời, luôn cam kết an toàn cho da, không chứa Formaldehyde hay Amin thơm từ thuốc nhuộm Azo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.2 Thiết kế thông minh – Tối ưu cho mọi chuyển động
                        </h3>
                        <div className="grid gap-3">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <CheckCircle className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-[#105d97]">Form dáng đa dạng, khoa học:</span>
                                    <span className="text-slate-600 ml-2">Univi cung cấp nhiều lựa chọn form dáng từ Compression (ôm sát) giúp hỗ trợ cơ bắp, tăng cường lưu thông máu, đến Fitted (ôm vừa) tôn dáng mà vẫn thoải mái, hay Loose fit (rộng rãi) mang lại sự tự do tối đa cho người mặc.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <Shield className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-[#105d97]">Đường may phẳng (Flatlock seams):</span>
                                    <span className="text-slate-600 ml-2">Kỹ thuật may tiên tiến này giúp giảm thiểu tối đa sự cọ xát lên da, tránh gây ngứa hay kích ứng, đặc biệt quan trọng khi vận động cường độ cao. Univi chú trọng &quot;may thật kỹ lưỡng cả hai mặt để sản phẩm không chỉ đẹp mà còn bền&quot;.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <Star className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-[#105d97]">Kiểu dáng thời trang, năng động:</span>
                                    <span className="text-slate-600 ml-2">Các thiết kế của Univi luôn cập nhật xu hướng mới nhất, giúp người mặc không chỉ thoải mái khi tập luyện mà còn tự tin thể hiện phong cách cá nhân.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.3 Công nghệ sản xuất hiện đại – Độ bền vượt trội
                        </h3>
                        <div className="grid gap-3">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <Zap className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-[#105d97]">Kỹ thuật may tiên tiến:</span>
                                    <span className="text-slate-600 ml-2">Sử dụng chỉ may chuyên dụng đảm bảo độ bền cho sản phẩm ngay cả khi đối mặt với những bài tập nặng và tần suất giặt giũ thường xuyên.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <Trophy className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-[#105d97]">Công nghệ in thêu cao cấp:</span>
                                    <span className="text-slate-600 ml-2">Công nghệ in, thêu logo, tên, họa tiết sắc nét, bền màu, không bong tróc, đảm bảo tính thẩm mỹ và sự chuyên nghiệp cho đồng phục, đặc biệt quan trọng cho đồng phục PT và nhân viên phòng Gym.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#105d97]/5 to-blue-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.4 Giải pháp tùy chỉnh theo yêu cầu – Khẳng định dấu ấn thương hiệu
                        </h3>
                        <p className="text-slate-600 mb-4">
                            <span className={`${styles.textGradient} font-bold`}>Univi mang đến</span> dịch vụ thiết kế và tùy chỉnh đồng phục Gym theo yêu cầu riêng:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    Cho cá nhân
                                </h4>
                                <p className="text-slate-600">Tự do lựa chọn màu sắc, kiểu dáng, họa tiết yêu thích.</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h4 className="font-bold text-[#105d97] mb-2 flex items-center gap-2">
                                    <Trophy className="w-5 h-5" />
                                    Cho đội nhóm PT, Câu lạc bộ
                                </h4>
                                <p className="text-slate-600">Đồng bộ hóa trang phục theo màu sắc nhận diện thương hiệu, in/thêu logo, slogan, tạo nên hình ảnh chuyên nghiệp, thống nhất và nâng cao giá trị thương hiệu.</p>
                            </div>
                        </div>
                </div>
                </article>
                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                            src="/images/gym/giai-phap-2s.webp"
                            alt="Sơ đồ quy trình đặt may đồng phục Gym chuyên nghiệp tại Univi."
                            quality={100}
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                            className="transition-transform duration-300"
                        />
                    </figure>
                </div>


                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">4</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Lợi Ích Vượt Trội Khi Chọn Đồng Phục Gym Chính Hãng Univi
                        </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        <span className={`${styles.textGradient} font-bold`}>Đầu tư vào đồng phục Gym Univi</span> là đầu tư cho sức khỏe, hiệu suất và hình ảnh của bạn:
                    </p>

                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Tối đa hóa hiệu suất tập luyện</h3>
                                    <p className="text-slate-600">Trang phục phù hợp giúp bạn tập trung, thoải mái và phát huy tối đa tiềm năng.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Mang lại sự thoải mái & tự tin tuyệt đối</h3>
                                    <p className="text-slate-600">Cảm giác dễ chịu từ chất liệu cao cấp và thiết kế thông minh giúp bạn tự tin trong mọi bài tập.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Trophy className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Xây dựng hình ảnh cá nhân và thương hiệu chuyên nghiệp</h3>
                                    <p className="text-slate-600">Một bộ đồng phục chỉn chu, chất lượng là tuyên ngôn về sự nghiêm túc và chuyên nghiệp của bạn hoặc thương hiệu phòng Gym của bạn.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Độ bền cao, tiết kiệm chi phí dài hạn</h3>
                                    <p className="text-slate-600">Sản phẩm Univi được làm từ chất liệu bền bỉ, giúp bạn tiết kiệm chi phí thay mới đồng phục thường xuyên.</p>
                                </div>
                            </div>
                </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Bảo vệ sức khỏe người mặc</h3>
                                    <p className="text-slate-600">Với cam kết về chất liệu an toàn, bạn hoàn toàn yên tâm khi sử dụng sản phẩm của Univi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">5</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Khám Phá Các Dòng Sản Phẩm Đồng Phục Gym Đa Dạng Tại Univi
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        <span className={`${styles.textGradient} font-bold`}>Univi Sport</span> cung cấp một danh mục sản phẩm đồng phục Gym phong phú, đáp ứng mọi nhu cầu và sở thích:
                    </p>
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        5.1 Đồng phục Gym dành cho Nam:
                    </h3>
                    <ul className="grid gap-4 mb-8">
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Áo thun Gym (T-shirt):</strong>
                            <p>Thiết kế đa dạng từ cổ tròn, cổ tim, sử dụng chất liệu thoáng mát, thấm hút tốt.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Áo tank top, áo ba lỗ (Stringer):</strong>
                            <p>Lựa chọn lý tưởng cho những buổi tập cường độ cao, giúp tối đa hóa sự thoáng mát và khoe trọn thành quả luyện tập.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Quần short Gym:</strong>
                            <p>Nhiều độ dài và kiểu dáng, có túi tiện lợi, chất liệu co giãn, nhẹ.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Quần jogger, quần dài thể thao:</strong>
                            <p>Phù hợp cho việc khởi động, tập luyện trong thời tiết se lạnh hoặc di chuyển đến phòng tập.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Quần legging nam (Men&apos;s Tights/Compression Pants):</strong>
                            <p>Hỗ trợ cơ bắp hiệu quả, tăng cường lưu thông máu.</p>
                        </li>
                    </ul>
                </article>
                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <Image
                            src="/images/gym/dong-phuc-gym-univi-nam-trang-den-quan-short.jpg"
                            alt="Đồng phục gym Univi nam trắng đen, áo thấm hút nhanh, quần short thoải mái"
                            quality={100}
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </figure>
                </div>
                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        5.2 Đồng phục Gym dành cho Nữ:
                    </h3>
                    <ul className="grid gap-4 mb-8">
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Áo bra thể thao (Sports Bra):</strong>
                            <p>Cung cấp độ nâng đỡ đa dạng (low, medium, high impact) phù hợp với từng loại hình vận động, thiết kế thời trang.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Áo croptop Gym, áo thun nữ, tank top nữ:</strong>
                            <p>Kiểu dáng trẻ trung, năng động, tôn dáng, chất liệu mềm mại, thoáng mát.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Quần legging Gym:</strong>
                            <p>Đa dạng về kiểu dáng (cạp cao, cạp thường, dài, lửng, có túi), màu sắc và họa tiết, chất liệu co giãn tối đa, ôm sát tôn dáng.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Quần short Gym nữ:</strong>
                            <p>Thiết kế 2 lớp hoặc 1 lớp, đảm bảo sự thoải mái và kín đáo khi vận động.</p>
                        </li>
                    </ul>
                </article>
                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <Image
                            src="/images/gym/dong-phuc-gym-univi-nu-trang-den-legging.jpg"
                            alt="Đồng phục gym Univi nữ trắng đen, áo thấm hút mồ hôi, quần legging co giãn"
                            quality={100}
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </figure>
                </div>
                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        5.3 Đồng phục Gym cho Huấn luyện viên (PT) và Nhân viên phòng Gym:
                    </h3>
                    <ul className="grid gap-4 mb-8">
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Áo polo, áo thun có cổ:</strong>
                            <p>Được thiết kế chuyên nghiệp, lịch sự, dễ dàng in/thêu logo và tên thương hiệu.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Chất liệu cao cấp:</strong>
                            <p>Đảm bảo sự thoải mái trong suốt quá trình làm việc, hướng dẫn và vận động cùng khách hàng.</p>
                        </li>
                        <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <strong>Màu sắc và kiểu dáng đồng bộ:</strong>
                            <p>Thể hiện tính nhất quán và chuyên nghiệp của phòng tập.</p>
                        </li>
                    </ul>
                </article>
                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <Image
                            src="/images/gym/dong-phuc-pt-gym.jpg"
                            alt="Đồng phục pt gym Univi, áo thấm hút nhanh, quần short thoải mái"
                            quality={100}
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </figure>
                </div>


                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">6</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Quy Trình Đặt May Đồng Phục Gym Univi Chuyên Nghiệp – Nhanh Chóng – Dễ Dàng
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        <span className={`${styles.textGradient} font-bold`}>Univi cam kết</span> mang đến trải nghiệm đặt hàng thuận tiện và chuyên nghiệp nhất:
                    </p>
                    <ol className="grid gap-4 mb-8">
                        <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                            <strong>Liên hệ & Tư vấn Chuyên Sâu:</strong> Đội ngũ tư vấn viên giàu kinh nghiệm của Univi sẽ lắng nghe kỹ lưỡng nhu cầu của bạn (số lượng, đối tượng sử dụng, mục đích, ý tưởng thiết kế, ngân sách) và tư vấn giải pháp tối ưu nhất về chất liệu, kiểu dáng.
                        </li>
                        <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                            <strong>Thiết kế Miễn Phí & Chỉnh Sửa Linh Hoạt:</strong> Dựa trên yêu cầu, đội ngũ thiết kế tài năng của Univi sẽ hiện thực hóa ý tưởng của bạn qua các mẫu thiết kế demo. Bạn có thể yêu cầu chỉnh sửa cho đến khi hoàn toàn hài lòng.
                        </li>
                        <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                            <strong>May Mẫu (Nếu cần thiết) & Báo Giá Chi Tiết:</strong> Đối với các đơn hàng lớn hoặc yêu cầu đặc biệt, Univi hỗ trợ may mẫu để bạn trực tiếp kiểm tra chất lượng sản phẩm. Sau đó, chúng tôi sẽ gửi báo giá chi tiết và minh bạch.
                        </li>
                        <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                            <strong>Ký Hợp Đồng & Tiến Hành Sản Xuất:</strong> Sau khi thống nhất mọi điều khoản, hai bên sẽ ký hợp đồng để đảm bảo quyền lợi. Đơn hàng của bạn sẽ được đưa vào sản xuất tại xưởng may hiện đại của Univi, với quy trình kiểm soát chất lượng nghiêm ngặt.
                        </li>
                        <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                            <strong>Kiểm Tra Chất Lượng Sản Phẩm (KCS) Kỹ Lưỡng:</strong> Trước khi đến tay bạn, mỗi sản phẩm đều trải qua khâu KCS tỉ mỉ, đảm bảo từng đường kim mũi chỉ, chất lượng in ấn và độ chính xác của thiết kế.
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
                            src="/images/gym/dong-phuc-gym.jpg"
                            alt="Sơ đồ quy trình đặt may đồng phục Gym chuyên nghiệp tại Univi."
                            quality={100}
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </figure>
                </div>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">7</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Univi Sport – Đối Tác Đồng Hành Nâng Tầm Thương Hiệu Phòng Gym & Trải Nghiệm Gymer
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        <span className={`${styles.textGradient} font-bold`}>Univi</span> không chỉ đơn thuần là nhà cung cấp đồng phục, chúng tôi mong muốn trở thành đối tác chiến lược, mang đến <span className="text-[#105d97] font-semibold">&quot;GIẢI PHÁP SMART SPORT UNIFORM CHO CÁC CHUỖI PHÒNG TẬP&quot;</span>. Chúng tôi giúp các phòng Gym nâng cao hình ảnh thương hiệu, tạo sự khác biệt và mang đến trải nghiệm tốt nhất cho hội viên thông qua những bộ đồng phục chất lượng, được thiết kế riêng.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Với kinh nghiệm hợp tác cùng các đơn vị thể thao uy tín như <span className="text-[#105d97] font-semibold">KickFit Sport, Fitcare</span>, Univi hiểu rõ những thách thức và cơ hội trong ngành. Chúng tôi cam kết mang lại những sản phẩm đồng phục Gym không chỉ đẹp về mẫu mã, vượt trội về chất lượng mà còn có mức giá hợp lý, <span className={`${styles.textGradient} font-bold`}>&quot;chỉ từ 99.000 đ cho các sản phẩm trung cao cấp&quot;</span>, tạo ra giá trị thực sự cho mọi khách hàng.
                    </p>
                </article>
                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <Image
                            src="/images/gym/dong-phuc-huan-luyen-vien.jpg"
                            alt="Đồng phục gym Univi kiểm định chất liệu vải 76% Polyamide 24% Elastane bởi VnTest"
                            width={800}
                            height={400}
                            layout="responsive"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </figure>
                </div>
                {/* Contact Section */}
                <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">
                               Nhận Tư Vấn & Báo Giá Đồng Phục Gym Univi Ngay Hôm Nay!
                            </h3>
                            <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                                Đã đến lúc nâng cấp trải nghiệm tập luyện của bạn và đội ngũ với những bộ đồng phục Gym đẳng cấp từ <span className="text-yellow-300 font-bold">Univi Sport</span>! Đừng để trang phục kém chất lượng cản trở hành trình chinh phục mục tiêu sức khỏe và vóc dáng của bạn.
                            </p>
                            <p className="text-sm text-blue-100 mb-6">
                        Liên hệ ngay với Univi để được tư vấn miễn phí, nhận thiết kế độc quyền và báo giá ưu đãi nhất:
                    </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
                                        <div className={`${styles.contactInfo}`}>Yenlb.univi@gmail.com</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <Globe className="w-4 h-4 text-[#105d97]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-yellow-300">Website</div>
                                        <Link href="https://dongphucunivi.com" legacyBehavior>
                                            <a className={`${styles.contactInfo} hover:text-yellow-200`} target="_blank" rel="noopener noreferrer">
                                                dongphucunivi.com
                                            </a>
                                        </Link>
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
                                        <div className={`${styles.contactInfo}`}>D4, 180 Thanh Bình, Mộ Lao, Hà Đông, Hà Nội</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm">
                                Univi Sport – Your Uniform, Your Brand!
                            </div>
                            <p className="text-blue-100 mt-3 font-medium">
                                Tự tin bứt phá mọi giới hạn cùng đồng phục Gym chuyên nghiệp!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   