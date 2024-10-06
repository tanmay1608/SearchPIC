const SearchSection = ({ state, fetchImages, handleChange }) => {
    
  return (
    <div className="w-[85%] py-28  flex flex-col items-center justify-center relative z-10  ">
      <p
        className={`text-4xl inter-medium ${
          state.images.length === 0 ? "text-black" : "text-white"
        }`}
      >
        Discover
      </p>
      <p
        className={`text-4xl inter-medium ${
          state.images.length === 0 ? "text-black" : "text-white"
        } break-words `}
      >
        Beautiful Photography from Around the World
      </p>
      <div className="flex  w-full justify-center mt-10">
        <label
          className={`${
            state.isCollided ? "w-0 opacity-0" : "w-1/2"
          } mx-2 rounded-full ring-1 ring-gray-400  flex justify-center transition-all duration-1000 ease-in-out bg-transparent backdrop-blur-sm`}
        >
          <input
            type="text"
            value={state.query}
            className={`p-2 w-[95%] outline-none text-center bg-transparent backdrop-blur-sm ${
              state.images.length === 0 ? "text-black" : "text-white"
            } placeholder:text-gray-400`}
            disabled={state.isCollided}
            placeholder="search for images"
            onChange={(e) => handleChange("updateQuery", e.target.value)}
          />
        </label>
        <label className="w-1/6 mx-2 rounded-full bg-transparent backdrop-blur-sm flex justify-center ring-1 ring-gray-400">
          <input
            type="text"
            value={state.count}
            className={`p-2 w-[75%] outline-none text-center bg-transparent backdrop-blur-sm 
            ${state.images.length === 0 ? "text-black" : "text-white"}
            placeholder:text-gray-400`}
            placeholder="number of Images"
            onChange={(e) => handleChange("updateCount", e.target.value)}
          />
        </label>
      </div>
      <button
        className="px-4 py-2 bg-black text-white rounded-full mt-5 hover:scale-105 transition-all duration-200 ease-in-out "
        onClick={fetchImages}
      >
        Generate
      </button>
    </div>
  );
};

export default SearchSection;
