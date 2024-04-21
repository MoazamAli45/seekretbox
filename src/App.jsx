import "./App.css";
import Agenda from "./components/Agenda";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marketing from "./components/Marketing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marketing />
      <Agenda />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
