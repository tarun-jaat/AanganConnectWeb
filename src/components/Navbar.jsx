import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  useEffect(() => {
    gsap.to('.navbar', {
      scrollTrigger: {
        trigger: '.navbar',
        start: '15% top',
        end: 'bottom top',
        scrub: 1,
      },
      backgroundColor: 'white',
    });
  }, []);
  const NavData = [
    { id: 1, title: "home", path: "/" },
    { id: 2, title: "about", path: "/about" },
    { id: 3, title: "features", path: "/features" },
    { id: 4, title: "pricing", path: "/pricing" },
    { id: 5, title: "contact us", path: "/contact" },
    { id: 6, title: "testimonials", path: "/testimonials" },
  ];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-[12vh] navbar flex justify-between fixed z-[99] px-5 items-center bg-transparent">
      <div>
        <img
          className="w-[20%]"
          src="https://s3-alpha-sig.figma.com/img/6b1a/bfc8/ccfecc993d38ead826d05f83d59d98fa?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF6gkLJyHbJ1bsbx7U~OvtWhP10L6CGdnyq80Ek2eR6wILLI8apRcqEB4qyzS0E51YdqKz5JeEuHciiqSwUGnhhZVOhZmsUQb7iUPSex6K164RFWuYWNG1qkz~ePt4CA3lcL-Q5MzR-KSvSvLqwz0adQ0xWMivl90ZLRE9xD3F04Sti5ZScZXPyr~IuriAMzuh7-cipS5aHjUUy4LONoQICmYLoTnrXe7T~0oXu~6Vh-79ywuRmqiXLmy22HnDi53R7Kv3dMRA-Ri2S-dEqJRLQVjpX2K5dDcfw5aEWDZ85VB~xgcTzDpoDqJNpEdr7ijW-NWW2IzcRbx~SM3nV0AQ__"
          alt=""
        />
      </div>
      <div className="flex items-center gap-8 mr-[4vw]">
        {NavData.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setActive(item.title)}
            className={`text-xl transition-all cursor-pointer nico capitalize ${
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
    </div>
  );
};

export default Navbar;
