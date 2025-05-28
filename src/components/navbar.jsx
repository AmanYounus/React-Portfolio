import logo from "../assets/logo-new-new.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return <nav className = " mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 item-center">
        <img src = "src/assets/logo-new-new.png" alt = "logo" className =" w-48 -ml-10"/>
      </div>
      <div class = " m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin />
      <FaInstagram />
      <FaGithub />
      <FaSquareXTwitter />
      
      </div>
      </nav>
};

export default Navbar;