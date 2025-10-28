"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en" | "ro";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  cycleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
    /* 🇷🇴 Română */
    ro: {
      // NAVBAR
      plans: "Planuri",
      coach: "Antrenor",
      transformations: "Transformări",
      getPlan: "Ia-ți planul",
      login: "Autentificare",
  
      // HERO
      hero_title: "Călătoria ta spre o versiune mai bună începe",
      hero_here: "AICI",
      hero_subtext:
        "Programe personalizate de fitness și nutriție create de expertul în transformări — Artiom Grabovsky.",
      hero_button: "Începe acum",
  
      // PLANS SECTION
      plans_title: "PLANURI DE ANTRENAMENT PENTRU OBIECTIVELE TALE",
      billed: "Facturat",
  
      plan_momentum: "Basic",
      plan_gamechanger: "Transformare",
      plan_lifechanger: "Atlet Avansat",
  
      plan_1month: "1 lună",
      plan_6months: "6 luni",
      plan_12months: "12 luni",
  
      plan_feature1: "✔ Program de antrenament personalizat",
      plan_feature2: "✔ Plan alimentar echilibrat",
      plan_feature3: "✔ Acces la comunitatea fitness",
      plan_feature4: "✔ Ghidare video și suport constant",
      plan_feature5: "✔ Recomandări pentru recuperare și suplimente",
  
      // COACH SECTION
      coach_guided: "GHIDAT DE PASIUNE ȘI EXPERIENȚĂ",
      coach_grabovsky_name: "ARTIOM GRABOVSKY",
      coach_grabovsky_quote:
        "„Puterea nu vine din corp — ea se naște în minte.”",
  
      coach_experience: "🕒 Peste 10 ani de experiență în fitness și culturism",
      coach_clients: "💪 Peste 500 de clienți care și-au atins obiectivele",
      coach_specialization:
        "🏋️‍♂️ Antrenamente personalizate, nutriție și transformare corporală",
  
      coach_about:
        "Artiom Grabovsky este un antrenor personal certificat, cu peste 10 ani de experiență în domeniul fitnessului și al culturismului. Abordarea sa combină știința exercițiului, disciplina mentală și motivația reală pentru a crea rezultate durabile.",
      coach_offer:
        "Fie că vrei să slăbești, să îți crești masa musculară sau să îți redefinești stilul de viață, Artiom te va ghida pas cu pas către versiunea ta cea mai puternică.",
  
      coach_bottom_title: "Nu știi de unde să începi?",
      coach_bottom_line1: "Nu este suficient doar să mergi la sală —",
      coach_bottom_line2: "Este important să știi CUM să te antrenezi eficient.",
      coach_bottom_desc:
        "Răspunde la 4 întrebări și îți voi recomanda planul potrivit pentru tine. Fără date personale necesare.",
      coach_bottom_btn: "Găsește-ți planul →",
      coach_slide1_title: "Experiență profesională",
      coach_slide1_text:
        "Cu peste 10 ani de activitate în fitness și culturism, Artiom a lucrat cu sute de clienți de toate nivelurile, de la începători până la sportivi profesioniști.",
      
      coach_slide2_title: "Experiență personală",
      coach_slide2_text:
        "După ani de antrenamente, disciplină și studiu, Artiom a descoperit secretul unei transformări durabile: echilibrul între corp, minte și alimentație.",
      
      coach_slide3_title: "Performanțe sportive",
      coach_slide3_text:
        "Record personal: îndreptare (deadlift) de 300 kg, împins la piept 200 kg și genuflexiuni cu 250 kg — rezultate obținute prin metodă, nu noroc.",
        
        form_start_btn: "Alege plan",
        form_q1: "Care este experiența ta în sport?",
        form_q1_opts: "Începător|Am mai fost|Iubitor|Profesionist",
        form_q2: "Cât timp poți dedica sportului?",
        form_q2_opts: "1 zi/săptămână|3 zile/săptămână|5 zile/săptămână",
        form_q3: "Care este bugetul lunar?",
        form_q3_opts: "100$|200$|500$|1000$",
        form_q4: "Introduceți datele dvs.",
        form_name_placeholder: "Nume",
        form_contact_placeholder: "Telefon sau Telegram",
        form_final_text: "Noi te vom contacta cu cea mai bună variantă pentru dumneavoastră.",
        form_submit_btn: "Trimite",
        form_alert: "Mulțumim! Te vom contacta în curând.",
        transformations_title: "Transformările Clientilor mei",
transformations_sub: "Vezi transformările reale ale clienților care au urmat programele Artiom Grabovsky.",

requestform_title: "Lasă o cerere pentru planul tău",
requestform_sub: "Completează datele și te vom contacta pentru detalii.",
requestform_name: "Nume",
requestform_contact: "Telefon sau Telegram @Name",
requestform_submit: "Trimite cererea",
requestform_info_title: "Te vom contacta în cel mai scurt timp!",
requestform_info_text: "După ce trimiți cererea, echipa noastră te va contacta cu toate detaliile despre planul de antrenament potrivit pentru tine.",
requestform_thanks: "Mulțumim! Cererea ta a fost trimisă cu succes.",

    },
  
    /* 🇬🇧 English */
    en: {
      // NAVBAR
      plans: "Plans",
      coach: "Coach",
      transformations: "Transformations",
      getPlan: "Get Your Plan",
      login: "Log In",
  
      // HERO
      hero_title: "Your journey to a stronger self begins",
      hero_here: "HERE",
      hero_subtext:
        "Personalized fitness and nutrition programs created by transformation expert — Artiom Grabovsky.",
      hero_button: "Get Started",
  
      // PLANS SECTION
      plans_title: "TRAINING PLANS TO FIT YOUR GOALS",
      billed: "Billed",
  
      plan_momentum: "Basic",
      plan_gamechanger: "Transformation",
      plan_lifechanger: "Advanced Athlete",
  
      plan_1month: "1 Month",
      plan_6months: "6 Months",
      plan_12months: "12 Months",
  
      plan_feature1: "✔ Personalized training program",
      plan_feature2: "✔ Balanced nutrition plan",
      plan_feature3: "✔ Access to fitness community",
      plan_feature4: "✔ Video guidance & ongoing support",
      plan_feature5: "✔ Recovery and supplement advice",
  
      // COACH SECTION
      coach_guided: "GUIDED BY PASSION AND EXPERIENCE",
      coach_grabovsky_name: "ARTIOM GRABOVSKY",
      coach_grabovsky_quote:
        "“Strength doesn’t come from the body — it starts in the mind.”",
  
      coach_experience: "🕒 Over 10 years of experience in fitness and bodybuilding",
      coach_clients: "💪 500+ clients who achieved their goals",
      coach_specialization:
        "🏋️‍♂️ Personalized training, nutrition, and body transformation",
  
      coach_about:
        "Artiom Grabovsky is a certified personal trainer with more than 10 years of professional experience. His philosophy combines exercise science, mental discipline, and motivation to achieve lasting results.",
      coach_offer:
        "Whether your goal is fat loss, muscle gain, or complete body transformation, Artiom will guide you every step of the way.",
  
      coach_bottom_title: "Not sure where to start?",
      coach_bottom_line1: "It’s not enough just to go to the gym —",
      coach_bottom_line2: "You must learn HOW to train efficiently.",
      coach_bottom_desc:
        "Answer 4 simple questions and I’ll recommend the perfect plan for you. No personal info required.",
      coach_bottom_btn: "Find your plan →",
      coach_slide1_title: "Professional Experience",
coach_slide1_text:
  "With over 10 years in the fitness and bodybuilding industry, Artiom has coached hundreds of clients — from beginners to professional athletes.",

coach_slide2_title: "Personal Journey",
coach_slide2_text:
  "After years of training, discipline, and study, Artiom discovered that lasting transformation comes from balance — body, mind, and nutrition.",

coach_slide3_title: "Athletic Achievements",
coach_slide3_text:
  "Personal records: 300 kg deadlift, 200 kg bench press, and 250 kg squat — built through method and discipline, not luck.",

   
  form_start_btn: "Choose plan",
  form_q1: "What is your experience in sports?",
  form_q1_opts: "Beginner|Been before|Enthusiast|Professional",
  form_q2: "How much time can you dedicate to training?",
  form_q2_opts: "1 day/week|3 days/week|5 days/week",
  form_q3: "What is your monthly budget?",
  form_q3_opts: "100$|200$|500$|1000$",
  form_q4: "Enter your details",
  form_name_placeholder: "Name",
  form_contact_placeholder: "Phone or Telegram",
  form_final_text: "We will contact you with the best plan for you.",
  form_submit_btn: "Send",
  form_alert: "Thank you! We will contact you soon.",
  
  transformations_title: "Result of my Clients",
transformations_sub: "See real transformations from clients who followed Artiom Grabovsky’s programs.",

requestform_title: "Send a request for your training plan",
requestform_sub: "Fill in your details and we’ll contact you shortly.",
requestform_name: "Full name",
requestform_contact: "Phone or Telegram @Name",
requestform_submit: "Send Request",
requestform_info_title: "We’ll contact you soon!",
requestform_info_text: "After you submit your request, our team will reach out with full details about the perfect training plan for you.",
requestform_thanks: "Thank you! Your request has been sent successfully.",

},
  
    /* 🇷🇺 Русский */
    ru: {
      // NAVBAR
      plans: "Планы",
      coach: "Тренер",
      transformations: "Трансформации",
      getPlan: "Выбрать план",
      login: "Войти",
  
      // HERO
      hero_title: "Твое путешествие к лучшей версии себя начинается",
      hero_here: "ЗДЕСЬ",
      hero_subtext:
        "Персональные программы тренировок и питания от эксперта по трансформациям — Артёма Грабовского.",
      hero_button: "Начать",
  
      // PLANS SECTION
      plans_title: "ТРЕНИРОВОЧНЫЕ ПЛАНЫ ДЛЯ ТВОИХ ЦЕЛЕЙ",
      billed: "Оплата за",
  
      plan_momentum: "Базовый",
      plan_gamechanger: "Трансформация",
      plan_lifechanger: "Продвинутый Атлет",
  
      plan_1month: "1 месяц",
      plan_6months: "6 месяцев",
      plan_12months: "12 месяцев",
  
      plan_feature1: "✔ Индивидуальная программа тренировок",
      plan_feature2: "✔ Сбалансированное питание",
      plan_feature3: "✔ Доступ в фитнес-сообщество",
      plan_feature4: "✔ Видео-поддержка и обратная связь",
      plan_feature5: "✔ Советы по восстановлению и добавкам",
  
      // COACH SECTION
      coach_guided: "С ПАССИЕЙ И ОПЫТОМ",
      coach_grabovsky_name: "ГРАБОВСКИЙ АРТЁМ",
      coach_grabovsky_quote:
        "«Сила приходит не от тела — она рождается в уме.»",
  
      coach_experience: "🕒 Более 10 лет опыта в фитнесе и бодибилдинге",
      coach_clients: "💪 Более 500 клиентов достигли своих целей",
      coach_specialization:
        "🏋️‍♂️ Персональные тренировки, питание и трансформация тела",
  
      coach_about:
        "Артём Грабовский — сертифицированный персональный тренер с более чем 10-летним опытом. Его подход основан на науке о движении, дисциплине и осознанности, что помогает добиваться стабильных результатов без перегрузок и выгорания.",
      coach_offer:
        "Хочешь изменить тело, укрепить силу или улучшить здоровье? Артём подберет индивидуальную программу, которая приведет тебя к цели.",
  
      coach_bottom_title: "Не знаешь, с чего начать?",
      coach_bottom_line1: "Недостаточно просто ходить в зал —",
      coach_bottom_line2: "Важно понимать, как тренироваться эффективно.",
      coach_bottom_desc:
        "Ответь на 4 вопроса, и я подберу тебе персональный план тренировок и питания. Без лишних данных.",
      coach_bottom_btn: "Подобрать план →",
      coach_slide1_title: "Профессиональный опыт",
coach_slide1_text:
  "Более 10 лет в индустрии фитнеса и бодибилдинга. Артём тренировал сотни клиентов — от новичков до профессиональных спортсменов.",

coach_slide2_title: "Личный путь",
coach_slide2_text:
  "После многих лет тренировок, дисциплины и саморазвития Артём понял, что настоящая трансформация — это гармония тела, разума и питания.",

coach_slide3_title: "Спортивные достижения",
coach_slide3_text:
  "Личные рекорды: становая тяга 300 кг, жим лёжа 200 кг, присед 250 кг — результат методики, а не удачи.",

  form_start_btn: "Выбрать план",
form_q1: "Какой у тебя опыт в спорте?",
form_q1_opts: "Новичок|Занимался раньше|Любитель|Профессионал",
form_q2: "Сколько времени можешь уделять тренировкам?",
form_q2_opts: "1 день в неделю|3 дня в неделю|5 дней в неделю",
form_q3: "Какой у тебя ежемесячный бюджет?",
form_q3_opts: "100$|200$|500$|1000$",
form_q4: "Введите свои данные",
form_name_placeholder: "Имя",
form_contact_placeholder: "Телефон или Telegram",
form_final_text: "Мы свяжемся с вами и подберем лучший вариант.",
form_submit_btn: "Отправить",
form_alert: "Спасибо! Мы свяжемся с вами в ближайшее время.",

transformations_title: "Tрансформации моих клиентов",
transformations_sub: "Посмотри реальные трансформации клиентов, которые прошли программы Артёма Грабовского.",

requestform_title: "Оставь заявку на свой план тренировок",
requestform_sub: "Заполни данные, и мы свяжемся с тобой в ближайшее время.",
requestform_name: "Имя",
requestform_contact: "Телефон или Telegram @Name",
requestform_submit: "Отправить заявку",
requestform_info_title: "Мы свяжемся с тобой совсем скоро!",
requestform_info_text: "После отправки заявки наша команда свяжется с тобой и подберет идеальный план тренировок.",
requestform_thanks: "Спасибо! Ваша заявка успешно отправлена.",

       },
  };
  

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // 🇷🇺 limba implicită
  const [lang, setLang] = useState<Language>("ru");

  const cycleLanguage = () => {
    setLang((prev) => (prev === "ru" ? "ro" : prev === "ro" ? "en" : "ru"));
  };

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, cycleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
