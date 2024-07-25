import logo from "../assets/GilLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";



const Header = () => {
  return (
    <nav className="mb-19 flex items-center justify-between py-6 -mt-14">
    <div className="flex flex-shrink-0 items-center"> 
        <img className="mx-2"  src={logo} alt="Logo"/>
    </div>
    <div className="m-9 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/gil-rodrigues-27bb60268/" target="_blank" ><FaLinkedin /></a>
        <a href="https://github.com/GilRodrigues13" target="_blank" ><FaGithub/></a>
        <a href="https://www.instagram.com/gilgilbertosr/" target="_blank" ><FaInstagram /></a>
    </div>
  </nav>
  );
};

  
         

export default Header;
