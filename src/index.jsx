import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ModalContextProvider from "./hooks/useModal";
import { BrowserRouter } from "react-router-dom";
import HeroesContextProvider from "./hooks/useHeroes";
ReactDOM.render(
  <React.StrictMode>
    <HeroesContextProvider>
      <ModalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalContextProvider>
    </HeroesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
