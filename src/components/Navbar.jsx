import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
const NavData = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "about", path: "/about" },
  { id: 3, title: "features", path: "/features" },
  { id: 4, title: "pricing", path: "/pricing" },
  { id: 5, title: "contact us", path: "/contact" },
  { id: 6, title: "testimonials", path: "/testimonials" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`fixed w-full h-[12vh] flex items-center px-10 z-[99] transition-all ${
        scrolled ? "bg-white shadow-md" : "md:bg-transparent bg-white"
      }`}
    >
      <Link to="/">
        {scrolled ? (
          <h1 className="text-[#ae1d1d] text-2xl nico font-bold">
            Aangan Connect
          </h1>
        ) : (
            <>
          <img src={Logo} alt="Logo" className="md:block hidden w-[150px] mt-12 h-auto" />
          <h1 className="text-[#] md:hidden block   nico font-bold">
          Aangan Connect
        </h1>
        </>
        )}
      </Link>

      <div className="hidden lg:flex items-center  gap-8 ml-auto">
        {NavData.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setActive(item.title)}
            className={`text-xl capitalize transition-all nico cursor-pointer ${
              item.title === active ? "text-[#ae1d1d] mb-1" : "text-black"
            }`}
          >
            {item.title}
            {item.title === active && (
              <hr className="w-full h-1 transition-all rounded-full bg-[#ae1d1d]" />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden ml-auto">
        <button onClick={toggleMenu} className="text-2xl text-[#ae1d1d]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-white shadow-md lg:hidden">
          <div className="flex flex-col items-center py-4">
            {NavData.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  setActive(item.title);
                  setMenuOpen(false);
                }}
                className={`text-lg capitalize py-2 nico ${
                  item.title === active ? "text-[#ae1d1d]" : "text-black"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
