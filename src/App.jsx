// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import CarDetailPage from "./components/CarDetailPage";
import ContactForm from "./components/ContactForm";
import Allcars from "./pages/AllCars";
import Navbar from "./components/Navbar";
import CarFinanceApplication from "./pages/Finance";
import About from "./components/About";
import FAQPage from "./components/faq";
import TermsPage from "./components/terms";
import PrivacyPage from "./components/policy";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/all-cars" element={<Allcars />} />
        <Route path="/finance/:id" element={<CarFinanceApplication />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
