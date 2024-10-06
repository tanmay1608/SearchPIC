import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid"; 

const FilterHeader = ({state,dispatch}) => {
 
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ["ALL", "Landscape", "Portrait"];

  return (
    <div className={` ${state.isCollided ? "max-h-0 p-0 opacity-0" : "max-h-40 p-2 opacity-100"} w-full flex justify-end border-b border-gray-200 transition-all duration-1000 ease-in-out mt-16`}>

        <div className="relative w-64 ">
      
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm ring-1 ring-gray-300"
      >
       
        <div className="flex items-center">
          <span className="mr-2">📸</span> 
          <span className="font-normal mr-2 text-gray-400">Orientation</span>
          <span className="font-semibold">{state.orientation}</span> 
        </div>
       
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      
      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  dispatch({type:"updateorientation",payload:option})
                  setDropdownOpen(false);
                }}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  state.orientation === option ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default FilterHeader;
