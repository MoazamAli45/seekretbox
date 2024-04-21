import Separator from "./shared/Separator";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="lg:w-[65%] bg-[#6E6E6E] h-screen flex justify-center items-center py-8 px-8">
          {/*     <------------------------------------------CONTACT FORM COME HERE -------------------------------> */}
        </div>
        <div className="lg:w-[35%] bg-[#4F386D] flex flex-col items-center justify-center py-3  px-10 ">
          <h3 className="text-[33px] text-[#E8E6E6]">Kérdésed van?</h3>
          <span className="text-[#E8E6E6] text-[20px]">Küldj üzenetet!</span>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Contact;
