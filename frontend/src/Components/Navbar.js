import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the path as needed

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setMenu(false); // Close the menu when the modal opens
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <h1 className="font-semibold text-xl cursor-pointer">
              Abstract |<span className="text-green-500 text-2xl"></span>
            </h1>
            <p className="text-sm ml-2">Help Center</p>
          </div>

          {/* Center Section */}
          <div className="hidden md:flex flex-grow justify-center items-center">
            <ul className="flex space-x-4 items-center">
              <li className="cursor-pointer hover:text-green-500">Home</li>
              <li className="cursor-pointer hover:text-green-500">About Us</li>
              <li className="cursor-pointer hover:text-green-500">Services</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="hidden md:block">
            <button
              onClick={handleOpenModal}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
            >
              Submit a Request
            </button>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenu(!menu)} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {menu && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black text-white p-4">
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-green-500">Home</li>
              <li className="cursor-pointer hover:text-green-500">About Us</li>
              <li className="cursor-pointer hover:text-green-500">Services</li>
              <li>
                <button
                  onClick={handleOpenModal}
                  className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                >
                  Submit a Request
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Navbar;
