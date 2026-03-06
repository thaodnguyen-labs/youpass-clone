"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#e54d4c" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Nunito, sans-serif">YP</text>
          </svg>
          <span className="text-xl font-bold text-[#e54d4c]">YouPass</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <Link href="/luyen-thi/ielts/reading?quiz_type=quiz" className="hover:text-[#e54d4c] transition-colors">
            Reading
          </Link>
          <Link href="/luyen-thi/ielts/listening?quiz_type=quiz" className="hover:text-[#e54d4c] transition-colors">
            Listening
          </Link>
          <Link href="/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1" className="hover:text-[#e54d4c] transition-colors">
            Speaking
          </Link>
          <Link href="/bai-viet/ielts-writing/bai-mau-8-0" className="hover:text-[#e54d4c] transition-colors">
            Bài mẫu 8.0+
          </Link>
          <Link
            href="/bai-viet/kien-thuc-nen-tang-ielts/cach-tu-hoc-mien-phi-voi-youpass"
            className="hover:text-[#e54d4c] transition-colors"
          >
            Cách luyện tập FREE
          </Link>
        </nav>

        {/* Zalo group button */}
        <a
          href="https://zalo.me/g/youpass"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#e54d4c] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#cc3f3e] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z" />
          </svg>
          Nhóm Writing Zalo
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#e54d4c]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3 text-sm font-semibold text-gray-700">
            <Link href="/" className="hover:text-[#e54d4c]" onClick={() => setMenuOpen(false)}>Trang chủ</Link>
            <Link href="/luyen-thi/ielts/reading?quiz_type=quiz" className="hover:text-[#e54d4c]" onClick={() => setMenuOpen(false)}>Reading</Link>
            <Link href="/luyen-thi/ielts/listening?quiz_type=quiz" className="hover:text-[#e54d4c]" onClick={() => setMenuOpen(false)}>Listening</Link>
            <Link href="/luyen-thi/ielts/speaking?quiz_type=quiz&status=unfinished&part=1" className="hover:text-[#e54d4c]" onClick={() => setMenuOpen(false)}>Speaking</Link>
            <Link href="/bai-viet/ielts-writing/bai-mau-8-0" className="hover:text-[#e54d4c]" onClick={() => setMenuOpen(false)}>Bài mẫu 8.0+</Link>
            <Link href="/bai-viet/kien-thuc-nen-tang-ielts/cach-tu-hoc-mien-phi-voi-youpass" className="hover:text-[#e54d4c]" onClick={() => setMenuOpen(false)}>Cách luyện tập FREE</Link>
            <a
              href="https://zalo.me/g/youpass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e54d4c] text-white px-4 py-2 rounded-full w-fit"
            >
              Nhóm Writing Zalo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
