"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/coachsection.css";

export default function CoachSection() {
  const { t } = useLanguage();

  const slides = [
    { image: "/images/photo1.png", title: t("coach_slide1_title"), text: t("coach_slide1_text") },
    { image: "/images/photo2.png", title: t("coach_slide2_title"), text: t("coach_slide2_text") },
    { image: "/images/photo3.png", title: t("coach_slide3_title"), text: t("coach_slide3_text") },
  ];

  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [answers, setAnswers] = useState({
    experience: "",
    time: "",
    budget: "",
    name: "",
    contact: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSelect = (field: "experience" | "time" | "budget", value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setFormStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", answers);
    alert(t("form_alert"));
  };
  

  return (
    <section id="coach" className="coach_section">
      {/* --- PARTEA DE SUS --- */}
      <div className="coach_top">
        <div className="coach_image_container">
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={t("coach_grabovsky_name")}
              className={`coach_image ${idx === current ? "active" : "inactive"}`}
            />
          ))}
        </div>

        <div className="coach_text_container">
          <h3 className="coach_name">{t("coach_grabovsky_name")}</h3>
          <blockquote className="coach_quote">{t("coach_grabovsky_quote")}</blockquote>

          <div className="coach_slide_text fade">
            <h4 className="coach_slide_title">{slides[current].title}</h4>
            <p className="coach_slide_desc">{slides[current].text}</p>
          </div>
        </div>
      </div>

      {/* --- PARTEA DE JOS --- */}
      <div className="coach_bottom">
        <div className="coach_bottom_text">
          {!showForm ? (
            <>
              <h3>{t("coach_bottom_title")}</h3>
              <p className="gray">{t("coach_bottom_line1")}</p>
              <p className="white">{t("coach_bottom_line2")}</p>
              <p className="desc">{t("coach_bottom_desc")}</p>
              <button className="coach_btn" onClick={() => setShowForm(true)}>
                {t("form_start_btn")}
              </button>
            </>
          ) : (
            <div className="coach_form">
              {formStep === 1 && (
                <>
                  <h4>{t("form_q1")}</h4>
                  <div className="options">
                    {t("form_q1_opts")
                      .split("|")
                      .map((opt) => (
                        <button key={opt} onClick={() => handleSelect("experience", opt)}>
                          {opt}
                        </button>
                      ))}
                  </div>
                </>
              )}

              {formStep === 2 && (
                <>
                  <h4>{t("form_q2")}</h4>
                  <div className="options">
                    {t("form_q2_opts")
                      .split("|")
                      .map((opt) => (
                        <button key={opt} onClick={() => handleSelect("time", opt)}>
                          {opt}
                        </button>
                      ))}
                  </div>
                </>
              )}

              {formStep === 3 && (
                <>
                  <h4>{t("form_q3")}</h4>
                  <div className="options">
                    {t("form_q3_opts")
                      .split("|")
                      .map((opt) => (
                        <button key={opt} onClick={() => handleSelect("budget", opt)}>
                          {opt}
                        </button>
                      ))}
                  </div>
                </>
              )}

              {formStep === 4 && (
                <form onSubmit={handleSubmit} className="contact_form">
                  <h4>{t("form_q4")}</h4>
                  <input
                    type="text"
                    placeholder={t("form_name_placeholder")}
                    required
                    onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder={t("form_contact_placeholder")}
                    required
                    onChange={(e) => setAnswers({ ...answers, contact: e.target.value })}
                  />
                  <p className="info_text">{t("form_final_text")}</p>
                  <button type="submit" className="coach_btn">
                    {t("form_submit_btn")}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        <div className="coach_bottom_image">
          <div className="coach_overlay"></div>
          <img src="images/ph1.jpg" alt="Coach Program" />
        </div>
      </div>
    </section>
  );
}
