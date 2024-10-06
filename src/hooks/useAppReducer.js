import { useReducer } from "react";

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
    case "collide":
      return { ...state, isCollided: !state.isCollided, query: "", count: "" };

    case "showNextImage":
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };

    case "showPrevImage":
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.images.length) % state.images.length,
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
      return { ...state, orientation: action.payload };
  }
};

const useAppReducer = () => {
  return useReducer(reducer, initialValue);
};

export default useAppReducer;
