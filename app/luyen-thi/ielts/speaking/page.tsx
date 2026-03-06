import Link from "next/link";

const aiFeatures = [
  { icon: "🎯", title: "Luyện tập theo chủ đề", desc: "Câu hỏi được tổ chức theo chủ đề phổ biến trong IELTS Speaking." },
  { icon: "📝", title: "Câu hỏi từ đề thi thật", desc: "Câu hỏi được cập nhật từ các bài thi IELTS chính thức gần đây." },
  { icon: "🔢", title: "Đầy đủ Part 1-2-3", desc: "Luyện tập đầy đủ cả 3 phần của bài thi IELTS Speaking." },
  { icon: "📊", title: "Đánh giá tổng thể", desc: "Nhận điểm đánh giá tổng thể và chi tiết theo từng tiêu chí." },
  { icon: "🔊", title: "Phản hồi phát âm", desc: "Phân tích và góp ý chi tiết về phát âm, ngữ pháp và từ vựng." },
  { icon: "⏱️", title: "Luyện tập mọi lúc", desc: "Tự luyện Speaking mà không cần bạn học hay giáo viên — mọi lúc, mọi nơi." },
];

const parts = [
  {
    part: "Part 1",
    title: "Introduction & Interview",
    desc: "Trả lời câu hỏi về bản thân, gia đình, sở thích và các chủ đề quen thuộc trong cuộc sống hàng ngày. Thời gian: 4-5 phút.",
    topics: ["Hometown", "Work/Study", "Hobbies", "Daily Routine", "Family"],
  },
  {
    part: "Part 2",
    title: "Individual Long Turn",
    desc: "Nói về một chủ đề dựa trên cue card được cung cấp. Có 1 phút chuẩn bị và 2 phút nói. Thời gian: 3-4 phút.",
    topics: ["Describe a person", "Describe a place", "Describe an event", "Describe an object"],
  },
  {
    part: "Part 3",
    title: "Two-way Discussion",
    desc: "Thảo luận sâu về các vấn đề liên quan đến chủ đề ở Part 2. Câu hỏi mang tính phân tích và trừu tượng hơn. Thời gian: 4-5 phút.",
    topics: ["Society & Culture", "Environment", "Technology", "Education", "Economy"],
  },
];

export default function SpeakingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Speaking</span>
          </div>
          <div className="inline-block bg-[#e54d4c] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">MỚI RA MẮT</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Luyện tập <span className="text-[#e54d4c]">IELTS Speaking AI</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-2">
            YouPass đã chính thức ra mắt phần luyện tập <strong>IELTS Speaking AI</strong> — giải pháp lý tưởng cho những bạn muốn tự luyện Speaking mà không cần tìm bạn luyện tập hay gia sư.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-6">
            AI sẽ đặt câu hỏi, lắng nghe câu trả lời của bạn và đưa ra phản hồi chi tiết về phát âm, ngữ pháp và từ vựng — giúp bạn cải thiện từng ngày.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1"
              className="bg-[#e54d4c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#cc3f3e] transition-colors shadow-md"
            >
              Luyện tập ngay
            </Link>
            <a
              href="https://zalo.me/g/youpass"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#e54d4c] text-[#e54d4c] px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              Nhóm Speaking Zalo
            </a>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
            Tính năng Speaking AI
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">Nền tảng AI giúp bạn luyện nói hiệu quả như có gia sư riêng</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts breakdown */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
            Cấu trúc bài thi IELTS Speaking
          </h2>
          <div className="flex flex-col gap-6">
            {parts.map((p) => (
              <div key={p.part} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e54d4c] text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 mt-0.5">
                    {p.part}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.topics.map((t) => (
                        <span key={t} className="bg-red-50 text-[#e54d4c] text-xs font-medium px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Bắt đầu luyện Speaking với AI ngay!</h2>
        <p className="text-red-100 mb-6">Luyện nói tự tin mà không cần tìm bạn luyện tập — hoàn toàn miễn phí.</p>
        <Link
          href="/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1"
          className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
        >
          Luyện tập ngay
        </Link>
      </section>
    </div>
  );
}
