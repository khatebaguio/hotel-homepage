"use client";

import React, { useState } from 'react';
import {
  Sparkles,
  Utensils,
  Waves,
  ArrowRight,
  Coffee,
  Wifi,
  Shield,
  Bed,
  Layers,
  Phone,
  Mail,
  Store,
  MessageSquare
} from 'lucide-react';

export default function HotelReservationPage() {

  const [activePage, setActivePage] = useState<
    'home' | 'about' | 'rooms' | 'contact' | 'booking'
  >('home');

  // FIXED ERROR
  const [bookingStep, setBookingStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans selection:bg-[#addfac] selection:text-black scroll-smooth">

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-50">

        <div
          className="h-16 sm:h-20 md:h-24 w-auto flex items-center cursor-pointer"
          onClick={() => setActivePage('home')}
        >
          <img
            src="/logo_hotel-removebg-preview.png"
            alt="Whisper of the Sea Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider">

          <button
            onClick={() => setActivePage('home')}
            className={`uppercase text-xs transition ${
              activePage === 'home'
                ? 'text-[#addfac]'
                : 'text-stone-400 hover:text-[#addfac]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => setActivePage('about')}
            className={`uppercase text-xs transition ${
              activePage === 'about'
                ? 'text-[#addfac]'
                : 'text-stone-400 hover:text-[#addfac]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActivePage('rooms')}
            className={`uppercase text-xs transition ${
              activePage === 'rooms'
                ? 'text-[#addfac]'
                : 'text-stone-400 hover:text-[#addfac]'
            }`}
          >
            Rooms
          </button>

          <button
            onClick={() => setActivePage('booking')}
            className={`uppercase text-xs transition ${
              activePage === 'booking'
                ? 'text-[#addfac]'
                : 'text-stone-400 hover:text-[#addfac]'
            }`}
          >
            Booking
          </button>

          <button
            onClick={() => setActivePage('contact')}
            className={`uppercase text-xs transition ${
              activePage === 'contact'
                ? 'text-[#addfac]'
                : 'text-stone-400 hover:text-[#addfac]'
            }`}
          >
            Contact
          </button>

        </nav>

        <button className="bg-gradient-to-r from-teal-600 to-[#addfac] text-black text-xs px-5 py-2.5 rounded font-semibold">
          Log Out
        </button>

      </header>

      {/* --- PAGE CONDITIONAL RENDERING --- */}
      {activePage === 'home' && (
        <>
          {/* HERO SECTION */}
          <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-8 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-stone-100 leading-tight">
                Transform Your Stay <br />
                <span className="not-italic font-sans font-light text-[#addfac]">Into Timeless Luxury</span>
              </h1>
              <div className="flex items-center gap-4 pt-4">
                <button 
                  onClick={() => setActivePage('booking')}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-[#addfac] text-black font-semibold text-sm px-6 py-3 rounded shadow-xl hover:brightness-110 transition-all"
                >
                 Book Now! <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full h-[400px] md:h-[480px] rounded-lg overflow-hidden border border-stone-800 shadow-2xl">
              <img 
                src="pic 1.jpg" 
                alt="Whisper of the Sea Resort Pool Overlooking Ocean" 
                className="w-full h-full object-cover brightness-90 saturate-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#addfac]/10 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
          </section>

          {/* ACCOMMODATIONS PREVIEW SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#addfac]/50"></div>
              <h2 className="text-xl md:text-2xl font-serif text-[#addfac] tracking-wide">Featured Accommodations</h2>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#addfac]/50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Deluxe Ocean Room", sub: "Modern Elegance", img: "pic 2.jpg" },
                { title: "Whispering Waves Suite", sub: "Minimal & Functional Space", img: "pic 3.jpg" },
                { title: "Sanctuary Ocean Villa", sub: "Comfort & Ultimate Style", img: "pic 4.jpg" }
              ].map((suite, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden group border border-stone-900 shadow-xl aspect-[4/5]">
                  <img 
                    src={suite.img} 
                    alt={suite.title} 
                    className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-0 right-0 px-4 space-y-1">
                    <h3 className="text-lg font-serif text-stone-100 tracking-wide">{suite.title}</h3>
                    <p className="text-xs text-[#addfac]/80 italic font-light tracking-wide">{suite.sub}</p>
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => setActivePage('booking')}
                        className="text-[10px] uppercase tracking-widest text-white border-b border-[#addfac] pb-0.5"
                      >
                        Book Now!
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      
      {/* --- STANDALONE ABOUT US VIEW --- */}
      {activePage === 'about' && (
        <div className="animate-fadeIn">
          {/* ABOUT BANNER SUB-HERO */}
          <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
            <img 
              src="pic 1.jpg" 
              alt="About page banner" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.3] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1C]/50 to-[#1C1C1C]"></div>
            <div className="relative text-center space-y-3 z-10">
              <h1 className="text-4xl md:text-6xl font-serif italic text-stone-100 tracking-wide">About Us</h1>
              <p className="text-xs uppercase tracking-[0.3em] text-[#addfac]">
                <span className="cursor-pointer" onClick={() => setActivePage('home')}>Home</span> 
                <span className="text-stone-600 mx-2">•</span> About Our Sanctuary
              </p>
            </div>
          </section>

          {/* BRAND PROFILE SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[380px] md:h-[480px] w-full">
              <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-lg overflow-hidden border border-stone-800 shadow-2xl">
                <img src="pic 2.jpg" alt="Luxury suite details" className="w-full h-full object-cover brightness-90" />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-lg overflow-hidden border-4 border-[#1C1C1C] shadow-2xl z-10">
                <img src="pic 3.jpg" alt="Resort layout look" className="w-full h-full object-cover brightness-90" />
              </div>
              <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#addfac]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#addfac]">About Luxury Hotel</span>
              <h2 className="text-3xl md:text-4xl font-serif italic text-stone-100 leading-tight">
                Discover The Best Luxury <br />
                <span className="not-italic font-sans font-light text-[#addfac]">Hotels In California</span>
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Whisper of the Sea Hotel & Resort introduces a brand-new definition of eco-elegance. Nestled seamlessly along the raw Pacific coastline, we combine state-of-the-art modular comfort architecture with high-fidelity hospitality.
              </p>
              <div className="p-5 border-l-2 border-[#addfac] bg-stone-900/30 text-stone-300 italic text-sm rounded-r-md">
                "Our philosophy is simple: complete harmony with nature without altering the definition of pristine luxury."
              </div>
              <button className="bg-[#addfac] text-black font-semibold text-xs px-6 py-3 rounded uppercase tracking-wider hover:bg-opacity-90 transition-all">
                Read More
              </button>
            </div>
          </section>

          {/* COMFORT SERVICES MATRIX */}
          <section className="bg-stone-900/20 py-20 border-t border-b border-stone-900">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
              <span className="text-xs uppercase tracking-widest text-[#addfac]">Our Hotel Services</span>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-200">Our Comfortable Services</h3>
              <div className="w-16 h-[1px] bg-[#addfac] mx-auto mt-2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {[
                { icon: <Shield className="w-6 h-6 mx-auto text-[#addfac]" />, title: "Hotel Security" },
                { icon: <Wifi className="w-6 h-6 mx-auto text-[#addfac]" />, title: "Speed Internet" },
                { icon: <Sparkles className="w-6 h-6 mx-auto text-[#addfac]" />, title: "Smart Lock" },
                { icon: <Coffee className="w-6 h-6 mx-auto text-[#addfac]" />, title: "Gym Center" },
                { icon: <Utensils className="w-6 h-6 mx-auto text-[#addfac]" />, title: "Breakfast" },
                { icon: <Waves className="w-6 h-6 mx-auto text-[#addfac]" />, title: "Swimming Pool" }
              ].map((service, index) => (
                <div key={index} className="p-6 rounded-lg bg-[#242424]/40 border border-stone-800/60 hover:border-[#addfac]/40 transition-colors group">
                  <div className="mb-3 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                  <span className="text-xs uppercase font-medium tracking-wider text-stone-300 block">{service.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCED TEAM SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-20 text-center">
            <div className="space-y-3 mb-16">
              <span className="text-xs uppercase tracking-widest text-[#addfac]">Team Member</span>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-200">Meet Our Experienced Team</h3>
              <div className="w-16 h-[1px] bg-[#addfac] mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-center">
              {[
                { name: "Julian Sterling", role: "General Manager", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
                { name: "Elena Rostova", role: "Head Concierge", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
                { name: "Marcus Vance", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400" },
                { name: "Amara Okoro", role: "Guest Relations", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
                { name: "Sylvia Thorne", role: "Spa & Wellness Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
                { name: "David Kim", role: "Operations Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
                { name: "Nathan Cross", role: "Sommelier", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
              ].map((member, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-full aspect-[3/4] rounded-t-full overflow-hidden border border-stone-800 shadow-xl relative bg-stone-900">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover filter brightness-90 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-stone-200 text-lg">{member.name}</h4>
                    <p className="text-xs text-[#addfac]/80 tracking-widest uppercase mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* --- STANDALONE ROOMS VIEW --- */}
      {activePage === 'rooms' && (
        <div className="animate-fadeIn pb-24">
          {/* ROOMS BANNER SUB-HERO */}
          <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
            <img 
              src="pic 1.jpg" 
              alt="Rooms page banner" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1C]/50 to-[#1C1C1C]"></div>
            <div className="relative text-center space-y-3 z-10">
              <h1 className="text-4xl md:text-6xl font-serif italic text-stone-100 tracking-wide">Our Rooms</h1>
              <p className="text-xs uppercase tracking-[0.3em] text-[#addfac]">
                <span className="cursor-pointer" onClick={() => setActivePage('home')}>Home</span> 
                <span className="text-stone-600 mx-2">•</span> Exquisite Sanctums
              </p>
            </div>
          </section>

          {/* ROOM OPTIONS ICONIC ROW */}
          <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 border-b border-stone-800/80 pb-8">
              {[
                { icon: <Bed className="w-4 h-4 text-[#addfac]" />, label: "Comfortable Stay" },
                { icon: <Utensils className="w-4 h-4 text-[#addfac]" />, label: "Multi-Cuisine Restaurant" },
                { icon: <Sparkles className="w-4 h-4 text-[#addfac]" />, label: "Holistic Wellness" },
                { icon: <Layers className="w-4 h-4 text-[#addfac]" />, label: "Perfect Celebrations" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-stone-900/40 border border-stone-800 text-stone-300 text-xs tracking-wider uppercase font-medium">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ROOM GRID VIEW */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[
                { title: "Superior Room", desc: "Spacious rooms with modern amenities for a relaxing stay.", img: "img 1.jpg" },
                { title: "Deluxe Room", desc: "Comfortable Stay designed for a pleasant and peaceful stay.", img: "img 2.jpg" },
                { title: "Suite Room", desc: "Spacious suites with elegant ambiance and premium comfort.", img: "img 3.jpg" },
                { title: "Signature Ocean Suite", desc: "Panoramic oceanic views paired with bespoke mid-century modular interiors.", img: "img 4.jpg" },
                { title: "Whispering Waves Haven", desc: "A custom beach-level sanctuary featuring a private path to raw sand shores.", img: "img 5.jpg" },
                { title: "Sanctuary Penthouse", desc: "The absolute pinnacle of resort luxury, offering panoramic rooftop ocean vistas.", img: "img 6.jpg" }
              ].map((room, idx) => (
                <div key={idx} className="space-y-5 group">
                  <div className="relative rounded-2xl overflow-hidden border border-stone-900 shadow-2xl aspect-[1.22/1]">
                    <img 
                      src={room.img} 
                      alt={room.title} 
                      className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="text-center space-y-2 px-2">
                    <h3 className="text-xl font-serif text-[#addfac] tracking-wide group-hover:text-white transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-sm text-stone-400 font-light max-w-sm mx-auto leading-relaxed">
                      {room.desc}
                    </p>
                    <div className="pt-2">
                      <button className="text-xs uppercase tracking-widest font-semibold border-b border-[#addfac]/40 hover:border-[#addfac] text-stone-200 hover:text-white transition-all pb-1">
                        Reserve Sanctuary
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INTEGRATED MULTI-CUISINE FEATURE SPLIT BAR */}
          <section className="max-w-6xl mx-auto px-6 mt-16 pt-16 border-t border-stone-900 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs tracking-widest uppercase text-[#addfac] font-semibold block">Gourmet Dining</span>
              <h3 className="text-2xl font-serif text-stone-100 tracking-wide">Multi-Cuisine Restaurant</h3>
              <p className="text-sm text-stone-400 leading-relaxed font-light">
                Indulge in a delightful journey of flavors crafted for every palate. Our master chefs combine fresh organic coastal ingredients with culinary art.
              </p>
            </div>
            <div className="md:col-span-7 h-48 md:h-64 rounded-xl overflow-hidden border border-stone-900 shadow-xl">
              <img 
                src="pic 1.jpg" 
                alt="Whisper of the Sea dining area" 
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          </section>
        </div>
      )}

{/* --- MULTI STEP BOOKING PAGE --- */}
{activePage === 'booking' && (
  <div className="animate-fadeIn min-h-screen bg-[#1C1C1C] text-white">

    {/* HERO */}
    <section className="relative h-[320px] overflow-hidden flex items-center justify-center">
      <img
        src="pic 1.jpg"
        alt="Booking"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#1C1C1C]"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-serif italic text-white">
          Luxury Reservation
        </h1>

        <p className="mt-4 text-sm tracking-[0.3em] uppercase text-[#addfac]">
          Complete Your Booking Experience
        </p>
      </div>
    </section>

    {/* FORM */}
    <section className="max-w-5xl mx-auto px-6 py-16">

      <div className="bg-[#242424]/50 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden">

        {/* TOP STEP BAR */}
        <div className="border-b border-stone-800 p-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* STEP 1 */}
            <div className="flex items-center gap-4">

              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                bookingStep >= 1
                  ? "bg-[#addfac] text-black"
                  : "bg-stone-800 text-white"
              }`}>
                1
              </div>

              <div>
                <h3 className="text-white font-semibold">Client Information</h3>
                <p className="text-xs text-stone-400">
                  Personal Details
                </p>
              </div>

            </div>

            <div className="hidden md:block w-20 h-[1px] bg-stone-700"></div>

            {/* STEP 2 */}
            <div className="flex items-center gap-4">

              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                bookingStep >= 2
                  ? "bg-[#addfac] text-black"
                  : "bg-stone-800 text-white"
              }`}>
                2
              </div>

              <div>
                <h3 className="text-white font-semibold">Room Reservation</h3>
                <p className="text-xs text-stone-400">
                  Booking Schedule
                </p>
              </div>

            </div>

            <div className="hidden md:block w-20 h-[1px] bg-stone-700"></div>

            {/* STEP 3 */}
            <div className="flex items-center gap-4">

              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                bookingStep >= 3
                  ? "bg-[#addfac] text-black"
                  : "bg-stone-800 text-white"
              }`}>
                3
              </div>

              <div>
                <h3 className="text-white font-semibold">Billing Payment</h3>
                <p className="text-xs text-stone-400">
                  Secure Checkout
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* PAGE CONTENT */}
        <div className="p-8 md:p-12 space-y-10">

          {/* ================= STEP 1 ================= */}
          {bookingStep === 1 && (
            <>
              <div>
                <h2 className="text-3xl font-serif text-white">
                  Guest Information
                </h2>

                <p className="text-stone-400 text-sm mt-3 leading-relaxed">
                  Please provide your complete personal information for your
                  reservation confirmation.
                </p>
              </div>

              {/* FORM GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac] transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac] transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac] transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+63 9123456789"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac] transition"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Complete Address
                  </label>

                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac] transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Country
                  </label>

                  <select className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]">
                    <option>Philippines</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Japan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Valid ID Type
                  </label>

                  <select className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]">
                    <option>Passport</option>
                    <option>Driver License</option>
                    <option>National ID</option>
                  </select>
                </div>

              </div>

              {/* NEXT BUTTON */}
              <div className="flex justify-end pt-4">

                <button
                  onClick={() => setBookingStep(2)}
                  className="bg-gradient-to-r from-teal-600 to-[#addfac] text-black px-10 py-4 rounded-xl font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Continue Reservation
                </button>

              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {bookingStep === 2 && (
            <>
              <div>
                <h2 className="text-3xl font-serif text-white">
                  Room Reservation
                </h2>

                <p className="text-stone-400 text-sm mt-3 leading-relaxed">
                  Select your booking schedule and room preferences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Check In
                  </label>

                  <input
                    type="date"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Check Out
                  </label>

                  <input
                    type="date"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Guests
                  </label>

                  <select className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Room Type
                  </label>

                  <select className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]">
                    <option>Deluxe Room</option>
                    <option>Executive Suite</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex items-center justify-between pt-4">

                <button
                  onClick={() => setBookingStep(1)}
                  className="border border-stone-700 px-8 py-4 rounded-xl uppercase tracking-widest hover:bg-stone-800 transition"
                >
                  Previous
                </button>

                <button
                  onClick={() => setBookingStep(3)}
                  className="bg-gradient-to-r from-teal-600 to-[#addfac] text-black px-10 py-4 rounded-xl font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Continue
                </button>

              </div>
            </>
          )}

          {/* ================= STEP 3 ================= */}
          {bookingStep === 3 && (
            <>
              <div>
                <h2 className="text-3xl font-serif text-white">
                  Billing Payment
                </h2>

                <p className="text-stone-400 text-sm mt-3 leading-relaxed">
                  Complete your secure payment process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Card Holder Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">
                    Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="**
**
** 1234"
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-5 py-4 outline-none focus:border-[#addfac]"
                  />
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex items-center justify-between pt-4">

                <button
                  onClick={() => setBookingStep(2)}
                  className="border border-stone-700 px-8 py-4 rounded-xl uppercase tracking-widest hover:bg-stone-800 transition"
                >
                  Previous
                </button>

                <button
                  className="bg-gradient-to-r from-teal-600 to-[#addfac] text-black px-10 py-4 rounded-xl font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Confirm Booking
                </button>

              </div>
            </>
          )}

        </div>

      </div>

    </section>

  </div>
)}
      {/* --- STANDALONE CONTACT VIEW (Brand New Implementation based on reference images) --- */}
      {activePage === 'contact' && (
        <div className="animate-fadeIn">
          {/* CONTACT HERO BANNER */}
          <section className="relative w-full h-[260px] md:h-[340px] overflow-hidden flex items-center justify-center">
            <img 
              src="pic 1.jpg" 
              alt="Contact sanctuary overview" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1C]/60 to-[#1C1C1C]"></div>
            <div className="relative text-center space-y-2.5 z-10">
              <h1 className="text-4xl md:text-5xl font-serif italic text-stone-100 tracking-wide">Contact Us</h1>
              <p className="text-xs uppercase tracking-[0.25em] text-[#addfac]">
                <span className="cursor-pointer" onClick={() => setActivePage('home')}>Home</span> 
                <span className="text-stone-600 mx-1.5">•</span> Get In Touch With Us
              </p>
            </div>
          </section>

          {/* MAIN DUAL CANVAS BLOCK */}
          <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: INFORMATIONAL GRID CARDS & INTERACTIVE MAP MAPPER */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 1: Phone */}
                <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#addfac]/30 transition-all text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#addfac]/10 flex items-center justify-center mx-auto">
                    <Phone className="w-4 h-4 text-[#addfac]" />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-stone-200">Phone</h4>
                  <p className="text-xs text-stone-400 font-light font-mono">207-8767-452</p>
                </div>

                {/* Card 2: WhatsApp */}
                <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#addfac]/30 transition-all text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#addfac]/10 flex items-center justify-center mx-auto">
                    <MessageSquare className="w-4 h-4 text-[#addfac]" />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-stone-200">WhatsApp</h4>
                  <p className="text-xs text-stone-400 font-light font-mono">082-123-234-345</p>
                </div>

                {/* Card 3: Email */}
                <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#addfac]/30 transition-all text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#addfac]/10 flex items-center justify-center mx-auto">
                    <Mail className="w-4 h-4 text-[#addfac]" />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-stone-200">Email</h4>
                  <p className="text-xs text-stone-400 font-light break-all">support@whispersea.com</p>
                </div>

                {/* Card 4: Our Shop / Resort Address */}
                <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#addfac]/30 transition-all text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#addfac]/10 flex items-center justify-center mx-auto">
                    <Store className="w-4 h-4 text-[#addfac]" />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-stone-200">Our Resort</h4>
                  <p className="text-xs text-stone-400 font-light leading-snug">2443 Oak Ridge Road, CA 94103</p>
                </div>
              </div>

              {/* INTEGRATED MAP VIEWPORT CANVAS PLACEHOLDER */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800/80 shadow-xl bg-stone-900/20 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
                <iframe 
                  title="Resort Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-none filter brightness-75 contrast-125 grayscale invert"
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-stone-800/60 rounded-2xl"></div>
              </div>
            </div>

            {/* RIGHT COLUMN: HIGH FIDELITY INTERACTIVE INPUT FORM WORKSPACE */}
            <div className="lg:col-span-7 bg-[#242424]/40 border border-stone-900/80 p-6 md:p-10 rounded-2xl shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#addfac]">Get In Touch</span>
                <h2 className="text-2xl md:text-3xl font-serif text-stone-100">Send Us A Message</h2>
                <p className="text-xs text-stone-400 max-w-xl leading-relaxed font-light">
                  Have inquiries about our luxury suites, events custom arrangements, or private dining plans? Leave us a request parameters note below.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium block">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#1C1C1C] border border-stone-800 focus:border-[#addfac]/60 rounded px-4 py-3 text-xs text-stone-200 placeholder-stone-600 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium block">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="example@journal.com"
                      className="w-full bg-[#1C1C1C] border border-stone-800 focus:border-[#addfac]/60 rounded px-4 py-3 text-xs text-stone-200 placeholder-stone-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium block">Subject Topic</label>
                  <input 
                    type="text" 
                    placeholder="Reservation Inquiry / Special Arrangements"
                    className="w-full bg-[#1C1C1C] border border-stone-800 focus:border-[#addfac]/60 rounded px-4 py-3 text-xs text-stone-200 placeholder-stone-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium block">Message Body</label>
                  <textarea 
                    rows={5}
                    placeholder="Describe your requested premium dates or custom services requirements..."
                    className="w-full bg-[#1C1C1C] border border-stone-800 focus:border-[#addfac]/60 rounded px-4 py-3 text-xs text-stone-200 placeholder-stone-600 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-gradient-to-r from-teal-600 to-[#addfac] text-black font-semibold text-xs py-3.5 rounded tracking-widest uppercase hover:brightness-110 transition-all shadow-md shadow-[#addfac]/5">
                    Send Message Now
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* INTEGRATED FOOTER METRICS SYSTEM */}
          <footer className="w-full bg-stone-950/40 border-t border-stone-900 mt-16 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-xs tracking-wide text-stone-400">
              <div className="space-y-3">
                <h5 className="font-serif text-[#addfac] text-sm tracking-wider uppercase font-medium">Whisper of the Sea</h5>
                <p className="font-light leading-relaxed">Pristine California eco-elegance. Complete deep coastal luxury sanctuary infrastructure.</p>
              </div>
              <div className="space-y-2">
                <h5 className="text-stone-200 font-semibold tracking-widest uppercase text-[10px]">Quick Travel Links</h5>
                <ul className="space-y-1 font-light">
                  <li className="hover:text-[#addfac] cursor-pointer" onClick={() => setActivePage('home')}>Main Home Desk</li>
                  <li className="hover:text-[#addfac] cursor-pointer" onClick={() => setActivePage('about')}>Our Eco Profile</li>
                  <li className="hover:text-[#addfac] cursor-pointer" onClick={() => setActivePage('rooms')}>Reserve Sanctuary Room</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="text-stone-200 font-semibold tracking-widest uppercase text-[10px]">Legal Terms</h5>
                <ul className="space-y-1 font-light">
                  <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                  <li className="hover:text-white cursor-pointer">Privacy Framework</li>
                  <li className="hover:text-white cursor-pointer">Support Center</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="text-stone-200 font-semibold tracking-widest uppercase text-[10px]">Direct Hotlines</h5>
                <p className="font-mono font-light text-stone-300">HQ: 207-8767-452</p>
                <p className="font-light break-all">support@whispersea.com</p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 text-center text-[10px] tracking-widest text-stone-600 mt-10 pt-4 border-t border-stone-900/50">
              © 2026 Whisper of the Sea Hotel & Resort | Created Elegance
            </div>
          </footer>
        </div>
      )}

    </div>
  );
}