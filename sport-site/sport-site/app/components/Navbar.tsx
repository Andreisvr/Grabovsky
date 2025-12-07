"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import "../styles/navbar.css"; // ✅ Import stilurile separat
import Link from "next/link";


export default function Navbar() {
  const { lang, t, cycleLanguage } = useLanguage();

  const langIcons = {
    ru: "🇷🇺",
    ro: "🇷🇴",
    en: "🇬🇧",
  };

  return (
    <nav className="nav_container">
      <div className="nav_inner">
        {/* LOGO */}
        <Link href="/" className="nav_logo" style={{ cursor: "pointer" }}>
  <Image
    src="/images/logogf.png"
    alt="Grabovsky Fit Logo"
    width={140}
    height={60}
    priority
    className="nav_logo_img"
  />
</Link>

        {/* LINKS */}
        <ul className="nav_links">
          <li>
            <a href="/#plans" className="nav_link">
              {t("plans")}
            </a>
          </li>
          <li>
            <a href="/#coach" className="nav_link">
              {t("coach")}
            </a>
          </li>
          <li>
            <a href="/#transformations" className="nav_link">
              {t("transformations")}
            </a>
          </li>
        </ul>

        {/* BUTTONS */}
        <div className="nav_buttons">
        <a href="/#plans" className="nav_getplan">
  {t("getPlan")}
</a>

          <button
            onClick={cycleLanguage}
            className="nav_lang_btn"
            title="Change language"
          >
            {langIcons[lang]}
          </button>
        </div>
      </div>
    </nav>
  );
}
