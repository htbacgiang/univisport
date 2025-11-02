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
    Globe,
    MapPin,
    Star,
    Wind,
    Sun,
    Droplets
} from 'lucide-react';
import styles from '../../../styles/PickleballUniviPage.module.css';

export default function AogoUniviPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">

                {/* Main Content */}
                <article className="bg-white rounded-lg p-6 mb-8 shadow-sm  border-[#105d97]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">1</span>
                        </div>
                        <h2 className={`${styles.articleTitle}`}>
                            Tầm quan trọng của Áo Gió Chuyên dụng trong hoạt động ngoài trời
                        </h2>
                    </div>
                    
                    <div className="space-y-4">
                        <p className={`${styles.bodyText}`}>
                            Áo gió không chỉ là một lớp áo khoác. Trong môi trường ngoài trời, đặc biệt khi vận động cường độ cao hoặc team building, áo gió chuyên dụng đóng vai trò là &quot;áo giáp&quot; bảo vệ.
                        </p>
                    </div>

                    <div className="mb-6 mt-6">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            1.1. Thách thức lớn nhất khi hoạt động ngoài trời
                        </h3>
                        <div className="grid gap-4">
                            <div className="bg-red-50 rounded-lg p-4  border-red-400">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                        <Droplets className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className={`${styles.sectionTitle} text-red-700`}>Sốc nhiệt</h4>
                                        <p className={`${styles.bodyText}`}>Áo khoác thông thường giữ mồ hôi và hơi ẩm trên da, gây cảm giác bí bách, ẩm ướt và dễ dẫn đến sốc nhiệt hoặc cảm lạnh khi gió lùa vào.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-lg p-4  border-orange-400">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Sun className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className={`${styles.sectionTitle} text-orange-700`}>Tia UV</h4>
                                        <p className={`${styles.bodyText}`}>Hoạt động lâu dưới trời nắng mà thiếu khả năng chống tia UV sẽ ảnh hưởng trực tiếp đến sức khỏe da và giảm sức bền.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4  border-gray-400">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className={`${styles.sectionTitle}`}>Cản trở vận động</h4>
                                        <p className={`${styles.bodyText}`}>Vải thô cứng, nặng nề làm giảm sự linh hoạt, cản trở các động tác teambuilding hoặc chạy bộ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            1.2. Áo Gió Univi: Giải pháp &quot;3 KHÔNG&quot; vượt trội
                        </h3>
                        <p className={`${styles.bodyText} mb-4`}>
                            Áo gió Univi khắc phục triệt để các vấn đề trên nhờ vào các công nghệ vải đã được chứng minh:
                        </p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                                <thead>
                                    <tr className="bg-[#105d97] text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tính năng cốt lõi</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Vải công nghệ Univi</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Lợi ích cho người mặc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Cản gió & Cản bụi</td>
                                        <td className="border border-gray-300 px-4 py-3">UNIVI-DRY PRO</td>
                                        <td className="border border-gray-300 px-4 py-3">Bảo vệ cơ thể, duy trì thân nhiệt ổn định trong điều kiện gió nhẹ, thời tiết se lạnh.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Thoáng khí</td>
                                        <td className="border border-gray-300 px-4 py-3">Công nghệ Uni Dry</td>
                                        <td className="border border-gray-300 px-4 py-3"><strong className="text-[#105d97]">KHÔNG Bí Bách.</strong> Đẩy mồ hôi ra ngoài nhanh chóng, giữ cơ thể khô ráo.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Chống nắng</td>
                                        <td className="border border-gray-300 px-4 py-3">UNIVI-BLENED (Pha trộn)</td>
                                        <td className="border border-gray-300 px-4 py-3"><strong className="text-[#105d97]">KHÔNG Lo Nắng.</strong> Cung cấp khả năng chống tia UV cao hơn, bảo vệ da khỏi tác hại của ánh nắng mặt trời.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">2</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Công nghệ vải độc quyền: Linh hồn của đồng phục Áo Gió Univi
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Univi Sport áp dụng các dòng vải thể thao chuyên dụng vào sản xuất áo gió, mang lại những tính năng không thể tìm thấy ở áo gió thông thường.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            2.1. UNIVI-DRY PRO: Chất liệu siêu nhẹ, siêu bảo vệ
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="space-y-3">
                                <div>
                                    <span className="font-bold text-[#105d97]">Thành phần: </span>
                                    <span className="text-slate-600">Sợi Polyester cao cấp.</span>
                                </div>
                                <div>
                                    <span className="font-bold text-[#105d97]">Tính năng chính: </span>
                                    <span className="text-slate-600">Có đặc tính NHANH KHÔ, CẢN NẮNG – CẢN GIÓ – CẢN BỤI. Đây là lựa chọn lý tưởng cho các hoạt động kéo dài ngoài trời như chạy bộ, đạp xe, hoặc Teambuilding dã ngoại.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            2.2. UNIVI - BLENED: Sự mềm mại và bền màu
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5  border-[#105d97] hover:shadow-md transition-all duration-300">
                            <div className="space-y-3">
                                <div>
                                    <span className="font-bold text-[#105d97]">Thành phần: </span>
                                    <span className="text-slate-600">Kết hợp Polyester với Polyamide hoặc Cotton.</span>
                                </div>
                                <div>
                                    <span className="font-bold text-[#105d97]">Tính năng chính: </span>
                                    <span className="text-slate-600">Đem lại sự mềm mịn, mát, nhẹ, khả năng chống nhăn nhàu và rất bền màu. Áo gió được may từ dòng vải này giữ form dáng tốt và luôn như mới sau nhiều lần giặt.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            2.3. Cam kết An toàn và Độ bền
                        </h3>
                        <div className="grid gap-4">
                            <div className="bg-green-50 rounded-lg p-4  border-green-400">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <p className="text-slate-600">
                                        <strong className="text-green-700">An toàn tuyệt đối:</strong> Univi cam kết tất cả chất liệu đều được kiểm định an toàn với da, không chứa Formaldehyde hay Amin thơm Azo.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4  border-blue-400">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p className="text-slate-600">
                                        <strong className="text-blue-700">Độ bền vượt trội:</strong> Trọng lượng vải siêu nhẹ, nhưng đảm bảo độ bền cao, chịu được ma sát và tác động của các hoạt động mạnh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                            <span className="text-white font-bold text-lg leading-none">3</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                            Thiết kế và Ứng dụng: Tối ưu cho Doanh nghiệp & Đội nhóm
                        </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Áo gió Univi được thiết kế để phục vụ mục tiêu đồng bộ hóa hình ảnh và tăng sự thoải mái khi vận động.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.1. Thiết kế Tôn dáng và Linh hoạt
                        </h3>
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    Form dáng Ergonomic
                                </h4>
                                <p className="text-slate-600">Áo gió được cắt may theo form dáng thể thao, đảm bảo thoải mái khi vận động nhưng vẫn tôn dáng và chuyên nghiệp.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Đường may chuyên dụng
                                </h4>
                                <p className="text-slate-600">Sử dụng kỹ thuật may bền bỉ, giúp áo chịu được lực kéo căng trong các trò chơi Teambuilding và hoạt động ngoài trời.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            3.2. Cá nhân hóa Thương hiệu và Tiết kiệm chi phí
                        </h3>
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <Star className="w-5 h-5" />
                                    Công nghệ in/thêu logo cao cấp
                                </h4>
                                <p className="text-slate-600">Đảm bảo logo, slogan được in/thêu sắc nét, bền màu, không bong tróc sau nhiều lần giặt.</p>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4  border-green-500 hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-green-700 text-lg mb-2 flex items-center gap-2">
                                    <Trophy className="w-5 h-5" />
                                    Giá gốc tận xưởng - Tiết kiệm 40-50%
                                </h4>
                                <p className="text-slate-600">Nhờ quy trình sản xuất khép kín, không qua trung gian, Univi giúp doanh nghiệp tiết kiệm tới 40-50% chi phí khi đặt may đồng phục số lượng lớn.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-4  border-[#105d97] hover:shadow-md transition-all duration-300">
                                <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" />
                                    Linh hoạt về số lượng
                                </h4>
                                <p className="text-slate-600">Univi nhận may đồng phục theo yêu cầu, với số lượng tối thiểu từ 10 chiếc trở lên.</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Contact Section */}
                <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">
                               Áo gió Univi – Sự đầu tư thông minh cho đội nhóm của bạn
                            </h3>
                            <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                                Áo gió Univi là sự đầu tư thông minh, kết hợp hoàn hảo giữa chức năng bảo vệ chuyên sâu và hình ảnh thương hiệu chuyên nghiệp. Đừng để những chiếc áo khoác thông thường cản trở năng lượng và sự đồng lòng của đội nhóm bạn.
                            </p>
                            <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                                Liên hệ ngay Univi Sport để sở hữu giải pháp đồng phục áo gió công nghệ, khẳng định sự chuyên nghiệp và tạo ra những kỷ niệm đáng nhớ trong mọi hoạt động ngoại khóa, du lịch hoặc Teambuilding.
                            </p>
                            <div className="inline-block bg-yellow-500 text-[#105d97] px-6 py-2 rounded-lg font-bold text-lg mb-4">
                                UNIVI – TIÊN PHONG ĐỒNG PHỤC THỂ THAO TẠI VIỆT NAM
                            </div>
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
                                        <div className={`${styles.contactInfo}`}>0834.204.999</div>
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
                                        <div className={`${styles.contactInfo}`}>D14, 180 Thanh Bình, Hà Đông</div>
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

