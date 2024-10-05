import ToggleSwitch from "./ToggleSwitch"

const Header = ({state,dispatch}) => {
  return (
   <header className="p-4   flex justify-between items-center w-full ">
    <h1 className="font-semibold">SearchPIC</h1>
    {/* <ul className="flex  justify-center ">
        <li className="mx-2 p-2 font-semibold">Images</li>
        <li className="mx-2 p-2 font-semibold">Videos</li>
        <li className="mx-2 p-2 font-semibold">Contact</li>
    </ul> */}
    <ToggleSwitch state={state} dispatch={dispatch}/>
   </header>
  )
}

export default Header
