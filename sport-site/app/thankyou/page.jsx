"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import "../styles/thankyou.css";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const { t } = useLanguage();

  return (
    <div className="thankyou_wrapper">
      <Navbar />
      <section className="thankyou_section">
        <motion.div
          className="thankyou_card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="thankyou_title">{t("thankyou_title")}</h1>
          <p className="thankyou_subtitle">{t("thankyou_subtitle")}</p>

          <div className="thankyou_info">
            <p>{t("thankyou_note")}</p>
            <p>{t("thankyou_refund")}</p>
          </div>

          <Link href="/" className="home_btn">
            {t("thankyou_home")}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
