import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";
import Github from "../assets/github.png";

const Navbar = () => {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className=" max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <img src={Logo} alt="" className="w-40" />
          </a>

          <nav className="md:flex hidden items-center space-x-6 text-lg font-medium">
            <a
              href="https://github.com/deepakdev12"
              className="flex items-center space-x-2 space-y-6"
            >
              <img
                src={Github}
                alt="GitHub Profile"
                style={{ cursor: "pointer", width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="#about"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#Certifications"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Project
            </a>
            <a
              href="#Certifications"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
