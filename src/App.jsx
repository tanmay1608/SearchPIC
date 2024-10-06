import { useEffect, useRef} from "react";
import SearchSection from "./components/SearchSection";
import Header from "./components/Header";;
import ImageSlider from "./components/ImageSlider";
import FilterHeader from "./components/FilterHeader";
import MasonryLayout from "./components/MasonryLayout";
import useAppState from "./hooks/useAppState";
import "./App.css";


function App() {
  
  const [state,dispatch,fetchImages,handleChange]=useAppState();
   
  return (
    <div className=" relative flex flex-col items-center">
      <Header state={state} dispatch={dispatch} />
      <SearchSection
        state={state}
        fetchImages={fetchImages}
        handleChange={handleChange}
      />
      {state.isLoading ? (
        <h1 className="text-4xl">loading.....</h1>
      ) : (
        state.images.length !== 0 && (
          <div 
            className="w-full h-[500px] mx-auto absolute top-16"
          >
            <ImageSlider state={state} dispatch={dispatch} />
          </div>
        )
      )}
      <FilterHeader state={state} dispatch={dispatch} />
      <MasonryLayout  state={state}/>
    </div>
  );
}

export default App;
