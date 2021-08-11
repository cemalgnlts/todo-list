// Import React & React DOM
import React from "react";
import ReactDOM from "react-dom";

// Import F7 Bundle & F7-React Plugin
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";

// Init F7-React Plugin
Framework7.use(Framework7React);

// Import Main App component
import App from "./App";

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById("app")
);