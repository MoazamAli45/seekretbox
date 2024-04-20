import Calendar from "./shared/Calendar";

const Agenda = () => {
  return (
    <div className="hidden lg:flex flex-col-reverse lg:flex-row ">
      <div className="lg:w-[40%] bg-[#4F386D] flex flex-col items-center justify-center py-3 gap-3">
        <h3 className="text-[33px] text-[#E8E6E6]">
          Partner tréning időpontok
        </h3>
      </div>
      <div className="lg:w-[60%] bg-[#6E6E6E] flex justify-center items-center py-8 px-8">
        <Calendar />
      </div>
    </div>
  );
};

export default Agenda;
