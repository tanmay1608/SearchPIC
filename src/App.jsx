import { useReducer, useState } from "react";

import "./App.css";
import SearchSection from "./components/SearchSection";
import Header from "./components/Header";
import CustomSlider from "./components/ImageSlider";
import ImageSlider from "./components/ImageSlider";
import { IMAGES, options } from "./utils/constants";
import FilterHeader from "./components/FilterHeader";
import ImagesSection from "./components/ImagesSection";
import axios from "axios";
const initialValue = {
  isCollided: false,
  images:[],
  query:"",
  count:""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "COLLIDE":
      return { ...state, isCollided: !state.isCollided };

    case "showNextImage":
      console.log(state.currentIndex)
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % IMAGES.length,
      };

    case "showPrevImage":
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + IMAGES.length)% IMAGES.length,
      };
    case "updateImages":
      return {...state,images:action.payload} 
    case "updateCount":
      return {...state,count:action.payload}
    case "updateQuery":
      return {...state,query:action.payload}     
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const fetchImages=async()=>{
    // const response=await axios.get("https://api.unsplash.com/photos/random?count=10",options);

    // console.log(response.data)
    // console.log(response.data[state.currentIndex].links)
    // console.log(response.data[state.currentIndex].links.html)
    if(state.query === "" || state.count === ""){
      alert("input field can't be empty")
      return ;
    }
      // const response=await axios.get(`https://api.unsplash.com/${!state.isCollided ? "search/photos":"photos"}/${state.isCollided ? "random" : state.query}?count=${state.count}`,options);
      const queryParam=!state.isCollided ? `query=${state.query}` :"";
      
      const response=await axios.get(`https://api.unsplash.com/${!state.isCollided ?"search":""}/photos?${queryParam}&${!state.isCollided ?"per_page" :"count"}=${state.count}`,options);
      console.log(response);
     dispatch({type:"updateImages",payload:!state.isCollided ? response.data.results : response.data})
  }

  const handleChange=(type,value)=>{
        dispatch({type:type,payload:value})
  }

  return (
    <div className=" ">
      <Header state={state} dispatch={dispatch} />
      <SearchSection state={state} fetchImages={fetchImages} handleChange={handleChange}/>
      <FilterHeader state={state}/>
      {/* <ImagesSection/> */}
      {
        state.images.length !==0 && <div className="max-w-[1200px] w-full h-[500px] mx-auto">
        <ImageSlider state={state} dispatch={dispatch} />
      </div>
      }
    </div>
  );
}

export default App;
