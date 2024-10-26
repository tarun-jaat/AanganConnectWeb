import React from "react";
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div className="w-full bg-[#FBFBFB] px-12">
      <div className="w-full h-[35vh] flex flex-col items-center justify-end p-3">
        <h1 className="nico text-[4vw]">
          AANGAN <span>CONNECT</span>
        </h1>
        <p className="w-[80%] text-center inria text-xl">
          With AanganConnect, enjoy features like real-time announcements,
          visitor management, seamless payments, issue tracking, and smart
          security integration – all designed to make society management
          effortless.
        </p>
      </div>
      <div className="w-full h-[70vh] bg-[#FFE1E1] mt-[2.5vw] rounded-2xl p-5 flex gap-3">
        <div className="w-[80%] h-full">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/953e/8d78/4eee86269b307b6f0b8a60f2118dcec7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVAP95D2UUPH9oUOrJI0gWVs2lnzoGQVYQ6Frza-Q4xPlm4rQgPfWSL-3JuU8Taz~q03b-t5SEBanskQ6nsjwzufTE3QoeRRH5WSLhGT0n0WVSOlF0eQKMJVLFkXnb29Ec1VWKGCWaD4b8EmIpNfEVo~rYgCcjV91P1cFz~J2B3Nj5iDZ8AdxSuO7jeE3kEZsBKc8j444QSOSDrxVvcMOk6LNOgp9faIatGmmDQHaOcZreeqDgb50k30jB6jyugQjPYMaVmSnfGy0v5vwX6EdZMx~gLU2hohD7JlpYHnkDAk~7AvRWPBFmqocFhUj6QUwGo2cIR9dlPzCB22TJ4A3w__"
            alt=""
          />
        </div>
        <div className="w-full h-full p-2">
          <h1 className="inria text-[#AE1D1D] font-bold text-4xl mb-8">
            Productivity
          </h1>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
                Centralized Management Dashboard
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
              One-stop platform for managing society tasks like announcements,
              payments, and issue tracking.
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Automated Workflows
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Simplify repetitive tasks like visitor check-ins, payments, and complaint resolution.
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Task Scheduling & Reminders
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Assign and track tasks with reminders to ensure nothing is overlooked.
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Real-Time Updates
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Instantly share society notices and updates, ensuring timely communication across the community.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-[#E1ECFF] mt-[2.5vw] rounded-2xl p-5 flex justify-center flex-row-reverse gap-3">
        <div className="w-[80%] h-full">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/8fb0/333b/da43573cf76bd33a4077c4227f4df5da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OnxokFYt-4gXb6FLyw3aoZ-2yFx7Ove~aqomYyBcnXCDM~Fwg4tIbT0ITFCizSslgGbqmMk3Vk5wtCqv7LgesdatzJ5yb47Ccsb~9ey~tZ2d5pw1La86Jn7fUFUOj3qPaMdNt75Tcud3BijYXu-QDBST1HUY37wpp63B8f4uTvBDjCOUDecc5HwRymJ~GPgUVIoQe~SHGNaR9K2wXfubWAPFws0OPv3MBfxClnAZFGmScqaNcZaFSEV-fGk~ANKgNAr0aVj5FHE2k0BPmkN8~o5me5swL7a8nmqIkf3b2Ex7NEbid6dn4AtPvjxVmdPvovHbDEKo4SWOpVx4fi6eoQ__"
            alt=""
          />
        </div>
        <div className="w-full pl-[3vw] pt-[2vw] h-full p-2">
          <h1 className="inria text-[#0086FF] font-bold text-4xl mb-8">
          Security
          </h1>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Visitor Management System
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            QR-based visitor passes and logs for easy tracking of visitors and service providers
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              mart Security Integration
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            IoT-enabled gates, cameras, and parking management for increased safety.
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Emergency Alerts
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Immediate notifications and alerts during emergencies, ensuring quick response.
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Secure Data Management
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
           Strong encryption to protect resident and society data from unauthorized access.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-[#FFFFE1] mt-[2.5vw]  rounded-2xl p-5 flex justify-center gap-3">
        <div className="w-[80%] h-full">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/2887/05b3/b350efc21b2482b42e27365a6fc89c2b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LN6FXNcYvPUrUtoiuY3vQ1gxnkR5HlRXVrSTZQwPR0WZrRvsRmCGQMnFvZ-X8KEnNSXy1d3VgVsZYKhfxApJLAmHYuBIIDVQRcUlJp~ncW6wiOz6fJd26eB5uUACaFORhbHvlVVhau42Qd5sQRYFaBO~UQkz6~gF8xjparNGoz3oePxDvViCuYHPG5B-~btTypMjB0pxqLWSrtIysZLJvI6ovEs3eUT1KkVBqk4MSApCg1g-vrQWLTbeNnPmE1VZgQaSB8CJDmIxLnfyDymQPLK5p--FLuOPVzCcPXd59~slOvhzXE3cBw32cza4biuUkc0TuaAHn9w32GaxYdq9mQ__"
            alt=""
          />
        </div>
        <div className="w-full h-full p-2">
          <h1 className="inria text-[#CDB800] font-bold text-4xl mb-8">
          Collaboration
          </h1>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Resident Communication Hub
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Engage residents through polls, forums, and announcements for a connected community
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Role-Based Access Control
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Define access levels for different users, such as residents, security, and admins, ensuring proper collaboration
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Event Management
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Organize and promote society events, manage RSVPs, and share updates in real time.
            </p>
          </div>
          <div className="inria flex flex-col items-end mt-2">
            <div className="flex gap-3 items-center w-full ">
              <h3 className="text-2xl ">
                {" "}
                <GoDotFill />
              </h3>
              <h1 className="text-xl font-bold">
              Feedback and Issue Resolution
              </h1>
            </div>
            <p className="w-[90%] mt-2 text-xl font-[300]">
            Enable residents to submit complaints or suggestions, with tracking for faster resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
