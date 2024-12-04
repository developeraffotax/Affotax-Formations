import { LuSearchCheck } from "react-icons/lu";
import Timeline from "./Timeline";
import UnderHero from "./UnderHero";

const Hero = () => {
  return (
    <section className="w-full  mesh  font-Inter relative max-xl:px-0 ">
      <div className="w-full overflow-hidden relative ">


      <span className="w-[50%] max-xl:hidden   absolute -right-16 bottom-0"> <svg viewBox="0 0 827 498" fill="none" xmlns="http://www.w3.org/2000/svg" > {" "} <path d="M366.37 361.625C648.83 419.253 803.815 144.553 846 0V526H0C4.43117 447.197 83.9087 303.997 366.37 361.625Z" fill="#FC6600" />{" "} </svg> </span>
      <div className="container mx-auto w-full px-40 max-xl:px-8  ">
            <div className=" flex flex-row max-xl:flex-col  justify-between items-start">

            <div className="text-white pt-20 pb-20 max-xl:pb-12">
          <div className="flex flex-col items-start justify-start gap-8 mb-16 max-xl:mb-8 max-w-2xl">
            <h1 className="text-5xl font-semibold font-poppins">UK Company Formation</h1>

            <h2 className="text-xl text-gray-100 "> {" "} Register your new UK limited company, Open a business bank account, and stay tax compliant - all in one place - quick, easy and secure.{" "} </h2>
            <h3 className="text-base  text-gray-200"> {" "} Free accountant consultation- answer your all tax questions after company registration!!{" "} </h3>
          </div>

          <form className=" mb-16 max-xl:mb-8">
            <div className="flex relative rounded-md w-full max-w-xl">
              <input type="text" name="q" id="query" placeholder="Search if your perfect company name is available" className="w-full px-4 text-black p-3 rounded-md  rounded-r-none border-none placeholder-gray-500  outline-none  " />
              <button className="flex justify-center items-center gap-0 bg-[#FC6600] text-white text-lg  py-3 px-6 rounded-r-md"> <span className=""> {" "} <LuSearchCheck className="inline text-2xl" />{" "} </span> <span className=" ">Search </span> </button>
            </div>
          </form>

          <p>
            The simplest way to set up a UK company by using UK registered
            accountant.
          </p>
        </div>

        <div className="w-[30%] relative  overflow-hidden ">
          <Timeline />
        </div>


            </div>
      </div>

      



      </div>
      <div className="absolute -bottom-24 left-[50%]  -translate-x-[50%] z-50 w-full max-xl:hidden">
      <UnderHero />
      </div>
    </section>
  );
};

export default Hero;
