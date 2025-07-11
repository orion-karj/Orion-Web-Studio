import Navbar from "../components/navbar.jsx";
import Aurora from "../components/backround.jsx";
import Footer from "../components/footer.jsx";

import React from "react";
import { Star, Code, Zap, Users, Award, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const coreValues = [
  {
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "איכות בביצוע",
    description:
      "כל שורת קוד נכתבת במדויק ובכוונה, כדי שהאתר שלכם יעבוד חלק וללא תקלות.",
  },
  {
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "אספקה מהירה",
    description:
      "אנחנו יודעים שזמן זה כסף. התהליך שלנו מביא תוצאות מעולות בזמן הנכון.",
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "גישה ממוקדת לקוח",
    description:
      "ההצלחה שלכם היא שלנו. מקשיבים ומפתחים פתרונות שמתאימים בדיוק לצרכים שלכם.",
  },
  {
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "עיצוב שמניב תוצאות",
    description:
      "אתרים יפים שמביאים תוצאות אמיתיות. משלבים מראה מקצועי עם אסטרטגיות להמרה.",
  },
];

const whyChooseUs = [
  {
    title: "התאמה מושלמת לצרכים שלך",
    description: " כל אתר נבנה מאפס כדי להתאים בדיוק לסגנון, לקהל ולמטרות שלך.",
  },
  {
    title: "פתרון כולל",
    description: "עיצוב, פיתוח והתאמה אישית – הכל במקום אחד, לפי הצרכים שלך.",
  },
  {
    title: "טכנולוגיה מתקדמת",
    description:
      "משתמשים בכלים הכי עדכניים כדי להבטיח שהאתר שלכם יהיה מהיר, בטוח ומוכן לעתיד.",
  },
  {
    title: "תמיכה מלאה",
    description:
      "אנחנו איתכם לאורך כל הדרך, מוודאים שהאתר בדיוק כמו שדמיינתם אותו ומאפשרים לכם לבצע שינויים עוד לפני ההשקה.",
  },
];

const heroIntro = "מה מניע אותנו – ומה אנחנו עושים בשבילך";

const coreValuesSubtitle =
  "הערכים האלה מנחים כל פרויקט שאנחנו לוקחים על עצמנו.";

const whyChooseUsSubtitle = "אנחנו לא רק בונים אתר - אנחנו בונים אותו איתכם";

const ctaTitle = "מוכנים לשנות את הנוכחות הדיגיטלית שלכם?";

const ctaSubtitle = "בואו ניצור משהו יוצא דופן יחד.";

const ctaButtonText = "לקבלת הצעת מחיר  👈";

const ctaEmail = "orionkarj@gmail.com";

const ctaPhone = "058-793-6933";

const ctaSmallPrint = "ייעוץ ללא התחייבות • מענה תוך 24 שעות";

const AboutUs = () => {
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

      <div className="min-h-screen" dir="rtl">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-sm z-0" />
          <div className="absolute bottom-0 left-0 right-0 h-32 z-10" />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 ">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-green-100/80 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                יוצרים מצוינות דיגיטלית
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  orion web studio
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                {heroIntro}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                הערכים שלנו
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                {coreValuesSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-green-500"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100/70 text-green-600 rounded-xl mb-4 sm:mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-12 sm:py-16 md:py-20  bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                למה לבחור בorion web studio?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl mx-auto px-4">
                {whyChooseUsSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-green-100 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-green-100 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 sm:py-20 md:py-24 bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {ctaTitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                {ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
                <Link to="/contact">
                  <button className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
                    {ctaButtonText}
                  </button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base">
                <a
                  href={`mailto:${ctaEmail}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  {ctaEmail}
                </a>
                <a
                  href={`tel:${ctaPhone.replace(/-/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  {ctaPhone}
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8 px-4">
                {ctaSmallPrint}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
