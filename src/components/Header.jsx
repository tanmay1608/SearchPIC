import ToggleSwitch from "./ToggleSwitch";

const Header = ({ state, dispatch }) => {
  return (
    <header className="p-4  flex justify-between items-center w-full ">
      <h1 className="font-semibold">SearchPIC</h1>
      <ToggleSwitch state={state} dispatch={dispatch} />
    </header>
  );
};

export default Header;
