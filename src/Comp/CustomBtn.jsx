import React from "react";

const CustomBtn = () => {
  return (
    <div>
      <div className="group overflow-hidden relative z-0 mt-4  cursor-pointer">
        <button className="  rounded-full z-10 h-[60px] w-[180px] flex items-center justify-center overflow-hidden bg-[#ffd074] transition-all duration-500 text-black font-semibold   py-4 px-6  group-hover:scale-95 ">
          <p className=" absolute z-20  w-fit group-hover:translate-y-[-45px] transition-all duration-200">
            Get In Touch
          </p>
          <p className=" absolute z-20 w-fit  group-hover:translate-y-0 translate-y-[45px] transition-all duration-200">
            Get In Touch
          </p>
        </button>
        <div className="absolute z-0 bg-lime-400   transition-all duration-300 group-hover:scale-95 group-hover:opacity-0  scale-0 inset-0  rounded-full "></div>
        <div className="absolute z-0 bg-sky-400   transition-all duration-500 group-hover:scale-95 group-hover:opacity-0 scale-0  inset-0  rounded-full "></div>
        <div className="absolute z-0 bg-[#ffd074]  transition-all duration-700 group-hover:scale-95 group-hover:opacity-0 scale-0  inset-0  rounded-full "></div>
      </div>
    </div>
  );
};

export default CustomBtn;
