import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect, useState } from "react";

const ImageSlider = ({ state, dispatch }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [intervalId,setIntervalId]=useState(null);

  const startInterval=()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % state.images.length);
    }, 5000);

    setIntervalId(interval);
  }

  useEffect(() => {
    
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, [state.images.length]);

  const handlePrevImage = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentIndex(
      (currentIndex - 1 + state.images.length) % state.images.length
    );
    setTimeout(() => {
      startInterval();
  }, 2000);
  };

  const handleNextImage = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentIndex((currentIndex + 1) % state.images.length);
    setTimeout(() => {
        startInterval();
    }, 2000);
  };

  return (
    <div className="w-full h-full relative p-5 bg-black">
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      <img
        src={state.images[currentIndex].links.download}
        alt={`Slide ${state.currentIndex}`}
        className="object-cover w-full h-full block  "
      />
      <button
        className="absolute top-0 bottom-0  cursor-pointer hover:bg-[rgb(0,0,0,0.2)] p-4 transition-colors duration-300 ease-in-out "
        onClick={() => handlePrevImage()}
      >
        <ArrowBigLeft className="stroke-white fill-black w-8 h-8" />
      </button>
      <button
        className="absolute top-0 bottom-0 right-0  cursor-pointer hover:bg-[rgb(0,0,0,0.2)] p-4 transition-colors duration-300 ease-in-out"
        onClick={() => handleNextImage()}
      >
        <ArrowBigRight className="stroke-white fill-black w-8 h-8" />
      </button>
    </div>
  );
};

export default ImageSlider;
