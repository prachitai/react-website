import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Contact />
      <Education />
      <Skills />
      <Weather />

      <Footer />
    </div>
  );
}

export default App;