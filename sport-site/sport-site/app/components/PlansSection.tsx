"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/plans.css";
import { FiCheckCircle } from "react-icons/fi";

export default function PlansSection() {
  const [open, setOpen] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  const services = [
    {
      key: "online",
      tag: t("plan_online_tag"),
      title: t("plan_online_title"),
      highlight: true,

      bullets: [
        t("plan_online_short1"),
        t("plan_online_short2"),
        t("plan_online_short3"),
        t("plan_online_short4"),
        t("plan_online_short5"),
      ],

      includes: [
        t("plan_online_inc1"),
        t("plan_online_inc2"),
        t("plan_online_inc3"),
        t("plan_online_inc4"),
      ],

      details: (
        <>
          <h3>{t("plan_online_details_title")}</h3>
          <p>{t("plan_online_details_text")}</p>

          <h3>{t("plan_online_price_title")}</h3>
          <p>{t("plan_online_price1")}</p>
          <p>{t("plan_online_price2")}</p>
          <p>{t("plan_online_price3")}</p>
        </>
      ),
    },

    {
      key: "personal",
      tag: t("plan_personal_tag"),
      title: t("plan_personal_title"),
      highlight: false,

      bullets: [
        t("plan_personal_short1"),
        t("plan_personal_short2"),
        t("plan_personal_short3"),
        t("plan_personal_short4"),
        t("plan_personal_short5"),
      ],

      includes: [t("plan_personal_inc1"), t("plan_personal_inc2")],

      details: (
        <>
          <h3>{t("plan_personal_details_title")}</h3>
          <p>{t("plan_personal_details_text")}</p>

          <h3>{t("plan_personal_price_title")}</h3>
          <p>{t("plan_personal_price1")}</p>
          <p>{t("plan_personal_price2")}</p>
        </>
      ),
    },

    {
      key: "consult",
      tag: t("plan_consult_tag"),
      title: t("plan_consult_title"),
      highlight: false,

      bullets: [
        t("plan_consult_short1"),
        t("plan_consult_short2"),
        t("plan_consult_short3"),
        t("plan_consult_short4"),
        t("plan_consult_short5"),
      ],

      includes: [t("plan_consult_inc1")],

      details: (
        <>
          <h3>{t("plan_consult_details_title")}</h3>
          <p>{t("plan_consult_details_text")}</p>

          <h3>{t("plan_consult_price_title")}</h3>
          <p>{t("plan_consult_price1")}</p>
        </>
      ),
    },
  ];

  return (
    <section className="plan_section" id="plans">
      <h2 className="plan_title">{t("plans_title")}</h2>

      <div className="plan_grid">
        {services.map((s) => {
          const isOpen = open === s.key;

          return (
            <div
              key={s.key}
              className={`plan_card ${s.highlight ? "plan_gold" : "plan_white"}`}
            >
              {/* TAG */}
              <div className="plan_tag">{s.tag}</div>

              {/* TITLE */}
              <h3 className="plan_card_title">{s.title}</h3>

              {/* MAIN BUTTON */}
              <div className="plan_btn_wrap">
                <span className="plan_discount_tag">
                  {s.key === "online" && "-30%"}
                  {s.key === "personal" && "-25%"}
                  {s.key === "consult" && "-20%"}
                </span>

                <button
                  onClick={() => (window.location.href = "/plans")}
                  className={`plan_btn_main ${s.highlight ? "plan_gold_btn" : ""}`}
                >
                  {t("plans_start")}
                </button>
              </div>

              <div className="plan_divider"></div>

              {/* BENEFITS */}
              <ul className="plan_short_list">
                {s.bullets.map((b: string, i: number) => (
                  <li key={i}>
                    <FiCheckCircle className="plan_check_icon" /> {b}
                  </li>
                ))}
              </ul>

              {/* EXPAND */}
              <button className="plan_expand_btn" onClick={() => toggle(s.key)}>
                {isOpen ? t("plans_hide") : t("plans_show")}
              </button>

              <div className={`plan_expand_content ${isOpen ? "open" : ""}`}>
                {s.details}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}