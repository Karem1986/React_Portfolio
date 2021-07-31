import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Button(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`${theme}-theme`}>
      Switch color!
    </button>
  );
}

export default Button;
