import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
/*
App
├── Header
└── ShoppingList
    ├── Filter (STATE)
    ├── Item (button STATE)
    ├── Item (button STATE)
    └── Item (button STATE)
*/
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} onChangeMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;
