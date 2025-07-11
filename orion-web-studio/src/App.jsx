import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import AboutUs from "./pages/aboutUsPage"; // Capitalized
import Contact from "./pages/contactPage";
import PricingPage from "./pages/pricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
