"use client";
import { useState, useEffect,useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/coachsection.css";

export default function CoachSection() {
  const { t,lang } = useLanguage();

 // 🔥 SLIDE-URILE SE REGENEREAZĂ LA SCHIMBARE LIMBĂ
 const slides = useMemo(
  () => [
    {
      image: "/images/me/m3.webp",
      title: t("coach_slide1_title"),
      text: t("coach_slide1_text"),
    },
    {
      image: "/images/photo1.png",
      title: t("coach_slide2_title"),
      text: t("coach_slide2_text"),
    },
    {
      image: "/images/photo3.png",
      title: t("coach_slide3_title"),
      text: t("coach_slide3_text"),
    },
  ],
  [lang]
);

const buildSummary = () => {
  return `
🏋️ *Coach Program Form*
-------------------------
⭐ *Experience:* ${answers.experience}
⏱ *Time:* ${answers.time}
💰 *Budget:* ${answers.budget}
-------------------------
👤 *Name:* ${answers.name}
📞 *Contact:* ${answers.contact}
-------------------------
Sent from website 🌐
  `;
};


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
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, [slides.length]);


  useEffect(() => {
    setCurrent(0);
  }, [lang]);

  const handleSelect = (field: "experience" | "time" | "budget", value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setFormStep((prev) => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const summary = buildSummary();
  
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: summary }),
    });
  
    const data = await res.json();
  
    if (data.success) {
      alert(t("form_alert"));
  
      setAnswers({
        experience: "",
        time: "",
        budget: "",
        name: "",
        contact: "",
      });
  
      setFormStep(1);
      setShowForm(false);
    } else {
      alert("Error: " + data.error);
    }
  };
  

  return (
    <section id="coach" className="coach_section">
       <div className="coach_header">
    <h2 className="coach_section_title fade_in_up">{t("coach_section_title")}</h2>
    <p className="coach_section_subtitle fade_in_up">{t("coach_section_subtitle")}</p>
  </div>
      {/* ====================== TOP SLIDER + TEXT ====================== */}
      <div className="coach_top">
        
        <div className="coach_image_container premium_shadow">
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

          {/* TEXT STATIC – NU SE ANIMEAZĂ NICIODATĂ */}
          <div className="coach_static">
            <h3 className="coach_name">{t("coach_grabovsky_name")}</h3>
            <blockquote className="coach_quote">
              {t("coach_grabovsky_quote")}
            </blockquote>
          </div>

          {/* TEXT DINAMIC – SE ANIMEAZĂ DOAR CÂND SE SCHIMBĂ SLIDE */}
          <div key={current + lang} className="coach_slide_text fade">
            <h4 className="coach_slide_title">{slides[current].title}</h4>
            <p className="coach_slide_desc">{slides[current].text}</p>
          </div>

          </div>
      </div>

      {/* ====================== BOTTOM SECTION (FORM + IMAGE) ====================== */}
      <div className="coach_bottom">
        <div className="coach_bottom_text">
          {!showForm ? (
            <>
              <h3 className="fade_in_up">{t("coach_bottom_title")}</h3>
              <p className="gray fade_in_up">{t("coach_bottom_line1")}</p>
              <p className="white fade_in_up">{t("coach_bottom_line2")}</p>
              <p className="desc fade_in_up">{t("coach_bottom_desc")}</p>

              <button className="coach_btn pulse" onClick={() => setShowForm(true)}>
                {t("form_start_btn")}
              </button>
            </>
          ) : (
            <div className="coach_form fade_in_up">
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

        {/* IMAGINE PERFECT ÎNCADRATĂ FĂRĂ TĂIETURI */}
        <div className="coach_bottom_image">
          <div className="coach_overlay"></div>
          <img src="/images/ph1.jpg" alt="Coach Program" className="fit_image" />
        </div>
      </div>
    </section>
  );
}
