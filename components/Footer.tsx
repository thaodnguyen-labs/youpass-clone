"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#e54d4c" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Nunito, sans-serif">YP</text>
              </svg>
              <span className="text-xl font-bold text-[#e54d4c]">YouPass</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nền tảng tự luyện IELTS Reading, Listening, Writing chất lượng cao, hoàn toàn MIỄN PHÍ.
            </p>
            <p className="text-xs text-gray-500 mt-2">Xây dựng bởi Trung tâm IELTS 1984</p>
            <p className="text-xs text-gray-400 mt-4">© 2023 YouPass, Inc. All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Điều hướng</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#e54d4c] transition-colors">Trang chủ</Link>
              <Link href="/luyen-thi/ielts/reading?quiz_type=quiz" className="hover:text-[#e54d4c] transition-colors">Reading</Link>
              <Link href="/luyen-thi/ielts/listening?quiz_type=quiz" className="hover:text-[#e54d4c] transition-colors">Listening</Link>
              <Link href="/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1" className="hover:text-[#e54d4c] transition-colors">Speaking</Link>
              <Link href="/bai-viet/ielts-writing/bai-mau-8-0" className="hover:text-[#e54d4c] transition-colors">Bài mẫu 8.0+</Link>
            </nav>
          </div>

          {/* Feedback form */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Góp ý cho YouPass</h3>
            {submitted ? (
              <p className="text-sm text-green-600 font-semibold">Cảm ơn bạn đã góp ý! ✓</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#e54d4c] w-full"
                />
                <textarea
                  placeholder="Mô tả vấn đề bạn gặp phải hoặc tính năng bạn muốn thấy..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#e54d4c] w-full resize-none"
                />
                <button
                  type="submit"
                  className="bg-[#e54d4c] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#cc3f3e] transition-colors w-fit"
                >
                  Gửi góp ý
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
