/* eslint-disable */

import Navbar from "../components/navbar.jsx";
import Aurora from "../components/backround.jsx";
import Footer from "../components/footer.jsx";

import Lottie from "lottie-react";

import React, { useState, useEffect } from "react";
import {
  Check,
  Star,
  Zap,
  Globe,
  Plus,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [selectedUpsells, setSelectedUpsells] = useState([]);

  const navigate = useNavigate();

  const handleStartClick = () => {
    const upsellParams = selectedUpsells.join(",");
    navigate(
      `/contact?package=${selectedPlan.toLowerCase()}&upsells=${encodeURIComponent(upsellParams)}`
    );
  };

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/f18ed6ab-0125-4a53-8a6c-6a55704e9f62/sMe0luVNjF.json"
    )
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => {
        console.error("Failed to load Lottie animation:", err);
      });
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "350-500",
      description: "מושלם לעסקים קטנים שרוצים נוכחות דיגיטלית ראשונית",
      features: [
        "דף נחיתה רספונסיבי",
        "עיצוב נקי ומודרני",
        "התאמה לכל המכשירים",
        "זמן פיתוח: 3-5 ימים",
      ],
      icon: <Globe className="w-8 h-8" />,
      popular: false,
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "Standard",
      price: "700-1,000",
      description: "הבחירה הפופולרית לעסקים שרוצים אתר מקצועי ומלא",
      features: [
        "3-5 עמודים מלאים",
        "עמודי בית, שירותים, אודות, יצירת קשר",
        "התאמה מושלמת לנייד",
        "אנימציות קלות ויפות",
        "עיצוב מתקדם",
        "זמן פיתוח: 7-10 ימים",
      ],
      icon: <Star className="w-8 h-8" />,
      popular: false,
      gradient: "from-green-500 to-green-700",
    },
    {
      name: "Premium",
      price: "1,200-1,800",
      description: "פתרון מתקדם לעסקים שרוצים להתבלט ולהוביל",
      features: [
        "אתר מלא",
        "כולל API מותאם אישית",
        "קבלת תשלום באתר",
        "מאגר נתונים",
        "אפשרות ליצרת משתמשים",
        "העלאה לאוויר מלאה",
        "זמן פיתוח: 14-21 ימים",
      ],
      icon: <Zap className="w-8 h-8" />,
      popular: true,
      gradient: "from-green-600 to-green-800",
    },
  ];

  const upsells = [
    {
      name: "טופס מותאם אישית",
      description: "כולל שדות מיוחדים ועיצוב מתקדם לפי הצרכים שלך",
      price: "+100",
      icon: <Plus className="w-6 h-6" />,
    },
    {
      name: "סליקת תשלומים פשוטה",
      description: "אפשרות לתשלום דרך האתר (פייפאל) – מותאם לעסק קטן",
      price: "+200",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      name: "שדרוג האתר",
      description:
        "בדיקה חד פעמית של האתר כולל עדכון תכנים ושינויים רצויים, בדיקת מהירות, גיבוי מלא והקשחת אבטחה בסיסית",
      price: "+250-400",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  const toggleUpsell = (upsellName) => {
    setSelectedUpsells((prev) =>
      prev.includes(upsellName)
        ? prev.filter((name) => name !== upsellName)
        : [...prev, upsellName]
    );
  };

  return (
    <>
      <Navbar />
      <Aurora
        colorStops={["#139c45", "#20b455", "#4cd86e"]}
        blend={0.5}
        useResponsiveAmplitude={true}
        responsiveAmplitude={{
          mobile: 0.2,
          tablet: 0.5,
          desktop: 0.9,
          xl: 1,
        }}
        speed={1}
      />
      <div className="min-h-screen text-white" dir="rtl">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 "></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                בחר את החבילה המושלמת עבורך
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                כל עסק צריך אתר השאלה היא מה מתאים לך?
              </p>

              {/* Instructions Paragraph */}
              <section
                className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#176B34] to-slate-900 overflow-hidden rounded-xl"
                style={{ direction: "rtl" }}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-1/4 left-1/4 w-52 h-52 bg-[#1BAF3A] rounded-full mix-blend-multiply filter blur-lg animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-52 h-52 bg-[#2EC84D] rounded-full mix-blend-multiply filter blur-lg animate-pulse animation-delay-2000"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-52 h-52 bg-[#1BAF3A] rounded-full mix-blend-multiply filter blur-lg animate-pulse animation-delay-4000"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                      <h1
                        className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug"
                        style={{ unicodeBidi: "plaintext" }}
                      >
                        <span className="block text-white mb-1">
                          הזמינו אתר היום
                        </span>
                        <span className="block bg-gradient-to-r from-[#2EC84D] via-[#1BAF3A] to-[#176B34] bg-clip-text text-transparent">
                          אתר מותאם ומעוצב אישית, בדיוק לצרכים שלכם
                        </span>
                      </h1>

                      <p
                        className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg"
                        style={{ unicodeBidi: "plaintext" }}
                      >
                        בחרו חבילת שירות והוסיפו תוספות, אם יש כאלה שרלוונטיות
                        עבורכם. בסיום, תועברו לטופס קצר לשליחת פרטים – בלי
                        התחייבות ובלי תשלום. אנחנו כאן לכל שאלה, ונשמח לייעץ
                        ולהתאים לכם את הפתרון הטוב ביותר
                      </p>
                    </div>

                    {/* Animation Container */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end mr-6 lg:mr-40">
                      <div className="relative group max-w-md w-full">
                        {/* Glow effect */}
                        <div className="w-80 h-80 absolute -inset-0.5 bg-gradient-to-r from-[#1BAF3A] to-[#2EC84D] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700 group-hover:duration-300 animate-pulse"></div>

                        {/* Animation container */}
                        <div className="w-80 h-80  relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-slate-700/40 shadow-xl">
                          <div className="aspect-square rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-400 ease-out">
                            {animationData ? (
                              <Lottie
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <p className="text-white text-center text-sm">
                                Loading animation...
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-ping animation-delay-1000"></div>
                  <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#2EC84D] rounded-full opacity-50 animate-ping animation-delay-3000"></div>
                  <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-[#1BAF3A] rounded-full opacity-50 animate-ping animation-delay-5000"></div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Main Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedPlan === plan.name ? "scale-105" : ""
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      בקרוב
                      <Star className="w-4 h-4" />
                    </span>
                  </div>
                )}
                <div
                  className={`relative overflow-hidden rounded-2xl p-8 h-full
                  ${
                    selectedPlan === plan.name
                      ? "bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-500"
                      : "bg-black/50 border border-green-700 hover:border-green-500/50"
                  }
                  backdrop-blur-sm`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${plan.gradient}`}
                    >
                      {plan.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-green-400">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 mr-2">₪</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all duration-200
                    ${
                      selectedPlan === plan.name
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25"
                        : "border border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    בחר חבילה זו
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upsells Section */}
          <div className="bg-gradient-to-r from-black/70 to-green-900/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                שדרג את החבילה שלך 🔧
              </h2>
              <p className="text-gray-300 text-lg">
                הוסף תכונות מתקדמות לאתר שלך ותקבל עוד יותר ערך
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upsells.map((upsell) => (
                <div
                  key={upsell.name}
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200
                  ${
                    selectedUpsells.includes(upsell.name)
                      ? "border-green-500 bg-green-500/10"
                      : "border-gray-600 hover:border-green-500/50 bg-gray-800/30"
                  }`}
                  onClick={() => toggleUpsell(upsell.name)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        selectedUpsells.includes(upsell.name)
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 text-green-400"
                      }`}
                    >
                      {upsell.icon}
                    </div>
                    <div className="text-left">
                      <span className="text-lg font-bold text-green-400">
                        {upsell.price} ₪
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {upsell.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {upsell.description}
                  </p>

                  <div
                    className={`absolute top-2 left-2 w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                      selectedUpsells.includes(upsell.name)
                        ? "bg-green-500 border-green-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedUpsells.includes(upsell.name) && (
                      <Check className="w-3 h-3 text-white absolute top-0.5 right-0.5" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-16 bg-gradient-to-r from-green-900/30 to-black/50 rounded-3xl p-8 backdrop-blur-sm border border-green-500/30">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">הסיכום שלך</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-gray-300 mb-2">החבילה הנבחרת:</p>
                  <p className="text-2xl font-bold text-green-400">
                    {selectedPlan}
                  </p>
                </div>
                {selectedUpsells.length > 0 && (
                  <div className="text-center">
                    <p className="text-gray-300 mb-2">תוספות נבחרות:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {selectedUpsells.map((upsell, index) => (
                        <span
                          key={index}
                          className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                        >
                          {upsell}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Updated Button */}
              <button
                onClick={handleStartClick}
                className="mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                💸 בואו נתחיל!
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              יש לך שאלות? צור קשר ונעזור לך לבחור את החבילה המושלמת עבורך
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
