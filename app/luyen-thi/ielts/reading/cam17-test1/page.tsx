import Link from "next/link";

const testMeta = {
  source: "Cambridge IELTS 17",
  test: "Test 1",
  level: "Academic",
  duration: "60 phút",
  totalQuestions: 40,
};

const passages = [
  {
    id: "passage-1",
    number: 1,
    title: "The Frozen Ark",
    topic: "Khoa học & Môi trường",
    description:
      "Bài đọc về dự án bảo tồn vật liệu di truyền của các loài động vật có nguy cơ tuyệt chủng thông qua việc đông lạnh ADN.",
    questions: { from: 1, to: 13, total: 13 },
    questionTypes: ["True / False / Not Given", "Matching Information", "Short Answer"],
    difficulty: "Trung bình",
  },
  {
    id: "passage-2",
    number: 2,
    title: "How child-friendly is your city?",
    topic: "Xã hội & Quy hoạch đô thị",
    description:
      "Bài đọc phân tích cách các thành phố trên thế giới đang thiết kế lại không gian đô thị để phù hợp hơn với trẻ em.",
    questions: { from: 14, to: 26, total: 13 },
    questionTypes: ["Matching Headings", "Multiple Choice", "Short Answer"],
    difficulty: "Trung bình - Khó",
  },
  {
    id: "passage-3",
    number: 3,
    title: "The power of Grit",
    topic: "Tâm lý học",
    description:
      "Bài đọc khám phá nghiên cứu của Angela Duckworth về sức mạnh của sự kiên trì (grit) và vai trò của nó trong việc đạt được thành công.",
    questions: { from: 27, to: 40, total: 14 },
    questionTypes: ["True / False / Not Given", "Sentence Completion", "Multiple Choice"],
    difficulty: "Khó",
  },
];

const difficultyColor: Record<string, string> = {
  "Trung bình": "bg-yellow-50 text-yellow-700",
  "Trung bình - Khó": "bg-orange-50 text-orange-700",
  "Khó": "bg-red-50 text-[#e54d4c]",
};

export default function Cam17Test1Page() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <Link href="/luyen-thi/ielts/reading" className="hover:text-[#e54d4c]">Reading</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Cambridge 17 – Test 1</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <span className="inline-block bg-red-50 text-[#e54d4c] text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                {testMeta.source}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {testMeta.test} — {testMeta.level}
              </h1>
              <p className="text-gray-500 text-sm">
                {testMeta.totalQuestions} câu hỏi · {passages.length} bài đọc · {testMeta.duration}
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <Link
                href="/luyen-thi/ielts/reading?quiz_type=quiz"
                className="inline-block bg-[#e54d4c] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#cc3f3e] transition-colors text-center shadow-md"
              >
                Làm toàn bộ đề
              </Link>
              <p className="text-xs text-gray-400 text-center">hoặc chọn từng bài đọc bên dưới</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
            <p className="font-semibold text-gray-700 mb-1">Hướng dẫn</p>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Thời gian làm bài: 60 phút cho cả 3 bài đọc.</li>
              <li>Đọc kỹ từng đoạn văn trước khi trả lời câu hỏi.</li>
              <li>Chú ý giới hạn số từ cho câu trả lời ngắn.</li>
              <li>Kiểm tra lại đáp án trước khi nộp bài.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Passages */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Các bài đọc</h2>
          <div className="space-y-5">
            {passages.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#e54d4c] text-sm font-bold">{p.number}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base leading-snug">{p.title}</h3>
                      <span className="text-xs text-gray-400">{p.topic}</span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${difficultyColor[p.difficulty]}`}
                  >
                    {p.difficulty}
                  </span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.questionTypes.map((qt) => (
                      <span
                        key={qt}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                      >
                        {qt}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs text-gray-400">
                      Câu {p.questions.from}–{p.questions.to} ({p.questions.total} câu)
                    </span>
                    <Link
                      href={`/luyen-thi/ielts/reading?quiz_type=quiz&passage=${p.number}`}
                      className="text-sm font-semibold text-[#e54d4c] hover:underline"
                    >
                      Luyện tập →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-lg md:text-xl font-bold mb-2">Sẵn sàng làm bài?</h2>
        <p className="text-red-100 text-sm mb-5">
          Đặt đồng hồ 60 phút và làm toàn bộ đề như thi thật.
        </p>
        <Link
          href="/luyen-thi/ielts/reading?quiz_type=quiz"
          className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
        >
          Bắt đầu thi
        </Link>
      </section>
    </div>
  );
}
