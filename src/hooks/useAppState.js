import useAppReducer from "./useAppReducer";
import { fetchImagesHelper } from "../utils/fetchImagesHelper";

const useAppState = () => {
  const [state, dispatch] = useAppReducer();

  const handleChange = (type, value) => {
    dispatch({ type: type, payload: value });
  };

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
    dispatch({ type: "updateImages", payload: [] });

    try {
      const images = await fetchImagesHelper(state);
      dispatch({
        type: "updateImages",
        payload: images,
      });
      dispatch({ type: "updateIsLoading" });
    } catch (e) {
      dispatch({ type: "updateIsLoading" });
    }
  };

  return [state, dispatch, fetchImages, handleChange];
};

export default useAppState;
