"use client";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import "../styles/transformations.css";

export default function TransformationsSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    "images/clients/r1.webp",
    "images/clients/r2.webp",
    "images/clients/r3.webp",
   "images/clients/r4.webp",
    "images/clients/r5.webp",
    "images/clients/r6.webp",
    "images/clients/r7.webp",
    "images/clients/r8.webp",
    
  ];

  // 🔍 Detectăm dacă e mobil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🖥️ Auto-scroll pe desktop
  useEffect(() => {
    if (isMobile) return;
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.3;
    const maxScroll = container.scrollWidth / 2;

    const scroll = () => {
      if (!container) return;
      scrollAmount += speed;
      if (scrollAmount >= maxScroll) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const anim = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(anim);
  }, [isMobile]);

  // 📱 Slide automat pe mobil
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, clients.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <section id="transformations" className="transformations_section">
      <h2 className="transformations_title">{t("transformations_title")}</h2>
      <p className="transformations_sub">{t("transformations_sub")}</p>

      {/* === Desktop carousel === */}
      {!isMobile && (
        <div className="transformations_carousel" ref={scrollRef}>
          {[...clients, ...clients].map((src, idx) => (
            <div key={idx} className="transformation_card">
              <img src={src} alt={`Transformation ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}

      {/* === Mobile slideshow === */}
      {isMobile && (
        <div className="mobile_slider">
          <button className="arrow left" onClick={handlePrev}>
            ‹
          </button>
          <div className="mobile_slide">
            <img src={clients[currentIndex]} alt="Transformation" />
          </div>
          <button className="arrow right" onClick={handleNext}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}
