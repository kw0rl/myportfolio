
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import font IM Fell DW Pica dari Google Fonts
if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation'; // Tidak perlu jika tiada navigation
import { Autoplay } from 'swiper/modules';
import { FaInstagram } from 'react-icons/fa';

// Tambah fade-in animation CSS
import './globals.css';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarClosing, setSidebarClosing] = useState(false);

  // Open menu
  const handleOpenMenu = () => {
    setMenuOpen(true);
    setSidebarClosing(false);
  };

  // Close menu instantly
  const handleCloseMenu = () => {
    setSidebarClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setSidebarClosing(false);
    }, 350); // match animation duration
  };

  // Sidebar visible if open
  const sidebarVisible = menuOpen;

  return (
    <div
      className="min-h-screen font-sans flex flex-col"
      style={{ backgroundColor: "#edebe7", color: "var(--foreground)" }}
    >
      {/* Header & Hamburger */}
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "#edebe7", borderBottom: "1px solid #4b3a2f" }}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold font-serif text-brown tracking-wide"  style={{ color: "#2f2a24" }}>a z r u l</span>
        </div>
        <button
          className="md:hidden flex flex-col gap-1 p-2 rounded"
          aria-label="Open menu"
          onClick={handleOpenMenu}
          
        >
          <span className="w-7 h-1 rounded" style={{ backgroundColor: "#2f2a24" }}></span>
          <span className="w-7 h-1 rounded" style={{ backgroundColor: "#2f2a24" }}></span>
          <span className="w-7 h-1 rounded" style={{ backgroundColor: "#2f2a24" }}></span>
        </button>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link
            href="/about"
            className="hover:text-yellow-400 transition font-bold relative group"
            style={{ color: "#2f2a24", fontFamily: "'IM Fell DW Pica'" }} 
          >
            About Me
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/project" className="hover:text-yellow-400 transition font-bold relative group" style={{ color: "#2f2a24", fontFamily: "'IM Fell DW Pica'" }}>
            Project
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/achievements" className="hover:text-yellow-400 transition font-bold relative group" style={{ color: "#2f2a24", fontFamily: "'IM Fell DW Pica'" }}>
            Achievement
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/poems" className="hover:text-yellow-400 transition font-bold relative group" style={{ color: "#2f2a24", fontFamily: "'IM Fell DW Pica'" }}>
            Poems
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/songs" className="hover:text-yellow-400 transition font-bold relative group" style={{ color: "#2f2a24", fontFamily: "'IM Fell DW Pica'" }}>
            Songs
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </header>

      {/* Sidebar/Drawer */}
      {sidebarVisible && (
        <aside
          className={`fixed top-0 right-0 h-full w-64 text-brown shadow-lg z-50 flex flex-col p-8 gap-6 border-l border-brown ${sidebarClosing ? 'animate-slide-out' : 'animate-slide-in'}`}
          style={{ backgroundColor: "#edebe7" }}
        >
          <button
            className="self-end mb-4 text-brown text-2xl font-bold"
            aria-label="Close menu"
            onClick={handleCloseMenu}
            style={{ color: "#7a7975"}}
          >
            ×
          </button>
          <Link href="/about" className="hover:underline transition text-brown font-serif text-lg" onClick={handleCloseMenu} style={{ color: "#7a7975"}}>About Me</Link>
          <Link href="/project" className="hover:underline transition text-brown font-serif text-lg" onClick={handleCloseMenu} style={{ color: "#7a7975"}}>Project</Link>
          <Link href="/achievements" className="hover:underline transition text-brown font-serif text-lg" onClick={handleCloseMenu} style={{ color: "#7a7975"}}>Achievement</Link>
          <Link href="/poems" className="hover:underline transition text-brown font-serif text-lg" onClick={handleCloseMenu} style={{ color: "#7a7975"}}>Poems</Link>
          <Link href="/songs" className="hover:underline transition text-brown font-serif text-lg" onClick={handleCloseMenu} style={{ color: "#7a7975"}}>Songs</Link>
        </aside>
      )}

      {/* Main Content (children) */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8  rounded-lg ">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h1 className="text-3xl md:text-5xl font-serif" style={{ color: "#7a7975"}} >AZRUL&apos;S PORTFOLIO</h1>
            <p className="text-lg md:text-2xl text-[#4b3a2f] font-serif">Welcome to my site :)</p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center w-full max-w-md">
            <Image
                src="/azrul.png"
              alt="Profile Placeholder"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-[320px] md:h-[400px] shadow"
              priority
            />
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="w-full flex flex-col items-center gap-16 py-16 bg-[#edebe7]">
        {/* About Me & Fun Facts (Side by Side) */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 fade-in-up">
          {/* About Me (Ringkas) */}
          <div className="flex-1 bg-[#f6f4f1] rounded-lg shadow p-8 border border-[#d6d1c4] flex flex-col gap-4 transition-transform duration-300 ">
            <h2 className="text-2xl font-serif font-bold mb-2" style={{ color: "#7a7975"}}>About Me</h2>
            <p className="text-[#4b3a2f] font-serif text-lg">Hi! my name is Azrul and I am a student from computer science faculty and also a final year student. I am so passionate about web development and design, and I love to learn new things.</p>
          </div>
          {/* Fun Fact About Me (Accordion) */}
          <div className="flex-1 bg-[#f6f4f1] rounded-lg shadow p-8 border border-[#d6d1c4] flex flex-col gap-4">
            <h2 className="text-2xl font-serif font-bold mb-2" style={{ color: "#7a7975"}}>Fun Facts About Me</h2>
            <details className="mb-2 group cursor-pointer">
              <summary className="font-serif text-lg text-[#4b3a2f] group-open:font-bold transition duration-200 hover:text-[#2f2a24] hover:font-bold hover:-translate-y-1 cursor-pointer">Music</summary>
              <div className="ml-4 text-[#4b3a2f]">I really love music especially taylor swift songs which always be with me in my ups and downs</div>
            </details>
            <details className="mb-2 group cursor-pointer">
              <summary className="font-serif text-lg text-[#4b3a2f] group-open:font-bold transition duration-200 hover:text-[#2f2a24] hover:font-bold hover:-translate-y-1 cursor-pointer">Poem</summary>
              <div className="ml-4 text-[#4b3a2f]">Writing poem is my way to express my feelings and thoughts</div>
            </details>
            <details className="mb-2 group cursor-pointer">
              <summary className="font-serif text-lg text-[#4b3a2f] group-open:font-bold transition duration-200 hover:text-[#2f2a24] hover:font-bold hover:-translate-y-1 cursor-pointer">sleep</summary>
              <div className="ml-4 text-[#4b3a2f]">Sometimes to cope with reality, i need to sleep and that is the only way</div>
            </details>
          </div>
        </div>

        {/* Timeline Education */}
        <div className="w-full max-w-4xl bg-[#f6f4f1] rounded-lg shadow p-8 border border-[#d6d1c4] flex flex-col gap-4 fade-in-up transition-transform duration-300">
          <h2 className="text-2xl font-serif font-bold text-[#2f2a24] mb-2" style={{ color: "#7a7975"}}>Education Timeline</h2>
          <ol className="relative border-l-2 border-[#d6d1c4] ml-4">
             {/* SK Bukit Sawa */}
            <li className="mb-12 ml-6 flex flex-col items-center relative text-center">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-[#d6d1c4] top-6"></div>
              <image src="/skbs.jpg" alt="SK Bukit Sawa Logo" className="w-12 h-12 rounded-full object-contain bg-white border border-[#d6d1c4] mb-2" />
              <h3 className="font-serif font-bold text-[#2f2a24] text-lg" style={{ color: '#7a7975' }}>Sekolah Kebangsaan Bukit Sawa</h3>
              <span className="text-[#7a7975] text-sm font-serif mb-1">UPSR</span>
              <span className="text-[#4b3a2f] text-base font-serif">2010 - 2015</span>
            </li>
            {/* SMK Bukit Sawa */}
            <li className="mb-12 ml-6 flex flex-col items-center relative text-center">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-[#d6d1c4] top-6"></div>
              <image src="/smkbs.jpg" alt="SMK Bukit Sawa Logo" className="w-12 h-12 rounded-full object-contain bg-white border border-[#d6d1c4] mb-2" />
              <h3 className="font-serif font-bold text-[#2f2a24] text-lg" style={{ color: '#7a7975' }}>Sekolah Menengah Kebangsaan Bukit Sawa</h3>
              <span className="text-[#7a7975] text-sm font-serif mb-1">SPM</span>
              <span className="text-[#4b3a2f] text-base font-serif">2016 - 2021</span>
            </li>
            {/* Kolej Matrikulasi Pahang */}
            <li className="mb-12 ml-6 flex flex-col items-center relative text-center">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-[#d6d1c4] top-6"></div>
              <image src="/kmp.png" alt="Kolej Matrikulasi Pahang Logo" className="w-12 h-12 rounded-full object-contain bg-white border border-[#d6d1c4] mb-2" />
              <h3 className="font-serif font-bold text-[#2f2a24] text-lg" style={{ color: '#7a7975' }}>Kolej Matrikulasi Pahang</h3>
              <span className="text-[#7a7975] text-sm font-serif mb-1">Pure Science Module</span>
              <span className="text-[#4b3a2f] text-base font-serif">2021 - 2022</span>
            </li>
            {/* UiTM */}
            <li className="ml-6 flex flex-col items-center relative text-center">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-[#d6d1c4] top-6"></div>
              <image src="/uitm.png" alt="UiTM Logo" className="w-12 h-12 rounded-full object-contain bg-white border border-[#d6d1c4] mb-2" />
              <h3 className="font-serif font-bold text-[#2f2a24] text-lg" style={{ color: '#7a7975' }}>Universiti Teknologi MARA (UiTM)</h3>
              <span className="text-[#7a7975] text-sm font-serif mb-1">Bachelor in Computer Science (Hons.) Netcentric Computing</span>
              <span className="text-[#4b3a2f] text-base font-serif">2022 - 2025</span>
            </li>
          </ol>
        </div>

        {/* Gallery (Slider) */}
        <div className="w-full max-w-4xl bg-[#f6f4f1] rounded-lg shadow p-8 border border-[#d6d1c4] flex flex-col gap-4 fade-in-up transition-transform duration-300">
          <h2 className="text-2xl font-serif font-bold text-[#2f2a24] mb-2" style={{ color: "#7a7975"}}>Gallery</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            freeMode={true}
            speed={3000}
            navigation={false}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            <SwiperSlide>
              <image src="/satu.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/azrul.png" alt="azrul" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/dua.jpg" alt="Gallery 2" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/tiga.jpg" alt="Gallery 3" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/empat.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/lima.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/enam.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/tujuh.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/lapan.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/sembilan.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            <SwiperSlide>
              <image src="/sepuluh.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow bg-white p-4 transition-transform duration-300 hover:scale-105 hover:brightness-110" />
            </SwiperSlide>
            {/* Tambah SwiperSlide untuk gambar lain jika mahu */}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-8 mt-12 border-t">
        <a
          href="https://instagram.com/azrulism"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brown text-lg font-serif flex items-center justify-center hover:text-yellow-400 transition"
          style={{ color: "#7a7975" }}
          aria-label="Instagram"
        >
          <FaInstagram size={32} />
        </a>
        <span className="text-sm text-brown mt-2 font-serif" style={{ color: "#7a7975"}}>© {new Date().getFullYear()} azrulism.</span>
      </footer>
    </div>
  );
}
