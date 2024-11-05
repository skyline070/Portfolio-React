import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sumit-kumar-yadav-775760207/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/skyline070', '_blank');
  };

  const handleLeetcodeClick = () => {
    window.open('#', '_blank');
  };


  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-12 rounded border-b border-neutral-900"
          src={logo}
          alt="logo"
          style={{ backgroundColor: '#f0f0f0' }} 
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin onClick={handleLinkedInClick} className="cursor-pointer" />
        <FaGithub onClick={handleGithubClick} className="cursor-pointer" />
        <SiLeetcode onClick={handleLeetcodeClick} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
