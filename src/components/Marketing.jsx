const Marketing = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="lg:w-[80%] bg-[#4F386D] flex flex-col items-center py-3 gap-3">
        <div className="bg-[#4F255B] px-8 py-2 hidden lg:block w-[80%] text-center">
          <h4 className="text-text-primary text-[26px]">
            Nekik mi ezt mondanánk
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-start px-1 lg:px-[130px]">
          <div className="flex flex-col lg:flex-row  gap-3 ">
            <div className="bg-[#324158] py-8 px-5 lg:w-1/2  hover:rotate-3 transition-all duration-300">
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <h5 className="text-white text-[20px] font-extralight lg:text-start text-center text-center poppins">
                  A Marketing
                </h5>

                <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                  Adatokon és modern technológián alapuló marketing eszközt
                  keresel?
                </p>
                <h5 className="text-[14px] font-bold text-white poppins lg:text-start text-center">
                  Bővítsük együtt a szolgáltatási portfóliód!
                </h5>
                <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                  Építsd be az eszköztáradba, és különböztesd meg magad a
                  piacon!
                </p>
                <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                  A szolgáltatás értékesítése csak a partnereinken keresztül
                  történik!
                </p>
                <h5 className="text-[14px] font-bold text-white poppins lg:text-start text-center">
                  Legyél Te is a partnerünk!
                </h5>
              </div>
            </div>

            <div className="bg-[#4D5135] py-5 px-3 lg:w-1/2  hover:rotate-3 transition-all duration-300">
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <h5 className="text-white text-[20px] font-extralight lg:text-start text-center text-center poppins">
                  A hírdető
                </h5>

                <p className="text-white text-[14px] poppins font-extralight lg:text-start text-center leading-8">
                  Ösztönözd a klienseidet vásárlásra! Ismertesd meg a neved!
                  Jelenj meg olyan helyszíneken is, ahol eddig szinte lehetetlen
                  volt bemutatkoznod! Országos rendezvényeken, fesztiválokon,
                  kultúrális eseményeken.
                </p>

                <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                  Ráadásul az árát Te határozod meg.
                </p>

                <h5 className="text-[14px] font-bold text-white poppins lg:text-start text-center">
                  Keresd a szolgáltatást nyújtó partnereinket!
                </h5>
              </div>
            </div>
          </div>

          <div className="bg-[#300E5D] py-8 px-5  w-full lg:w-1/2 hover:rotate-3 transition-all duration-300">
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h5 className="text-white text-[20px] font-extralight  text-center poppins">
                A Vásárló
              </h5>

              <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                Figyeld a <span className="font-bold">seekretbox</span> appal az
                üzletek egyedi ajánlatait!
              </p>

              <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                Megtetszett valamelyik?
                <br /> Siess és érj oda Te először! Vigyázz, nehogy más vigye el
                előled
              </p>
              <p className="text-white text-[14px] poppins font-extralight lg:text-start text-center">
                Sok seekretboxot csak egy valaki vehet fel. Más boxot esetleg
                többen is. Az sajnos titok, hogy melyik milyen.
              </p>
              <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                Bevásárlóközpontban jársz? Figyeld az appot! Az üzletek a
                helyszínen villám ajánlatokat tehetnek neked!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[20%] bg-[#6E6E6E] flex justify-center items-center py-4">
        <h1 className="text-[#E8E6E6] text-[33px] px-4 text-center">
          Mie a seekretbox?
        </h1>
      </div>
    </div>
  );
};

export default Marketing;
