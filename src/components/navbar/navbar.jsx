
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Logo component
const Logo = () => (
  <div>
    <span className='text-[#8245ec]'>&lt;</span>
    <span className='text-white'>Atul</span>
    <span className='text-[#8245ec]'>/</span>
    <span className='text-white'>Ranjan</span>
    <span className='text-[#8245ec]'>&gt;</span>
  </div>
);

// Desktop menu
const DesktopMenu = ({ menuItems, activeSection, handleMenuItemClick }) => (
  <ul className='hidden md:flex space-x-8 text-gray-300'>
    {menuItems.map((item) => (
      <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
        activeSection === item.id ? "text-[#8245ec]" : ""
      }`}>
        <button onClick={() => handleMenuItemClick(item.id)}>
          {item.label}
        </button>
      </li>
    ))}
  </ul>
);

// Social Icons
const SocialIcons = () => (
  <div className='hidden md:flex space-x-4'>
    <a href="https://github.com/atulranjan69" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
      <FaGithub size={24} />
    </a>
    <a href="https://www.linkedin.com/in/atulranjan69" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
      <FaLinkedin size={24} />
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to section on click
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className='text-white py-2 flex justify-between items-center'>
        <Logo />
        <DesktopMenu
          menuItems={menuItems}
          activeSection={activeSection}
          handleMenuItemClick={handleMenuItemClick}
        />
        <SocialIcons />
        {/* Mobile menu toggle */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className='cursor-pointer hover:text-[#8245ec]'>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4 mt-4'>
              <a href="https://github.com/atulranjan69" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/atulranjan69" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
