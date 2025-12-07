"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/requestform.css";

export default function RequestFormSection() {
  const { t } = useLanguage();

  const initialState = {
    name: "",
    contact: "",
    message: "",
    meeting: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert(t("requestform_thanks"));
      setFormData(initialState); // 🔥 RESET COMPLET
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <section id="request" className="request_section_dark">
      <div className="request_container_dark">

        {/* === LEFT — FORM === */}
        <div className="request_left_dark">
          <h2 className="request_title_dark">{t("requestform_title")}</h2>
          <p className="request_sub_dark">{t("requestform_sub")}</p>

          <form onSubmit={handleSubmit} className="request_form_dark">

            {/* === NAME === */}
            <input
              type="text"
              placeholder={t("requestform_name")}
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* === CONTACT === */}
            <input
              type="text"
              placeholder={t("requestform_contact")}
              required
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />

            {/* === MESSAGE === */}
            <textarea
              placeholder={t("requestform_message")}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>

            {/* === MEETING SELECT === */}
            <label className="meeting_label">{t("requestform_meeting")}</label>

            <div className="meeting_types">
              {[t("plan_basic"), t("plan_transform"), t("plan_advanced")].map(
                (type) => (
                  <button
                    type="button"
                    key={type}
                    className={`meeting_btn ${
                      formData.meeting === type ? "active" : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, meeting: type })
                    }
                  >
                    {type}
                  </button>
                )
              )}
            </div>

            {/* === SUBMIT === */}
            <button type="submit" className="submit_btn_dark">
              {t("requestform_submit")}
            </button>
          </form>
        </div>

        {/* === RIGHT — IMAGE + INFO === */}
        <div className="request_right_dark">
          <h3>{t("requestform_info_title")}</h3>
          <p>{t("requestform_info_text")}</p>
          <img src="/images/logo6.webp" alt="Contact fitness" />
        </div>

      </div>
    </section>
  );
}
