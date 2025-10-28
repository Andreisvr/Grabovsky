"use client";
import { useLanguage } from "../context/LanguageContext";
import "../styles/plans.css";

export default function PlansSection() {
  const { t } = useLanguage();

  // 🔁 Planurile inversate (cel mai ieftin la stânga)
  const plans = [
    {
      title: t("plan_lifechanger"),
      price: "$10.8",
      period: t("plan_12months"),
      discount: "-46%",
      color: "plan_white",
    },
    {
      title: t("plan_momentum"),
      price: "$19.99",
      period: t("plan_1month"),
      discount: "",
      color: "plan_white",
    },
    {
      title: t("plan_gamechanger"),
      price: "$13.3",
      period: t("plan_6months"),
      discount: "-34%",
      color: "plan_gold",
    },
  ];

  return (
    <section id="plans" className="plans_section">
      <h2 className="plans_title">{t("plans_title")}</h2>

      <div className="plans_grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={`plan_card ${plan.color}`}>
            {plan.discount && <span className="plan_discount">{plan.discount}</span>}

            <h3 className="plan_name">{plan.title}</h3>
            <p className="plan_price">{plan.price}/MO</p>
            <p className="plan_period">
              {t("billed")} {plan.period}
            </p>

            <button className="plan_btn">{t("getPlan")}</button>

            <ul className="plan_list">
              <li>{t("plan_feature1")}</li>
              <li>{t("plan_feature2")}</li>
              <li>{t("plan_feature3")}</li>
              <li>{t("plan_feature4")}</li>
              <li>{t("plan_feature5")}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
