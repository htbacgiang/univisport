import Link from 'next/link';
import Image from 'next/image';

export default function AogoUniviPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">

                {/* Main Content */}
                <article className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <h2 className="text-xl md:text-xl font-bold mb-2">
                        <span className="font-bold mr-2">1.</span>
                        Tầm quan trọng của Áo Gió Chuyên dụng trong hoạt động ngoài trời
                    </h2>
                    
                    <div className="space-y-3">
                        <p className="text-base">
                            Áo gió không chỉ là một lớp áo khoác. Trong môi trường ngoài trời, đặc biệt khi vận động cường độ cao hoặc team building, áo gió chuyên dụng đóng vai trò là &quot;áo giáp&quot; bảo vệ.
                        </p>
                    </div>

                    <div className="mb-4 mt-4">
                        <h3 className="text-xl font-bold mb-2">
                            1.1. Thách thức lớn nhất khi hoạt động ngoài trời
                        </h3>
                        <div className="grid gap-3">
                            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">Sốc nhiệt</h4>
                                <p>Áo khoác thông thường giữ mồ hôi và hơi ẩm trên da, gây cảm giác bí bách, ẩm ướt và dễ dẫn đến sốc nhiệt hoặc cảm lạnh khi gió lùa vào.</p>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">Tia UV</h4>
                                <p>Hoạt động lâu dưới trời nắng mà thiếu khả năng chống tia UV sẽ ảnh hưởng trực tiếp đến sức khỏe da và giảm sức bền.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">Cản trở vận động</h4>
                                <p>Vải thô cứng, nặng nề làm giảm sự linh hoạt, cản trở các động tác teambuilding hoặc chạy bộ.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">
                            1.2. Áo Gió Univi: Giải pháp &quot;3 KHÔNG&quot; vượt trội
                        </h3>
                        <p className="text-base mb-3">
                            Áo gió Univi khắc phục triệt để các vấn đề trên nhờ vào các công nghệ vải đã được chứng minh:
                        </p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                                <thead>
                                    <tr className="bg-[#105d97] text-white">
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Tính năng cốt lõi</th>
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Vải công nghệ Univi</th>
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Lợi ích cho người mặc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-3 py-2 font-medium">Cản gió & Cản bụi</td>
                                        <td className="border border-gray-300 px-3 py-2">UNIVI-DRY PRO</td>
                                        <td className="border border-gray-300 px-3 py-2">Bảo vệ cơ thể, duy trì thân nhiệt ổn định trong điều kiện gió nhẹ, thời tiết se lạnh.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-3 py-2 font-medium">Thoáng khí</td>
                                        <td className="border border-gray-300 px-3 py-2">Công nghệ Uni Dry</td>
                                        <td className="border border-gray-300 px-3 py-2"><strong className="font-semibold">KHÔNG Bí Bách.</strong> Đẩy mồ hôi ra ngoài nhanh chóng, giữ cơ thể khô ráo.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-3 py-2 font-medium">Chống nắng</td>
                                        <td className="border border-gray-300 px-3 py-2">UNIVI-BLENED (Pha trộn)</td>
                                        <td className="border border-gray-300 px-3 py-2"><strong className="font-semibold">KHÔNG Lo Nắng.</strong> Cung cấp khả năng chống tia UV cao hơn, bảo vệ da khỏi tác hại của ánh nắng mặt trời.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <h2 className="text-xl md:text-xl font-bold mb-2">
                        <span className="font-bold mr-2">2.</span>
                        Công nghệ vải độc quyền: Linh hồn của đồng phục Áo Gió Univi
                    </h2>

                    <p className="text-base mb-4">
                        Univi Sport áp dụng các dòng vải thể thao chuyên dụng vào sản xuất áo gió, mang lại những tính năng không thể tìm thấy ở áo gió thông thường.
                    </p>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">
                            2.1. UNIVI-DRY PRO: Chất liệu siêu nhẹ, siêu bảo vệ
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                            <div className="space-y-2">
                                <div>
                                    <span className="font-semibold">Thành phần: </span>
                                    <span className="text-base">Sợi Polyester cao cấp.</span>
                                </div>
                                <div>
                                    <span className="font-semibold">Tính năng chính: </span>
                                    <span className="text-base">Có đặc tính NHANH KHÔ, CẢN NẮNG – CẢN GIÓ – CẢN BỤI. Đây là lựa chọn lý tưởng cho các hoạt động kéo dài ngoài trời như chạy bộ, đạp xe, hoặc Teambuilding dã ngoại.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">
                            2.2. UNIVI - BLENED: Sự mềm mại và bền màu
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                            <div className="space-y-2">
                                <div>
                                    <span className="font-semibold">Thành phần: </span>
                                    <span className="text-base">Kết hợp Polyester với Polyamide hoặc Cotton.</span>
                                </div>
                                <div>
                                    <span className="font-semibold">Tính năng chính: </span>
                                    <span className="text-base">Đem lại sự mềm mịn, mát, nhẹ, khả năng chống nhăn nhàu và rất bền màu. Áo gió được may từ dòng vải này giữ form dáng tốt và luôn như mới sau nhiều lần giặt.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">
                            2.3. Cam kết An toàn và Độ bền
                        </h3>
                        <div className="grid gap-3">
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <p className="text-base">
                                    <strong className="font-semibold">An toàn tuyệt đối:</strong> Univi cam kết tất cả chất liệu đều được kiểm định an toàn với da, không chứa Formaldehyde hay Amin thơm Azo.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <p className="text-base">
                                    <strong className="font-semibold">Độ bền vượt trội:</strong> Trọng lượng vải siêu nhẹ, nhưng đảm bảo độ bền cao, chịu được ma sát và tác động của các hoạt động mạnh.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <h2 className="text-xl md:text-xl font-bold mb-2">
                        <span className="font-bold mr-2">3.</span>
                        Thiết kế và Ứng dụng: Tối ưu cho Doanh nghiệp & Đội nhóm
                    </h2>
                    
                    <p className="text-base mb-4">
                        Áo gió Univi được thiết kế để phục vụ mục tiêu đồng bộ hóa hình ảnh và tăng sự thoải mái khi vận động.
                    </p>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">
                            3.1. Thiết kế Tôn dáng và Linh hoạt
                        </h3>
                        <div className="grid gap-3">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">
                                    Form dáng Ergonomic
                                </h4>
                                <p>Áo gió được cắt may theo form dáng thể thao, đảm bảo thoải mái khi vận động nhưng vẫn tôn dáng và chuyên nghiệp.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">
                                    Đường may chuyên dụng
                                </h4>
                                <p>Sử dụng kỹ thuật may bền bỉ, giúp áo chịu được lực kéo căng trong các trò chơi Teambuilding và hoạt động ngoài trời.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">
                            3.2. Cá nhân hóa Thương hiệu và Tiết kiệm chi phí
                        </h3>
                        <div className="grid gap-3">
                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">
                                    Công nghệ in/thêu logo cao cấp
                                </h4>
                                <p>Đảm bảo logo, slogan được in/thêu sắc nét, bền màu, không bong tróc sau nhiều lần giặt.</p>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">
                                    Giá gốc tận xưởng - Tiết kiệm 40-50%
                                </h4>
                                <p>Nhờ quy trình sản xuất khép kín, không qua trung gian, Univi giúp doanh nghiệp tiết kiệm tới 40-50% chi phí khi đặt may đồng phục số lượng lớn.</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 hover:shadow-md transition-all">
                                <h4 className="font-bold text-base mb-1">
                                    Linh hoạt về số lượng
                                </h4>
                                <p>Univi nhận may đồng phục theo yêu cầu, với số lượng tối thiểu từ 10 chiếc trở lên.</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Contact Section */}
                <div className="bg-[#105d97] text-white rounded-lg p-6 mt-6">
                    <div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl md:text-xl font-bold mb-2">
                               Áo gió Univi – Sự đầu tư thông minh cho đội nhóm của bạn
                            </h3>
                            <p className="text-base text-white max-w-4xl mx-auto mb-4">
                                Áo gió Univi là sự đầu tư thông minh, kết hợp hoàn hảo giữa chức năng bảo vệ chuyên sâu và hình ảnh thương hiệu chuyên nghiệp. Đừng để những chiếc áo khoác thông thường cản trở năng lượng và sự đồng lòng của đội nhóm bạn.
                            </p>
                            <p className="text-base text-white max-w-4xl mx-auto mb-4">
                                Liên hệ ngay Univi Sport để sở hữu giải pháp đồng phục áo gió công nghệ, khẳng định sự chuyên nghiệp và tạo ra những kỷ niệm đáng nhớ trong mọi hoạt động ngoại khóa, du lịch hoặc Teambuilding.
                            </p>
                            <div className="inline-block bg-yellow-500 text-[#105d97] px-4 py-2 rounded-lg font-bold text-base mb-4">
                                UNIVI – TIÊN PHONG ĐỒNG PHỤC THỂ THAO TẠI VIỆT NAM
                            </div>
                            <p className="text-sm text-white mb-4">
                                Liên hệ ngay để nhận tư vấn miễn phí và báo giá ưu đãi:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="font-semibold text-yellow-300 mb-1">Hotline</div>
                                <div className="text-white">0834.204.999</div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="font-semibold text-yellow-300 mb-1">Website</div>
                                <div className="text-white">dongphucunivi.com</div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="font-semibold text-yellow-300 mb-1">Địa chỉ</div>
                                <div className="text-white">D14, 180 Thanh Bình, Hà Đông</div>
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

