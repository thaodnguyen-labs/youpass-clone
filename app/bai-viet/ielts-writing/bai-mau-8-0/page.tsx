import Link from "next/link";

const sampleEssays = [
  {
    id: 1,
    type: "Task 2",
    topic: "Technology",
    title: "The advantages of technology outweigh its disadvantages. Do you agree or disagree?",
    score: "8.0",
    tags: ["Opinion Essay", "Technology"],
  },
  {
    id: 2,
    type: "Task 2",
    topic: "Environment",
    title: "Some people think that environmental problems are too big for individuals to solve. To what extent do you agree?",
    score: "8.0",
    tags: ["Discussion Essay", "Environment"],
  },
  {
    id: 3,
    type: "Task 1",
    topic: "Bar Chart",
    title: "The chart below shows the number of men and women in further education in Britain in three periods.",
    score: "8.5",
    tags: ["Bar Chart", "Academic"],
  },
  {
    id: 4,
    type: "Task 2",
    topic: "Education",
    title: "Some people believe that university education should be free for all students. Do you agree or disagree?",
    score: "8.0",
    tags: ["Opinion Essay", "Education"],
  },
  {
    id: 5,
    type: "Task 1",
    topic: "Line Graph",
    title: "The graph shows the percentage of adults using the internet in three countries from 2000 to 2015.",
    score: "8.0",
    tags: ["Line Graph", "Academic"],
  },
  {
    id: 6,
    type: "Task 2",
    topic: "Society",
    title: "In many countries, the gap between the rich and the poor is widening. What problems does this cause and what can be done to solve them?",
    score: "8.5",
    tags: ["Problem/Solution Essay", "Society"],
  },
];

export default function SampleEssaysPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Bài mẫu Writing 8.0+</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Bài mẫu <span className="text-[#e54d4c]">IELTS Writing 8.0+</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            Học hỏi từ các bài mẫu điểm cao để nắm cách diễn đạt, cấu trúc và từ vựng học thuật chuẩn IELTS. Tất cả bài mẫu đều có phân tích chi tiết.
          </p>
        </div>
      </section>

      {/* Essays grid */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">{sampleEssays.length} bài mẫu</h2>
            <div className="flex gap-2">
              <button className="bg-[#e54d4c] text-white text-sm px-4 py-1.5 rounded-full font-medium">Tất cả</button>
              <button className="bg-white text-gray-600 border border-gray-200 text-sm px-4 py-1.5 rounded-full font-medium hover:border-[#e54d4c] hover:text-[#e54d4c] transition-colors">Task 1</button>
              <button className="bg-white text-gray-600 border border-gray-200 text-sm px-4 py-1.5 rounded-full font-medium hover:border-[#e54d4c] hover:text-[#e54d4c] transition-colors">Task 2</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sampleEssays.map((essay) => (
              <div key={essay.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#e54d4c] transition-all cursor-pointer">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-[#e54d4c] text-xs font-bold px-2.5 py-1 rounded-full">{essay.type}</span>
                    {essay.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm font-bold text-gray-700">{essay.score}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{essay.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Sẵn sàng luyện Writing?</h2>
        <p className="text-red-100 mb-6">Áp dụng những gì học từ bài mẫu vào bài luyện của bạn.</p>
        <Link
          href="/luyen-thi/ielts/writing/task-1?quiz_type=quiz&status=unfinished"
          className="inline-block bg-white text-[#e54d4c] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
        >
          Luyện tập ngay
        </Link>
      </section>
    </div>
  );
}
