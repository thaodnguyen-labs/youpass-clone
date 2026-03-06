import Link from "next/link";

const skills = [
  {
    id: "speaking",
    label: "Speaking",
    description: "Luyện tập IELTS Speaking AI với phản hồi chi tiết về phát âm, ngữ pháp và từ vựng.",
    href: "/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#FFF0F0" />
        <path d="M32 20a6 6 0 016 6v8a6 6 0 01-12 0v-8a6 6 0 016-6z" fill="#e54d4c" />
        <path d="M20 34a12 12 0 0024 0" stroke="#e54d4c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="32" y1="46" x2="32" y2="52" stroke="#e54d4c" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="26" y1="52" x2="38" y2="52" stroke="#e54d4c" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "writing",
    label: "Writing",
    description: "Luyện viết IELTS Task 1 và Task 2 với đề thi đa dạng và hướng dẫn chi tiết bằng tiếng Việt.",
    href: "/luyen-thi/ielts/writing/task-1?quiz_type=quiz&status=unfinished",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#FFF0F0" />
        <rect x="18" y="16" width="28" height="32" rx="3" fill="white" stroke="#e54d4c" strokeWidth="2" />
        <line x1="23" y1="24" x2="41" y2="24" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="30" x2="41" y2="30" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="36" x2="35" y2="36" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "reading",
    label: "Reading",
    description: "Luyện đọc với 400+ bài đọc từ đa dạng nguồn uy tín. Có đáp án và giải thích chi tiết.",
    href: "/luyen-thi/ielts/reading?quiz_type=quiz",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#FFF0F0" />
        <path d="M16 20h14v24H16z" fill="white" stroke="#e54d4c" strokeWidth="2" />
        <path d="M34 20h14v24H34z" fill="white" stroke="#e54d4c" strokeWidth="2" />
        <line x1="19" y1="26" x2="27" y2="26" stroke="#e54d4c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="30" x2="27" y2="30" stroke="#e54d4c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="34" x2="27" y2="34" stroke="#e54d4c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="37" y1="26" x2="45" y2="26" stroke="#e54d4c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="37" y1="30" x2="45" y2="30" stroke="#e54d4c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="37" y1="34" x2="45" y2="34" stroke="#e54d4c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "listening",
    label: "Listening",
    description: "Luyện nghe với 400+ bài nghe từ đa dạng nguồn học liệu. Có đáp án và từ vựng.",
    href: "/luyen-thi/ielts/listening?quiz_type=quiz",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#FFF0F0" />
        <path d="M22 30a10 10 0 0120 0v4a10 10 0 01-20 0v-4z" stroke="#e54d4c" strokeWidth="2" fill="none" />
        <circle cx="22" cy="32" r="3" fill="#e54d4c" />
        <circle cx="42" cy="32" r="3" fill="#e54d4c" />
        <path d="M22 30V24a10 10 0 0120 0v6" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="32" y1="44" x2="32" y2="50" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="50" x2="37" y2="50" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const features = [
  { icon: "🆓", title: "Hoàn toàn miễn phí", desc: "Tất cả tính năng luyện tập đều miễn phí — không có phí ẩn, không cần đăng ký thẻ tín dụng." },
  { icon: "📚", title: "Nguồn đề đa dạng", desc: "400+ bài đọc và 400+ bài nghe từ các nguồn học liệu uy tín, cập nhật liên tục." },
  { icon: "🤖", title: "Speaking AI", desc: "Luyện nói với AI, nhận phản hồi tức thì về phát âm, ngữ pháp và từ vựng." },
  { icon: "📖", title: "Giải thích chi tiết", desc: "Mỗi câu hỏi có đáp án và giải thích chi tiết bằng tiếng Việt." },
  { icon: "🔤", title: "Tra từ vựng tức thì", desc: "Tra cứu từ vựng ngay trong bài đọc và lưu vào sổ từ vựng cá nhân." },
  { icon: "📱", title: "Tương thích mọi thiết bị", desc: "Luyện tập trên điện thoại, máy tính bảng hay máy tính — mọi lúc, mọi nơi." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-50 border border-red-200 text-[#e54d4c] text-xs font-semibold px-4 py-1 rounded-full mb-6">
            HOÀN TOÀN MIỄN PHÍ
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Nền tảng tự luyện{" "}
            <span className="text-[#e54d4c]">IELTS Reading, Listening, Writing</span>{" "}
            chất lượng cao, hoàn toàn MIỄN PHÍ
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Xây dựng bởi Trung tâm IELTS 1984 — nền tảng giúp hàng nghìn học viên tự luyện IELTS hiệu quả mà không tốn chi phí.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/luyen-thi/ielts/reading?quiz_type=quiz"
              className="bg-[#e54d4c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#cc3f3e] transition-colors shadow-md"
            >
              Bắt đầu luyện tập
            </Link>
            <Link
              href="/bai-viet/kien-thuc-nen-tang-ielts/cach-tu-hoc-mien-phi-voi-youpass"
              className="border border-[#e54d4c] text-[#e54d4c] px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              Cách luyện tập FREE
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-100" />

      {/* Skill Selection Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
            Lựa chọn kỹ năng để luyện tập
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12">
            Chọn kỹ năng bạn muốn cải thiện và bắt đầu luyện tập ngay hôm nay
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Link
                key={skill.id}
                href={skill.href}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#e54d4c] transition-all duration-200 flex flex-col items-center text-center"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.label}</h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{skill.description}</p>
                <span className="mt-auto bg-[#e54d4c] text-white px-5 py-2 rounded-full text-sm font-semibold group-hover:bg-[#cc3f3e] transition-colors">
                  Luyện tập ngay
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Tại sao chọn YouPass?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-2">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="font-bold text-gray-800">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-14 px-4 bg-[#e54d4c]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bắt đầu luyện tập IELTS miễn phí ngay hôm nay!
          </h2>
          <p className="text-red-100 mb-8">
            Tham gia cùng hàng nghìn học viên đang tự luyện IELTS hiệu quả với YouPass.
          </p>
          <Link
            href="/luyen-thi/ielts/reading?quiz_type=quiz"
            className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors shadow-md"
          >
            Luyện tập ngay — MIỄN PHÍ
          </Link>
        </div>
      </section>
    </div>
  );
}
