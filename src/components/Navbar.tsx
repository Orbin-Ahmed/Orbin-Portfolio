import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo.png";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const navItemList = ["About", "Experience", "Projects", "Contact"];
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (isMenuToggle) {
      menu?.classList.add("open");
      icon?.classList.add("open");
    } else {
      menu?.classList.remove("open");
      icon?.classList.remove("open");
    }
  }, [isMenuToggle]);

  return (
    <>
      {isAboveMediumScreen && (
        <nav
          id="desktop-nav"
          className="flex mr-10 ml-6 justify-between items-center"
        >
          {/* <div className="text-3xl text-primary-100 italic font-medium">
            Orbin Ahmed
          </div> */}
          <div>
            <img src={logo} alt="Acanto" className="w-28 h-auto" />
          </div>
          <div>
            <ul className="flex gap-8 text-xl list-none">
              {navItemList.map((value, i) => (
                <li key={i}>
                  <a
                    href={`#${value}`}
                    className="text-primary-100 hover:text-primary-hover font-normal"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
      {/* Medium Screen */}
      {!isAboveMediumScreen && (
        <nav
          id="hamburger-nav"
          className="flex mx-10 my-4 justify-between items-center gap-4"
        >
          {/* <div className="sm:text-2xl text-xl text-primary-100 italic font-medium">
            Orbin Ahmed
          </div> */}
          <div>
            <img src={logo} alt="Acanto" className="sm:w-24 w-20 h-auto" />
          </div>
          <div className="hamburger-menu">
            <div
              className="hamburger-icon"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links bg-transparent">
              {navItemList.map((item, i) => (
                <li key={i}>
                  <a
                    className="text-primary-100 hover:text-primary-hover font-normal text-xl"
                    href={`#${item}`}
                    onClick={() => setIsMenuToggle(!isMenuToggle)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
