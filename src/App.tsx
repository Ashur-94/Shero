/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA, Category, MenuItem } from './data/menu';

const BARISTA_PHOTO = "https://i.ibb.co/LzfVbvfQ/photo-2026-05-15-14-58-03.jpg";

const GALLERY_IMAGES = [
  "https://i.ibb.co/DP5b16vJ/photo-1-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/vCgJMtMD/photo-2-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/Y4shJ9ZF/photo-3-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/Z1BH15mt/photo-4-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/21t2czYj/photo-5-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/wmqM9RS/photo-6-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/DHvcN2Wt/photo-7-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/21VcPGRg/photo-8-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/hFFyw5GB/photo-9-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/RkmCqBXm/photo-10-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/RkBYNqL1/photo-11-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/nqVz0XVZ/photo-12-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/qMWLMDNr/photo-13-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/0y8w6Rcr/photo-14-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/gsX7d6z/photo-15-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/WNdcqVNy/photo-16-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/Zp5JJ0kX/photo-17-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/SXmRsbbQ/photo-18-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/5WjFgw56/photo-19-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/sdyxNGKF/photo-20-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/VWCRKmwK/photo-21-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/twyGzpDr/photo-22-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/JFc2cZd9/photo-23-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/zWDJ88z6/photo-24-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/0jcV6ngT/photo-25-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/d4XZBQrz/photo-26-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/6036KcT3/photo-27-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/Ld3ffqRW/photo-28-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/zHT2BMD7/photo-29-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/20bkvMf7/photo-30-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/8gV6qZJn/photo-31-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/v4wxByZt/photo-32-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/M5fSFdn3/photo-33-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/0ywrGrRc/photo-34-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/V0YgHDQG/photo-35-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/HpYbymwB/photo-36-2026-05-15-23-44-42.jpg",
  "https://i.ibb.co/ynKGrMsn/photo-37-2026-05-15-23-44-42.jpg",
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const activeCategoryData = useMemo(() => 
    MENU_DATA.find(cat => cat.id === activeCategory), [activeCategory]);

  const filteredItems = useMemo(() => {
    if (searchQuery.trim() === '') {
      return activeCategoryData?.items || [];
    }
    
    // Search across all categories
    return MENU_DATA.flatMap(cat => cat.items).filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategoryData, searchQuery]);

  const categories = MENU_DATA.map(cat => ({ id: cat.id, name: cat.name, color: cat.color }));

  return (
    <div className="min-h-screen bg-natural-100 selection:bg-natural-300 selection:text-natural-900">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-natural-900 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-12 rounded-[1.5rem] bg-natural-800 flex items-center justify-center text-natural-100 font-serif italic text-4xl shadow-2xl rotate-3">
                S
              </div>
              <h1 className="text-2xl font-serif text-natural-100 tracking-[0.2em] text-center mb-4 font-light">
                SHERZAD JAMAL
              </h1>
              <div className="flex items-center gap-6">
                <div className="w-10 h-px bg-natural-700/50" />
                <p className="text-natural-500 font-sans tracking-[0.4em] uppercase text-[8px] font-bold">
                  SPECIALIST
                </p>
                <div className="w-10 h-px bg-natural-700/50" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md mx-auto min-h-screen flex flex-col pt-0 pb-12"
          >
            {/* Nav Header */}
            <header className="h-32 flex flex-col justify-center px-10 glass-header elegant-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-natural-500/10 rounded-full -mr-16 -mt-16 blur-3xl shadow-2xl" />
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-[1.2rem] bg-natural-800 flex items-center justify-center text-natural-100 font-serif italic text-3xl shadow-xl shadow-natural-800/20 rotate-3">
                    S
                  </div>
                  <div>
                    <h1 className="font-serif text-2xl font-light tracking-tight text-natural-800 leading-tight">
                      Sherzad <span className="text-natural-500 italic block -mt-1">Jamal</span>
                    </h1>
                    <p className="text-[9px] uppercase tracking-[0.5em] text-natural-400 font-bold mt-1">Specialist Barista</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowGallery(true)}
                    className="px-4 py-2 rounded-xl bg-natural-200/50 text-natural-700 hover:bg-natural-800 hover:text-white transition-all active:scale-95 text-[10px] font-bold tracking-[0.2em]"
                  >
                    GALLERY
                  </button>
                  <button 
                    onClick={() => setShowInfo(true)}
                    className="px-4 py-2 rounded-xl bg-natural-200/50 text-natural-700 hover:bg-natural-800 hover:text-white transition-all active:scale-95 text-[10px] font-bold tracking-[0.2em]"
                  >
                    INFO
                  </button>
                </div>
              </div>
            </header>

            <div className="px-8 pt-12 relative">
              <div className="absolute top-40 -left-20 w-64 h-64 bg-natural-500/5 rounded-full blur-3xl" />
              
              {/* Search Bar - Refined Pill Shape */}
              <div className="relative group mb-14 px-2">
                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[9px] font-bold text-natural-300 transition-colors group-focus-within:text-natural-500 tracking-[0.2em]">
                  FIND
                </div>
                <input
                  type="text"
                  placeholder="Your companion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-0 py-5 pl-20 pr-8 rounded-[2rem] outline-none shadow-sm focus:shadow-xl focus:shadow-natural-500/10 transition-all text-natural-800 placeholder:text-natural-300 text-sm font-light ring-1 ring-natural-300/30 focus:ring-natural-400/50"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-8 top-1/2 -translate-y-1/2 px-2 py-1 rounded-lg hover:bg-natural-100 text-natural-400 transition-colors text-[9px] font-bold"
                  >
                    CLEAR
                  </button>
                )}
              </div>

              {/* Category Nav - Refined Pill Tabs */}
              {searchQuery === '' && (
                <div className="mb-14 overflow-hidden">
                  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6 mask-linear px-2">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`
                            whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all border
                            ${isActive 
                              ? 'bg-natural-800 text-white border-natural-800 shadow-lg shadow-natural-800/20' 
                              : 'bg-white text-natural-400 border-natural-200 hover:border-natural-400 hover:text-natural-600'}
                          `}
                        >
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Drinks Grid */}
              <div className="flex flex-col gap-14 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif italic text-4xl text-natural-800">
                    {searchQuery !== '' ? 'Search Results' : activeCategoryData?.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-natural-400 font-bold whitespace-nowrap bg-white px-5 py-2 rounded-full shadow-sm border border-natural-200/50">
                      {filteredItems.length} items
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setSelectedItem(item)}
                        className="group flex items-center justify-between p-6 cursor-pointer bg-white rounded-[2.8rem] shadow-sm hover:shadow-2xl hover:shadow-natural-500/10 transition-all duration-500 border border-natural-200/50 hover:border-natural-400/30"
                      >
                        <div className="flex items-center gap-6 min-w-0">
                          <div className="min-w-0">
                            <h4 className="text-xl tracking-tight text-natural-800 font-light group-hover:text-natural-500 transition-colors duration-500 truncate">
                              {item.name}
                            </h4>
                            <p className="text-[9px] uppercase tracking-widest text-natural-300 font-bold mt-1 group-hover:text-natural-400 transition-colors">Specialty Hand-Crafted</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <span className="text-[10px] font-bold text-natural-300 group-hover:text-natural-800 transition-colors tracking-widest uppercase">
                            View
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>


                {filteredItems.length === 0 && (
                  <div className="py-20 text-center">
                    <p className="font-serif italic text-natural-400">No selection matches your search</p>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Footer */}
            <footer className="mt-auto pt-32 pb-20 px-10 text-center relative overflow-hidden bg-gradient-to-t from-natural-500/5 to-transparent">
              <div className="flex flex-col items-center gap-8 relative z-10">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.6em] text-natural-500 font-bold mb-4">
                    Atelier Sherzad
                  </p>
                  <p className="text-[10px] text-natural-400 italic max-w-[260px] mx-auto leading-relaxed font-light">
                    "Every cup is a conversation between tradition and contemporary specialty culture."
                  </p>
                </div>
                <div className="flex gap-4 opacity-5 mt-4">
                  <div className="w-12 h-px bg-natural-800" />
                  <div className="w-12 h-px bg-natural-800" />
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Gallery Page Overlay */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-natural-100 flex flex-col overflow-y-auto no-scrollbar"
          >
            <div className="max-w-md mx-auto w-full flex flex-col min-h-screen">
              {/* Gallery Header */}
              <header className="h-28 flex items-center justify-between px-8 bg-natural-100 sticky top-0 z-10">
                <button 
                  onClick={() => setShowGallery(false)}
                  className="px-4 py-2 rounded-xl bg-natural-200/50 text-natural-800 transition-all active:scale-90 text-[10px] font-bold tracking-[0.2em]"
                >
                  BACK
                </button>
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-natural-400">Gallery</h2>
                <div className="w-12" /> {/* Spacer */}
              </header>

              <div className="px-5 pb-12">
                <div className="grid grid-cols-2 gap-4">
                  {GALLERY_IMAGES.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      onClick={() => setSelectedGalleryImage(img)}
                      className="aspect-square rounded-3xl overflow-hidden bg-natural-200 shadow-sm border border-white/40 cursor-pointer"
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${idx}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Closing */}
                <div className="mt-16 text-center">
                  <div className="w-12 h-px bg-natural-300 mx-auto mb-8" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-natural-300 font-bold leading-relaxed px-12">
                    Moments of craftsmanship and specialty details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Image Preview Overlay */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-natural-900/90 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute inset-0"
            />
            
            <div className="relative w-full max-w-lg flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
              >
                <img 
                  src={selectedGalleryImage} 
                  alt="Gallery Preview"
                  className="max-h-[75vh] w-auto h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <button 
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 text-[10px] font-bold tracking-[0.2em] border border-white/10 backdrop-blur-md"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Page Overlay */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-natural-100 flex flex-col overflow-y-auto no-scrollbar"
          >
            <div className="max-w-md mx-auto w-full flex flex-col min-h-screen">
              {/* Info Header */}
              <header className="h-28 flex items-center justify-between px-8 bg-natural-100 sticky top-0 z-10">
                <button 
                  onClick={() => setShowInfo(false)}
                  className="px-4 py-2 rounded-xl bg-natural-200/50 text-natural-800 transition-all active:scale-90 text-[10px] font-bold tracking-[0.2em]"
                >
                  BACK
                </button>
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-natural-400">Information</h2>
                <div className="w-12" /> {/* Spacer */}
              </header>

              <div className="px-8 pb-12">
                {/* Profile Image Section */}
                <div className="relative mb-12">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-natural-200 shadow-2xl">
                    <img 
                      src={BARISTA_PHOTO} 
                      alt="Sherzad Jamal"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-natural-900 px-6 py-3 rounded-full shadow-xl">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-natural-100 font-bold whitespace-nowrap">
                      Specialist Barista
                    </p>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-serif text-natural-800 mb-3 font-light">Sherzad Jamal</h1>
                  <p className="text-sm text-natural-400 font-light max-w-[280px] mx-auto leading-relaxed italic">
                    "Crafting coffee is not just a profession, it's an art form of balance and precision."
                  </p>
                </div>

                {/* Contact List */}
                <div className="space-y-6">
                  <a 
                    href="tel:07512051518"
                    className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-natural-300/10 shadow-sm hover:shadow-xl hover:shadow-natural-500/5 transition-all active:scale-[0.98]"
                  >
                    <div className="w-14 h-14 rounded-3xl bg-natural-100 flex items-center justify-center text-natural-800 text-[10px] font-bold uppercase tracking-tighter">
                      Tel
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-natural-400 mb-1.5 font-bold">Inquiries</p>
                      <p className="text-lg font-mono text-natural-800 tracking-tight">0751 205 1518</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/sher_zebary?igsh=MXVvaDcwMXV4bXczaA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-natural-300/10 shadow-sm hover:shadow-xl hover:shadow-natural-500/5 transition-all active:scale-[0.98]"
                  >
                    <div className="w-14 h-14 rounded-3xl bg-pink-50 flex items-center justify-center text-pink-500 text-[10px] font-bold uppercase tracking-tighter">
                      IG
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-natural-400 mb-1.5 font-bold">Atelier Social</p>
                      <p className="text-lg text-natural-800 font-light italic">@sher_zebary</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 p-8 bg-natural-200/50 rounded-[2.5rem] border border-natural-300/10">
                    <div className="w-14 h-14 rounded-3xl bg-natural-200/50 flex items-center justify-center text-natural-800 text-[10px] font-bold uppercase tracking-tighter">
                      Loc
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-natural-400 mb-1.5 font-bold">Studio</p>
                      <p className="text-lg text-natural-500 font-light">Duhok, Kurdistan</p>
                    </div>
                  </div>
                </div>

                {/* Closing */}
                <div className="mt-16 text-center">
                  <div className="w-12 h-px bg-natural-300 mx-auto mb-8" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-natural-300 font-bold leading-relaxed px-12">
                    Available for consultations and specialty event catering.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Overlay - Theme Adjusted */}
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-natural-900/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0"
            />
            <motion.div
              layoutId={selectedItem.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative w-full max-w-sm bg-natural-100 rounded-[3rem] overflow-hidden shadow-2xl border border-white/40"
            >
              <div className="p-12">
                <div className="flex justify-between items-start mb-12">
                  <div className="pr-4">
                    <h3 className="text-4xl font-serif text-natural-800 leading-[1.1] font-light">
                      {selectedItem.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-6">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-natural-500 font-bold">
                        The Selection
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="flex-shrink-0 px-4 py-2 rounded-xl bg-natural-200/50 text-natural-400 hover:bg-natural-800 hover:text-white transition-all active:scale-90 text-[10px] font-bold"
                  >
                    BACK
                  </button>
                </div>

                <div className="space-y-10 mb-12">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-natural-600 font-light tracking-tight italic">Premium Sourced Beans</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-natural-600 font-light tracking-tight italic">Barista Signature Profile</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="pill-button w-full font-bold text-[11px] uppercase tracking-[0.3em] transition-all bg-natural-800 text-white shadow-xl shadow-natural-800/20"
                  >
                    Close Selection
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
