import { Link } from "react-router-dom";
import {
  ChevronDown,
  Sparkles,
  Code,
  Palette,
  Zap,
  Star,
  Rocket,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [textGlow, setTextGlow] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const elements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 3,
      type: Math.random() > 0.7 ? "star" : "circle",
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setFloatingElements(elements);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const glowInterval = setInterval(() => {
      setTextGlow((prev) => !prev);
    }, 3000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(glowInterval);
    };
  }, []);

  const FloatingElement = ({ element }) => (
    <div
      className={`absolute ${element.type === "star" ? "rotate-45" : "rounded-full"} ${
        element.type === "star"
          ? "bg-gradient-to-br from-emerald-300/40 to-green-400/40"
          : "bg-gradient-to-r from-emerald-400/30 to-green-500/30"
      } blur-sm animate-pulse`}
      style={{
        left: `${element.x}%`,
        top: `${element.y}%`,
        width: `${element.size}px`,
        height: `${element.size}px`,
        opacity: element.opacity,
        animationDelay: `${element.delay}s`,
        animationDuration: `${element.duration}s`,
        transform: `rotate(${element.type === "star" ? "45deg" : "0deg"})`,
      }}
    />
  );

  return (
    <section className="min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%),
            radial-gradient(400px circle at ${mousePosition.x + 100}px ${mousePosition.y + 100}px, rgba(34, 197, 94, 0.1), transparent 40%)
          `,
        }}
      />

      <div className="absolute inset-0">
        {floatingElements.map((el) => (
          <FloatingElement key={el.id} element={el} />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container mt-5 mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-7xl">
        <div
          className={`mb-10 transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-6 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-2xl blur-lg animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[1.75rem] xl:text-[3rem] font-black bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent font-sans">
              Orion Web Studio
            </h1>
          </div>
        </div>

        <div
          className={`mb-5 transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight tracking-tighter transition-all duration-1000 ${
              textGlow ? "drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]" : ""
            }`}
            dir="rtl"
          >
            <span className="bg-gradient-to-l from-emerald-100 via-green-300 to-emerald-400 bg-clip-text text-transparent relative">
              לעסקים שרוצים
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 to-green-500/10 blur-2xl rounded-lg animate-pulse" />
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent relative animate-pulse">
              לבלוט
            </span>
          </h2>
        </div>

        <div
          className={`mb-12 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide font-sans"
            dir="rtl"
          >
            <span className="bg-gradient-to-l from-emerald-200 to-green-300 bg-clip-text text-transparent font-semibold relative">
              אתרים מקצועיים, מודרניים ומהירים
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-60" />
            </span>
            <br />
            <span className="text-gray-400 text-base sm:text-lg font-normal mt-2 block">
              במחיר שמתאים לעסק שלך
            </span>
          </p>
        </div>

        <div
          className={`mb-12 transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                text: "טעינה מהירה",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: Palette,
                text: "עיצוב אישי",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: Rocket,
                text: "ביצועים מעולים",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: Globe,
                text: "נגישות גלובלית",
                color: "from-green-400 to-emerald-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 rounded-2xl border border-emerald-500/30 backdrop-blur-md hover:from-emerald-500/20 hover:to-green-500/20 transition-all duration-500 hover:scale-110 hover:rotate-1"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className={`p-2 rounded-xl bg-gradient-to-r ${feature.color}`}
                >
                  <feature.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-emerald-300 font-bold text-sm sm:text-base md:text-sm tracking-wide relative z-10 font-sans">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`mb-14  transform transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 text-white rounded-3xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 overflow-hidden transform hover:scale-110 hover:-rotate-1 min-w-[240px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-base sm:text-lg tracking-wide ">
                <Sparkles className="w-5 h-5 animate-pulse" />
                רוצה אתר? בוא נדבר
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/services"
              className="group relative px-10 py-5 border-3 border-emerald-400 text-emerald-300  rounded-3xl hover:text-white transition-all duration-500 backdrop-blur-md bg-gradient-to-r from-white/5 to-emerald-500/5 transform hover:scale-110 hover:rotate-1 min-w-[240px]"
            >
              <span className="relative z-10 text-base sm:text-lg tracking-wide flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                צפה בחבילות ובמחירים
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`transform transition-all duration-1000 delay-1200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-col items-center group cursor-pointer">
            <span
              className="text-emerald-300 text-sm mb-4 font-black tracking-[0.3em] uppercase group-hover:text-emerald-200 transition-colors relative"
              dir="rtl"
            >
              גלה עוד
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 via-emerald-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent pointer-events-none blur-3xl" />
    </section>
  );
}
