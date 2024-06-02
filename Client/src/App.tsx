import Footer from "@components/Footer";
import Skills from "@components/Skills/Real_Skills";
import About from "@components/About";
import Contact_form from "@components/Contact_Form/Contact_form";
import Testimonial from "@components/Testimonials/Testimonial";
import ScrollToTop from "@components/ScrollTop/ScrollTop";
import Nav_Hero from "@components/Nav_Hero";
import Projects from "@components/Project/Index";
// import Preloader from "@components/Preloader/Preloader";
// import { useEffect, useState } from "react";

function App() {
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("TimeOut started");
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="bg-white">
      <ScrollToTop />
      <Nav_Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact_form />
      <Footer />
    </div>
  );
}

export default App;

// {loading ? (
//   <Preloader />
// ) : (
//         </>
//         )}
//         <>
