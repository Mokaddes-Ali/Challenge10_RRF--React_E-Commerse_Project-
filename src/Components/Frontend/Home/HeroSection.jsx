import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="lg:w-[1440px] ">
        <div className="flex relative">
          {/* Left Side */}
          <div className="absolute left-[98px] top-[190px] w-5/12 custom-container">
            {/* Text */}
            <div className="w-[577px]">
              <h1 className="text-black text-[63px] uppercase font-integral text-edge-cap leading-trim-both font-extrabold leading-[63px] not-italic text-left">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="pt-[21px] w-[555px] pb-[26px] text-[#00000099] font-satoshi text-[16px] font-normal leading-[22px] not-italic text-left">
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
            <div className="flex pt-14 pb-12">
              <div className="pr-8">
                <h2 className="hero-number tracking-[0.160em]">200+</h2>
                <p>International Brands</p>
              </div>
              <div className="w-[1px] h-[74px] bg-[#0000001A]"></div>
              <div className="pl-8 pr-9">
                <h2 className="hero-number tracking-[0.115em]">2,000+</h2>
                <p>International Brands</p>
              </div>
              <div className="w-[1px] h-[74px] bg-[#0000001A]"></div>
              <div className="pl-8">
                <h2 className="hero-number tracking-[0.160em]">30,000+</h2>
                <p>International Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
