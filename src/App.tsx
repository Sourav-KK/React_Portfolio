import Hero from "@components/Hero/Hero";
import Nav from "@components/Navbar/Nav";
import Footer from "@components/Footer";
import Projects from "@components/Projects";
import Real_Skills from "@components/Skills/Real_Skills";
import About from "@components/About";
import Contact_form from "@components/Contact_Form/Contact_form";
import Testimonial from "@components/Testimonials/Testimonial";

function App() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-cyan-600 via-teal-400 to-indigo-700 scrollbar-none">
        <Nav />
        <Hero />
      </div>
      <About />

      <Real_Skills />
      <Testimonial />
      <Projects />
      <Contact_form />
      <Footer />
    </div>
  );
}

export default App;
