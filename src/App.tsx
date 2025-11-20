import Landing from "./components/Main/Landing";
import Projects from "./components/Main/Projects";
import Skills from "./components/Main/Skills";
import ContactBanner from "./components/Main/ContactBanner";
import { Footer } from "./components/footer";
import ValuePillars from "./components/Main/ValuePillars";
import ServicesSection from "./components/Main/Services";
import { MessageCircle } from "lucide-react";
import { Config } from "./components/config";
import ProcessSection from "./components/Main/Process";
import FAQSection from "./components/Main/FAQ";
import { createBrowserRouter, RouterProvider } from "react-router";
import AcademyRedesignCaseStudy from "./components/Main/CaseStudy";

const Home = () => (
  <div className="bg-linear-to-br from-[#061022] via-[#071228] to-[#071018]">
    <Landing />
    <ValuePillars />
    <ServicesSection />
    <ContactBanner />
    <ProcessSection />
    <FAQSection />
    <ContactBanner />
    <Skills />
    <Projects />
    <Footer />
    <a
      href={Config.mailString}
      className="fixed bottom-6 right-6 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg text-sm"
    >
      <MessageCircle />
    </a>
  </div>
);

const CaseStudy = () => (
  <div className="bg-linear-to-br from-[#061022] via-[#071228] to-[#071018]">
    <AcademyRedesignCaseStudy />
  </div>
);

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/case-study", element: <CaseStudy /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
