import Separator from "./shared/Separator";

const list = [
  "Ha bárki a rendszeren keresztül szeretne kampányt indítani hozzátok irányítjuk.",
  "Partneri diszkontot biztosíttunk a  számotokra.",
  "Fejlesztési javaslatokat tehettek a rendszer működésével kapcsolatban.",
  "Ingyenes tréninget kaptok a rendszer használatáról. Jó, mondjuk ez amúgyis feltétele a csatlakozásnak.",
  "Folyamatos támogatást biztosítunk nektek.",
  "Ötleteket adunk a rendszer optimális használatához.",
];

const list2 = ["Kölcsönös tiszteletet! Ez fontos."];
const list3 = [
  "A Ti szerepetek a delivery és a disztribúció.",
  "Mi pedig teljes mellszélességgel mellettetek állunk. Kihozzuk nektek a technológiából mindazt ami a csövön kifér.",
  "Tőletek a rendszeres tréningeken való részvételt.",
  "Tőlünk a rendszeresen tartott tréningek szervezését és minőségi lebonyolítását.",
];

const Marketing = () => {
  return (
    <>
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
                    Jelenj meg olyan helyszíneken is, ahol eddig szinte
                    lehetetlen volt bemutatkoznod! Országos rendezvényeken,
                    fesztiválokon, kultúrális eseményeken.
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
                  Figyeld a <span className="font-bold">seekretbox</span> appal
                  az üzletek egyedi ajánlatait!
                </p>

                <p className="text-white text-[14px] poppins  font-extralight lg:text-start text-center">
                  Megtetszett valamelyik?
                  <br /> Siess és érj oda Te először! Vigyázz, nehogy más vigye
                  el előled
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
      {/*  2nd Section */}
      <Separator />
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-[20%] bg-[#6E6E6E] flex justify-center items-center py-4">
          <h1 className="text-[#E8E6E6] text-[24px] sm:text-[33px] px-5 lg:px-10 text-center">
            Legyél kiemelt partnerünk
          </h1>
        </div>
        <div className="lg:w-[80%] bg-[#4F386D]  py-3 px-8  lg:px-[120px]">
          <div className="flex flex-col items-center  gap-4 ">
            <span className=" self-end border-b-[1px] border-solid border-white pb-3 w-full lg:w-1/4">
              <h4 className="text-[#CCCCCC] text-[26px] text-right">
                Csak őszintén
              </h4>
            </span>
            <p className="font-normal text-white lg:w-1/2 text-center poppins text-[14px]">
              A seekretbox rendszer hírdetéskezelő felülete csak a Partnereinken
              keresztül érhető el.
            </p>
            <p className="text-white font-extralight poppins text-[14px] text-justify leading-6">
              Csak őszintén A seekretbox rendszer hírdetéskezelő felülete csak a
              Partnereinken keresztül érhető el. Hogy miért van ez a korlátozás?
              Mert úgy hisszük, hogy a marketing egy olyan szakterület, amelyet
              csak hosszú évek alatt szerzett tapasztalattal, tanulással
              csinálhat jól az ember.A szépérzék, a pszichológia, az analitikus
              és stratégiai gondolkodás, a technológiai ismeretek mind
              szükségesek ahhoz, hogy a végeredmény professzionális legyen.
            </p>
            <p className="text-white font-extralight poppins text-[14px] text-justify leading-6">
              Ismeritek azt a viccet, mikor megkérdezik az öreg nénit, hogy tud
              e hegedülni? &ldquo;Még nem próbáltam, de biztosan tudok&rdquo;.
              Így megy ez! De a Nemzeti Filharmonikusohoz még így sem biztos,
              hogy bekerülne. Hát, ezzel mi is így vagyunk. Szeretnénk, ha olyan
              Partnerek töltenék fel tartalommal a rendszert, akiknek valóban a
              marketing a szakterülete. Marketinges vagy? Akkor már érted miért
              szeretnénk a partnereink között látni.
            </p>
            <p className="font-normal text-white  text-center poppins text-[14px]">
              Szeretnétek tudni, milyen előnyökkel jár a kiemelt partnerség?
            </p>

            <ul className="flex flex-col list-disc self-start gap-[6px] list-inside text-white">
              <span className="text-white font-extralight poppins text-[14px] text-justify leading-6 self-start">
                Figyeljetek:
              </span>
              {list.map((item, index) => (
                <li
                  className="text-white font-extralight poppins text-[14px] text-justify leading-6 flex lg:items-center gap-4 "
                  key={index}
                >
                  <span className="w-2 h-2 lg:block hidden bg-white rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <p className="font-normal text-white  text-center poppins text-[14px]">
                Boldog, boldogtalan lehet a Partnerünk?
              </p>
              <p className="text-white font-extralight poppins text-[14px] text-justify leading-6">
                Dehogy! Több szempontból sem. Az egyik ok, hogy az indulásnál
                szeretnénk a legjobbakkal együtt dolgozni. Van egy stratégia
                célunk, ami meghatározza, hogy az első évben maximum hány
                partnerrel kívánunk együttműködni. Na ők lesznek a kiemelt
                partnereink. Az első évet követően is vigyázunk a rendszerre,
                mint a szemünk fényére, ezért továbbra is csak a (persze
                utánatok csak a második) legjobbakkal fogunk együtt dolgozni.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-normal text-white  text-center poppins text-[14px]">
                Mit várjunk el egymástól?
              </p>
              <ul className="flex flex-col list-disc self-start gap-[6px]">
                {list2.map((item, index) => (
                  <li
                    className="text-white font-extralight poppins text-[14px] text-justify leading-6 flex items-center gap-4 "
                    key={index}
                  >
                    <span className="w-2 h-2 bg-white rounded-full lg:block hidden "></span>
                    {item}
                  </li>
                ))}
                <li className="text-white font-extralight poppins text-[14px] text-justify leading-6 flex items-center gap-4 ">
                  <span className="w-2 h-2 bg-white rounded-full lg:block hidden"></span>
                  Mindenkinek az az érdeke, hogy megismerjék a rendszert. -
                  Szemérmességből most nem írom ide, hogy ez
                </li>
                <li className="text-white font-extralight poppins text-[14px] text-justify leading-6 flex items-center gap-4 px-6">
                  miért fontos, esetleg anyagiasnak is tűnnék -, de erre
                  mindkettőnknek vagyis mindhármunknak törekednünk kell. Ezért
                  ebben várjuk a Ti aktív részvételeteket is.
                </li>
                {list3.map((item, index) => (
                  <li
                    className="text-white font-extralight poppins text-[14px] text-justify leading-6 flex items-center gap-4 "
                    key={index}
                  >
                    <span className="w-2 h-2 bg-white rounded-full lg:block hidden"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <p className="text-white font-extralight poppins text-[14px] text-justify leading-6">
                  Ha szivesen lennél a kiemelt partnerünk, kérlek írj levelet,
                  vagy telefonálj, vagy csak üzenj itt az oldalon.
                </p>

                <p className="text-white font-extralight poppins text-[14px] text-justify leading-6">
                  Illetve, ha van ötleted, hogy mit keres egy kacsa logónkon (az
                  oldal alján), kérlek írd meg nekünk itt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
