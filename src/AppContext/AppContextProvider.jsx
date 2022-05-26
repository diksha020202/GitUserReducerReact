import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState("light");

  const toggleTheme = () => {
    state === "light" ? setState("dark") : setState("light");
  };

  return (
    <AppContext.Provider value={[state, toggleTheme]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

// 1. Provider
// 2. wrapped the Provider on the main application
// 3. this way any value given in provider, is accessbile to any children
// 4. created a button component -> where you consumed the theme
// a. conditionally rendering based on the theme
// 5. for toggling the theme
// consumed the context value using useContext in another component
// 6. this time you were updating / toggling the state
// 7. when the state gets updated in the contxt provider component
// 8. any component that is consuming from this context, will get re-rendered
