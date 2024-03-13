import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo.png";

type NavbarProps = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const navBackgroundStyles = isTopOfPage ? "" : "bg-white drop-shadow";
  const navItemList = ["About", "Experience", "Projects", "Contact"];
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuToggle) {
        setIsMenuToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuToggle]);

  useEffect(() => {
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
          className={`${navBackgroundStyles} fixed top-0 z-30 w-full flex px-6 justify-between items-center`}
        >
          {/* <div className="text-3xl text-primary-100 italic font-medium">
            Orbin Ahmed
          </div> */}
          <div>
            <img src={logo} alt="Acanto" className="w-20 h-auto" />
          </div>
          <div>
            <ul className="flex gap-8 text-xl list-none">
              {navItemList.map((value, i) => (
                <li key={i}>
                  <a
                    href={`#${value}`}
                    className={`hover:text-primary-hover hover:underline hover:underline-offset-8 hover:decoration-primary-hover font-normal ${
                      selectedPage === value.toLowerCase()
                        ? "text-primary-100"
                        : "text-primary-100"
                    }`}
                    onClick={() => setSelectedPage(value.toLowerCase())}
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
          className={`${navBackgroundStyles} fixed top-0 z-30 w-full flex px-10 justify-between items-center gap-4`}
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
            <div
              className={`menu-links ${
                isTopOfPage ? "bg-transparent" : "bg-white rounded"
              }`}
            >
              {navItemList.map((item, i) => (
                <li key={i}>
                  <a
                    className={`text-primary-100 hover:text-primary-hover font-normal text-xl ${
                      selectedPage === item.toLowerCase()
                        ? "text-primary-100"
                        : "text-primary-100"
                    }}`}
                    href={`#${item}`}
                    onClick={() => {
                      setIsMenuToggle(!isMenuToggle);
                      setSelectedPage(item.toLowerCase());
                    }}
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
