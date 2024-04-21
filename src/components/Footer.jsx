const Footer = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <div className="px-10 py-6 bg-[#4F255B] w-[10%]"></div>
        <div className="px-10 py-6 w-[80%] bg-[#6E6E6E] shadow-[0px_0_10px_rgba(0, 0, 0, 0.8)]"></div>
        <div className="px-10 py-6 bg-[#4F255B] w-[10%]"></div>
      </div>
      <div className="bg-[#4F386D] px-10 py-20">
        <div className="flex lg:flex-row flex-col gap-3 lg:gap-[100px] lg:justify-center lg:items-end ">
          <div className="flex flex-col ">
            <div className="flex flex-col ">
              <img
                src="/footer-logo.svg"
                alt="footer-logo"
                className="w-[120px] lg:w-[150px]"
              />
              <span className="text-white text-[12px]">
                Ott lenni mindenhol.
              </span>
            </div>

            <div className="flex flex-col  mt-4">
              <h3 className="text-[#E8E6E6] text-[20px] font-bold ">
                Kapcsolat
              </h3>
              <p className="text-white text-[16px] ">2658. Pusztaberki,</p>
              <p className="text-white text-[16px] ">Kossuth út 76</p>
              <p className="text-white text-[16px] ">+36 30 830 8826</p>
            </div>
          </div>
          {/*  2nd column */}
          <div className="flex flex-row flex-wrap lg:flex-col gap-3 ">
            <div className="flex flex-col ">
              <span className="text-white text-[16px] underline">
                Támogatás:
              </span>
              <span className="text-white text-[16px]">
                support@bitwitch.io
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-white text-[16px] underline">
                Információ:
              </span>
              <span className="text-white text-[16px]">info@bitwitch.io</span>
            </div>
            <div className="flex flex-col ">
              <span className="text-white text-[16px] underline">
                Kereskedelem:
              </span>
              <span className="text-white text-[16px]">sales@bitwitch.io</span>
            </div>
          </div>
          {/*  3rd column */}
          <div className="flex flex-row-reverse lg:flex-col gap-3 items-center justify-start self-start lg:self-center">
            <span className="text-white text-[20px] font-bold lg:block hidden">
              Jogi nyilatkozatok
            </span>
            <a
              href="#"
              className="text-white text-[16px] lg:w-auto w-1/3 underline mt-2"
            >
              Felhasználási feltételek
            </a>
            <a
              href="#"
              className="text-white text-[16px] lg:w-auto w-1/3 underline"
            >
              Adatkezelési tájékoztató
            </a>
            <a
              className="text-white text-[16px] underline lg:w-auto w-1/3"
              href="#"
            >
              ASZF
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="px-10 py-6 bg-[#4F255B] w-[10%]"></div>
        <div className="px-10 py-6 w-[80%] bg-[#6E6E6E] shadow-[0px_0_10px_rgba(0, 0, 0, 0.8)]"></div>
        <div className="px-10 py-6 bg-[#4F255B] w-[10%]"></div>
      </div>
      <footer className="px-10 py-4 bg-[#6E6E6E] flex items-center justify-center">
        <span className="text-white proxima-font text-[14px]">
          © 2024 by bitwitch.io
        </span>
      </footer>
    </>
  );
};

export default Footer;
