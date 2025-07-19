import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ognLogo from '/shakers-transcargo-logo.png';

// interface NavbarProps {
//   setIsSidebarOpen: (isOpen: boolean) => void;
// }


const Navbar: React.FC = () => {

  const [IsSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuHandleItem = () => {
    setIsSidebarOpen(true);
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container px-4 mx-auto max-width-1140">
        <div className="flex items-center justify-between h-24">
          <div className="md:hidden">
            <button onClick={() => {
              setIsSidebarOpen(!IsSidebarOpen)
            }} className="text-gray-800">
              {IsSidebarOpen ? <Menu size={56} /> : <X size={56} />}
            </button>
          </div>
          <div className="flex items-center">
            <a href="#home"><img src={ognLogo} alt="OGN Shipping" className="h-16" /></a>
          </div>
          <div className="hidden space-x-4 h-100 md:flex ">
            <a href="#about"
              className="text-gray-800 transition duration-300 hover:border-b-2 hover:border-secondary">About</a>
            <a href="#services"
              className="text-gray-800 transition duration-300 hover:border-b-2 hover:border-secondary">Services</a>
            <a href="#knowledgebase"
              className="text-gray-800 transition duration-300 hover:border-b-2 hover:border-secondary">Knowledgebase</a>
            <a href="#footer"
              className="text-gray-800 transition duration-300 hover:border-b-2 hover:border-secondary">kontakt</a>
          </div>
          <div
            className={`absolute xl:hidden top-20 left-0 h-svh w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition ${IsSidebarOpen ? "-translate-x-full" : "-translate-x-0"}`}
            style={{ transition: "transform 250ms ease, translateX 250ms ease-out" }}>
            <ul className="w-full">
              <li className="w-full p-8 text-center transition-all cursor-pointer active:bg-secondary active:text-white" onClick={menuHandleItem}><a href="#home"
                className="list-none">Home</a>
              </li>
              <li className="w-full p-8 text-center transition-all cursor-pointer active:bg-secondary active:text-white" onClick={menuHandleItem}><a href="#about"
                className="list-none">About</a>
              </li>
              <li className="w-full p-8 text-center transition-all cursor-pointer active:bg-secondary active:text-white" onClick={menuHandleItem}><a href="#services"
                className="list-none">Services</a>
              </li>
              <li className="w-full p-8 text-center transition-all cursor-pointer active:bg-secondary active:text-white" onClick={menuHandleItem}><a href="#knowledgebase"
                className="list-none">Knowledgebase</a>
              </li>
              <li className="w-full p-8 text-center transition-all cursor-pointer active:bg-secondary active:text-white" onClick={menuHandleItem}><a href="#footer"
                className="list-none">kontakt</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;