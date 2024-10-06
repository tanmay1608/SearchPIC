import axios from "axios";
import { options } from "./constants";

export const fetchImagesHelper= async (state)=>{
    const queryParam = !state.isCollided ? `query=${state.query}` : "";

    const response = await axios.get(
        `https://api.unsplash.com/${
          !state.isCollided ? "search" : ""
        }/photos?${queryParam}&${!state.isCollided ? "per_page" : "count"}=${
          state.count
        }${
          state.orientation !== "ALL"
            ? `&orientation=${state.orientation.toLowerCase()}`
            : ""
        }`,
        options
      );

     return !state.isCollided ? response.data.results : response.data;
}