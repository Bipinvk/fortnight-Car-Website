import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection id="home" />
        <FeatureSection id="features" />
        <Workflow id="cars" />
        <About id="about" />
    
        <Footer />
      </div>
    </>
  );
};

export default Home;
