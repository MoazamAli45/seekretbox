import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const toggleRef = useRef();
  const navRef = useRef();

  const [showPartnerOnMobile, setShowPartnerOnMobile] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const headerRef = useRef();

  const partnerToggleHandler = () => {
    setShowPartnerOnMobile(!showPartnerOnMobile);
  };

  const toggleHandler = () => {
    toggleRef.current.classList?.toggle("is-active");
    navRef.current.classList?.toggle("opacity-100");
  };
  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;

    if (isMobileDevice) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10 && !isMobile) {
        headerRef.current?.classList.add(
          "fixed",
          "top-0",
          "transition-all",
          "duration-300",
          "ease-in-out",
          "z-10"
        );
      } else {
        headerRef.current?.classList.remove(
          "fixed",
          "top-0",
          "transition-all",
          "duration-300",
          "ease-in-out"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <nav ref={headerRef}>
      <div className="w-screen  h-[5px] bg-black"></div>
      <div className="w-screen px-6 bg-white pt-4 pb-3 ">
        <div className="flex items-center justify-between">
          <div className="flex  flex-col md:flex-row items-center md:gap-7 ">
            <img
              src="/logo.webp"
              alt="logo"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <a href="/" className="flex flex-col ">
              <span className="text-[#4F255B] text-[26px]  font-medium ">
                seekretbox
              </span>
              <span className="text-[#4F386D]  text-[14px] -mt-[2px] font-medium  proxima-font">
                Ott lenni mindenhol.
              </span>
            </a>
          </div>
          {/*  right navbar */}
          <div className="hidden md:flex justify-between gap-[120px] items-center self-end">
            <div className="flex justify-evenly gap-7 items-center self-end">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[#6E6E6E] font-normal text-[16px] group relative
                cursor-pointer
                "
              >
                Home
                <a
                  href="https://www.seekretbox.com/partner-connect"
                  className="absolute -bottom-[50px] right-0 w-[140px]  px-1 py-1 bg-white text-[16px] group-hover:block hidden  text-[#6E6E6E]"
                >
                  Partner kapcsolat
                </a>
              </Link>
              <Link
                to="seekretbox"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black  transition-colors hover:text-[#6E6E6E]      cursor-pointer font-normal text-[16px]"
              >
                Seekretbox
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" text-black  transition-colors hover:text-[#6E6E6E]      cursor-pointer font-normal text-[16px]"
              >
                Kapcsolat
              </Link>
            </div>
            <a
              href="https://partners.seekretbox.com/"
              className="bg-btn-primary  transition  px-5 py-2 rounded-md self-start text-white font-semibold hover:bg-black hover:text-yellow-500"
            >
              Partnerfelület
            </a>
          </div>
          {/*   Humberger  Icon */}
          <div
            className="hamburger md:hidden z-30"
            id="hamburger-1"
            ref={toggleRef}
            onClick={toggleHandler}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="w-full pt-5 flex md:hidden  ">
          <a
            href="#"
            className="bg-btn-primary  md:hidden transition   py-2   flex justify-center  w-full  rounded-md self-start text-white font-semibold"
          >
            Partnerfelület
          </a>
        </div>
      </div>
      <div className="w-screen h-[5px] bg-[#C7C7C7]"></div>
      {/*  Mobile Navbar */}
      <nav
        className="md:hidden flex flex-col  h-screen py-[100px] px-8  w-screen bg-white items-start z-20  transition duration-700 ease-in-out
         fixed  opacity-0 top-0 left-0 
        "
        ref={navRef}
      >
        <div className="flex flex-col justify-evenly gap-7 items-start">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              toggleHandler();
              partnerToggleHandler();
            }}
            className="text-[#6E6E6E] font-normal text-[20px]"
          >
            Home
          </Link>
          {showPartnerOnMobile && (
            <a
              href="https://www.seekretbox.com/partner-connect"
              className="text-black font-bold pl-3 text-[20px]"
            >
              Partner kapcsolat
            </a>
          )}
          <Link
            to="seekretbox"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={toggleHandler}
            className="text-black  transition-colors hover:text-[#6E6E6E] font-normal text-[20px]"
          >
            Seekretbox
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={toggleHandler}
            className=" text-black  transition-colors hover:text-[#6E6E6E] font-normal text-[20px]"
          >
            Kapcsolat
          </Link>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
