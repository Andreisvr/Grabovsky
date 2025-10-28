"use client";
import { useLanguage } from "../context/LanguageContext";
import "../styles/herosection.css";

export default function HeroSection() {
  const { t } = useLanguage();

  // 🔧 setează imaginea de fundal (sau lasă gol pentru gradient)
  const backgroundImage = "/images/logo6.webp";

  return (
    <section className="hero_section">
      {/* === Imaginea de fundal (independentă de text) === */}
      {backgroundImage && (
        <div
          className="hero_bg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      )}

      {/* === Textul de deasupra imaginii === */}
      <div className="hero_content">
        <h1 className="hero_title">
          {t("hero_title")}{" "}
          <span className="hero_highlight">{t("hero_here")}</span>
        </h1>

        <p className="hero_subtext">{t("hero_subtext")}</p>
        
        <button className="hero_btn">{t("hero_button")}</button>
      </div>
    </section>
  );
}
