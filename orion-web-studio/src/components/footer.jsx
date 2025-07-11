import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-transperant text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-sm items-start">
          {/* לוגו ושם האתר */}
          <div
            className="flex items-center justify-center sm:justify-start space-x-4 space-x-reverse col-span-1 sm:col-span-2 lg:col-span-1"
            dir="rtl"
          >
            <img
              src="/src/assets/panda-white.png"
              alt="Orion Web Studio Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-right">
              <h2 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#1BAF3A] to-[#2EC84D] bg-clip-text text-transparent">
                Orion Web Studio
              </h2>
            </div>
          </div>

          {/* ניווט מהיר */}
          <div className="text-center sm:text-right">
            <h3
              className="font-semibold mb-3 sm:mb-2 text-[#1BAF3A] text-base sm:text-sm"
              dir="rtl"
            >
              ניווט מהיר
            </h3>
            <ul className="space-y-2 sm:space-y-1 text-gray-300" dir="rtl">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#2EC84D] transition-colors duration-300 text-sm sm:text-xs md:text-sm"
                >
                  דף הבית
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2EC84D] transition-colors duration-300 text-sm sm:text-xs md:text-sm"
                >
                  עלינו{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#2EC84D] transition-colors duration-300 text-sm sm:text-xs md:text-sm"
                >
                  שירותים
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#2EC84D] transition-colors duration-300 text-sm sm:text-xs md:text-sm"
                >
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* פרטי יצירת קשר */}
          <div className="text-center sm:text-right">
            <h3
              className="font-semibold mb-3 sm:mb-2 text-[#1BAF3A] text-base sm:text-sm"
              dir="rtl"
            >
              צור קשר
            </h3>
            <div className="space-y-2 sm:space-y-1">
              <p
                className="text-gray-300 hover:text-[#2EC84D] transition-colors duration-300 text-sm sm:text-xs md:text-sm break-all sm:break-normal"
                dir="rtl"
              >
                מייל: orionkarj@gmail.com
              </p>
              <p
                className="text-gray-300 hover:text-[#2EC84D] transition-colors duration-300 text-sm sm:text-xs md:text-sm"
                dir="rtl"
              >
                וואטסאפ: 058-793-6933
              </p>
            </div>
          </div>
        </div>

        {/* תחתית */}
        <div
          className="mt-6 sm:mt-8 md:mt-10 border-t border-gray-700 pt-4 text-center text-gray-500"
          dir="rtl"
        >
          <p className="text-xs sm:text-sm">
            Orion Web Studio © 2025 — כל הזכויות שמורות
          </p>
          <div className="mt-2 sm:mt-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#2EC84D] hover:text-[#1BAF3A] hover:underline transition-colors duration-300 text-xs sm:text-sm inline-flex items-center gap-1"
            >
              <span>👆</span>
              <span>חזור למעלה</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
