import Footer from "@components/Footer";
import Skills from "@components/Skills/Real_Skills";
import About from "@components/About";
import Testimonial from "@components/Testimonials/Testimonial";
import ScrollToTop from "@components/ScrollTop/ScrollTop";
import Nav_Hero from "@components/Nav_Hero";
import ErrorBoundary from "@components/Fallback_UI/Classs";
import Project from "@components/Project";
import Form_contact from "@components/FormComp/Form_contact";

function App() {
  return (
    <div className="bg-white">
      <ErrorBoundary>
        <ScrollToTop />
        <Nav_Hero />
        <About />
        <Skills />
        <Project />

        <Testimonial />
        <Form_contact />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
