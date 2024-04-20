import "./App.css";
import Agenda from "./components/Agenda";
import Contact from "./components/Contact";
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
    </>
  );
}

export default App;
