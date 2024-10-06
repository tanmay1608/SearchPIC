import { useEffect, useReducer, useRef, useState } from "react";

import "./App.css";
import SearchSection from "./components/SearchSection";
import Header from "./components/Header";
import CustomSlider from "./components/ImageSlider";
import ImageSlider from "./components/ImageSlider";
import { IMAGES, options } from "./utils/constants";
import FilterHeader from "./components/FilterHeader";
import ImagesSection from "./components/MasonryLayout";
import axios from "axios";
import MasonryLayout from "./components/MasonryLayout";
const initialValue = {
  isCollided: false,
  images: [],
  query: "",
  count: "",
  isLoading: false,
  orientation: "ALL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "COLLIDE":
      return { ...state, isCollided: !state.isCollided, query: "", count: "" };

    case "showNextImage":
      console.log(state.currentIndex);
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % IMAGES.length,
      };

    case "showPrevImage":
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + IMAGES.length) % IMAGES.length,
      };
    case "updateImages":
      return { ...state, images: action.payload };
    case "updateCount":
      return { ...state, count: action.payload };
    case "updateQuery":
      return { ...state, query: action.payload };
    case "updateIsLoading":
      return { ...state, isLoading: !state.isLoading };
    case "updateorientation":
      return {...state,orientation:action.payload};  
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const mainRef = useRef(null);

  useEffect(() => {
    if (!state.isLoading && state.images.length > 0) {
      scrollToImages();
    }
  }, [state.isLoading, state.images]);
  const fetchImages = async () => {
    

    if (!state.isCollided) {
      if (state.query === "" || state.count === "") {
        alert("input field can't be empty");
        return;
      }
    } else {
      if (state.count === "") {
        alert("input field can't be empty");
        return;
      }
    }

    dispatch({ type: "updateIsLoading" });
    dispatch({type: "updateImages",
      payload: []});

    const queryParam = !state.isCollided ? `query=${state.query}` : "";

    try {
      const response = await axios.get(
        `https://api.unsplash.com/${
          !state.isCollided ? "search" : ""
        }/photos?${queryParam}&${!state.isCollided ? "per_page" : "count"}=${
          state.count
        }${state.orientation !=="ALL" ? `&orientation=${state.orientation.toLowerCase()}`:""}`,
        options
      );

      dispatch({
        type: "updateImages",
        payload: !state.isCollided ? response.data.results : response.data,
      });
      dispatch({ type: "updateIsLoading" });
    } catch (e) {
      dispatch({ type: "updateIsLoading" });
      console.log(e);
    }
  };

  const handleChange = (type, value) => {
    dispatch({ type: type, payload: value });
  };

  const scrollToImages = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
            ref={mainRef}
            className="w-full h-[500px] mx-auto absolute top-16"
          >
            <ImageSlider state={state} dispatch={dispatch} />
          </div>
        )
      )}
      <FilterHeader state={state} dispatch={dispatch} />
      <MasonryLayout state={state}/>
    </div>
  );
}

export default App;
