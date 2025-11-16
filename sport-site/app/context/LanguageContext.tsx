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


    coach_section_title: "Despre mine",
    coach_section_subtitle: "Experiență, rezultate și abordare profesională",

  
      // NAVBAR
      plans: "Planuri",
      coach: "Antrenor",
      transformations: "Transformări",
      getPlan: "Ia-ți planul",
      login: "Autentificare",
  
      // HERO
      hero_title: "Devino cea mai bună versiune a ta",
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
      coach_grabovsky_name: "Artiom Grabovsky — antrenorul tău",
      coach_grabovsky_quote: "Scopul meu este să te ajut să devii mai puternic, mai sănătos și mai încrezător în corpul tău.",
    
      coach_slide1_title: "Cine sunt",
      coach_slide1_text: "Salut! Sunt Artiom Grabovsky, maestru în powerlifting, antrenor personal și fondatorul Grabovsky.fit. Misiunea mea este să ajut oamenii să își transforme corpul și stilul de viață.",
    
      coach_slide2_title: "Experiență și calificări",
      coach_slide2_text: "Peste 15 ani de antrenament, peste 8 ani lucrând cu clienți offline și online. Maestru în powerlifting. Experiență cu bărbați, femei și adolescenți la toate nivelurile.",
    
      coach_slide3_title: "Rezultatele mele de forță",
      coach_slide3_text: "Împins la piept — 170 kg, genuflexiuni — 260 kg, îndreptări sumo — 300+ kg. Rezultatul unui sistem bine gândit și al unei tehnici corecte.",
    
      coach_bottom_title: "Despre mine",
      coach_bottom_line1: "Am trecut prin aceeași transformare ca mulți dintre clienții mei.",
      coach_bottom_line2: "De la 122 kg la 88 kg — prin disciplină și metodă corectă.",
      coach_bottom_desc: "Acum îi ajut pe alții să obțină rezultate reale prin programe personalizate și un sistem eficient.",
    
      form_start_btn: "Vezi ce ti se potriveste",
      form_q1: "Ce experiență ai cu antrenamentele?",
      form_q1_opts: "Începător|Intermediar|Avansat",
    
      form_q2: "Cât timp poți acorda antrenamentelor?",
      form_q2_opts: "2–3 ori/săptămână|3–4 ori/săptămână|5+ ori/săptămână",
    
      form_q3: "Ce buget ai în plan?",
      form_q3_opts: "Minim|Mediu|Investiție serioasă",
    
      form_q4: "Completează datele tale:",
      form_name_placeholder: "Nume",
      form_contact_placeholder: "Telefon sau @Telegram",
      form_final_text: "După trimitere, vei fi contactat în cel mai scurt timp.",
      form_submit_btn: "Trimite",
      form_alert: "Mulțumim! Te vom contacta curând.",


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


plans_title_service: "Servicii",
plans_show: "Afișează detalii",
plans_hide: "Ascunde detalii",
plans_start: "Începe",
plans_includes: "Ce include acest plan",

/* === ONLINE RO === */
plan_online_tag: "ONLINE TRAINING",
plan_online_title: "💻 Online Training",

plan_online_short1: "Program personalizat — antrenamente & nutriție",
plan_online_short2: "Raportare și control tehnic prin Telegram",
plan_online_short3: "Feedback video & corectarea execuției",
plan_online_short4: "Potrivit pentru acasă / sală / stradă",
plan_online_short5: "Suport zilnic & monitorizare progres",

plan_online_details_title: "Descriere detaliată",
plan_online_details_text: "Online Training este o colaborare personalizată prin Telegram. Primești program complet adaptat obiectivului tău, analiză tehnică video, nutriție personalizată și ajustări săptămânale. Te poți antrena oriunde: acasă, în parc sau la sală.",

plan_online_price_title: "Prețuri",
plan_online_price1: "1 antrenament — 500 MDL (~25 EUR)",
plan_online_price2: "10 antrenamente — 4000 MDL (~200 EUR)",
plan_online_price3: "Coaching lunar — 2000 MDL (~100 EUR)",

/* === PERSONAL RO === */
plan_personal_tag: "GYM TRAINING",
plan_personal_title: "🏋️‍♂️ Antrenamente în sală",

plan_personal_short1: "1 la 1 în sala de sport",
plan_personal_short2: "Corectare tehnică & siguranță",
plan_personal_short3: "Program personalizat după obiectiv",
plan_personal_short4: "Ideal pentru masă, slăbire, recuperare",
plan_personal_short5: "Progres garantat & control permanent",

plan_personal_details_title: "Descriere detaliată",
plan_personal_details_text: "Antrenamentele personale sunt concepute pentru rezultate rapide și sigure. Corectez tehnica, adaptez exercițiile, monitorizez intensitatea și structurez progresia. Perfect pentru începători, intermediari și avansați.",

plan_personal_price_title: "Prețuri",
plan_personal_price1: "1 antrenament — 600 MDL (~30 EUR)",
plan_personal_price2: "10 antrenamente — 5000 MDL (~250 EUR)",

/* === CONSULT RO === */
plan_consult_tag: "CONSULTAȚIE",
plan_consult_title: "💬 Consultație",

plan_consult_short1: "Analiză completă 1 oră",
plan_consult_short2: "Corectare tehnică",
plan_consult_short3: "Sfaturi nutriție & antrenament",
plan_consult_short4: "Identificarea blocajelor",
plan_consult_short5: "Plan personalizat de acțiune",

plan_consult_details_title: "Descriere",
plan_consult_details_text: "Consultația îți oferă claritate totală: discutăm obiective, tehnică, alimentație, analizăm greșelile și construim un plan concret pentru progres accelerat.",

plan_consult_price_title: "Preț",
plan_consult_price1: "Consultație 1 oră — 600 MDL (~30 EUR)",


requestform_message: "Comentarii sau întrebări",
requestform_meeting: "Tipul planului",

plan_basic: "Online",
plan_transform: "Fizic",
plan_advanced: "Consultare",

    },
  
    /* 🇬🇧 English */
    en: {


      plan_basic: "Online",
plan_transform: "In person",
plan_advanced: "Consultation",

   // NAVBAR
      plans: "Plans",
      coach: "Coach",
      transformations: "Transformations",
      getPlan: "Get Your Plan",
      login: "Log In",
  
      // HERO
      hero_title: "Become the best version of yourself",
      hero_here: "HERE",
      hero_subtext:
        "Personalized fitness and nutrition programs created by transformation expert — Artiom Grabovsky.",
      hero_button: "See what suits you",
  
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
      coach_grabovsky_name: "Artiom Grabovsky — Your Coach",
      coach_grabovsky_quote: "My mission is to help you build a stronger, healthier and more confident body.",
    
      coach_slide1_title: "Who I Am",
      coach_slide1_text: "Hi! I’m Artiom Grabovsky — powerlifting Master of Sport, personal trainer and founder of Grabovsky.fit. I help people build strong, functional bodies.",
    
      coach_slide2_title: "Experience & Qualifications",
      coach_slide2_text: "15+ years of personal training, 8+ years coaching clients offline & online. Master of Sport. Experience with men, women and teens of all levels.",
    
      coach_slide3_title: "My Strength Results",
      coach_slide3_text: "Bench press — 170 kg, Squat — 260 kg, Deadlift (sumo) — 300+ kg. These results come from technique, discipline and a structured approach.",
    
      coach_bottom_title: "About Me",
      coach_bottom_line1: "I’ve walked the same path as many of my clients.",
      coach_bottom_line2: "From 122 kg down to 88 kg — through discipline and a proven system.",
      coach_bottom_desc: "Today, I help others achieve real, lasting results through customized training and nutrition strategies.",
    
      form_start_btn: "See what suits you",
      form_q1: "What is your training experience?",
      form_q1_opts: "Beginner|Intermediate|Advanced",
    
      form_q2: "How often can you train?",
      form_q2_opts: "2–3 times/week|3–4 times/week|5+ times/week",
    
      form_q3: "What is your budget?",
      form_q3_opts: "Low|Medium|Ready to invest",
    
      form_q4: "Enter your details:",
      form_name_placeholder: "Name",
      form_contact_placeholder: "Phone or @Telegram",
      form_final_text: "After submitting, you will be contacted shortly.",
      form_submit_btn: "Submit",
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



coach_section_title: "About me",
coach_section_subtitle: "Experience, results and a professional training approach",


plans_title_service: "Services",
plans_show: "Show details",
plans_hide: "Hide details",
plans_start: "Start",
plans_includes: "What this plan includes",

/* === ONLINE EN === */
plan_online_tag: "ONLINE COACHING",
plan_online_title: "💻 Online Coaching",

plan_online_short1: "Personalized workouts & nutrition",
plan_online_short2: "Progress tracking via Telegram",
plan_online_short3: "Video technique feedback",
plan_online_short4: "Works for home / gym / outdoor",
plan_online_short5: "Daily support & progress monitoring",

plan_online_details_title: "Detailed description",
plan_online_details_text: "Online Coaching gives you a personalized program, nutritional guidance, video technique corrections, weekly adjustments and constant communication through Telegram. You can train anywhere.",

plan_online_price_title: "Pricing",
plan_online_price1: "1 online session — 500 MDL (~25 EUR)",
plan_online_price2: "10 online sessions — 4000 MDL (~200 EUR)",
plan_online_price3: "Full monthly coaching — 2000 MDL (~100 EUR)",

/* === PERSONAL EN === */
plan_personal_tag: "GYM TRAINING",
plan_personal_title: "🏋️‍♂️ Personal Training",

plan_personal_short1: "1-on-1 sessions in the gym",
plan_personal_short2: "Technique correction & safety",
plan_personal_short3: "Personal workout program",
plan_personal_short4: "For muscle gain, fat loss, rehab",
plan_personal_short5: "Structured progression",

plan_personal_details_title: "Detailed description",
plan_personal_details_text: "Personal Training provides full technique control, safe progression, individualized exercises and maximum efficiency. Ideal for beginners and advanced athletes.",

plan_personal_price_title: "Pricing",
plan_personal_price1: "1 session — 600 MDL (~30 EUR)",
plan_personal_price2: "10 sessions — 5000 MDL (~250 EUR)",

/* === CONSULT EN === */
plan_consult_tag: "CONSULTATION",
plan_consult_title: "💬 Consultation",

plan_consult_short1: "1-hour full analysis",
plan_consult_short2: "Technique correction",
plan_consult_short3: "Training & nutrition guidance",
plan_consult_short4: "Identify what blocks progress",
plan_consult_short5: "Step-by-step improvement plan",

plan_consult_details_title: "Description",
plan_consult_details_text: "The consultation helps you understand exactly why you're not progressing. We analyze training, nutrition, technique and recovery to create a clear plan for improvement.",

plan_consult_price_title: "Price",
plan_consult_price1: "1-hour consultation — 600 MDL (~30 EUR)",
requestform_message: "Comments or questions",
requestform_meeting: "Meeting type",


},
  
    /* 🇷🇺 Русский */
    ru: {

plan_basic: "Онлайн",
plan_transform: "Физически",
plan_advanced: "Консультация",


      coach_section_title: "Обо мне",
coach_section_subtitle: "Опыт, результаты и профессиональный подход",

  
      // NAVBAR
      plans: "Планы",
      coach: "Тренер",
      transformations: "Трансформации",
      getPlan: "Выбрать план",
      login: "Войти",
  
      // HERO
      hero_title: "Стань лучшей версией себя",
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
plans_title_service: "Услуги",
plans_show: "Показать детали",
plans_hide: "Скрыть детали",
plans_start: "Начать",
plans_includes: "Что входит в план",

/* === ONLINE RU === */
plan_online_tag: "ОНЛАЙН-ВЕДЕНИЕ",
plan_online_title: "💻 Онлайн-ведение",

plan_online_short1: "Индивидуальные тренировки и питание",
plan_online_short2: "Контроль и отчёты через Telegram",
plan_online_short3: "Видео-разбор техники",
plan_online_short4: "Подходит для дома / зала / улицы",
plan_online_short5: "Ежедневная поддержка и связь",

plan_online_details_title: "Подробное описание",
plan_online_details_text: "Онлайн-ведение — это персональная работа через Telegram. Ты получаешь индивидуальный план тренировок, питание под цель, разбор техники по видео, корректировки нагрузки и постоянную связь. Можно тренироваться где угодно.",

plan_online_price_title: "Стоимость",
plan_online_price1: "1 онлайн-тренировка — 500 MDL (~25 EUR)",
plan_online_price2: "10 онлайн-тренировок — 4000 MDL (~200 EUR)",
plan_online_price3: "Полное онлайн-ведение — 2000 MDL / месяц (~100 EUR)",

/* === PERSONAL RU === */
plan_personal_tag: "ТРЕНИРОВКИ В ЗАЛЕ",
plan_personal_title: "🏋️‍♂️ Персональные тренировки",

plan_personal_short1: "Тренировка 1 на 1 в зале",
plan_personal_short2: "Контроль техники и безопасности",
plan_personal_short3: "Индивидуальная программа",
plan_personal_short4: "Для массы, жиросжигания, реабилитации",
plan_personal_short5: "Структурированная прогрессия",

plan_personal_details_title: "Подробное описание",
plan_personal_details_text: "Персональные тренировки — это максимальная эффективность: контроль техники, адаптация упражнений, мониторинг нагрузки и продуманная прогрессия. Подходит как новичкам, так и опытным спортсменам.",

plan_personal_price_title: "Стоимость",
plan_personal_price1: "1 тренировка — 600 MDL (~30 EUR)",
plan_personal_price2: "10 тренировок — 5000 MDL (~250 EUR)",

/* === CONSULT RU === */
plan_consult_tag: "КОНСУЛЬТАЦИЯ",
plan_consult_title: "💬 Консультация",

plan_consult_short1: "1 час анализа",
plan_consult_short2: "Разбор техники",
plan_consult_short3: "Советы по питанию и тренировкам",
plan_consult_short4: "Поиск причин отсутствия прогресса",
plan_consult_short5: "Пошаговый план действий",

plan_consult_details_title: "Описание",
plan_consult_details_text: "Консультация помогает определить, что мешает прогрессу: техника, программа, питание или восстановление. Разбираем твою ситуацию и создаём чёткий пошаговый план.",

plan_consult_price_title: "Стоимость",
plan_consult_price1: "1 час — 600 MDL (~30 EUR)",





  coach_grabovsky_name: "Артём Грабовский — ваш тренер",
  coach_grabovsky_quote: "Моя цель — сделать тебя сильнее, здоровее и уверенным в своём теле.",

  coach_slide1_title: "Кто я",
  coach_slide1_text: "Привет! Меня зовут Грабовский Артём, я — мастер спорта по пауэрлифтингу, персональный тренер и основатель Grabovsky.fit. Помогаю людям развивать сильное и функциональное тело.",

  coach_slide2_title: "Опыт и квалификация",
  coach_slide2_text: "15+ лет тренировочного опыта, 8+ лет работы с клиентами. Мастер спорта. Работаю с мужчинами, женщинами и подростками. Постоянно повышаю квалификацию в биомеханике и спортивном питании.",

  coach_slide3_title: "Мои силовые результаты",
  coach_slide3_text: "Жим — 170 кг, присед — 260 кг, становая (сумо) — 300+ кг. Это результат системного подхода, техники и глубокого понимания тренировочного процесса.",

  coach_bottom_title: "Обо мне",
  coach_bottom_line1: "Когда-то мой вес достигал 122 кг.",
  coach_bottom_line2: "Я снизил его до 88 кг и полностью изменил тело.",
  coach_bottom_desc: "Теперь я помогаю другим пройти этот путь быстрее, безопаснее и результативнее, используя проверенную методику.",

  form_start_btn: "Посмотрите, что вам подходит",
  form_q1: "Какой у тебя опыт тренировок?",
  form_q1_opts: "Новичок|Средний уровень|Продвинутый",

  form_q2: "Сколько времени готов уделять тренировкам?",
  form_q2_opts: "2–3 раза/неделю|3–4 раза/неделю|5+ раз/неделю",

  form_q3: "Какой бюджет ты рассматриваешь?",
  form_q3_opts: "Минимальный|Средний|Готов вкладываться",

  form_q4: "Заполни контакты, и я свяжусь с тобой:",
  form_name_placeholder: "Имя",
  form_contact_placeholder: "Телефон или @Telegram",
  form_final_text: "После отправки я свяжусь с тобой в ближайшее время.",
  form_submit_btn: "Отправить",
  form_alert: "Спасибо! Я свяжусь с вами в ближайшее время.",
  requestform_message: "Комментарии или вопросы",
  requestform_meeting: "Тип плана",
  

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
