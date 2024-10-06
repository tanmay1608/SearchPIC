const ToggleSwitch = ({ state, dispatch }) => {
  return (
    <div className="flex items-center justify-center ">
      <span className="mr-2">Get random Images:</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={state.isCollided}
          onChange={() => dispatch({ type: "collide" })}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-black rounded-full peer peer-checked:bg-black transition-all duration-300"></div>
        <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
