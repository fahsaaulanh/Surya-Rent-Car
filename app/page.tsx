"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Komponen Carousel Sederhana
const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl group">
      <div className="flex transition-transform duration-700 ease-in-out">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-slate-50 text-slate-800 antialiased overflow-hidden">
      {/* Custom CSS Animasi Float Lembut */}
      <style jsx global>{`
        @keyframes softFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-soft-float {
          animation: softFloat 6s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Navbar Modern (Pill Shape) */}
      <nav
        className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 ${isScrolled
            ? "top-4 w-[95%] max-w-6xl bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 rounded-full py-3 px-6 lg:px-8"
            : "top-6 w-[95%] max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 px-6 lg:px-10"
          }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            {/* Background Kuning Terang, Ikon Putih */}
            <div className="w-11 h-11 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-yellow-400/30 group-hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-car text-lg"></i>
            </div>
            <div>
              <h1 className={`font-extrabold text-lg lg:text-xl leading-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Surya Rent Car
              </h1>
              <p className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'text-yellow-500' : 'text-yellow-300'}`}>
                Premium Transport
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="#" className={`px-4 py-2 font-bold text-sm rounded-full transition-colors ${isScrolled ? 'bg-yellow-50 text-yellow-500' : 'bg-white/20 text-white'}`}>
              Beranda
            </Link>
            <Link href="#about" className={`px-4 py-2 font-semibold text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-yellow-500' : 'text-slate-200 hover:text-white'}`}>
              Tentang Kami
            </Link>
            <Link href="#armada" className={`px-4 py-2 font-semibold text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-yellow-500' : 'text-slate-200 hover:text-white'}`}>
              Pilihan Mobil
            </Link>
            <Link href="#galeri" className={`px-4 py-2 font-semibold text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-yellow-500' : 'text-slate-200 hover:text-white'}`}>
              Galeri
            </Link>

            {/* Button Navbar: Kuning Terang dengan Teks Putih (Jika discroll) atau Putih teks Kuning */}
            <Link href="#armada" className={`ml-2 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 ${isScrolled ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:shadow-yellow-400/40' : 'bg-white text-yellow-500 hover:bg-yellow-400 hover:text-white'}`}>
              Pesan Sekarang <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-yellow-400 focus:outline-none p-2`}>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section (Full Background Image + Overlay Gelap) */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">

        {/* Background Full Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=2000&q=80"
            alt="Background Jakarta"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Overlay Gelap agar Teks Putih & Mobil Terlihat Jelas */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="animate-[fade-in-up_1s_ease-out]">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-300 font-bold text-xs tracking-widest uppercase">
                  Rental Mobil Driver Jakarta
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Jelajahi Jakarta <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 drop-shadow-sm">
                  Tanpa Rasa Lelah
                </span>
              </h1>
              <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
                Nikmati perjalanan VIP dengan armada terbaru dan sopir profesional. Mulai dari urusan bisnis hingga liburan keluarga, kami siap memberikan pengalaman mobilitas terbaik untuk Anda.
              </p>
              <div className="flex flex-wrap gap-4">

                <Link
                  href="#armada"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-extrabold text-base shadow-xl shadow-yellow-400/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 drop-shadow-md"
                >
                  Lihat Pilihan Mobil <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Image Content (Mobil Melayang Lembut) */}
            <div className="relative hidden lg:block">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl -z-10"></div>

              <div className="relative z-10 w-full h-[450px] flex items-center justify-center animate-soft-float">
                <Image
                  src="https://images.prod.seva.id/Toyota/New%20Kijang%20Innova/main_color/main_banner_toyota_new_innova_attitude_black.png"
                  alt="Innova Reborn"
                  width={800}
                  height={500}
                  unoptimized
                  className="w-[110%] max-w-none object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Rapi & Bersih */}
      <section className="bg-white border-b border-slate-100 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-100">
            {[
              { icon: "fa-user-tie", title: "Sopir Ahli", desc: "Berpengalaman & Ramah" },
              { icon: "fa-sparkles", title: "Armada Bersih", desc: "Perawatan Rutin 100%" },
              { icon: "fa-clock", title: "Tepat Waktu", desc: "Standby sebelum jadwal" },
              { icon: "fa-tags", title: "Harga Pasti", desc: "Tanpa biaya tersembunyi" }
            ].map((feat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'pl-6' : ''}`}>
                {/* Ikon Kuning Terang */}
                <div className="w-12 h-12 bg-yellow-50 text-yellow-400 rounded-full flex items-center justify-center text-xl mb-3">
                  <i className={`fa-solid ${feat.icon}`}></i>
                </div>
                <h4 className="text-slate-900 font-bold text-sm mb-1">{feat.title}</h4>
                <p className="text-slate-500 text-xs">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Watermark Besar + Badge) */}
      <section id="about" className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Image dengan Badge 100% Aman */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-100 to-slate-50 rounded-[2.5rem] transform rotate-3 -z-10"></div>
              <Carousel>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFT65gvswVWZqftUp5R1qspVT9L4eZcWhsLxrvB_MuQ&s=10"
                  alt="Jakarta City"
                  width={800}
                  height={600}
                  unoptimized
                  className="w-full h-[550px] object-cover"
                />
              </Carousel>
              {/* Badge "100% Perjalanan Aman" - Ikon Putih, Background Kuning Terang */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-[bounce_5s_ease-in-out_infinite]">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center text-white text-xl shadow-inner">
                  <i className="fa-solid fa-shield-halved drop-shadow-sm"></i>
                </div>
                <div>
                  <p className="text-slate-900 font-extrabold text-xl leading-none">100%</p>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Perjalanan Aman</p>
                </div>
              </div>
            </div>

            {/* Right Content dengan Watermark Besar */}
            <div className="relative">
              <span className="absolute -top-16 -left-6 text-7xl sm:text-8xl md:text-9xl font-extrabold text-slate-50 opacity-80 uppercase tracking-tighter select-none pointer-events-none -z-10">
                About
              </span>

              <div className="relative z-10">
                {/* BACKGROUND WATERMARK TEXT */}
                <span className="absolute -top-16 -left-6 text-7xl sm:text-8xl md:text-9xl font-extrabold text-slate-50 opacity-80 uppercase tracking-tighter select-none pointer-events-none -z-10">
                  About
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
                  <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase">
                    Mengapa Memilih Kami?
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Standar Baru <br />
                  Kenyamanan Berkendara.
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Surya Rent Car mengubah cara Anda bepergian di Jakarta. Kami tidak sekadar menyewakan mobil, melainkan memberikan layanan asisten perjalanan (*driver*) yang mengedepankan etika, rute efisien, dan privasi penuh.
                </p>

                <div className="space-y-5">
                  {[
                    "Fokus Layanan Eksklusif (Hanya Dengan Sopir)",
                    "Proses Booking via WhatsApp Tanpa Ribet",
                    "Armada Selalu Tersedia Sesuai Jadwal"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-300">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <p className="text-slate-700 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section id="armada" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Pilihan Armada Kami
            </h2>
            <p className="text-slate-600 text-lg">
              Setiap unit dirawat secara berkala untuk memastikan performa dan kebersihan maksimal sebelum menjemput Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Toyota Avanza", img: "https://pngimg.com/d/toyota_PNG1955.png", price: "550.000", seats: "6", type: "MPV" },
              { name: "Innova Reborn", img: "https://images.prod.seva.id/Toyota/New%20Kijang%20Innova/main_color/main_banner_toyota_new_innova_attitude_black.png", price: "750.000", seats: "7", type: "Premium MPV" },
              { name: "Fortuner VRZ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFT65gvswVWZqftUp5R1qspVT9L4eZcWhsLxrvB_MuQ&s=10", price: "1.400.000", seats: "7", type: "SUV" },
              { name: "Hiace Commuter", img: "https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/IKwDQJbh7r07HztbR6zjiCzDlom6f6hkzKpUotRi.png", price: "1.100.000", seats: "14", type: "Minibus" }
            ].map((car, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col group">
                <div className="mb-4">
                  <span className="bg-slate-100 text-slate-600 text-[0.65rem] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {car.type}
                  </span>
                </div>

                <div className="h-40 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-yellow-400/5 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                  <Image
                    src={car.img}
                    alt={car.name}
                    width={400}
                    height={300}
                    unoptimized
                    className={`w-full h-full object-contain transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ${car.name === 'Innova Reborn' || car.name === 'Hiace Commuter' ? 'grayscale' : ''}`}
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-slate-900 font-black text-xl">Rp {car.price}</span>
                    <span className="text-slate-500 text-xs font-medium pb-1">/ hari</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-b border-slate-100 py-4 mb-6 mt-auto">
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-users text-slate-300 text-lg mb-1"></i>
                    <span className="text-[0.65rem] text-slate-600 font-bold uppercase">{car.seats} Kursi</span>
                  </div>
                  <div className="flex flex-col items-center text-center border-l border-r border-slate-100">
                    <i className="fa-solid fa-user-tie text-slate-300 text-lg mb-1"></i>
                    <span className="text-[0.65rem] text-slate-600 font-bold uppercase">+ Sopir</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-snowflake text-slate-300 text-lg mb-1"></i>
                    <span className="text-[0.65rem] text-slate-600 font-bold uppercase">AC Dingin</span>
                  </div>
                </div>


                <Link
                  href={`https://wa.me/6285780700419?text=Halo,%20saya%20ingin%20sewa%20${car.name}%20dengan%20Sopir`}
                  target="_blank"
                  className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 text-sm shadow-md hover:shadow-yellow-400/30"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i> PESAN SEKARANG
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Section */}

      <section id="galeri" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-end mb-12">

            <div>

              <div className="flex items-center gap-2 mb-2">

                <div className="w-2 h-2 bg-fnd-yellow rounded-full"></div>

                <span className="text-fnd-grayText font-bold text-xs tracking-widest uppercase">

                  Momen Bersama Pelanggan Kami

                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-fnd-black">

                Perjalanan Nyaman, Cerita Nyata

              </h2>

            </div>

            <Link

              href="#"

              className="text-sm font-semibold text-fnd-grayText hover:text-fnd-black mt-4 md:mt-0 transition"

            >

              Lihat Semua Dokumentasi &rarr;

            </Link>

          </div>



          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Image 1 */}

            <div className="relative group overflow-hidden rounded-xl h-64 shadow-soft">

              <img

                src="https://www.firstholidayrentcarmedan.com/wp-content/uploads/2025/11/First-Holiday-Rent-Car-Gallery-3-scaled.jpeg"

                alt="Galeri 1"

                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-fnd-black/90 via-fnd-black/20 to-transparent opacity-90 flex items-end p-4">

                <p className="text-white font-medium text-sm leading-tight">

                  City Tour Jakarta bersama keluarga

                </p>

              </div>

            </div>

            {/* Image 2 */}

            <div className="relative group overflow-hidden rounded-xl h-64 shadow-soft">

              <img

                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzTF95NX96QCPQ-_rExGokymBWR3SxASd-AUoFc98_85WGy8sI25SkFc&s=10"

                alt="Galeri 2"

                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-fnd-black/90 via-fnd-black/20 to-transparent opacity-90 flex items-end p-4">

                <p className="text-white font-medium text-sm leading-tight">

                  Antar jemput bandara Husein Sastranegara

                </p>

              </div>

            </div>

            {/* Image 3 */}

            <div className="relative group overflow-hidden rounded-xl h-64 shadow-soft">

              <img

                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MFAQBde92Zzrvq0V7676NdVJ-gQ1IDU02p-CxebaL7l5ehLsNqfYE70&s=10"

                alt="Galeri 3"

                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-fnd-black/90 via-fnd-black/20 to-transparent opacity-90 flex items-end p-4">

                <p className="text-white font-medium text-sm leading-tight">

                  Perjalanan dinas perusahaan

                </p>

              </div>

            </div>

            {/* Image 4 */}

            <div className="relative group overflow-hidden rounded-xl h-64 shadow-soft">

              <img

                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcm7rxFW_uAleap4sQ7Jw9_wrnRdQgwr0tTvERyvU0eVCw5lr34qbqSXo&s=10"

                alt="Galeri 4"

                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-fnd-black/90 via-fnd-black/20 to-transparent opacity-90 flex items-end p-4">

                <p className="text-white font-medium text-sm leading-tight">

                  Trip luar kota ke Lembang

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-yellow-400 font-bold text-xs tracking-widest uppercase">
                Perjalanan Lebih Mudah
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Pesan Sekarang Lewat WhatsApp
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Konsultasi cepat dengan tim kami dan dapatkan penawaran terbaik untuk perjalanan Anda di Jakarta dan sekitarnya.
            </p>

            <Link
              href="https://wa.me/6285780700419"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 text-lg w-full md:w-auto shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 drop-shadow-md"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i> Chat via WhatsApp &rarr;
            </Link>
          </div>

          <div className="hidden md:flex flex-col gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            {["Respon Cepat", "Informasi Armada Lengkap", "Nego Harga Terbaik", "Siap Melayani 24 Jam"].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <i className="fa-regular fa-circle-check text-yellow-400 text-xl"></i>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syarat & Lokasi */}
      <section id="syarat" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">
              Syarat & Ketentuan Singkat
            </h2>
            <div className="space-y-4">
              {[
                "Pemesanan disarankan minimal 1 hari sebelum jadwal untuk ketersediaan unit.",
                "Sampaikan rute tujuan, tanggal, dan jam penjemputan dengan jelas.",
                "Harga sewa sudah termasuk jasa driver. BBM, Tol, dan Parkir ditanggung penyewa.",
                "Perubahan rute mendadak wajib dikonfirmasi terlebih dahulu ke admin."
              ].map((term, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {term}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="kontak" className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Lokasi Kami</h2>
            <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-inner border border-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.6091242787!2d107.5731165412978!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sJakarta%2C%20Kota%20Jakarta%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-yellow-500"></i>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  Jl. Turangga No. 10 Lingkar Selatan, Lengkong, Kota Jakarta, Jawa Barat
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone text-yellow-500"></i>
                </div>
                <p className="text-sm text-slate-900 font-bold">0857-8070-0419</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Modern */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl flex items-center justify-center text-white font-bold shadow-inner">
                  <i className="fa-solid fa-car drop-shadow-sm"></i>
                </div>
                <h2 className="font-bold text-xl text-white">Surya Rent Car</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Layanan rental mobil eksklusif dengan driver profesional. Partner mobilitas terbaik Anda di Jakarta.
              </p>
              <div className="flex gap-3">
                {['facebook-f', 'instagram', 'tiktok'].map((icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-colors">
                    <i className={`fa-brands fa-${icon}`}></i>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Navigasi</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {['Beranda', 'Tentang Kami', 'Pilihan Armada', 'Galeri'].map((item, i) => (
                  <li key={i}><Link href="#" className="hover:text-yellow-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Layanan Kami</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Sewa Mobil Harian</li>
                <li>Sewa Corporate (Bulanan)</li>
                <li>Antar Jemput Bandara</li>
                <li>Wedding & VIP Car</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Hubungi Kami</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"><i className="fa-brands fa-whatsapp text-yellow-400"></i></div>
                  <p className="text-white font-semibold">0857-8070-0419</p>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"><i className="fa-regular fa-envelope text-yellow-400"></i></div>
                  <p>admin@suryarentcar.id</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© 2026 Surya Rent Car. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-slate-500">
              <Link href="#" className="hover:text-white transition">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-white transition">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Link href="https://wa.me/6285780700419" target="_blank" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform duration-300">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
        <button onClick={scrollToTop} className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur text-white flex items-center justify-center text-xl shadow-lg hover:bg-yellow-400 hover:text-white transition-colors mx-auto">
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </main>
  );
}