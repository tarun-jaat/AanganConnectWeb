import React from "react";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full p-4 bg-[#FBFBFB] pt-[6vw] px-[4vw]">
        <div className="w-full flex-col flex items-end">
          <h1 className="text-[4vw] nico w-full">
            <span>About</span> Us
          </h1>
          <p className="inria text-2xl w-[97%]">
            Your Trusted Partner in Society Management –{" "}
            <span>AanganConnec</span>
          </p>
        </div>
        <div className="w-full p-[3vw] bg-white rounded-[50px] flex flex-col items-center">
          <h1 className="island text-[3.5vw] text-[#AE1D1D]">Aangan Connect</h1>
          <div className="flex flex-col items-end">
            <div className="border-[#40A4FF] border-l-[12px] w-full p-4">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">
                Your Trusted Partner in <br /> Society Management
              </h1>
            </div>
            <p className="w-full inria pl-[6vw] text-2xl">
              At AanganConnect, we are committed to revolutionizing society
              management by offering a seamless platform that brings together
              convenience, security, and community collaboration. Our mission is
              to empower societies with innovative solutions that make managing
              day-to-day operations effortless, while fostering a connected and
              secure living environment for all residents.
            </p>
          </div>
          <div className="flex flex-col items-end mt-[2vw]">
            <div className="w-full pl-[6vw]">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">
                Our Mission
              </h1>
            </div>
            <p className="w-[92%] pl-[2vw] py-5 text-[#585858] inria text-[1.9vw] font-medium mt-[1.5vw] border-l-[12px] border-l-[#AE1D1D]">
              To simplify society management through technology-driven solutions
              that enhance productivity, security, and collaboration in
              communities.
            </p>
          </div>
          <div className="flex flex-col items-end mt-[2vw]">
            <div className="w-full pl-[6vw]">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">Who We Are</h1>
            </div>
            <p className="w-[92%] pl-[2vw] py-5 text-[#585858] inria text-[1.9vw] font-medium mt-[1.5vw] border-l-[12px] border-l-[#CDB800]">
              A team of innovators and professionals dedicated to creating
              smart, user-friendly society management tools that address the
              needs of modern communities.
            </p>
          </div>
          <div className="flex flex-col items-end mt-[2vw]">
            <div className="w-full pl-[6vw]">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">
                What We Offer
              </h1>
            </div>
            <p className="w-[92%] pl-[2vw] py-5 text-[#585858] inria text-[1.9vw] font-medium mt-[1.5vw] border-l-[12px] border-l-[#228700]">
              An all-in-one platform that integrates essential features like
              visitor management, payment systems, security alerts, and
              real-time communication for residents and managers.
            </p>
          </div>
        </div>
      </div>
        <div className="w-full h-[30vh] inria bg-[#40A4FF] px-[3vw] gap-y-4 mt-[4vw] flex flex-col justify-center">
          <h1 className="inria text-3xl text-white font-[700]">Ready to Get Started?</h1>
          <div className="flex justify-between items-start">
          <p className="w-[80%] text-2xl text-white font-[400] pl-6">Choose the plan that works for you and experience the ease of society management with AanganConnect. Contact us today for a demo or to discuss custom solutions!</p>
          <button className="bg-white py-2 px-6 cursor-pointer rounded-xl text-2xl font-bold text-[#40A4FF]">Get Started</button>
          </div>
        </div>
    </div>
  );
};

export default About;
