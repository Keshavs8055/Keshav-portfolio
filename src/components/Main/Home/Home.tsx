import About from "../../Sections/About";
import Contact from "../../Sections/Contact";
import ContactBanner from "../../Sections/ContactBanner";
import FAQSection from "../../Sections/FAQ";
import Landing from "../../Sections/Landing";
import Problems from "../../Sections/Problems";
import ServicesSection from "../../Sections/Services";
import Nav from "../Navbar";

export default function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <Problems />
      <ServicesSection />
      <ContactBanner />
      <About />
      <FAQSection />
      <Contact />
    </>
  );
}
