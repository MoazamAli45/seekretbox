const lists = [
  "Kampányelemzés",
  "Re-marketing",
  "Vásárló követés",
  "Lokációs adatelemzés",
  "Vásárlás ösztönzés",
];
const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[35%] bg-secondary px-6 py-6 sm:px-10 sm:py-14 ">
          <div className="flex flex-col gap-[6px] items-center">
            <h5 className="text-[20px] sm:text-[26px] font-normal text-[#DBDBDB]">
              Adatvezérelt
            </h5>
            <h3 className="text-[40px] sm:text-[63px] text-[#E8E6E6] text-center sm:leading-[75px]">
              Digital Marketing
            </h3>
          </div>
        </div>
        <div className="w-full lg:w-[30%] bg-primary py-6 sm:py-10 ">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-[#DBDBDB] text-[30px] sm:text-[46px]">
              Mit kínálunk?
            </h3>
            <ul className="flex flex-col gap-2 border-t-2 border-solid border-[#DBDBDB] pt-2 pl-4">
              {lists.map((list, index) => (
                <li
                  className="text-[16px] sm:text-[22px] text-[#E8E6E6] flex   gap-3 items-center"
                  key={index}
                >
                  <span className="bg-[#E8E6E6] w-2 h-2 rounded-full"></span>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[35%] bg-secondary p-6 sm:p-10 ">
          <div className="flex flex-col gap-2 items-center ">
            <h3 className="text-[40px] sm:text-[63px] text-[#E8E6E6] text-center lg:text-right sm:leading-[75px]">
              Legyél a partnerünk
            </h3>
            <div className="flex flex-col  gap-2 items-center  lg:items-end ">
              <h5 className="text-[20px] sm:text-[26px] font-normal text-[#DBDBDB] text-center lg:text-right">
                És adj valami újat az ügyfeleidnek!
              </h5>
              <span className="text-white font-bold text-[12px] sm:text-[16px] hover:underline transition">
                Megnézem
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
