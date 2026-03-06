import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Chọn kỹ năng bạn muốn luyện",
    desc: "Từ trang chủ, chọn một trong bốn kỹ năng: Reading, Listening, Speaking hoặc Writing. Mỗi kỹ năng có trang riêng với đầy đủ tính năng.",
    tip: "Nên bắt đầu với kỹ năng bạn cảm thấy cần cải thiện nhất.",
  },
  {
    step: 2,
    title: "Chọn bài thi phù hợp với trình độ",
    desc: "Mỗi bài thi được gắn tag độ khó (Beginner, Intermediate, Advanced). Chọn bài phù hợp với trình độ hiện tại của bạn.",
    tip: "Đừng nhảy thẳng vào đề khó. Bắt đầu từ Intermediate để đánh giá trình độ.",
  },
  {
    step: 3,
    title: "Làm bài và sử dụng tính năng tra từ",
    desc: "Trong lúc làm bài, bạn có thể bôi đen từ bất kỳ để tra nghĩa ngay lập tức. Từ vựng mới sẽ được lưu vào sổ từ vựng của bạn.",
    tip: "Tra từ ngay khi gặp — đừng bỏ qua vì bạn sẽ quên sau khi làm xong bài.",
  },
  {
    step: 4,
    title: "Xem đáp án và giải thích chi tiết",
    desc: "Sau khi nộp bài, xem đáp án và giải thích từng câu bằng tiếng Việt. Hiểu rõ tại sao câu trả lời đúng/sai.",
    tip: "Dành ít nhất 10-15 phút để đọc giải thích thay vì chỉ nhìn điểm số.",
  },
  {
    step: 5,
    title: "Ôn lại từ vựng đã lưu",
    desc: "Vào sổ từ vựng để ôn lại những từ đã tra. Bạn có thể tạo flashcard và ôn theo phương pháp spaced repetition.",
    tip: "Ôn từ vựng 10-15 phút mỗi ngày giúp ghi nhớ lâu hơn nhiều lần.",
  },
  {
    step: 6,
    title: "Tham gia nhóm Zalo và theo dõi tiến độ",
    desc: "Tham gia nhóm Zalo Writing để chia sẻ bài viết, nhận góp ý và học hỏi từ cộng đồng. Theo dõi tiến độ qua lịch sử làm bài.",
    tip: "Học cùng cộng đồng giúp bạn duy trì động lực và tiến bộ nhanh hơn.",
  },
];

const skills = [
  {
    name: "Reading",
    href: "/luyen-thi/ielts/reading?quiz_type=quiz",
    freq: "3-4 bài/tuần",
    duration: "60-90 phút/bài",
    tips: ["Đọc hết passage trước, sau đó làm câu hỏi", "Chú ý từ khóa và paraphrase", "Luyện kỹ năng skimming và scanning"],
  },
  {
    name: "Listening",
    href: "/luyen-thi/ielts/listening?quiz_type=quiz",
    freq: "3-4 bài/tuần",
    duration: "30-40 phút/bài",
    tips: ["Đọc câu hỏi trước khi nghe", "Chú ý số, tên và địa điểm", "Điều chỉnh tốc độ để tập dần"],
  },
  {
    name: "Speaking",
    href: "/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1",
    freq: "Hàng ngày, 15-20 phút",
    duration: "Càng nhiều càng tốt",
    tips: ["Luyện nói to, không luyện trong đầu", "Ghi âm lại để tự nhận xét", "Dùng AI Speaking để luyện Part 1-2-3"],
  },
  {
    name: "Writing",
    href: "/luyen-thi/ielts/writing/task-1?quiz_type=quiz&status=unfinished",
    freq: "2-3 bài/tuần",
    duration: "60 phút/bài",
    tips: ["Lập outline trước khi viết", "Đếm từ và kiểm tra ngữ pháp", "Đọc bài mẫu 8.0+ để học cách diễn đạt"],
  },
];

export default function FreeStudyGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Cách tự học miễn phí với YouPass</span>
          </div>
          <div className="inline-block bg-red-50 border border-red-200 text-[#e54d4c] text-xs font-semibold px-4 py-1 rounded-full mb-4">
            HƯỚNG DẪN
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cách tự học IELTS miễn phí với <span className="text-[#e54d4c]">YouPass</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Hướng dẫn từng bước để tận dụng tối đa nền tảng YouPass — từ chọn bài luyện, tra từ vựng, xem đáp án đến theo dõi tiến độ — tất cả hoàn toàn miễn phí.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-10 text-center">
            Các bước luyện tập hiệu quả
          </h2>
          <div className="flex flex-col gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#e54d4c] text-white font-bold text-lg flex items-center justify-center">
                    {s.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-100 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5">
                    <span className="text-xs font-bold text-amber-700">💡 Mẹo: </span>
                    <span className="text-xs text-amber-700">{s.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per-skill tips */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
            Lịch luyện tập gợi ý theo từng kỹ năng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 text-lg">{skill.name}</h3>
                  <Link
                    href={skill.href}
                    className="text-xs font-semibold text-[#e54d4c] hover:underline"
                  >
                    Luyện ngay →
                  </Link>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-0.5">Tần suất</p>
                    <p className="text-xs font-semibold text-gray-700">{skill.freq}</p>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-0.5">Thời lượng</p>
                    <p className="text-xs font-semibold text-gray-700">{skill.duration}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {skill.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#e54d4c] mt-0.5">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Bắt đầu hành trình IELTS của bạn!</h2>
        <p className="text-red-100 mb-6">Áp dụng ngay những hướng dẫn trên và bắt đầu luyện tập hôm nay.</p>
        <Link
          href="/"
          className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
        >
          Về trang chủ
        </Link>
      </section>
    </div>
  );
}
