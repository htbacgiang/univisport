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
    Globe,
    MapPin,
    Star
} from 'lucide-react';
import styles from '../../../styles/PickleballUniviPage.module.css';

export default function GolfTennisUniviPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
                    <div>
                      
                        <h1 className="text-2xl  font-bold mb-4 leading-tight">
                            Đồng Phục Golf & Tennis Univi
                            <span className="text-yellow-300"> Thanh Lịch Tuyệt Đối, Thoải Mái Bứt Phá Hiệu Suất</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                            Giải pháp đồng phục Golf/Tennis hoàn hảo! Univi dùng vải Polyamide cao cấp (Uni Super Cool) siêu nhẹ, co giãn 4 chiều, chống nhăn. Thiết kế 2 trong 1: Lịch sự chốn văn phòng, năng động trên sân. Nhận đơn từ 10 chiếc.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <article className="bg-white rounded-lg p-6 mb-8 shadow-sm  border-[#105d97]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">1</span>
                        </div>
                        <h2 className={`${styles.articleTitle}`}>
                            Golf & Tennis – Đẳng cấp trên sân đấu và tầm quan trọng của Trang phục Chuyên dụng
                        </h2>
                    </div>
                    
                    <div className="space-y-4">
                        <p className={`${styles.bodyText}`}>
                            Golf và Tennis là những môn thể thao đòi hỏi sự kết hợp hài hòa giữa kỹ thuật chính xác, thể lực bền bỉ và phong thái chuyên nghiệp, thanh lịch. Trang phục trên sân đấu không chỉ là lớp vải thông thường; nó là yếu tố quyết định hiệu suất và hình ảnh cá nhân của bạn.
                        </p>
                        <p className={`${styles.bodyText}`}>
                            Tương tự như Pickleball, một bộ đồng phục Golf/Tennis chất lượng cao sẽ mang lại:
                        </p>
                    </div>

                    <div className="grid gap-4 mt-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Thoải mái và linh hoạt tối đa</h3>
                                    <p className={`${styles.bodyText}`}>Giúp bạn thực hiện cú swing Golf trọn vẹn hoặc cú giao bóng Tennis dứt khoát mà không bị gò bó.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Heart className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Thoát ẩm và thoáng khí vượt trội</h3>
                                    <p className={`${styles.bodyText}`}>Giữ cơ thể khô ráo, duy trì sự tập trung và năng lượng trong suốt các trận đấu kéo dài dưới ánh nắng.</p>
                                </div>
                            </div>
                       </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Trophy className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Tăng sự tự tin và đẳng cấp</h3>
                                    <p className={`${styles.bodyText}`}>Một bộ trang phục vừa vặn, sang trọng khẳng định sự nghiêm túc và phong thái chuyên nghiệp của người chơi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-lg p-6 mb-8 shadow-sm  border-[#105d97]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">2</span>
                        </div>
                        <h2 className={`${styles.articleTitle}`}>
                            Univi Sport – Giải pháp Đồng phục Polo Golf & Tennis Đẳng cấp
                        </h2>
                </div>

                    <div className="space-y-4 mb-6">
                        <p className={`${styles.bodyText}`}>
                            Thấu hiểu những yêu cầu khắt khe về hiệu suất (cho Tennis) và sự thanh lịch (cho Golf), <span className={`${styles.highlightText}`}>Đồng Phục Univi</span> mang đến giải pháp đồng phục Polo Golf & Tennis được chế tác từ chất liệu công nghệ cao nhất.
                        </p>
                        <p className={`${styles.bodyText}`}>Tại sao Univi là lựa chọn tối ưu cho đồng phục Golf & Tennis?</p>
                    </div>

                    <div className="grid gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Chất liệu chuyên môn sâu</h3>
                                    <p className={`${styles.bodyText}`}>Univi tập trung nghiên cứu chuyên sâu để tìm ra dòng vải tốt nhất, phù hợp nhất với đặc thù vận động của từng bộ môn.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Cam kết chất lượng tuyệt đối</h3>
                                    <p className={`${styles.bodyText}`}>Chúng tôi cam kết không tính phí nếu sản phẩm không đạt chuẩn và tất cả chất liệu vải đều được kiểm định an toàn với da.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                    <Trophy className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className={`${styles.sectionTitle}`}>Uy tín từ đối tác lớn</h3>
                                    <p className={`${styles.bodyText}`}>Sự tin tưởng của các tập đoàn và câu lạc bộ lớn như Sun Group, Vingroup là minh chứng cho chất lượng sản phẩm và dịch vụ của Univi.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className={`${styles.bodyText}`}>
                            Với Univi, chiếc áo Polo không chỉ là đồng phục mà là &quot;vũ khí&quot; giúp bạn tỏa sáng và chinh phục mọi thử thách trên sân đấu.
                        </p>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">3</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Khám phá Chất liệu Đột phá: Sự khác biệt của Univi trên sân Golf & Tennis
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Đồng phục Golf và Tennis của Univi được tạo nên từ sự kết hợp của các dòng vải kỹ thuật cao độc quyền, giúp người mặc duy trì phong thái đỉnh cao từ những phút khởi động đến cú đánh cuối cùng.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.1. Dòng UNIVI-SUPER COOL: Thanh lịch và Mềm mại
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Đây là dòng vải lý tưởng cho Golf và các hoạt động yêu cầu sự mềm mại tối đa.
                        </p>
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Thành phần chính: Sợi Polyamide
                                </h4>
                                <p className="text-slate-600">Nổi bật với MỀM – MƯỢT – MÁT – MỊN, mang lại cảm giác mát lạnh tức thì, là nền tảng cho sự thanh lịch tuyệt đối.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    Co giãn vượt trội
                                </h4>
                                <p className="text-slate-600">Đảm bảo độ đàn hồi và linh hoạt cho cú xoay người chuẩn xác khi đánh Golf.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.2. Dòng UNIVI-DRY PRO: Hiệu suất bền bỉ dưới nắng
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Lựa chọn hoàn hảo cho Tennis và hoạt động ngoài trời cường độ cao.
                        </p>
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    Thành phần chính: Polyester cao cấp (PET)
                                </h4>
                                <p className="text-slate-600">CẢN NẮNG – CẢN GIÓ – CẢN BỤI – NHANH KHÔ. Khả năng thoát ẩm thần tốc giúp bạn khô ráo ngay cả khi ra mồ hôi nhiều.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    An toàn tuyệt đối
                                </h4>
                                <p className="text-slate-600">Vải có khả năng chống tia UV hiệu quả, bảo vệ da bạn dưới ánh nắng gay gắt.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.3. Chất liệu UNIVI - BLENED (Kết hợp thông minh)
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <p className="text-slate-600">
                                Sự pha trộn giữa Polyester và Polyamide, tạo ra chất liệu nhẹ, mềm mịn, chống nhăn nhàu và bền màu. Dòng vải này giữ form dáng chuẩn mực, lý tưởng cho đồng phục Polo đòi hỏi tính thẩm mỹ cao và sự thoải mái khi di chuyển.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">4</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Thiết kế Thông minh – Tối ưu cho mọi chuyển động trên sân
                        </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                        Đồng phục Golf & Tennis Univi được thiết kế tỉ mỉ để tối ưu hóa cả tính năng lẫn phong cách.
                    </p>

                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Form dáng Polo Slim-fit hiện đại
                            </h3>
                            <p className="text-slate-600">Form dáng vừa vặn, lịch sự nhưng vẫn đảm bảo sự năng động, tôn lên vóc dáng khỏe khoắn của người chơi.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Đường may tinh tế, chống cọ xát
                            </h3>
                            <p className="text-slate-600">Univi sử dụng kỹ thuật may tỉ mỉ, đảm bảo từng đường kim mũi chỉ chắc chắn. Đặc biệt, đường may kỹ lưỡng cả hai mặt giúp giảm thiểu tối đa sự cọ xát gây khó chịu cho da trong quá trình vận động liên tục.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h3 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                In ấn/Thêu logo đẳng cấp
                            </h3>
                            <p className="text-slate-600">Ứng dụng công nghệ in ấn tiên tiến đảm bảo logo, tên đội nhóm luôn sắc nét, bền màu và không bong tróc, khẳng định dấu ấn chuyên nghiệp của câu lạc bộ hoặc doanh nghiệp.</p>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">5</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Lợi ích vượt trội khi đầu tư Đồng phục Golf & Tennis Univi
                        </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                        Đầu tư vào đồng phục từ Univi là quyết định chiến lược mang lại nhiều giá trị cộng hưởng:
                    </p>

                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Nâng cao hiệu suất thi đấu</h3>
                                    <p className="text-slate-600">Trang phục thoải mái, khô thoáng giúp bạn tập trung hoàn toàn vào kỹ thuật, thực hiện cú đánh chính xác và linh hoạt hơn.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Khẳng định Phong thái và Thương hiệu</h3>
                                    <p className="text-slate-600">Đồng phục đồng bộ, chất lượng tạo nên hình ảnh đẳng cấp, chuyên nghiệp cho đội nhóm, dễ dàng ghi điểm với đối thủ và khán giả.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Độ bền và Tiết kiệm chi phí</h3>
                                    <p className="text-slate-600">Chất liệu cao cấp và kỹ thuật may đo chuẩn mực mang lại độ bền vượt trội, giữ form dáng và màu sắc sau nhiều lần giặt, là khoản đầu tư thông minh trong dài hạn.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">An toàn cho Sức khỏe</h3>
                                    <p className="text-slate-600">Cam kết vải đã qua kiểm định, không chứa hóa chất độc hại, bảo vệ làn da của bạn ngay cả khi ra nhiều mồ hôi trên sân.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-6 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">6</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Đặt may Đồng phục Golf & Tennis tại Univi – Quy trình chuyên nghiệp
                        </h2>
                </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                        Univi mang đến quy trình đặt hàng đơn giản, nhanh chóng và chuyên nghiệp:
                    </p>

                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Tư vấn chuyên sâu</h3>
                                    <p className="text-slate-600">Lắng nghe nhu cầu về kiểu dáng, chất liệu, số lượng và ngân sách.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Thiết kế mẫu miễn phí</h3>
                                    <p className="text-slate-600">Lên mẫu demo dựa trên nhận diện thương hiệu của bạn, chỉnh sửa cho đến khi hài lòng.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Duyệt mẫu & Báo giá</h3>
                                    <p className="text-slate-600">Ký hợp đồng sau khi thống nhất thiết kế và báo giá chi tiết.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Sản xuất theo tiêu chuẩn</h3>
                                    <p className="text-slate-600">Đảm bảo chất lượng nghiêm ngặt tại xưởng may hiện đại.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                                <div>
                                    <h3 className="font-bold text-[#105d97] text-lg mb-2">Giao hàng và Hậu mãi</h3>
                                    <p className="text-slate-600">Kiểm tra chất lượng (KCS) tỉ mỉ, giao hàng tận nơi và cam kết chế độ bảo hành tốt nhất.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Contact Section */}
                <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">
                               Nâng tầm Đẳng cấp trên sân đấu cùng Univi Sport ngay hôm nay!
                            </h3>
                            <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                                Đừng để trang phục cản trở hiệu suất hoặc làm giảm đi phong thái chuyên nghiệp của bạn. Hãy để <span className="text-yellow-300 font-bold">Đồng Phục Univi</span> đồng hành cùng bạn và đội nhóm trên mọi sân Golf và Tennis với những bộ trang phục chất lượng, thoải mái và đẳng cấp nhất.
                            </p>
                            <p className="text-sm text-blue-100 mb-6">
                                Liên hệ ngay để nhận tư vấn miễn phí và báo giá ưu đãi:
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
                                        <Globe className="w-4 h-4 text-[#105d97]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-yellow-300">Website</div>
                                        <div className={`${styles.contactInfo}`}>dongphucunivi.com</div>
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
                                        <div className={`${styles.contactInfo}`}>D4, 180 Thanh Bình, Hà Đông</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm">
                                Univi Sport – Your Uniform, Your Brand!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

