import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="lg:w-[1440px] relative">
        <div className="flex">
          {/* Left Side */}
          <div className="absolute left-[100px] top-[103px] w-5/12 custom-container">
            {/* Text */}
            <div className="">
              <h1 className="text-black font-integral text-[64px] font-bold leading-[64px] not-italic text-left">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className=" text-[#00000099] font-satoshi text-[16px] font-normal leading-[22px] not-italic text-center">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            {/* Button */}
            <div className="">
              <button className="common-button btn-text">Shop Now</button>
            </div>
            {/* Text Data */}
            <div className="flex">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
