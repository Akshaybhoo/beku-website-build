import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Experience from "@/components/Experience";
import Events from "@/components/Events";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="grain-overlay">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <MenuSection />
      <Experience />
      <Events />
      <Visit />
      <Footer />
    </div>
  );
};

export default Index;
