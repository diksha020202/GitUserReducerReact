import { useContext } from "react";
import { AppContext } from "../AppContext/AppContextProvider";
import style from "./Button.module.css";

function Button({ text, onClick }) {
  // useContext is used to consume AppContext
  const [theme, toggleTheme] = useContext(AppContext);

  return (
    <button
      className={`${style.buttonBase} ${
        theme === "light" ? style.buttonLight : style.buttonDark
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
