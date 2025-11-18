import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactBanner from "./components/ContactBanner";
import { Footer } from "./footer";

function App() {
  return (
    <div>
      <Landing />
      <Skills />
      <ContactBanner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
