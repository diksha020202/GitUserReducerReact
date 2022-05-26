//import { useContext } from "react";
//import { AppContext } from "./AppContext/AppContextProvider";
//import Button from "./Button/Button";
//import Counter from "./Counter/Counter";
import Github from "./Github/Github";


export default function App() {
  //const [theme, toggleTheme] = useContext(AppContext);
  return (
    <div className="App">
       <header className="App-header">
      {/* <h1>Hello CodeSandbox</h1>
      <Button text="THEME" />
      <br />
      <button onClick={toggleTheme}>TOGGLE</button>
      <br />
      <hr />
      <Counter/> */}
      <br />
      <hr />
      <Github/>
      </header>
    </div>
  );
}
