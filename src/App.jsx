import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
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
      {/*  Chat Icon */}
      <span className="flex items-center justify-center bg-[#373B4D] w-[65px] h-[65px] rounded-full shadow-sm shadow-white/50 fixed right-4 bottom-5">
        <IoChatbubbleEllipsesOutline className="text-white text-[35px]" />
      </span>
    </>
  );
}

export default App;
