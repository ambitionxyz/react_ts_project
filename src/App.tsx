import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../src/stores";
import { changeLanguage } from "../src/stores/common/i18n/i18n.aciton";

function App() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div>test i18n</div>
      <button onClick={() => dispatch(changeLanguage("jp"))}>
        doi ngon ngu
      </button>
      {t("common.demo")}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
