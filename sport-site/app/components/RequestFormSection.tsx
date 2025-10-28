"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/requestform.css";

export default function RequestFormSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    plan: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert(t("requestform_thanks"));
  };

  return (
    <section id="request" className="request_section">
      <div className="request_container">
        {/* === STÂNGA: FORMULAR === */}
        <div className="request_left">
          <h2 className="request_title">{t("requestform_title")}</h2>
          <p className="request_sub">{t("requestform_sub")}</p>

          <form onSubmit={handleSubmit} className="request_form">
            <input
              type="text"
              placeholder={t("requestform_name")}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder={t("requestform_contact")}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />

            <div className="plan_buttons">
              {["Basic", "Transformare", "Atlet Avansat"].map((plan) => (
                <button
                  type="button"
                  key={plan}
                  className={`plan_select ${
                    formData.plan === plan ? "active" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, plan })}
                >
                  {plan}
                </button>
              ))}
            </div>

            <button type="submit" className="submit_btn">
              {t("requestform_submit")}
            </button>
          </form>
        </div>

        {/* === DREAPTA: INFORMAȚII === */}
        <div className="request_right">
          <h3>{t("requestform_info_title")}</h3>
          <p>{t("requestform_info_text")}</p>
          <img src="/images/logo6.webp" alt="Contact fitness" />
        </div>
      </div>
    </section>
  );
}
