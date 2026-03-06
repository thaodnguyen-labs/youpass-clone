import Link from "next/link";

const features = [
  {
    icon: "📄",
    title: "400+ bài đọc đa dạng",
    desc: "Bài đọc từ đa dạng các nguồn học liệu uy tín như Cambridge, British Council, và các bài thi IELTS thực tế.",
  },
  {
    icon: "✅",
    title: "Dạng câu hỏi phổ biến",
    desc: "Thực hành với True/False/Not Given, Gap Filling, Matching Heading, Multiple Choice và nhiều dạng khác.",
  },
  {
    icon: "💡",
    title: "Giải thích chi tiết",
    desc: "Mỗi câu hỏi có đáp án và giải thích chi tiết bằng tiếng Việt giúp bạn hiểu sâu hơn.",
  },
  {
    icon: "🔤",
    title: "Tra từ vựng tức thì",
    desc: "Tra cứu từ vựng ngay trong bài đọc mà không cần rời trang, lưu vào sổ từ vựng cá nhân.",
  },
  {
    icon: "📊",
    title: "Theo dõi tiến độ",
    desc: "Xem lại lịch sử làm bài, theo dõi điểm số và cải thiện theo thời gian.",
  },
  {
    icon: "🕐",
    title: "Tính giờ như thi thật",
    desc: "Luyện tập với bộ đếm thời gian để quen với áp lực thi thật.",
  },
];

const questionTypes = [
  "True / False / Not Given",
  "Gap Filling (Điền vào chỗ trống)",
  "Matching Heading (Ghép tiêu đề)",
  "Multiple Choice (Trắc nghiệm)",
  "Short Answer (Trả lời ngắn)",
  "Matching Information",
  "Sentence Completion",
  "Summary Completion",
];

export default function ReadingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Reading</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Luyện tập <span className="text-[#e54d4c]">IELTS Reading</span>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                Luyện đọc với 400+ bài đọc từ đa dạng nguồn học liệu uy tín. Thực hành các dạng câu hỏi phổ biến trong IELTS với đáp án và giải thích chi tiết — hoàn toàn MIỄN PHÍ.
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#FFF0F0" />
                <path d="M28 36h30v48H28z" fill="white" stroke="#e54d4c" strokeWidth="3" />
                <path d="M62 36h30v48H62z" fill="white" stroke="#e54d4c" strokeWidth="3" />
                <line x1="34" y1="48" x2="52" y2="48" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="34" y1="56" x2="52" y2="56" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="34" y1="64" x2="52" y2="64" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="34" y1="72" x2="44" y2="72" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="68" y1="48" x2="86" y2="48" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="68" y1="56" x2="86" y2="56" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="68" y1="64" x2="86" y2="64" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
                <line x1="68" y1="72" x2="78" y2="72" stroke="#e54d4c" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/luyen-thi/ielts/reading?quiz_type=quiz"
              className="inline-block bg-[#e54d4c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#cc3f3e] transition-colors shadow-md"
            >
              Luyện tập ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
            Tính năng nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question types */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
            Các dạng câu hỏi được thực hành
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questionTypes.map((q) => (
              <div key={q} className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-[#e54d4c] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Sẵn sàng luyện tập?</h2>
        <p className="text-red-100 mb-6">Chọn bài đọc và bắt đầu ngay — hoàn toàn miễn phí!</p>
        <Link
          href="/luyen-thi/ielts/reading?quiz_type=quiz"
          className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
        >
          Bắt đầu ngay
        </Link>
      </section>
    </div>
  );
}
