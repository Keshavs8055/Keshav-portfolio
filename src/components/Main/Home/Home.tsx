import About from "../../Sections/About";
import ContactBanner from "../../Sections/ContactBanner";
import FAQSection from "../../Sections/FAQ";
import Landing from "../../Sections/Landing";
import ServicesSection from "../../Sections/Services";
import SocialProof from "../../Sections/SocialProof";
import Nav from "../Navbar";

export default function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <ServicesSection />
      <ContactBanner />
      <About />
      <SocialProof />
      <FAQSection />
    </>
  );
}
