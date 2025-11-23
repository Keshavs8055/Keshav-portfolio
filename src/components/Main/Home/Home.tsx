import About from "../../Sections/About";
import Contact from "../../Sections/Contact";
import ContactBanner from "../../Sections/ContactBanner";
import FAQSection from "../../Sections/FAQ";
import Landing from "../../Sections/Landing";
import ServicesSection from "../../Sections/Services";
import Nav from "../Navbar";
import ProblemSolutionSection from "../../Sections/Problems";

export default function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <ProblemSolutionSection />
      <ServicesSection />
      <ContactBanner />
      <About />
      <FAQSection />
      <Contact />
    </>
  );
}
