import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { IMAGES } from "../utils/constants";
import { useState } from "react";

const ImageSlider = ({state,dispatch}) => {

  const [currentIndex,setCurrentIndex]=useState(1);

  const handlePrevImage=()=>{
    console.log((currentIndex - 1 + state.images.length)% state.images.length)
    setCurrentIndex((currentIndex - 1 + state.images.length)% state.images.length)
  }

  const handleNextImage=()=>{
    console.log((currentIndex + 1) % state.images.length);
    
    setCurrentIndex((currentIndex + 1) % state.images.length)
  }

  return (
    <div className="w-full h-full relative p-5">
    
      <img src={state.images[currentIndex].links.download} 
      alt={`Slide ${state.currentIndex}`} 
      className="object-cover w-full h-full block"/>
      
      <button className="absolute top-0 bottom-0  cursor-pointer hover:bg-[rgb(0,0,0,0.2)] p-4 transition-colors duration-300 ease-in-out" onClick={()=>handlePrevImage()}>
        <ArrowBigLeft className="stroke-white fill-black w-8 h-8"/>
      </button>
      <button className="absolute top-0 bottom-0 right-0  cursor-pointer hover:bg-[rgb(0,0,0,0.2)] p-4 transition-colors duration-300 ease-in-out" onClick={()=> handleNextImage()}>
      <ArrowBigRight className="stroke-white fill-black w-8 h-8"/>
      </button>
    </div>
  )
}

export default ImageSlider
