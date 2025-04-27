import React from 'react'
import image12 from "../../../assets/images/dressimg1.png";
import image14 from "../../../assets/images/dressimg2.png";

const DressStyle = () => {
  return (
    <>
    <div className="relative w-[1239px] h-[866px] bg-[#efefef] rounded-[40px] overflow-hidden">
      <div className="absolute h-[58px] top-[69px] left-[276px] [font-family:'Integral_CF-Bold',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[normal]">
        BROWSE BY dress STYLE
      </div>

      <div className="w-[407px] top-48 left-16 absolute h-[289px] bg-white rounded-[20px] overflow-hidden">
        <div className="bg-[url(/image-11.png)] bg-cover bg-[50%_50%] relative h-[289px]">
          <div className="absolute h-[49px] top-6 left-9 [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[normal]">
            Casual
          </div>
        </div>
      </div>

      <div className="w-[407px] top-[501px] left-[768px] absolute h-[289px] bg-white rounded-[20px] overflow-hidden">
        <div className="w-[371px] left-9 relative h-[289px]">
          <img
            className="w-[354px] left-[17px] object-cover absolute h-[289px] top-0"
            alt="Image"
            src={image14}
          />

          <div className="absolute h-[49px] top-6 left-0 [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[normal]">
            Gym
          </div>
        </div>
      </div>

      <div className="w-[684px] top-48 left-[491px] absolute h-[289px] bg-white rounded-[20px] overflow-hidden">
        <div className="bg-[url(/image-13.png)] bg-cover bg-[50%_50%] relative h-[289px]">
          <div className="absolute h-[49px] top-6 left-9 [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[normal]">
            Formal
          </div>
        </div>
      </div>

      <div className="w-[684px] top-[501px] left-16 absolute h-[289px] bg-white rounded-[20px] overflow-hidden">
        <div className="w-[648px] left-9 relative h-[289px]">
          <img
            className="w-[642px] left-1.5 absolute h-[289px] top-0"
            alt="Image"
            src={image12}
          />

          <div className="absolute h-[49px] top-6 left-0 [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[normal]">
            Party
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DressStyle