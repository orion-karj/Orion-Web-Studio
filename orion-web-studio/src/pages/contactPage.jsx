import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  User,
  AtSign,
  FileText,
  Hash,
  CheckCircle,
  Sparkles,
  Zap,
  Star,
  Coffee,
  ChevronDown,
  ArrowDown,
} from "lucide-react";
import Navbar from "../components/navbar.jsx";
import Aurora from "../components/backround.jsx";
import Footer from "../components/footer.jsx";
import axios from "axios";

// Helper to parse URL query parameters into an object with decoded values
const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  let obj = {};
  for (let [key, value] of params.entries()) {
    obj[key] = decodeURIComponent(value.replace(/\+/g, " "));
  }
  return obj;
};

const InputField = ({ icon, label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-800 mb-2 text-right">
      {label}
    </label>
    <div className="relative">
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pr-12 pl-4 py-4 bg-green-50/50 border border-green-300 rounded-2xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-400/30 outline-none text-right"
        dir="rtl"
      />
    </div>
  </div>
);

const InfoCard = ({ icon, title, subtitle, href }) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center justify-between gap-4 p-4 rounded-2xl hover:bg-green-100 transition group bg-white/90 backdrop-blur-md border border-green-200/50 shadow-lg"
      dir="rtl"
    >
      <div>
        <p className="font-semibold text-gray-800 text-right">{title}</p>
        <p className="text-gray-600 text-right">{subtitle}</p>
      </div>
      <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center group-hover:bg-green-300 transition">
        {icon}
      </div>
    </a>
  );
};

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

const EnhancedContactHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative overflow-hidden mt-8 mb-6">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative group cursor-pointer transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        onMouseMove={handleMouseMove}
        style={{ direction: "rtl" }}
      >
        {/* Dynamic gradient overlay that follows mouse */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(16, 185, 129, 0.4), 
              rgba(20, 184, 166, 0.2), 
              transparent 70%)`,
          }}
        />

        {/* Main heading container */}
        <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-emerald-100/20 shadow-lg group-hover:shadow-2xl transition-all duration-500">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-2xl transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-teal-400/30 rounded-bl-2xl transform group-hover:scale-110 transition-transform duration-500" />

          {/* Icon container */}
          <div className="flex justify-end mb-4 space-x-reverse space-x-3">
            <div className="p-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-300">
              <Mail className="w-5 h-5 text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300" />
            </div>
            <div className="p-2 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 group-hover:from-teal-500/20 group-hover:to-emerald-500/20 transition-all duration-300">
              <Phone className="w-5 h-5 text-teal-600 group-hover:text-teal-500 transition-colors duration-300" />
            </div>
          </div>

          {/* Main text with enhanced styling */}
          <h3 className="text-3xl font-bold mb-6 relative">
            {/* Animated underline */}
            <span
              className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-l from-emerald-600 to-teal-600 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
              style={{ width: "100%" }}
            />

            {/* Text with staggered animation */}
            <span className="inline-block">
              {"ניתן ליצור איתנו קשר באמצעות הטופס,"
                .split("")
                .map((char, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:via-emerald-400 group-hover:to-teal-400 transition-all duration-500 transform group-hover:scale-105"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      transitionDelay: `${index * 20}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </span>
            <br />
            <span className="inline-block mt-2">
              {"או לגלול מטה לצפייה בפרטי הקשר שלנו."
                .split("")
                .map((char, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:via-teal-400 group-hover:to-emerald-400 transition-all duration-500 transform group-hover:scale-105"
                    style={{
                      animationDelay: `${(index + 35) * 50}ms`,
                      transitionDelay: `${index * 20}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </span>
          </h3>

          {/* Animated arrow indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex flex-col items-center space-y-2 group-hover:transform group-hover:translate-y-1 transition-transform duration-300">
              <ArrowDown className="w-6 h-6 text-emerald-600 group-hover:text-emerald-500 animate-bounce" />
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-transparent rounded-full group-hover:from-emerald-500 transition-colors duration-300" />
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

const CreativeHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const floatingIcons = [
    { icon: Star, x: 10, y: 5 },
    { icon: Star, x: 85, y: 5 },
  ];

  return (
    <div className="relative py-9 overflow-hidden ">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className="absolute opacity-100"
            style={{
              top: `${item.y}%`,
              left: `${item.x}%`,
              animation: `float 6s ease-in-out ${i * 1}s infinite`,
            }}
          >
            <item.icon className="w-8 h-8 text-green-600" />
          </div>
        ))}

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>

      {/* Main Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 mb-30 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-8xl font-sans font-bold tracking-tight space-y-2 leading-tight">
          <span className="bg-gradient-to-l from-emerald-100 via-green-300 to-emerald-400 bg-clip-text text-transparent">
            בואו נבנה
          </span>
          <span className="block bg-gradient-to-l from-emerald-100 via-green-400 to-emerald-500 bg-clip-text text-transparent">
            משהו מדהים
          </span>
          <span className="block relative bg-gradient-to-l from-emerald-500 via-green-600 to-emerald-400 bg-clip-text text-transparent">
            יחד
            <Sparkles
              className="absolute -right-4 -top-3 w-8 h-8 text-yellow-400 animate-pulse"
              style={{ animationDuration: "2.5s" }}
            />
            <Sparkles
              className="absolute -left-4 -top-3 w-8 h-8 text-yellow-400 animate-pulse"
              style={{ animationDuration: "2.5s" }}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-10 text-lg sm:text-xl 2xl:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <TypewriterText text="בין אם זו שאלה מעניינת, רעיון מבריק, או פרויקט חלומות" />
          <br />
          <span className="text-green-700 font-semibold">
            !אנחנו כאן כדי להפוך אותו למציאות
          </span>
        </p>

        {/* Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 items-center">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-green-200 shadow-md hover:scale-105 transition duration-300">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-800 font-medium">
              תגובה תוך יום עסקים
            </span>
          </div>

          <div className="flex items-center gap-2 bg-green-100/80 backdrop-blur-md px-6 py-3 rounded-full border border-green-200 shadow-md hover:scale-105 transition duration-300">
            <Coffee className="w-5 h-5 text-green-700" />
            <span className="text-green-800 font-medium">שיחה חינמית</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-8 transform transition-all duration-1000 delay-1200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center group cursor-pointer">
            <span
              className="text-emerald-300 text-sm mb-4 font-black tracking-[0.3em] uppercase group-hover:text-emerald-200 transition-colors relative"
              dir="rtl"
            >
              גלול ליצירת קשר
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <div className="relative">
              <div className="w-10 h-16 border-3 border-emerald-400 rounded-full flex justify-center items-start bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-transparent backdrop-blur-md group-hover:border-emerald-300 transition-all duration-300 group-hover:scale-110">
                <div className="w-2 h-4 bg-gradient-to-b from-emerald-300 to-green-500 rounded-full mt-3 animate-bounce" />
              </div>
              <div className="absolute -inset-6 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="absolute inset-0 border border-emerald-300/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
            </div>
            <ChevronDown className="text-emerald-400 mt-4 w-8 h-8 animate-bounce group-hover:text-emerald-300 transition-colors group-hover:scale-125 duration-300" />
          </div>
        </div>

        {/* Enhanced Contact Header replacing the old h3 */}
        <EnhancedContactHeader />
      </div>
    </div>
  );
};

const ContactForm = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitted,
  isSubmitting,
}) => (
  <div className="relative z-20 min-h-screen py-10 px-4 ">
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Creative Header */}
      <CreativeHeader />

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-green-200/30 transition-all">
          {/* Subtitle for form */}
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-right">
            צרו איתנו קשר
          </h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                ההודעה נשלחה בהצלחה!
              </h2>
              <p className="text-gray-600 text-center">
                .תודה שפניתם אלינו! נחזור אליכם בהקדם
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={<User />}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="השם שלכם"
                  label="שם מלא *"
                />
                <InputField
                  icon={<AtSign />}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  label="כתובת אימייל *"
                />
                <InputField
                  icon={<Phone />}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="אופציונלי"
                  label="טלפון"
                />
                <InputField
                  icon={<Hash />}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="נושא ההודעה"
                  label="נושא *"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 text-right">
                  הודעה *
                </label>
                <div className="relative">
                  <FileText className="absolute top-5 right-4 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="ספרו לנו איך נוכל לעזור..."
                    className="w-full pr-12 pl-4 py-4 rounded-2xl bg-green-50/50 border border-green-300 focus:ring-4 focus:ring-green-400/30 focus:border-green-600 outline-none resize-none text-right"
                    dir="rtl"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 shadow-lg hover:shadow-xl transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    שולח...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    שלח הודעה
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Subtitle for contact info */}
          <h3 className="text-2xl font-semibold  mb-6 text-right bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent bg-clip-text">
            דרכי התקשרות
          </h3>

          <InfoCard
            icon={<Mail className="text-green-700" />}
            title="אימייל"
            subtitle="orionwhop@gmail.com"
            href="mailto:orionwhop@gmail.com"
          />
          <InfoCard
            icon={<Phone className="text-green-700" />}
            title="טלפון"
            subtitle="058-793-6933"
            href="tel:0587936933"
          />
          <InfoCard
            icon={<MessageCircle className="text-green-600" />}
            title="וואטסאפ"
            subtitle="לשיחה מהירה- לחצו כאן"
            href="https://wa.me/972587936933"
          />
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add this useEffect to parse URL query params on load and set message
  useEffect(() => {
    const params = getQueryParams();

    if (!params.package && !params.upsells) {
      // No params - clear message
      setFormData((prev) => ({
        ...prev,
        message: "",
      }));
      return;
    }

    const packageName = params.package || "Standard";
    const upsellsRaw = params.upsells || "";

    const upsellsList = upsellsRaw
      .split(/[;,/]+/)
      .map((item) => item.trim())
      .filter(Boolean);

    const upsellsText =
      upsellsList.length > 0 ? ` עם תוספות: ${upsellsList.join(", ")}` : "";

    const messageStart = `שלום, אני מעוניין לרכוש את חבילת "${packageName}"${upsellsText}. אשמח לקבל פרטים נוספים.`;

    setFormData((prev) => ({
      ...prev,
      message: messageStart,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/send", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      alert("משהו השתבש. אנא נסו שוב.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
      />
      <Footer />
    </>
  );
};

export default ContactPage;
