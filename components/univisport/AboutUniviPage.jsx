import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Target, Scale, Lightbulb, Zap, Network, Shirt, Building2, Users } from 'lucide-react';

export default function AboutUniviPage() {
    return (
        <article className="max-w-none">
            {/* Section Header - Compact */}
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 mt-4">
                   II. Định hướng <span style={{color: '#105d97'}}>phát triển</span> và mục tiêu chiến lược
                </h2>
                <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
            </div>
            
            {/* Strategic Development Content - Optimized */}
            <div className="mb-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Strategy Cards - Horizontal Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Định hướng phát triển */}
                        <div className="bg-white rounded-2xl p-6  shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-8 rounded-full mr-4" style={{backgroundColor: '#105d97'}}></div>
                                <h3 className="font-bold text-lg" style={{color: '#105d97'}}>
                                    ĐỊNH HƯỚNG PHÁT TRIỂN
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Univi tập trung nghiên cứu và phát triển sản phẩm Đồng Phục Thể Thao, chú trọng vào chất liệu và mẫu mã phù hợp cho từng bộ môn thể thao.
                            </p>
                        </div>

                        {/* Mục tiêu dài hạn */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-8 rounded-full mr-4" style={{backgroundColor: '#105d97'}}></div>
                                <h3 className="font-bold text-lg" style={{color: '#105d97'}}>
                                    MỤC TIÊU DÀI HẠN
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Trở thành công ty niềm yết trên sàn chứng khoán, đồng thời triển khai phát triển hệ sinh thái Univi.
                            </p>
                        </div>
                    </div>

                    {/* Core Values & Ecosystem - Horizontal Layout */}
                    <div className="space-y-8">
                        {/* Giá trị cốt lõi - Horizontal Layout */}
                        <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{backgroundColor: '#105d97'}}>
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-xl mb-2" style={{color: '#105d97'}}>
                                    GIÁ TRỊ CỐT LÕI
                                </h3>
                                <p className="text-gray-600 text-sm">Những nguyên tắc định hướng hoạt động</p>
                            </div>
                            
                            {/* Horizontal Grid Layout */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {[
                                    { title: 'CHÂN THÀNH', desc: 'Nghĩ thẳng - nói thật', icon: CheckCircle },
                                    { title: 'TRÁCH NHIỆM', desc: 'Nghĩ tới - Làm tới', icon: Target },
                                    { title: 'KỶ LUẬT', desc: 'Nghĩ chuẩn - Làm đúng', icon: Scale },
                                    { title: 'SÁNG TẠO', desc: 'Nghĩ khác - Làm mới', icon: Lightbulb },
                                    { title: 'QUYẾT LIỆT', desc: 'Nghĩ nhanh - Làm nhanh', icon: Zap }
                                ].map((value, index) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <div key={index} className="group text-center">
                                            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:scale-105">
                                                <div className="flex justify-center mb-3">
                                                    <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{backgroundColor: '#105d97'}}>
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                    </div>
                                                </div>
                                                <h4 className="font-bold text-gray-900 text-sm mb-2">{value.title}</h4>
                                                <p className="text-gray-600 text-xs leading-relaxed">{value.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Hệ sinh thái Univi - Enhanced */}
                        <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{backgroundColor: '#105d97'}}>
                                    <Network className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-xl mb-2" style={{color: '#105d97'}}>
                                    HỆ SINH THÁI UNIVI
                                </h3>
                                <p className="text-gray-600 text-sm">Đa dạng thương hiệu phục vụ mọi nhu cầu</p>
                            </div>
                            
                            {/* Brand Logos Grid - Horizontal Layout */}
                            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4">
                                {[
                                    { name: 'SPORT', logo: '/logo-univi.webp', desc: 'Thể thao chuyên nghiệp' },
                                    { name: 'ELEGANT', logo: '/logo-univi.webp', desc: 'Thời trang cao cấp' },
                                    { name: 'OFFICE', logo: '/logo-univi.webp', desc: 'Công sở lịch sự' },
                                    { name: 'KIDS', logo: '/logo-univi.webp', desc: 'Trẻ em năng động' },
                                    { name: 'UNDERWEAR', logo: '/logo-univi.webp', desc: 'Đồ lót tiện nghi' },
                                    { name: 'UNIFORM', logo: '/logo-univi.webp', desc: 'Đồng phục doanh nghiệp' }
                                ].map((brand, index) => (
                                    <div key={index} className="group text-center">
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:scale-105">
                                            <div className="flex justify-center mb-3">
                                                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                                                    <Image
                                                        src={brand.logo}
                                                        alt="Univi Logo"
                                                        width={40}
                                                        height={16}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-2">{brand.name}</h4>
                                            <p className="text-xs text-gray-600 leading-relaxed">{brand.desc}</p>
                                            <div className="mt-3 w-8 h-1 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#105d97'}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="max-w-6xl mx-auto mb-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Trong giai đoạn <span className="font-semibold" style={{color: '#105d97'}}>2023 - 2028</span>, Univi tập trung nghiên cứu và phát triển sản phẩm Đồng Phục Thể Thao, chú trọng vào chất liệu và mẫu mã phù hợp cho từng bộ môn thể thao. Đồng thời, tối ưu hóa dịch vụ tư vấn và trải nghiệm khách hàng, cùng với quản lý thông tin và mối quan hệ khách hàng.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Với mục tiêu phát triển thương hiệu qua truyền thông, marketing và mở rộng cửa hàng trưng bày, Univi tăng cường độ phủ trên toàn quốc, đặc biệt là ở các khu kinh tế trọng điểm. Nâng cao năng lực sản xuất bằng việc mở rộng quy mô và đầu tư vào công nghệ cao, giúp tăng năng suất và chất lượng sản phẩm.
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                Mục tiêu lớn của Univi là duy trì quan hệ tốt với <span className="font-bold" style={{color: '#105d97'}}>hàng trăm nghìn khách hàng</span> và đối tác trên cả nước. Chiến lược 2025-2028 nhấn mạnh việc trở thành lựa chọn hàng đầu trong mảng Đồng Phục Thể Thao và xây dựng thương hiệu mạnh mẽ trong ngành sản xuất thời trang tại Việt Nam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Strategic Vision - Clean Layout */}
            <div className="max-w-7xl mx-auto mb-4">
                <div className="bg-white rounded-3xl p-8 md:p-12">
                    {/* Center Title */}
                    <div className="text-center mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#105d97'}}>
                            III. Tầm nhìn chiến lược
                        </h3>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
                    </div>

                        {/* Strategic Goals Pyramid Layout */}
                        <div className="space-y-6 max-w-5xl mx-auto">
                            {/* Top Row - 2 items centered */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                {/* Goal 01 */}
                                <div className="group relative">
                                    <div className="rounded-xl p-3 shadow-md border transition-all duration-300 hover:shadow-lg hover:scale-105" 
                                         style={{
                                             background: 'linear-gradient(to bottom right, #f0fdf4, #ecfdf5)', 
                                             borderColor: '#bbf7d0'
                                         }}>
                                        <div className="text-center">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-2" style={{backgroundColor: '#4ade80', boxShadow: '0 3px 10px rgba(74, 222, 128, 0.3)'}}>
                                                01
                                            </div>
                                            <h4 className="font-bold text-sm mb-1" style={{color: '#065f46'}}>Biểu tượng sáng tạo hàng đầu</h4>
                                            <p className="font-medium text-xs mb-2" style={{color: '#15803d'}}>trong lĩnh vực Đồng Phục</p>
                                            <div className="rounded-full p-1 inline-block" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                                <Lightbulb className="w-4 h-4" style={{color: '#16a34a'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Goal 02 */}
                                <div className="group relative">
                                    <div className="rounded-xl p-3 shadow-md border transition-all duration-300 hover:shadow-lg hover:scale-105" 
                                         style={{
                                             background: 'linear-gradient(to bottom right, #faf5ff, #f3e8ff)', 
                                             borderColor: '#e9d5ff'
                                         }}>
                                        <div className="text-center">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-2" style={{backgroundColor: '#8b5cf6', boxShadow: '0 3px 10px rgba(139, 92, 246, 0.3)'}}>
                                                02
                                            </div>
                                            <h4 className="font-bold text-sm mb-1" style={{color: '#581c87'}}>Số 1 Đồng Phục Thể Thao</h4>
                                            <p className="font-medium text-xs mb-2" style={{color: '#7c3aed'}}>tại Việt Nam</p>
                                            <div className="rounded-full p-1 inline-block" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                                <Target className="w-4 h-4" style={{color: '#8b5cf6'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row - 3 items */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Goal 03 */}
                                <div className="group relative">
                                    <div className="rounded-xl p-3 shadow-md border transition-all duration-300 hover:shadow-lg hover:scale-105" 
                                         style={{
                                             background: 'linear-gradient(to bottom right, #fffbeb, #fef3c7)', 
                                             borderColor: '#fde68a'
                                         }}>
                                        <div className="text-center">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-2" style={{backgroundColor: '#f59e0b', boxShadow: '0 3px 10px rgba(245, 158, 11, 0.3)'}}>
                                                03
                                            </div>
                                            <h4 className="font-bold text-sm mb-1" style={{color: '#92400e'}}>Kiến tạo thương hiệu</h4>
                                            <p className="font-medium text-xs mb-2" style={{color: '#b45309'}}>qua Đồng Phục</p>
                                            <div className="rounded-full p-1 inline-block" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                                <Network className="w-4 h-4" style={{color: '#d97706'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Goal 04 */}
                                <div className="group relative">
                                    <div className="rounded-xl p-3 shadow-md border transition-all duration-300 hover:shadow-lg hover:scale-105" 
                                         style={{
                                             background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)', 
                                             borderColor: '#a5f3fc'
                                         }}>
                                        <div className="text-center">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-2" style={{backgroundColor: '#06b6d4', boxShadow: '0 3px 10px rgba(6, 182, 212, 0.3)'}}>
                                                04
                                            </div>
                                            <h4 className="font-bold text-sm mb-1" style={{color: '#0e7490'}}>Đồng Phục Toàn Diện</h4>
                                            <p className="font-medium text-xs mb-2" style={{color: '#0891b2'}}>cho doanh nghiệp</p>
                                            <div className="rounded-full p-1 inline-block" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                                <CheckCircle className="w-4 h-4" style={{color: '#0891b2'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Goal 05 */}
                                <div className="group relative">
                                    <div className="rounded-xl p-3 shadow-md border transition-all duration-300 hover:shadow-lg hover:scale-105" 
                                         style={{
                                             background: 'linear-gradient(to bottom right, #fef2f2, #fecaca)', 
                                             borderColor: '#fca5a5'
                                         }}>
                                        <div className="text-center">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-2" style={{backgroundColor: '#ef4444', boxShadow: '0 3px 10px rgba(239, 68, 68, 0.3)'}}>
                                                05
                                            </div>
                                            <h4 className="font-bold text-sm mb-1" style={{color: '#991b1b'}}>Ngôn ngữ thương hiệu</h4>
                                            <p className="font-medium text-xs mb-2" style={{color: '#dc2626'}}>mạnh mẽ nhất</p>
                                            <div className="rounded-full p-1 inline-block" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                                <Zap className="w-4 h-4" style={{color: '#dc2626'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            
            {/* Vision & Mission Section - Simple Design */}
            <div className="max-w-6xl mx-auto mb-8">
                <div className="bg-white rounded-2xl p-3">

                    {/* Main Content */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Univi định hướng trở thành <strong style={{color: '#105d97'}}>biểu tượng sáng tạo hàng đầu</strong> trong lĩnh vực Đồng Phục tại Việt Nam, đặc biệt là mảng <strong style={{color: '#105d97'}}>Đồng Phục Thể Thao chuyên sâu</strong>. Chúng tôi không chỉ tạo ra những bộ đồng phục – chúng tôi kiến tạo hình ảnh thương hiệu thông qua sự kết hợp tinh tế giữa:
                        </p>

                        {/* Key Features List */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#105d97'}}></div>
                                    <span className="text-gray-700"><strong>Công nghệ sản xuất hiện đại</strong></span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#105d97'}}></div>
                                    <span className="text-gray-700"><strong>Thiết kế đột phá mang dấu ấn riêng</strong></span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#105d97'}}></div>
                                    <span className="text-gray-700"><strong>Giải pháp cá nhân hóa linh hoạt cho từng đội nhóm</strong></span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Với tầm nhìn dài hạn, Univi không đơn thuần là một đơn vị sản xuất đồng phục, mà là <strong style={{color: '#105d97'}}>người bạn đồng hành chiến lược</strong> – mang đến giải pháp <strong style={{color: '#105d97'}}>đồng phục toàn diện</strong> cho các doanh nghiệp, tổ chức và cộng đồng yêu thể thao.
                        </p>

                        {/* Core Belief */}
                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                                Chúng tôi tin rằng: <strong style={{color: '#105d97'}}>khi đồng phục thể hiện được bản sắc – nó trở thành ngôn ngữ mạnh mẽ nhất để truyền tải giá trị của tập thể, đội nhóm.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Production Capacity Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-8">
                <div className="bg-white ">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#105d97'}}>
                            IV. Năng lực sản xuất
                        </h3>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
                    </div>

                    {/* Production Image */}
                    <div className="mb-8">
                        <figure className="max-w-4xl mx-auto">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src="/images/gioi-thieu/nang-luc-san-xuat.jpg"
                                    alt="Phân xưởng sản xuất số 03 tại Hải Dương"
                                    width={800}
                                    height={400}
                                    layout="responsive"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <figcaption className="text-center text-gray-600 text-sm mt-3 italic">
                                Hình ảnh tại phân xưởng sản xuất số 03 tại Hải Dương
                            </figcaption>
                        </figure>
                    </div>

                    {/* Production Content */}
                    <div className="space-y-6">
                        {/* Introduction */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Xưởng may Univi là nơi kết tinh giữa <strong style={{color: '#105d97'}}>công nghệ hiện đại</strong>, <strong style={{color: '#105d97'}}>tay nghề tinh hoa</strong> cùng sự nghiên cứu chuyên sâu về chất liệu tạo nên sự khác biệt vượt trội trong ngành đồng phục tại Việt Nam.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                    Dây chuyền sản xuất tiên tiến
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Với dây chuyền sản xuất tiên tiến được tối ưu hóa từng khâu, Univi không chỉ đảm bảo hiệu suất sản xuất vượt trội mà còn duy trì sự đồng nhất và hoàn hảo trong từng chi tiết sản phẩm.
                                </p>
                            </div>
                            
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                    Đội ngũ thợ lành nghề
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Đội ngũ thợ lành nghề của chúng tôi không chỉ làm việc bằng kinh nghiệm mà còn bằng đam mê sáng tạo, luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu.
                                </p>
                            </div>
                        </div>

                        {/* Process Benefits */}
                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                Quy trình sản xuất khép kín
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                Quy trình sản xuất khép kín của Univi không chỉ giúp đối tác tiết kiệm được các chi phí trung gian mà còn giảm thiểu rủi ro, đảm bảo mỗi sản phẩm khi rời khỏi xưởng đều là một thiết kế chuyên biệt chuẩn mực, khác biệt hoàn toàn với nhiều sản phẩm thị trường.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Production Process Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-8">
                <div className="bg-white">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#105d97'}}>
                            V. Quy trình lên mẫu đồng phục
                        </h3>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
                    </div>

                    {/* Process Steps */}
                    <div className="space-y-6 mb-8">
                        {/* Step 1 */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2" style={{color: '#105d97'}}>
                                        Lên ý tưởng thiết kế áo đồng phục
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Khách hàng cung cấp yêu cầu ban đầu về phong cách, màu sắc, logo, và nội dung muốn in/thêu trên áo. Univi hỗ trợ tư vấn và đề xuất các ý tưởng thiết kế phù hợp với bộ môn thể thao hoặc văn hóa và hình ảnh doanh nghiệp khách hàng. Ghi nhận chi tiết các yêu cầu để chuyển sang giai đoạn thiết kế.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        2
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2" style={{color: '#105d97'}}>
                                        Giai đoạn thiết kế áo đồng phục
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Bộ phận thiết kế tạo mẫu phác thảo (Mockup) dựa trên ý tưởng đã thống nhất. Khách hàng xem và duyệt mẫu thiết kế trước khi chuyển sang bước tiếp theo. Mỗi chỉnh sửa thiết kế sẽ được xử lý trong vòng vài giờ tùy theo tiến độ.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2" style={{color: '#105d97'}}>
                                        Lựa chọn nguyên phụ liệu
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Univi cung cấp chất liệu vải, loại sợi và màu sắc để khách hàng lựa chọn. Tư vấn các loại vải phù hợp với nhu cầu sử dụng và đảm bảo nguyên liệu đáp ứng các tiêu chí thoáng mát, bền đẹp, dễ bảo quản. Univi cam kết tất cả vải sử dụng đều có kiểm định an toàn với da.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        4
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2" style={{color: '#105d97'}}>
                                        Sản xuất
                                    </h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start space-x-2">
                                            <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#105d97'}}></div>
                                            <p className="text-gray-700 leading-relaxed">
                                                Đối với những mẫu có sẵn, Univi có thể giao hàng ngay tới tay đối tác trong vòng <strong style={{color: '#105d97'}}>3 ngày</strong> (Đã bao gồm thời gian in Logo).
                                            </p>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#105d97'}}></div>
                                            <p className="text-gray-700 leading-relaxed">
                                                Đối với đơn hàng thiết kế, thời gian gia công mẫu sẽ trong vòng <strong style={{color: '#105d97'}}>2 ngày</strong> từ ngày chốt mẫu rập.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        5
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2" style={{color: '#105d97'}}>
                                        Kiểm tra và đánh giá
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Univi kiểm tra chất lượng sản phẩm theo tiêu chuẩn form dáng, đường may, màu sắc và logo. Khách hàng nhận áo mẫu để kiểm tra và duyệt lần cuối. Sau khi mẫu được duyệt, Univi tiến hành sản xuất toàn bộ đơn hàng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      

            {/* Services Infographic */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#105d97'}}>
                           VI. Lĩnh vực hoạt động của đồng phục Univi
                        </h3>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Sports Uniforms */}
                        <div className="group">
                        <div className="bg-white border-2 border-blue-600 rounded-xl p-4 mb-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">1</span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg uppercase" style={{color: '#105d97'}}>
                                        ĐỒNG PHỤC THỂ THAO
                                    </h4>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                                        <Shirt className="w-8 h-8 text-gray-600" />
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục HLV, PT dành cho các phòng tập
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục đội nhóm Yoga, Pilates, Aerobic,...
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục đội nhóm Pickleball, Tennis, Cầu lông, Bóng đá,...
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục giải chạy bộ
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục MMA, Boxing,...
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục bơi, cứu hộ,...
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Corporate Uniforms */}
                        <div className="group">
                            <div className="bg-white border-2 border-blue-600 rounded-xl p-4 mb-4 shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">2</span>
                                    </div>
                                    <h4 className="font-bold text-lg uppercase" style={{color: '#105d97'}}>
                                        ĐỒNG PHỤC DOANH NGHIỆP
                                    </h4>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                                        <Building2 className="w-8 h-8 text-gray-600" />
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục Áo thun, áo Polo, áo Sơ mi, Vest,...
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục công sở/ văn phòng
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục Team building,...
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục Sự kiện
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Other Uniforms */}
                        <div className="group">
                            <div className="bg-white border-2 border-blue-600 rounded-xl p-4 mb-4 shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">3</span>
                                    </div>
                                    <h4 className="font-bold text-lg uppercase" style={{color: '#105d97'}}>
                                        ĐỒNG PHỤC KHÁC
                                    </h4>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                                        <Users className="w-8 h-8 text-gray-600" />
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục trường học
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục gia đình, du lịch,...
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục họp lớp
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục ngành nghề
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#105d97'}}></span>
                                        Đồng phục bảo hộ lao động
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Sports Uniform Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="bg-white">
                    {/* Section Header */}
                    <div className="text-left mb-8">
                        <h3 className="text-xl font-bold mb-2" style={{color: '#105d97'}}>
                            1. Đồng phục thể thao
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Univi hiện đang tập trung cung cấp giải pháp <strong style={{color: '#105d97'}}>Đồng Phục Thể Thao</strong>, đặc biệt tập trung vào thị trường Việt Nam với đối tượng chủ yếu là người tập thể thao, đội nhóm tập thể thao. Nhóm khách hàng này đa phần chưa thể tiếp cận được những mẫu áo thể thao chất lượng cao giúp giảm thiểu chấn thương và tối ưu hiệu suất tập luyện.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                Đồng phục Univi không ngừng cố gắng nghiên cứu để mang đến cho nhóm đối tượng này sản phẩm mang <strong style={{color: '#105d97'}}>chất lượng Quốc tế</strong> nhưng giá lại <strong style={{color: '#105d97'}}>phù hợp với người dùng Việt Nam</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Sports Image */}
                    <div className="mt-8">
                        <figure className="max-w-4xl mx-auto">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src="/images/gioi-thieu/dong-phuc-the-thao.jpg"
                                    alt="Đồng phục thể thao chất lượng cao từ Univi"
                                    width={800}
                                    height={600}
                                    layout="responsive"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            
            {/* Corporate Uniform Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="bg-white">
                    {/* Section Header */}
                    <div className="text-left mb-8">
                        <h3 className="text-xl font-bold mb-2" style={{color: '#105d97'}}>
                            2. Đồng phục doanh nghiệp
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Với xuất phát điểm là đơn vị sản xuất <strong style={{color: '#105d97'}}>Đồng phục doanh nghiệp</strong>, Univi hiểu rằng thị trường đồng phục cho hội nhóm, cơ quan, tổ chức, và doanh nghiệp, nhu cầu chuyên nghiệp hóa ngày càng được ưu tiên. Đồng phục doanh nghiệp trở thành yếu tố quan trọng hàng đầu trong chiến lược kinh doanh của mỗi công ty tại Việt Nam.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                Univi, với phương châm luôn phát triển và đổi mới, hướng đến việc mở rộng thị phần{' '}
                                <Link href="/dong-phuc-cong-ty" legacyBehavior>
                                    <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        đồng phục doanh nghiệp
                                    </a>
                                </Link>
                                . Công ty cung cấp đa dạng sản phẩm từ <strong style={{color: '#105d97'}}>trung cấp đến cận cao cấp</strong>, đáp ứng nhu cầu của các công ty vừa và nhỏ, doanh nghiệp, và tập đoàn lớn trên khắp cả nước.
                            </p>
                        </div>
                    </div>

                    {/* Corporate Images */}
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <figure className="w-full">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src="/images/gioi-thieu/dong-phuc-doanh-nghiep.jpg"
                                        alt="Đồng phục doanh nghiệp chuyên nghiệp từ Univi"
                                        width={800}
                                        height={600}
                                        layout="responsive"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </figure>

                            <figure className="w-full">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src="/images/gioi-thieu/dong-phuc-doanh-nghiep-2.jpg"
                                        alt="Các loại đồng phục khác từ Univi"
                                        width={800}
                                        height={400}
                                        layout="responsive"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Other Uniforms Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="bg-white">
                    {/* Section Header */}
                    <div className="text-left mb-8">
                        <h3 className="text-xl font-bold mb-2" style={{color: '#105d97'}}>
                            3. Đồng phục khác
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Đồng phục khác của <strong style={{color: '#105d97'}}>UNIVI</strong> bao gồm các sản phẩm đa dạng như đồng phục sự kiện, đồng phục teambuilding, áo lớp, áo nhóm và các loại trang phục đặc thù theo yêu cầu. Với sự linh hoạt trong thiết kế và chất liệu cao cấp như <strong style={{color: '#105d97'}}>Cotton, Polyester, hay Piquecool</strong>, UNIVI mang đến những bộ đồng phục không chỉ bền đẹp, thoải mái mà còn thể hiện rõ bản sắc riêng của từng tập thể.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                Tất cả sản phẩm đều được sản xuất theo <strong style={{color: '#105d97'}}>quy trình khép kín</strong>, đảm bảo chất lượng đồng nhất và an toàn cho người mặc, đáp ứng nhu cầu đa dạng của các tổ chức, trường học và cộng đồng.
                            </p>
                        </div>
                    </div>

                    {/* Other Uniforms Image */}
                    <div className="mt-8">
                        <figure className="max-w-4xl mx-auto">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src="/images/gioi-thieu/dong-phuc-khac.jpg"
                                    alt="Các loại đồng phục khác từ Univi"
                                    width={800}
                                    height={400}
                                    layout="responsive"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            
            {/* Company Commitments Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="bg-white ">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#105d97'}}>
                            VII. Cam kết của Univi
                        </h3>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
                    </div>

                    {/* Commitments Grid */}
                    <div className="space-y-8">
                        {/* Commitment 1 */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                        Thông Tin Rõ Ràng
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Khi lựa chọn Đồng phục Univi, quý khách sẽ hoàn toàn yên tâm về sự minh bạch của chúng tôi. Tất cả thông tin liên quan như địa chỉ, số điện thoại, và tài khoản ngân hàng đều được công khai chi tiết. Nếu bạn ở gần, đừng ngần ngại ghé thăm văn phòng Đồng phục Univi để thực hiện giao dịch trực tiếp hoặc chuyên viên của Univi có thể đến tận nơi để tư vấn cho bạn bất cứ lúc nào.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Commitment 2 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        2
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                        Chất Lượng Sản Phẩm Đặt Lên Hàng Đầu
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Chất lượng áo từ Đồng Phục Univi không chỉ đáp ứng yêu cầu mà còn cam kết không tính phí nếu sản phẩm không đạt chuẩn. Đây là cam kết duy nhất của chúng tôi. Chúng tôi hiểu rằng sự tin tưởng của khách hàng phụ thuộc lớn vào chất lượng sản phẩm.
                                    </p>
                                    <div className="bg-blue-50 rounded-lg p-4 border-l-4" style={{borderColor: '#105d97'}}>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Các dòng vải cao cấp tại Univi:</strong> Polyamide, Polyester cao cấp (PET), Cotton 100%, Piquecool, Lacoste USA,…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quality Image */}
                        <div className="my-8">
                            <figure className="max-w-4xl mx-auto">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src="/images/gioi-thieu/chat-luong-san-pham.jpg"
                                        alt="Chất lượng sản phẩm đồng phục từ Univi"
                                        width={800}
                                        height={600}
                                        layout="responsive"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </figure>
                        </div>

                        {/* Commitment 3 */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                        An toàn với sức khỏe người mặc
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Tất cả chất liệu vải mà Univi sử dụng đều được kiểm định an toàn với da.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Safety Image */}
                        <div className="my-8">
                            <figure className="max-w-4xl mx-auto">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src="/images/gioi-thieu/chat-luong-san-pham-2.jpg"
                                        alt="Chất liệu vải an toàn với sức khỏe từ Univi"
                                        width={800}
                                        height={400}
                                        layout="responsive"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </figure>
                        </div>

                        {/* Commitment 4 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        4
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                        Giá Cả Hợp Lí Nhất
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Tất cả sản phẩm của Univi đều có mức giá hợp lý, phù hợp với mọi đối tượng khách hàng. Cam kết của chúng tôi là chất lượng luôn đi kèm với mức giá hấp dẫn chỉ từ <strong style={{color: '#105d97'}}>99.000 đ</strong> cho các sản phẩm trung cao cấp, tạo ra giá trị thực sự cho khách hàng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Commitment 5 */}
                        <div className="bg-blue-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#105d97'}}>
                                        5
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-3" style={{color: '#105d97'}}>
                                        Chế Độ Bảo Hành và Hậu Mãi
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Chúng tôi không chỉ dừng lại ở chất lượng sản phẩm, mà còn cam kết cung cấp chế độ bảo hành và hậu mãi tốt nhất. Univi bảo hành chất lượng áo, logo,…, đội ngũ chăm sóc khách hàng chuyên nghiệp sẵn sàng hỗ trợ mọi vấn đề và giải đáp mọi thắc mắc của quý khách hàng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Warranty Image */}
                        <div className="my-8">
                            <figure className="max-w-4xl mx-auto">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src="/images/gioi-thieu/che-do-hau-mai.jpg"
                                        alt="Chế độ bảo hành và hậu mãi từ Univi"
                                        width={800}
                                        height={400}
                                        layout="responsive"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Community Section - Enhanced Design */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="bg-white ">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#105d97'}}>
                            VIII. Univi vì cộng đồng
                        </h3>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4" style={{borderColor: '#105d97'}}>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#105d97'}}>
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        <strong style={{color: '#105d97'}}>Quỹ UNIVI vì cộng đồng</strong> được sáng lập ngày <strong style={{color: '#105d97'}}>9/12/2023</strong> bởi thương hiệu Đồng phục UNIVI. Mục đích của quỹ nhằm hỗ trợ và giúp đỡ trẻ mồ côi, gia đình có hoàn cảnh khó khăn trên khắp mọi miền của Tổ Quốc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Community Image */}
                    <div className="mt-8">
                        <figure className="max-w-4xl mx-auto">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src="/images/gioi-thieu/univi-vi-cong-dong.jpg"
                                    alt="Quỹ UNIVI vì cộng đồng"
                                    width={800}
                                    height={400}
                                    layout="responsive"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </article>
    );
}