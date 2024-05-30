import Footer from "@components/Footer";
import Projects from "@components/Project/Projects";
import Skills from "@components/Skills/Real_Skills";
import About from "@components/About";
import Contact_form from "@components/Contact_Form/Contact_form";
import Testimonial from "@components/Testimonials/Testimonial";
import ScrollToTop from "@components/ScrollTop/ScrollTop";
import { useEffect, useState } from "react";
import Preloader from "@components/Preloader/Preloader";
import Nav_Hero from "@components/Nav_Hero";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("TimeOut started");
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="bg-white">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ScrollToTop />
          <Nav_Hero />
          <About />
          <Skills />
          <Testimonial />
          <Projects />
          <Contact_form />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
