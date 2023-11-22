import React, { useState } from 'react';
import '../styles/muscles.css';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import pectoral from '../assets/pectoral.png'; // Import your close icon image
import back from '../assets/back.png';
import arm from '../assets/arm.png';
import leg from '../assets/leg.png';
import abdominal from '../assets/abdominal.png';
import FooterA from './footer';

 
const Abdominales = () => {

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  // 

  return (
    <>
    
      {/* Drawer init and show */}
      <div className="bg-[#101820] flex flex-col items-center w-full">
        
            <div className="bg-[#101820] w-[15%] m-5 mt-24">
              <div className="relative h-[200px] bg-[#273a4c] rounded-xl">
                <img
                  className="absolute md:w-[150px] md:h-[150px] left-10 object-cover cursor-pointer"
                  alt=""
                  src={abdominal}
                  onClick={handleDrawerToggle} 
                
                />
                <div className="absolute bottom-0 w-full font-bold text-[#8e8e8e] text-[8px] md:text-[32px] text-center tracking-[0] leading-[normal]">
                  <p>Abdominales</p>
                </div>
              </div>
            </div>
        
        </div>
     

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? '' : '-translate-x-full'
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Ejercicios para Abdomen
        </h5>
        <button
          type="button"
          onClick={handleDrawerToggle}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          {/* Your menu items go here */}
        </div>
      </div>

  
        
      
      </>
    );
  };


export default Abdominales;
