import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../../context/Context";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "light" ? (
        <div style={{display:"flex", alignItems:"center"}} onClick={toggleTheme}>
          
          Light Mode
          <HiSun style={{marginLeft:"10px"}}/>
        </div>
      ) : (
        <div style={{display:"flex", alignItems:"center"}} onClick={toggleTheme}>
          
          Dark Mode
          <HiMoon style={{marginLeft:"10px"}} />
        </div>
      )}
    </>
  );
};

export default ToggleButton;
