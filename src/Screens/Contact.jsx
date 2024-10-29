import React from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto overflow-hidden">
      <div className="w-full p-2 pt-[6vw] relative">
        {/* Background SVG */}
        <div className="w-full h-full flex absolute z-[-1]">
          <svg
            width="925"
            height="875"
            viewBox="0 0 925 875"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1" filter="url(#filter0_d_64_9)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 0H921V867H4V0ZM5.43281 1.54821H117.192V122.309H5.43281V1.54821ZM120.058 1.54821H231.817V122.309H120.058V1.54821ZM346.442 1.54821H234.683V122.309H346.442V1.54821ZM349.308 1.54821H461.067V122.309H349.308V1.54821ZM575.692 1.54821H463.933V122.309H575.692V1.54821ZM578.558 1.54821H690.317V122.309H578.558V1.54821ZM804.942 1.54821H693.183V122.309H804.942V1.54821ZM117.192 125.405H5.43281V246.166H117.192V125.405ZM120.058 125.405H231.817V246.166H120.058V125.405ZM346.442 125.405H234.683V246.166H346.442V125.405ZM349.308 125.405H461.067V246.166H349.308V125.405ZM578.558 125.405H690.317V246.166H578.558V125.405ZM807.808 125.405H919.567V246.166H807.808V125.405ZM117.192 249.262H5.43281V370.023H117.192V249.262ZM346.442 249.262H234.683V370.023H346.442V249.262ZM349.308 249.262H461.067V370.023H349.308V249.262ZM575.692 249.262H463.933V370.023H575.692V249.262ZM578.558 249.262H690.317V370.023H578.558V249.262ZM346.442 373.12H234.683V493.88H346.442V373.12ZM349.308 373.12H461.067V493.88H349.308V373.12ZM578.558 373.12H690.317V493.88H578.558V373.12ZM804.942 373.12H693.183V493.88H804.942V373.12ZM807.808 373.12H919.567V493.88H807.808V373.12ZM117.192 496.977H5.43281V617.737H117.192V496.977ZM120.058 496.977H231.817V617.737H120.058V496.977ZM346.442 496.977H234.683V617.737H346.442V496.977ZM349.308 496.977H461.067V617.737H349.308V496.977ZM575.692 496.977H463.933V617.737H575.692V496.977ZM804.942 496.977H693.183V617.737H804.942V496.977ZM117.192 620.834H5.43281V741.595H117.192V620.834ZM120.058 620.834H231.817V741.595H120.058V620.834ZM349.308 620.834H461.067V741.595H349.308V620.834ZM575.692 620.834H463.933V741.595H575.692V620.834ZM578.558 620.834H690.317V741.595H578.558V620.834ZM804.942 620.834H693.183V741.595H804.942V620.834ZM807.808 620.834H919.567V741.595H807.808V620.834ZM120.058 744.691H231.817V865.452H120.058V744.691ZM346.442 744.691H234.683V865.452H346.442V744.691ZM575.692 744.691H463.933V865.452H575.692V744.691ZM578.558 744.691H690.317V865.452H578.558V744.691Z"
                fill="#FFEA29"
              />
            </g>
          </svg>
        </div>

        {/* Contact Us Section */}
        <div className="w-full px-10 flex h-[85vh] items-center justify-center">
          <div className="w-[50%] h-[25vw] flex items-end flex-col justify-center px-8 rounded-l-3xl shadow-md bg-white">
            <div className="w-full flex gap-4 items-center">
              <img className="w-[10%]" src={contact} alt="Contact Icon" />
              <h1 className="text-5xl font-bold text-[#535353]">
                Talk To <span className="text-[#0086FF]">Us!</span>
              </h1>
            </div>
            <p className="w-[90%] pr-12 text-xl">
              At <span className="font-bold">AanganConnect</span>, we’re here to help. Reach out with your questions, and let us show you how we can enhance your society management experience.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-[45%] h-full rounded-3xl bg-white p-6 shadow-md flex flex-col gap-y-6 items-center">
            <input
              className="border-[1px] w-[90%] border-[#0086FF] rounded-md text-xl p-3 outline-none"
              type="text"
              placeholder="John Doe"
            />
            <input
              className="border-[1px] w-[90%] border-[#0086FF] rounded-md text-xl p-3 outline-none"
              type="email"
              placeholder="abc9912@gmail.com"
            />
            <input
              className="border-[1px] w-[90%] border-[#0086FF] rounded-md text-xl p-3 outline-none"
              type="tel"
              placeholder="+91 - 9817761746"
            />
            <textarea
              className="w-[90%] h-[10vw] border-[1px] border-[#0086FF] rounded-md p-3 outline-none"
              placeholder="Message"
            ></textarea>
            <button className="w-[90%] bg-[#0086FF] text-white text-2xl py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full h-[30vh] bg-[#40A4FF] flex items-center px-12 mt-8">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Stay Connected with AanganConnect!
            </h1>
            <p className="text-xl text-white">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
          </div>
          <div className="flex gap-3 p-3 bg-white rounded-md ml-auto">
            <input
              className="text-sm outline-none w-[20vw] placeholder:text-[#8B8B8B]"
              type="email"
              placeholder="badgujjar9991@gmail.com"
            />
            <button className="bg-[#0086FF] text-white py-2 px-5 text-sm rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full h-screen flex flex-col justify-center items-center gap-y-8">
          <h1 className="font-bold text-5xl text-[#525252]">
            What Our Clients Say About Us
          </h1>
          <div className="flex gap-8">
            <div className="w-[25vw] scale-[0.9] h-[28vw] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6">
              <div className="w-[5vw] h-[5vw] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/736x/97/c2/cc/97c2cc6b1c28d098d196a67d15f98fe0.jpg"
                  alt="Testimonial"
                />
              </div>
              <p className="text-xl text-center mt-4">
                "AanganConnect has transformed the way our society operates. The customer service is excellent, and the app's features have made managing our neighborhood a breeze."
              </p>
              <span className="font-bold text-lg text-center mt-2">Ravi Singh</span>
            </div>
            {/* Additional testimonial cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
