import axios from "axios";
import { useReducer } from "react";
import { options } from "../utils/constants";



const SearchSection = ({state,fetchImages,handleChange}) => {

    
   
  return (
    <div className="w-full py-28  flex flex-col items-center justify-center ">
      <p className="text-4xl inter-medium ">Discover</p>
      <p className="text-4xl inter-medium   break-words ">
        Beautiful Photography from Around the World
      </p>
      <div className="flex  w-full justify-center mt-10">
        <label className={`${state.isCollided ? "w-0 opacity-0" :"w-1/2"} mx-2 rounded-full ring-1 ring-black bg-white flex justify-center transition-all duration-1000 ease-in-out`}>
          <input type="text" value={state.query} className={`p-2 w-[95%] outline-none text-center`} disabled={state.isCollided} placeholder="search for images" onChange={(e)=>handleChange("updateQuery",e.target.value)}/>
        </label>
        <label className="w-1/6 mx-2 rounded-full bg-white flex justify-center ring-1 ring-black">
          <input type="text" value={state.count} className="p-2 w-[70%] outline-none text-center " placeholder="number of Images" onChange={(e)=>handleChange("updateCount",e.target.value)}/>
        </label>
      </div>
      <button className="px-4 py-2 bg-black text-white rounded-full mt-5 " 
      onClick={fetchImages}
      >Generate</button>
      
    </div>
  );
};

export default SearchSection;
