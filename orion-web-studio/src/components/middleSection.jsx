import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ScrollVelocity from "./animatedText-velocity";

const MiddleSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/8b07f106-2295-478e-949e-cd86ff93d8e6/YwJe132N9D.json"
    )
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => {
        console.error("Failed to load Lottie animation:", err);
      });
  }, []);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#176B34] to-slate-900 overflow-hidden"
        style={{ direction: "rtl" }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1BAF3A] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#2EC84D] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#1BAF3A] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#1BAF3A] to-[#176B34] rounded-full text-white text-sm font-semibold tracking-wide uppercase shadow-lg">
                    בנייה משותפת
                  </span>
                </div>

                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight lg:leading-snug"
                  style={{ unicodeBidi: "plaintext" }}
                >
                  <span className="block text-white mb-2">
                    אנחנו לא רק בונים אתר –
                  </span>
                  <span className="block bg-gradient-to-r from-[#2EC84D] via-[#1BAF3A] to-[#176B34] bg-clip-text text-transparent">
                    אנחנו בונים אותו יחד איתכם
                  </span>
                </h1>

                <p
                  className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
                  style={{ unicodeBidi: "plaintext" }}
                >
                  לכל אורך הדרך אנחנו בקשר, בודקים, מתאימים ומשפרים עד שהכל
                  מרגיש בדיוק כמו שצריך.
                  <span className="block mt-4 font-semibold text-white">
                    אין הפתעות – רק שיתוף פעולה ודיוק עד לתוצאה המושלמת.
                  </span>
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#1BAF3A] to-[#2EC84D] rounded-full"></div>
                  <span className="text-slate-300 text-sm">תקשורת רציפה</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#2EC84D] to-[#176B34] rounded-full"></div>
                  <span className="text-slate-300 text-sm">משוב מיידי</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#176B34] to-[#1BAF3A] rounded-full"></div>
                  <span className="text-slate-300 text-sm">תוצאה מושלמת</span>
                </div>
              </div>
            </div>

            {/* Animation Container */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1BAF3A] to-[#2EC84D] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Animation container */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 shadow-2xl">
                  <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                    <div className="aspect-square rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out">
                      {animationData ? (
                        <Lottie
                          animationData={animationData}
                          loop={true}
                          autoplay={true}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p className="text-white text-center">
                          Loading animation...
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-ping animation-delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#2EC84D] rounded-full opacity-60 animate-ping animation-delay-3000"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-[#1BAF3A] rounded-full opacity-60 animate-ping animation-delay-5000"></div>
        </div>
      </section>

      <div>
        <ScrollVelocity
          texts={[
            "אתרים מעוצבים אישית",
            "Orion Web Studio",
            "אתר מותאם לעסק שלך",
            "פשוט, מקצועי, איכותי",
            "Orion Web Studio",
          ]}
          velocity={200}
          className="text-center"
        />
      </div>
    </>
  );
};

export default MiddleSection;
