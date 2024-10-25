import React from "react";

const Home = () => {
  return (
    <div id="home" className="w-full p-3 md:h-screen relative flex flex-col md:flex-row gap-4">
      <div className="w-full h-[40vh] md:h-full md:w-[60%] py-5 md:ml-8 flex flex-col gap-y-3 md:gap-y-[1.5vw] items-center justify-end md:justify-center md:items-start">
        <h1 className="text-4xl md:text-7xl nico text-[#585858]">
          AANGAN <span>CONNECT</span>
        </h1>
        <p className="text-center md:text-left text-xl font-semibold md:w-[60%] md:text-2xl">
          <span>Empowering</span> Communities with Smart Society Management and{" "}
          <span>Real-Time Connectivity.</span>
        </p>
        <div className="flex gap-4 items-center">
          <button className=" font-bold bg-[#ae1d1d] text-white py-2 px-7 rounded-md">
            Learn More
          </button>
          <button className="text-[#ae1d1d] border-2 border-[#AE1D1D] bg-[#AE1D1D40] py-2 px-6 rounded-md font-bold">
            Schedule a free demo
          </button>
        </div>
      </div>
      <div className="w-full md:w-[40vw] md:h-[38vw] md:absolute bottom-6 right-6 bg-[#FFFFFF87] flex flex-col gap-y-6 rounded-xl p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl tracking-wide font-semibold">
          <span>Features</span> that Empower <br /> Community <span>Living</span>
        </h1>
        <div className="w-full flex gap-3 items-center">
          <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt=""
            />
          </div>
          <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">Advanced Role-Based Access and Announcement Management</h1>
        </div>
        <div className="w-full flex gap-3 items-center">
          <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt=""
            />
          </div>
          <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">Advanced Role-Based Access and Announcement Management</h1>
        </div>
        <div className="w-full flex gap-3 items-center">
          <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt=""
            />
          </div>
          <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">Advanced Role-Based Access and Announcement Management</h1>
        </div>
        <div className="w-full flex gap-3 items-center">
          <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt=""
            />
          </div>
          <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">Advanced Role-Based Access and Announcement Management</h1>
        </div>
        <div className="w-full flex gap-3 items-center">
          <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt=""
            />
          </div>
          <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">Advanced Role-Based Access and Announcement Management</h1>
        </div>
        <div className="w-full flex gap-3 items-center">
          <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt=""
            />
          </div>
          <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">Advanced Role-Based Access and Announcement Management</h1>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
