// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import CarDetailPage from "./components/CarDetailPage";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
    </Router>
  );
};

export default App;
