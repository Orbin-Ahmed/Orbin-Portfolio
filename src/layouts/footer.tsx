import facebook from "@/assets/facebook.png";
import github from "@/assets/github.png";
import instagram from "@/assets/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center bg-white py-6">
        <div className="text-2xl mb-6 font-bold">Acanto</div>
        <div>
          <a
            href="#About"
            className="text-primary-100 hover:text-primary-hover hover:underline hover:underline-offset-8 hover:decoration-primary-hover font-medium m-2"
          >
            About
          </a>
          <a
            href="#Projects"
            className="text-primary-100 hover:text-primary-hover hover:underline hover:underline-offset-8 hover:decoration-primary-hover font-medium m-2"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="text-primary-100 hover:text-primary-hover hover:underline hover:underline-offset-8 hover:decoration-primary-hover font-medium m-2"
          >
            Contact
          </a>
        </div>
        {/* Icon Area */}
        <div className="flex mt-4">
          <Link
            target="_blank"
            to={"https://www.facebook.com/acanto.ahmed.1"}
            className="w-10 h-10 m-2"
          >
            <img src={facebook} alt="FB" />
          </Link>
          <Link
            target="_blank"
            to={"https://www.instagram.com/acanto_ahmed/"}
            className="w-10 h-10 m-2"
          >
            <img src={instagram} alt="FB" />
          </Link>
          <Link
            target="_blank"
            to={"https://github.com/Orbin-Ahmed/"}
            className="w-10 h-10 m-2"
          >
            <img src={github} alt="FB" />
          </Link>
        </div>
        <div className="mt-4">&copy; Acanto. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
