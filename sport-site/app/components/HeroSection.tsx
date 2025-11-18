"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/herosection.css";

export default function HeroSection() {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="hero_section">

      {/* TEXT */}
      <div className="hero_content">
        <h1 className="hero_title">
          {t("hero_title")} <span className="hero_highlight">{t("hero_here")}</span>
        </h1>

        <p className="hero_subtext">{t("hero_subtext")}</p>

        <a href="#plans" className="hero_btn">
          {t("hero_button")}
        </a>
      </div>

      {/* BOX CU 6 IMAGINI */}
      <div className="hero_gallery_box" onClick={() => setShowVideo(true)}>
        <div className="hero_gallery_grid">
          <div className="hero_cell"><img src="/images/hero/1.webp" className="hero_gallery_img" /></div>
          <div className="hero_cell"><img src="/images/hero/2.webp" className="hero_gallery_img" /></div>
          <div className="hero_cell"><img src="/images/hero/3.webp" className="hero_gallery_img" /></div>
          <div className="hero_cell hide_mobile"><img src="/images/hero/4.webp" className="hero_gallery_img" /></div>
      
        <div className="hero_cell "><img src="/images/hero/5.webp" className="hero_gallery_img" /></div>
        <div className="hero_cell hide_mobile"><img src="/images/hero/6.webp" className="hero_gallery_img" /></div>
  </div>

        {/* Play BTN */}
        <div className="hero_play_btn"></div>
      </div>

      {/* VIDEO OVERLAY */}
      {showVideo && (
        <div className="hero_video_modal">
          <div className="hero_video_inner">
            <video src="/videos/intro.mp4" autoPlay controls />
          </div>

          <div className="hero_close_video" onClick={() => setShowVideo(false)}>
            ✕
          </div>
        </div>
      )}

    </section>
  );
}
