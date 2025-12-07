"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import "../styles/selection.css";
import Image from "next/image";
import { useEffect } from "react"; // sus lângă celelalte importuri


export default function PlansPage() {
  const { t } = useLanguage();

  const [step, setStep] = useState<"main" | "options" | "form" | "qr">("main");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [error, setError] = useState("");

  const plans = [
    {
      key: "online",
      title: t("plan_online_title"),
      desc: t("plan_online_details_text"),
      color: "#f8d22a",
    },
    {
      key: "personal",
      title: t("plan_personal_title"),
      desc: t("plan_personal_details_text"),
      color: "#ff9f1c",
    },
    {
      key: "consult",
      title: t("plan_consult_title"),
      desc: t("plan_consult_details_text"),
      color: "#00bcd4",
    },
  ];

  const options: Record<string, any[]> = {
    online: [
      { label: "1 " + t("session"), old: 600, new: 550, eur: 28, validity: "1 " + t("month"), discount: "-8%" },
      { label: "10 " + t("sessions"), old: 5000, new: 4500, eur: 225, validity: "3 " + t("months"), discount: "-10%" },
      { label: "36 " + t("sessions"), old: 18000, new: 15000, eur: 750, validity: "6 " + t("months"), discount: "-17%" },
    ],
  
    personal: [
      { label: "1 " + t("session"), old: 700, new: 650, eur: 32, validity: "1 " + t("month"), discount: "-7%" },
      { label: "10 " + t("sessions"), old: 6000, new: 5000, eur: 250, validity: "3 " + t("months"), discount: "-15%" },
      { label: "36 " + t("sessions"), old: 18000, new: 15000, eur: 750, validity: "6 " + t("months"), discount: "-20%" },
    ],
  
    consult: [
      { label: "1 " + t("consultation"), old: 500, new: 500, eur: 25, validity: "—", discount: " " },
      { label: "10 " + t("consultations"), old: 5000, new: 4500, eur: 225, validity: "6 " + t("months"), discount: "-10%" },
      { label: "36 " + t("consultations"), old: 18000, new: 16000, eur: 800, validity: "12 " + t("months"), discount: "-12%" },
    ],
  };
  

  useEffect(() => {
    if (step === "qr" && formData.name && formData.contact) {
      const timer = setTimeout(async () => {
        try {
          // Data curentă în format ușor de citit
          const now = new Date().toLocaleString("ro-RO", {
            timeZone: "Europe/Chisinau",
          });
  
          // Trimitem cererea spre endpointul deja existent /api/telegram
          const response =await fetch("/api/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payment: true,
              name: formData.name,
              contact: formData.contact,
              plan: selectedPlan ? selectedPlan.toUpperCase() : "-",
              option: selectedOption ? selectedOption.label : "-",
            }),
          });
  
          const data = await response.json();
  
          if (data.success) {
            console.log("✅ Mesaj de plată trimis către Telegram");
          } else {
            console.error("⚠️ Eroare la trimiterea spre Telegram:", data.error);
          }
        } catch (err) {
          console.error("❌ Eroare rețea Telegram:", err);
        }
      }, 100); // 120000 ms = 2 minute
  
      return () => clearTimeout(timer);
    }
  }, [step, formData]);
  
  const validateForm = () => {
    const nameOk = formData.name.trim().length >= 3;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telegramRegex = /^@[a-zA-Z0-9_]{4,}$/;
    const contactOk = emailRegex.test(formData.contact) || telegramRegex.test(formData.contact);

    if (!nameOk) {
      setError(t("error_name_short") || "Numele trebuie să aibă minim 3 caractere");
      return false;
    }
    if (!contactOk) {
      setError(t("error_invalid_contact") || "Contact invalid — folosește email sau @Telegram");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="plans_wrapper">
      <Navbar />
      <section className="plans_section">
        <h1 className="plans_title">{t("plans_title_service")}</h1>

        {/* === PAS 1 === */}
        {step === "main" && (
          <div className="plans_grid">
            {plans.map((p) => (
              <div
                key={p.key}
                className="plan_card_main"
                style={{ borderColor: p.color }}
                onClick={() => {
                  setSelectedPlan(p.key);
                  setStep("options");
                }}
              >
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
                <button style={{ background: p.color }}>{t("plans_start")}</button>
              </div>
            ))}
          </div>
        )}

        {/* === PAS 2 === */}
        {step === "options" && selectedPlan && (
          <div className="options_container">
            <h2>{t(`plan_${selectedPlan}_title`)}</h2>
            <p className="options_subtext">{t("choose_package")}</p>

            <div className="options_grid">
              {options[selectedPlan].map((opt, idx) => (
                <div
                  key={idx}
                  className="option_card"
                  onClick={() => {
                    setSelectedOption(opt);
                    setStep("form");
                  }}
                >
                  {opt.discount && (
                    <span className="discount_tag">{opt.discount}</span>
                  )}
                  <h3>{opt.label}</h3>
                  <div className="option_price">
                    <span className="old_price">{opt.old} MDL</span>
                    <span className="new_price">{opt.new} MDL</span>
                    <p className="eur_price">≈ {opt.eur} EUR</p>
                  </div>
                  <p className="option_note">
                    {t("validity")}: {opt.validity}
                  </p>
                </div>
              ))}
            </div>

            <button className="back_btn" onClick={() => setStep("main")}>
              ← {t("back")}
            </button>
          </div>
        )}

       {/* === PAS 3 === */}
{step === "form" && selectedOption && (
  <form
    className="payment_form"
    onSubmit={(e) => {
      e.preventDefault();
      if (validateForm()) setStep("qr");
    }}
  >
    <h2>{selectedOption.label}</h2>
    <p>
      {selectedOption.new} MDL / ≈ {selectedOption.eur} EUR
    </p>

    <input
      type="text"
      placeholder={t("requestform_name")}
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
    <input
      type="text"
      placeholder={t("requestform_contact_p")}
      required
      value={formData.contact}
      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
    />
    {error && <p className="form_error">{error}</p>}

    <button type="submit">{t("requestform_submit")}</button>
    <button
      type="button"
      className="back_btn"
      onClick={() => setStep("options")}
    >
      ← {t("back")}
    </button>

    {/* 🔹 Informații plată */}
    <p className="payment_info_text">
      {t("payment_info") ||
        "Informații: plata se face prin MIA, cu limite de 5000 per transfer și 10000 zilnic. Dacă aveți întrebări sau sunteți nesiguri, puteți lăsa o cerere fără plată și vă vom contacta. De asemenea, puteți face transfer bancar (confirmare 1-5 zile lucrătoare). Pentru clienții din afara țării, doar prin transfer sau contactați-ne pentru o soluție. Întrebări la @grabovsky_fitness."}
    </p>

    <a href="/#request" className="request_btn">
      {t("go_to_request") || "→ Trimite cerere"}
    </a>
  </form>
)}

{/* === PAS 4 === */}
{step === "qr" && (
  <div className="qr_section">
    <h2>{t("scan_to_pay")}</h2>
    <Image
      src="/images/me/qr1.jpeg"
      alt="QR code pentru plată"
      width={220}
      height={220}
      className="qr_image"
    />
    <a
      href="https://mia-qr.bnm.md/1/m/BNM/BNMe6fe524ca267408daf5d51a98ac11f00"
      target="_blank"
      className="qr_link"
    >
      {t("open_payment_link")}
    </a>

    {/* 🔹 Buton Continue */}
    <button
      className="continue_btn"
      onClick={() => (window.location.href = "/thankyou")}
    >
      {t("continue") || "Continue"}
    </button>

    <button className="back_btn" onClick={() => setStep("form")}>
      ← {t("back")}
    </button>

    {/* 🔹 Informații plată + cerere */}
    <p className="payment_info_text">
      {t("payment_info") ||
        "Informații: plata se face prin MIA, cu limite de 5000 per transfer și 10000 zilnic. Dacă aveți întrebări sau sunteți nesiguri, puteți lăsa o cerere fără plată și vă vom contacta. De asemenea, puteți face transfer bancar (confirmare 1-5 zile lucrătoare). Pentru clienții din afara țării, doar prin transfer sau contactați-ne pentru o soluție. Întrebări la @grabovsky_fitness."}
    </p>

    <a href="/#request" className="request_btn">
      {t("go_to_request") || "→ Trimite cerere"}
    </a>
  </div>
)}

      </section>
    </div>
  );
}
