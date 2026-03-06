"use client";

import { useState } from "react";

export default function FloatingButtons() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setFeedbackOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* Floating action buttons */}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3 items-end">
        {/* Zalo chat */}
        <a
          href="https://zalo.me/378403264694510321"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat Zalo với YouPass"
          className="w-12 h-12 rounded-full bg-[#0068ff] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#0068ff" />
            <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">Z</text>
          </svg>
        </a>

        {/* Feedback button */}
        <button
          onClick={() => setFeedbackOpen(!feedbackOpen)}
          title="Góp ý cho YouPass"
          className="w-12 h-12 rounded-full bg-[#e54d4c] flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-white"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>
      </div>

      {/* Feedback popup */}
      {feedbackOpen && (
        <div className="fixed right-20 bottom-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Góp ý cho YouPass</h3>
            <button
              onClick={() => setFeedbackOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {submitted ? (
            <p className="text-sm text-green-600 font-semibold py-4 text-center">Cảm ơn bạn đã góp ý! ✓</p>
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
                className="bg-[#e54d4c] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#cc3f3e] transition-colors"
              >
                Gửi góp ý
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
