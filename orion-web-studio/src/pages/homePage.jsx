import Navbar from "../components/navbar.jsx";
import Aurora from "../components/backround.jsx";
import HeroSection from "../components/hero.jsx";
import MiddleSection from "../components/middleSection.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <>
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
      <Navbar />
      <HeroSection />
      <MiddleSection /> {/* Correct usage */}
      <Footer></Footer>
    </>
  );
}

export default Home;
