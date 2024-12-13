
import React, { useState, useEffect } from 'react';
import { FaCat } from 'react-icons/fa';
import Box from "./Box.jsx";

const CatButton = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [rotation, setRotation] = useState(0); 

  const toggleDiv = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setRotation(window.scrollY); 
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId); 
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-20 min-[1000px]:hidden ">
      <button
        onClick={toggleDiv}
        className="bg-neutral-800 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <FaCat size={24} />
      </button>

      {isOpen && (
        <Box />
      )}
    </div>
  );
};

export default CatButton;
