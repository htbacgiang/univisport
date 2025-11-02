import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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
import styles from '../../../styles/RunningUniviPage.module.css';

export default function RunningUniviPage() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video vào viewport - tự động phát
            video.play().catch(err => console.log('Video play error:', err));
          } else {
            // Video ra khỏi viewport - dừng lại
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Video phải hiển thị ít nhất 50% mới tự động phát
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className={`${styles.heroGradient} text-white rounded-lg p-8 mb-12`}>
                <div>
                    <h1 className="text-xl  font-bold mb-4 leading-tight">
                        Đồng Phục Chạy Bộ Chuyên Nghiệp 
                        <span className="text-yellow-300"> Nâng Tầm Hiệu Suất Tập Luyện</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200  leading-relaxed">
                        Khám phá bộ sưu tập đồng phục chạy bộ cao cấp từ Univi Sport - Giải pháp toàn diện cho runner và các câu lạc bộ chạy bộ chuyên nghiệp
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
                        Tại Sao Lựa Chọn Trang Phục Chạy Bộ Chuyên Nghiệp Là Điều Cần Thiết?
                    </h2>
                </div>
                
                <div className="space-y-4">
                    <p className={`${styles.bodyText}`}>
                        Chạy bộ không chỉ là một môn thể thao rèn luyện sức bền, mà còn là hành trình khám phá giới hạn bản thân, tận hưởng niềm vui vận động và hòa mình vào cộng đồng. Dù bạn là một vận động viên chuyên nghiệp, một người chạy bộ vì đam mê hay mới bắt đầu làm quen với những kilomet đầu tiên, việc lựa chọn trang phục phù hợp chính là bước đệm quan trọng để mỗi sải chân thêm tự tin và hiệu quả.
                    </p>
                    <p className={`${styles.bodyText}`}>
                        Khác biệt hoàn toàn với quần áo thông thường, <span className={`${styles.highlightText}`}>đồng phục chạy bộ chuyên dụng</span> được thiết kế và sản xuất với những tính năng ưu việt. Đầu tư vào đồng phục chạy bộ chất lượng mang lại nhiều lợi ích không ngờ:
                    </p>
                </div>

                <div className="grid gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Thoáng khí tối đa & Nhanh khô vượt trội</h3>
                                <p className={`${styles.bodyText}`}>Công nghệ vải tiên tiến giúp mồ hôi thoát hơi nhanh chóng, giữ cho cơ thể bạn luôn khô ráo, thoáng mát, điều hòa thân nhiệt hiệu quả, tránh cảm giác nặng nề, ẩm ướt khó chịu, đặc biệt trong những buổi chạy dài hoặc dưới thời tiết nóng bức.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Heart className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Trọng lượng siêu nhẹ</h3>
                                <p className={`${styles.bodyText}`}>Mỗi gram trên trang phục đều được tính toán để giảm thiểu tối đa sức nặng không cần thiết, giúp bạn di chuyển thanh thoát, tiết kiệm năng lượng và cảm thấy nhẹ nhàng hơn trên từng cây số.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Giảm ma sát, chống phồng rộp</h3>
                                <p className={`${styles.bodyText}`}>Với thiết kế đường may phẳng, tinh tế cùng chất liệu mềm mại, co giãn, đồng phục chạy bộ chuyên dụng giúp bảo vệ làn da nhạy cảm của bạn khỏi nguy cơ bị phồng rộp, trầy xước do ma sát, một vấn đề thường gặp khi chạy các cự ly dài.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>Hỗ trợ vận động tự do</h3>
                                <p className={`${styles.bodyText}`}>Sự co giãn tuyệt vời của vải và thiết kế descent ergonomic cho phép bạn thực hiện mọi chuyển động một cách tự nhiên nhất, từ những sải chân dài đến những cú nước rút mạnh mẽ mà không hề cảm thấy gò bó hay cản trở.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#105d97] rounded-full flex items-center justify-center">
                                <Trophy className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className={`${styles.sectionTitle}`}>An toàn hơn trên mọi nẻo đường</h3>
                                <p className={`${styles.bodyText}`}>Nhiều loại trang phục chạy bộ tích hợp khả năng chống tia UV, bảo vệ làn da bạn khỏi tác hại của ánh nắng mặt trời. Bên cạnh đó, các chi tiết phản quang giúp tăng khả năng được nhận diện khi bạn chạy trong điều kiện thiếu sáng, đảm bảo an toàn tối đa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="my-8 text-center">
                <figure className="inline-block rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                        <video
                            ref={videoRef}
                            className="w-full h-auto rounded-lg shadow-lg"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src="/dong-phuc-chay-bo.mp4" type="video/mp4" />
                            Trình duyệt của bạn không hỗ trợ video.
                        </video>
                        
                        {/* Nút tắt/bật âm thanh */}
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 transition-all duration-200 z-10"
                            aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                        >
                            {isMuted ? (
                                // Icon tắt âm
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                </svg>
                            ) : (
                                // Icon bật âm
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <figcaption className="text-center text-base mb-2 text-gray-600 mt-2">
                        Vận động viên chạy bộ trong đồng phục Univi bứt phá tốc độ, chinh phục mọi cung đường
                    </figcaption>
                </figure>
            </div>
            <article className="bg-white rounded-lg p-6 mb-4 shadow-sm border-l-4 border-[#105d97]">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">2</span>
                    </div>
                    <h2 className={`${styles.articleTitle}`}>
                        Univi Sport – Giải Pháp Đồng Phục Chạy Bộ Tối Ưu
                    </h2>
                </div>
                
                <div className="space-y-4 mb-6">
                    <p className={`${styles.bodyText}`}>
                        Thấu hiểu những đòi hỏi khắt khe của môn chạy bộ, <span className={`${styles.highlightText}`}>Đồng Phục Univi</span> (thuộc Univi Sport) tự hào mang đến các giải pháp đồng phục chạy bộ toàn diện, chất lượng cao, đáp ứng mọi yêu cầu của cá nhân runner, đội ngũ huấn luyện viên và các câu lạc bộ chạy bộ chuyên nghiệp. Với hơn <span className={`${styles.highlightText}`}>8 năm kinh nghiệm</span> trong lĩnh vực thiết kế và sản xuất đồng phục thể thao cao cấp, Univi đã khẳng định vị thế là đối tác tin cậy của hàng trăm doanh nghiệp, trong đó có những tên tuổi lớn trong ngành thể thao và chăm sóc sức khỏe.
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
                                <span className={`${styles.highlightText}`}>Giải pháp chuyên dụng cho từng bộ môn:</span>
                                <span className={`${styles.bodyText} ml-2`}>Đặc biệt dành cho chạy bộ, Univi cung cấp giải pháp đồng phục thông minh với các dòng vải kỹ thuật cao như <span className={`${styles.highlightText}`}>UNIVI-DRY PRO</span> và <span className={`${styles.highlightText}`}>UNIVI - BLENED</span>, được thiết kế để tối ưu hóa hiệu suất, mang lại sự thoải mái và bảo vệ tối đa cho người chạy.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                        src="/images/chay-bo/chay-bo-1.webp"
                        alt="Đường may phẳng (Flatlock Seams) trên đồng phục chạy bộ Univi chống ma sát, bảo vệ da khi vận động"
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
                        Khám Phá Đặc Điểm Vượt Trội Của Đồng Phục Chạy Bộ Univi
                    </h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Mỗi sản phẩm đồng phục chạy bộ từ Univi là kết tinh của quá trình nghiên cứu kỹ lưỡng và sự đầu tư nghiêm túc vào chất lượng.
                </p>
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        3.1 Chất liệu vải chuyên dụng – Chìa khóa cho hiệu suất tối đa
                    </h3>
                    <p className="text-slate-600 mb-6">
                        Univi <span className="text-[#105d97] font-semibold">&quot;đam mê nghiên cứu chuyên sâu về chất liệu... tìm kiếm được những chất liệu vải tốt nhất, phù hợp nhất với từng bộ môn tập luyện&quot;</span>.
                    </p>
                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                UNIVI-DRY PRO
                            </h4>
                            <p className="text-slate-600">Với đặc tính CẢN NẮNG – CẢN GIÓ – CẢN BỤI – NHANH KHÔ, dòng vải này cực kỳ linh hoạt, phù hợp cho các bài tập chạy bộ cường độ cao, các buổi tập ngoài trời hoặc những ai ưa thích sự khô thoáng tức thì.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                UNIVI - BLENDED
                            </h4>
                            <p className="text-slate-600">Sự kết hợp thông minh giữa các loại sợi cao cấp như Polyester, Polyamide và Elastane (Spandex) tạo nên một dòng vải đa năng với nhiều ưu điểm vượt trội như nhanh khô, mềm mịn, mát, nhẹ, chống tia UV cao hơn, chống nhăn và rất bền màu.</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-[#105d97] text-lg mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Polyester Cao Cấp & Vải Lưới
                            </h4>
                            <p className="text-slate-600">Univi cũng sử dụng các loại Polyester cao cấp với đặc tính nhẹ, bền, kết hợp cùng các mảng vải lưới (mesh) được bố trí một cách khoa học ở những vùng cơ thể cần thoát nhiệt nhanh, giúp tăng cường tối đa độ thoáng khí và làm mát.</p>
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
                                <span className="font-semibold text-[#105d97]">Form dáng Ergonomic – Theo sát từng chuyển động:</span>
                                <span className="text-slate-600 ml-2">Trang phục chạy bộ Univi được nghiên cứu và cắt may theo form dáng ergonomic, ôm vừa vặn theo hình dáng cơ thể nhưng không gây bó sát khó chịu. Thiết kế này hỗ trợ tối đa các chuyển động tự nhiên của cơ thể khi chạy.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <Shield className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Đường may phẳng (Flatlock seams):</span>
                                <span className="text-slate-600 ml-2">Univi ứng dụng công nghệ may phẳng tiên tiến, loại bỏ hoàn toàn các đường gân nổi bên trong áo quần, giúp giảm thiểu tối đa nguy cơ ma sát. Univi chú trọng &quot;may thật kỹ lưỡng cả hai mặt để sản phẩm không chỉ đẹp mà còn bền&quot;.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <Star className="w-5 h-5 text-[#105d97] mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-[#105d97]">Các chi tiết thông hơi chiến lược:</span>
                                <span className="text-slate-600 ml-2">Univi khéo léo bố trí các mảng vải lưới hoặc các lỗ thông hơi được cắt laser ở những vùng cơ thể thường đổ nhiều mồ hôi như lưng, dưới cánh tay, hai bên sườn, giúp tăng cường lưu thông không khí và làm mát cơ thể một cách hiệu quả.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-12 text-center">
                    <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                            src="/images/chay-bo/cong-nghe-univi.jpg"
                            alt="Đồng phục chạy bộ Univi công nghệ UNIVI-DRY PRO siêu nhẹ, thoáng khí, nhanh khô"
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
                        3.3 Giải pháp tùy chỉnh theo yêu cầu – Khẳng định dấu ấn thương hiệu
                    </h3>
                    <p className="text-slate-600 mb-4">
                        <span className={`${styles.textGradient} font-bold`}>Univi mang đến</span> dịch vụ thiết kế và tùy chỉnh đồng phục chạy bộ theo yêu cầu riêng:
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
                                Cho đội nhóm, Câu lạc bộ
                            </h4>
                            <p className="text-slate-600">Đồng bộ hóa trang phục theo màu sắc nhận diện thương hiệu, in/thêu logo, slogan, tạo nên hình ảnh chuyên nghiệp, thống nhất và nâng cao giá trị thương hiệu.</p>
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
                        Lợi Ích Vượt Trội Khi Chọn Đồng Phục Chạy Bộ Chính Hãng Univi
                    </h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    <span className={`${styles.textGradient} font-bold`}>Đầu tư vào đồng phục chạy bộ Univi</span> là đầu tư cho sức khỏe, hiệu suất và hình ảnh của bạn:
                </p>

                <div className="grid gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Nâng cao thành tích và hiệu suất</h3>
                                <p className="text-slate-600">Khi cơ thể luôn khô thoáng, nhẹ nhàng, không bị phân tâm bởi sự khó chịu hay ma sát, bạn có thể duy trì tốc độ, sức bền và sự tập trung tốt hơn.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Bảo vệ cơ thể toàn diện</h3>
                                <p className="text-slate-600">Trang phục Univi giúp chống nắng hiệu quả, giảm thiểu nguy cơ phồng rộp da do ma sát, đồng thời hỗ trợ điều hòa thân nhiệt.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Tự tin chinh phục mọi mục tiêu</h3>
                                <p className="text-slate-600">Một bộ trang phục chạy bộ đẹp mắt, chuyên nghiệp và vừa vặn sẽ tiếp thêm động lực và sự tự tin để bạn vượt qua mọi giới hạn của bản thân.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Độ bền cao cho mọi hành trình</h3>
                                <p className="text-slate-600">Với chất liệu cao cấp và kỹ thuật may tiên tiến, đồng phục chạy bộ Univi có độ bền vượt trội, sẵn sàng đồng hành cùng bạn qua nhiều mùa giải.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-[#105d97] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#105d97] text-lg mb-2">Khẳng định dấu ấn cá nhân và tinh thần đội nhóm</h3>
                                <p className="text-slate-600">Với các tùy chọn thiết kế riêng, bạn và câu lạc bộ của mình sẽ trở nên nổi bật, chuyên nghiệp và gắn kết hơn trên mọi đường đua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">5</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Khám Phá Các Dòng Sản Phẩm Đồng Phục Chạy Bộ Đa Dạng Tại Univi
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Univi Sport</span> cung cấp một danh mục sản phẩm đồng phục chạy bộ phong phú, đáp ứng mọi nhu cầu và sở thích:
                </p>
                <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    5.1 Đồng phục chạy bộ dành cho Nam:
                </h3>
                <ul className="grid gap-4 mb-4">
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Áo Singlet/Tank Top:</strong>
                        <p>Thiết kế sát nách hoặc ba lỗ, sử dụng chất liệu siêu nhẹ, thoáng khí tối đa, là lựa chọn lý tưởng cho những ngày hè oi ả hoặc khi bạn cần đạt hiệu suất cao nhất trong thi đấu.</p>
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Áo T-shirt (ngắn tay, dài tay):</strong>
                        <p>Sử dụng các chất liệu kỹ thuật như UNIVI-DRY PRO, UNIVI - BLENED, thấm hút mồ hôi tốt, khô nhanh. Áo dài tay có thể giúp chống nắng toàn diện hơn.</p>
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Quần Short:</strong>
                        <p>Đa dạng kiểu dáng như quần short 2 lớp (lớp lót bên trong co giãn, lớp ngoài siêu nhẹ), quần short 1 lớp tối giản, quần có túi tiện lợi.</p>
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Quần Legging/Tights:</strong>
                        <p>Thiết kế ôm sát giúp hỗ trợ cơ bắp, giảm rung động, đồng thời giữ ấm hiệu quả trong điều kiện thời tiết lạnh. Chất liệu co giãn 4 chiều mang lại sự thoải mái tối đa.</p>
                    </li>
                </ul>
            </article>

            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <Image
                        src="/images/chay-bo/chay-bo-3.webp"
                        alt="Thiết kế ergonomic ôm sát cơ thể giúp vận động tự do trong đồng phục chạy bộ Univi"
                        width={800}
                        height={400}
                        layout="responsive"
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="transition-transform duration-300"
                        quality={80}
                    />
                </figure>
            </div>

            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#105d97] mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    5.2 Đồng phục chạy bộ dành cho Nữ:
                </h3>
                <ul className="grid gap-4 mb-4">
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Áo bra thể thao (Sports Bra):</strong>
                        <p>Cung cấp độ nâng đỡ đa dạng (low, medium, high impact) phù hợp với từng loại hình vận động, thiết kế thời trang.</p>
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Áo croptop chạy bộ, áo thun nữ, tank top nữ:</strong>
                        <p>Kiểu dáng trẻ trung, năng động, tôn dáng, chất liệu mềm mại, thoáng mát.</p>
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Quần legging chạy bộ:</strong>
                        <p>Đa dạng về kiểu dáng (cạp cao, cạp thường, dài, lửng, có túi), màu sắc và họa tiết, chất liệu co giãn tối đa, ôm sát tôn dáng.</p>
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border-l-4 border-[#105d97] hover:shadow-md transition-all duration-300">
                        <strong>Quần short chạy bộ nữ:</strong>
                        <p>Thiết kế 2 lớp hoặc 1 lớp, đảm bảo sự thoải mái và kín đáo khi vận động.</p>
                    </li>
                </ul>
            </article>

            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">6</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Quy Trình Đặt May Đồng Phục Chạy Bộ Univi Chuyên Nghiệp – Nhanh Chóng – Dễ Dàng
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Univi cam kết</span> mang đến trải nghiệm đặt hàng thuận tiện và chuyên nghiệp nhất:
                </p>
                <ol className="grid gap-4 mb-8">
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Tư Vấn Chuyên Sâu:</strong> Đội ngũ tư vấn viên giàu kinh nghiệm của Univi sẽ lắng nghe kỹ lưỡng nhu cầu của bạn về số lượng, đối tượng sử dụng, mục đích, ý tưởng thiết kế, ngân sách và tư vấn giải pháp tối ưu nhất về chất liệu, kiểu dáng.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Thiết kế Miễn Phí & Chỉnh Sửa Linh Hoạt:</strong> Dựa trên yêu cầu, đội ngũ thiết kế tài năng của Univi sẽ hiện thực hóa ý tưởng của bạn qua các mẫu thiết kế demo. Bạn có thể yêu cầu chỉnh sửa cho đến khi hoàn toàn hài lòng.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>May Mẫu (Nếu cần thiết) & Báo Giá Chi Tiết:</strong> Đối với các đơn hàng lớn hoặc yêu cầu đặc biệt, Univi hỗ trợ may mẫu để bạn trực tiếp kiểm tra chất lượng sản phẩm. Sau đó, chúng tôi sẽ gửi báo giá chi tiết và minh bạch.
                    </li>
                    <li className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-[#105d97] hover:shadow-xl transition-all duration-300 relative">
                        <strong>Ký Hợp Đồng & Tiến Hành Sản Xuất:</strong> Sau khi thống nhất mọi điều khoản, hai bên sẽ ký hợp đồng để đảm bảo quyền lợi. Đơn hàng của bạn sẽ được đưa vào sản xuất tại xưởng may hiện đại của Univi.
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

            <article className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg border-t-4 border-[#105d97] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#105d97] rounded-full flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                        <span className="text-white font-bold text-lg leading-none">7</span>
                    </div>
                    <h2 className="text-xl md:text-xl font-bold text-slate-800">
                        Univi Sport – Đối Tác Đồng Hành Nâng Tầm Thương Hiệu Câu Lạc Bộ Chạy Bộ & Trải Nghiệm Runner
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Univi</span> không chỉ đơn thuần là nhà cung cấp đồng phục, chúng tôi mong muốn trở thành đối tác chiến lược, mang đến <span className="text-[#105d97] font-semibold">&quot;GIẢI PHÁP SMART SPORT UNIFORM CHO CÁC CÂU LẠC BỘ CHẠY BỘ&quot;</span>. Chúng tôi giúp các câu lạc bộ chạy bộ nâng cao hình ảnh thương hiệu, tạo sự khác biệt và mang đến trải nghiệm tốt nhất cho hội viên thông qua những bộ đồng phục chất lượng, được thiết kế riêng.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Với kinh nghiệm hợp tác cùng các đơn vị thể thao uy tín, Univi hiểu rõ những thách thức và cơ hội trong ngành. Chúng tôi cam kết mang lại những sản phẩm đồng phục chạy bộ không chỉ đẹp về mẫu mã, vượt trội về chất lượng mà còn có mức giá hợp lý, <span className={`${styles.textGradient} font-bold`}>&quot;chỉ từ 99.000 đ cho các sản phẩm trung cao cấp&quot;</span>, tạo ra giá trị thực sự cho mọi khách hàng.
                </p>
            </article>
            <div className="my-12 text-center">
                <figure className="inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#105d97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                        src="/images/chay-bo/dong-phuc-chay-bo.webp"
                        alt="Áo polo đồng phục Univi năng động, phù hợp cho team building và sự kiện ngoài trời"
                        width={800}
                        height={400}
                        layout="responsive"
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="transition-transform duration-300"
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
                        Bứt Tốc Giới Hạn, Chinh Phục Cung Đường Cùng Đồng Phục Chạy Bộ Univi Ngay Hôm Nay!
                    </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    <span className={`${styles.textGradient} font-bold`}>Tại Univi Sport</span>, chúng tôi không chỉ tạo ra những bộ đồng phục chạy bộ, chúng tôi kiến tạo những người bạn đồng hành đáng tin cậy trên mỗi kilomet bạn chinh phục. Chúng tôi tin rằng, một bộ trang phục tốt sẽ góp phần không nhỏ vào thành công và niềm vui của mỗi runner.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Với các công nghệ vải tiên tiến và độc quyền như <span className="text-[#105d97] font-semibold">UNIVI-DRY PRO</span> và <span className="text-[#105d97] font-semibold">UNIVI - BLENED</span>, Univi cam kết mang lại trải nghiệm chạy bộ vượt trội, giúp bạn luôn cảm thấy khô thoáng, nhẹ nhàng, được bảo vệ tối ưu và tự tin thể hiện hết mình. Kinh nghiệm cung cấp đồng phục cho nhiều sự kiện thể thao và các câu lạc bộ chạy bộ uy tín trên cả nước là minh chứng rõ ràng nhất cho năng lực và sự tận tâm của Univi.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                    Bạn đã sẵn sàng cho những kỷ lục mới, những trải nghiệm chạy bộ tuyệt vời hơn? Đừng để trang phục giới hạn tiềm năng của bạn!
                </p>
            </article>

            {/* Contact Section */}
            <div className={`${styles.contactGradient} text-white rounded-lg p-8 mt-8`}>
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-xl font-bold mb-4">
                           Nhận Tư Vấn & Báo Giá Đồng Phục Chạy Bộ Univi Ngay Hôm Nay!
                        </h3>
                        <p className="text-base text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
                            Đã đến lúc nâng cấp trải nghiệm chạy bộ của bạn và đội ngũ với những bộ đồng phục chạy bộ đẳng cấp từ <span className="text-yellow-300 font-bold">Univi Sport</span>! Đừng để trang phục kém chất lượng cản trở hành trình chinh phục mục tiêu sức khỏe và vóc dáng của bạn.
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
                            Tự tin bứt phá mọi giới hạn cùng đồng phục chạy bộ chuyên nghiệp!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}