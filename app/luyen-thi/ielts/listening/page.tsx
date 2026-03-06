import Link from "next/link";

const features = [
  {
    icon: "🎧",
    title: "400+ bài nghe đa dạng",
    desc: "Bài nghe từ đa dạng các nguồn học liệu uy tín, bao gồm Cambridge IELTS và bài thi thực tế.",
  },
  {
    icon: "✅",
    title: "Dạng câu hỏi phổ biến",
    desc: "Thực hành Multiple Choice, Form Completion, Map Labeling, Note Completion và nhiều dạng khác.",
  },
  {
    icon: "💡",
    title: "Đáp án và giải thích",
    desc: "Mỗi câu hỏi có đáp án và giải thích chi tiết bằng tiếng Việt.",
  },
  {
    icon: "🔤",
    title: "Tra từ vựng tức thì",
    desc: "Tra cứu từ vựng ngay trong bài nghe, lưu vào sổ từ vựng cá nhân để ôn tập sau.",
  },
  {
    icon: "⚡",
    title: "Điều chỉnh tốc độ",
    desc: "Điều chỉnh tốc độ phát âm thanh để phù hợp với trình độ của bạn.",
  },
  {
    icon: "📊",
    title: "Theo dõi tiến độ",
    desc: "Xem lại lịch sử làm bài và theo dõi sự tiến bộ của bạn theo thời gian.",
  },
];

const questionTypes = [
  "Multiple Choice (Trắc nghiệm)",
  "Form Completion (Điền vào biểu mẫu)",
  "Map Labeling (Gắn nhãn bản đồ)",
  "Note Completion (Hoàn thành ghi chú)",
  "Table Completion (Hoàn thành bảng)",
  "Sentence Completion",
  "Short Answer Questions",
  "Summary Completion",
];

export default function ListeningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Listening</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Luyện tập <span className="text-[#e54d4c]">IELTS Listening</span>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                Luyện nghe với 400+ bài từ đa dạng nguồn học liệu uy tín. Thực hành các dạng câu hỏi phổ biến trong IELTS Listening với đáp án và giải thích chi tiết — hoàn toàn MIỄN PHÍ.
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#FFF0F0" />
                <path d="M38 56a22 22 0 0144 0v8a22 22 0 01-44 0v-8z" stroke="#e54d4c" strokeWidth="3" fill="none" />
                <circle cx="38" cy="60" r="6" fill="#e54d4c" />
                <circle cx="82" cy="60" r="6" fill="#e54d4c" />
                <path d="M38 56V44a22 22 0 0144 0v12" stroke="#e54d4c" strokeWidth="3" strokeLinecap="round" fill="none" />
                <line x1="60" y1="82" x2="60" y2="94" stroke="#e54d4c" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="94" x2="70" y2="94" stroke="#e54d4c" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/luyen-thi/ielts/listening?quiz_type=quiz"
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

      {/* Paid course callout */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <span className="inline-block bg-[#e54d4c] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">KHÓA HỌC</span>
              <h3 className="font-bold text-gray-800 text-lg mb-1">IELTS Listening – Aim 7.0+</h3>
              <p className="text-sm text-gray-500">Khóa học chuyên sâu với giảng viên Võ Minh Hoàng, giúp bạn đạt mục tiêu 7.0+ trong IELTS Listening.</p>
            </div>
            <a
              href="https://ielts1984.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e54d4c] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#cc3f3e] transition-colors flex-shrink-0"
            >
              Xem khóa học
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Sẵn sàng luyện tập?</h2>
        <p className="text-red-100 mb-6">Chọn bài nghe và bắt đầu ngay — hoàn toàn miễn phí!</p>
        <Link
          href="/luyen-thi/ielts/listening?quiz_type=quiz"
          className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
        >
          Bắt đầu ngay
        </Link>
      </section>
    </div>
  );
}
