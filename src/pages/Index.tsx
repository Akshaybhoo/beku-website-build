import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="noise-overlay">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Events />
      <MenuSection />
      <About />
      <Visit />
      <Footer />
    </div>
  );
};

export default Index;
