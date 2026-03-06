"use client";

import Link from "next/link";
import { useState } from "react";

const tasks = [
  {
    id: "task1",
    label: "Task 1",
    title: "IELTS Writing Task 1",
    desc: "Viết báo cáo mô tả dữ liệu từ biểu đồ, bảng biểu, bản đồ hoặc quy trình. Cần tối thiểu 150 từ.",
    structure: ["Overview (Tổng quan)", "Introduction (Mở đầu)", "Body Paragraph 1", "Body Paragraph 2"],
    wordCount: "Tối thiểu 150 từ",
    time: "20 phút",
    chartTypes: ["Bar Chart (Biểu đồ cột)", "Line Graph (Biểu đồ đường)", "Pie Chart (Biểu đồ tròn)", "Table (Bảng)", "Map (Bản đồ)", "Process Diagram (Sơ đồ quy trình)"],
  },
  {
    id: "task2",
    label: "Task 2",
    title: "IELTS Writing Task 2",
    desc: "Viết bài luận về các chủ đề đa dạng trong cuộc sống. Cần tối thiểu 250 từ.",
    structure: ["Introduction (Mở bài)", "Body Paragraph 1", "Body Paragraph 2", "Conclusion (Kết bài)"],
    wordCount: "Tối thiểu 250 từ",
    time: "40 phút",
    chartTypes: ["Opinion Essay", "Discussion Essay", "Advantages/Disadvantages Essay", "Problem/Solution Essay", "Two-part Question Essay"],
  },
];

const features = [
  { icon: "📝", title: "Đề thi đa dạng và cập nhật", desc: "Đề Writing liên tục được cập nhật từ các bài thi IELTS thực tế gần đây." },
  { icon: "🇻🇳", title: "Hướng dẫn bằng tiếng Việt", desc: "Hướng dẫn từng bước rõ ràng bằng tiếng Việt, dễ hiểu cho mọi trình độ." },
  { icon: "💻", title: "Giao diện thi thật", desc: "Luyện tập trên giao diện giống với bài thi IELTS máy tính thực tế." },
  { icon: "⭐", title: "Thang điểm chi tiết", desc: "Hệ thống chấm điểm chi tiết theo tiêu chí IELTS: Task Achievement, Coherence, Vocabulary, Grammar." },
  { icon: "👥", title: "Nhóm Writing Zalo", desc: "Tham gia nhóm Zalo để chia sẻ bài viết, nhận góp ý từ cộng đồng và giảng viên." },
  { icon: "🆓", title: "Hoàn toàn miễn phí", desc: "Tất cả tính năng luyện Writing đều hoàn toàn miễn phí, không cần đăng ký." },
];

export default function WritingTask1Page() {
  const [activeTask, setActiveTask] = useState("task1");
  const currentTask = tasks.find((t) => t.id === activeTask)!;

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#e54d4c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Writing</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Luyện tập <span className="text-[#e54d4c]">IELTS Writing</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-2">
            Writing là một trong bốn kỹ năng sẽ được kiểm tra trong bài thi IELTS. Bài thi Writing kéo dài 60 phút và bao gồm hai nhiệm vụ — Task 1 và Task 2.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-6">
            Luyện tập với đề thi đa dạng, hướng dẫn chi tiết bằng tiếng Việt và giao diện thi sát thực tế — hoàn toàn MIỄN PHÍ.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/luyen-thi/ielts/writing/task-1?quiz_type=quiz&status=unfinished"
              className="bg-[#e54d4c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#cc3f3e] transition-colors shadow-md"
            >
              Luyện Task 1
            </Link>
            <Link
              href="/luyen-thi/ielts/writing/task-2?quiz_type=quiz&status=unfinished"
              className="border border-[#e54d4c] text-[#e54d4c] px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              Luyện Task 2
            </Link>
          </div>
        </div>
      </section>

      {/* Task tabs */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            Cấu trúc bài thi IELTS Writing
          </h2>
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tasks.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTask(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeTask === t.id
                    ? "bg-[#e54d4c] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#e54d4c] hover:text-[#e54d4c]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Task detail */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-red-50 text-[#e54d4c] text-xs font-bold px-3 py-1 rounded-full">⏱ {currentTask.time}</span>
              <span className="bg-red-50 text-[#e54d4c] text-xs font-bold px-3 py-1 rounded-full">📝 {currentTask.wordCount}</span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">{currentTask.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{currentTask.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 text-sm">Cấu trúc bài viết</h4>
                <div className="flex flex-col gap-2">
                  {currentTask.structure.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e54d4c] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 text-sm">
                  {activeTask === "task1" ? "Dạng biểu đồ / câu hỏi" : "Dạng đề"}
                </h4>
                <div className="flex flex-col gap-2">
                  {currentTask.chartTypes.map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e54d4c] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample essays link */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <span className="inline-block bg-[#e54d4c] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">BÀI MẪU</span>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Bài mẫu IELTS Writing 8.0+</h3>
              <p className="text-sm text-gray-500">Học hỏi từ các bài mẫu điểm cao để nắm cách diễn đạt và cấu trúc bài viết chuẩn IELTS.</p>
            </div>
            <Link
              href="/bai-viet/ielts-writing/bai-mau-8-0"
              className="bg-[#e54d4c] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#cc3f3e] transition-colors flex-shrink-0"
            >
              Xem bài mẫu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#e54d4c] text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Bắt đầu luyện Writing ngay!</h2>
        <p className="text-red-100 mb-6">Đề thi đa dạng, hướng dẫn chi tiết — hoàn toàn miễn phí.</p>
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
