import React, { useState } from "react";

const languages = ["JavaScript", "Python"];
const context = React.createContext();

export default function ContextApi() {
  // implement Context here so can be used in child components
  const [toggle, setToggle] = useState(languages[0]);
  const toggling = () => {
    if (toggle === languages[0]) {
      setToggle(languages[1]);
    } else {
      setToggle(languages[0]);
    }
  };
  return (
    <context.Provider value={{ toggle, toggling }}>
      <MainSection />
    </context.Provider>
  );
}

function MainSection() {
  const { toggle, toggling } = React.useContext(context);
  return (
    <div>
      <p id="favoriteLanguage"> Favorite programing language: {toggle} </p>
      <button id="changeFavorite" onClick={toggling}>
        Toggle language
      </button>
    </div>
  );
}
