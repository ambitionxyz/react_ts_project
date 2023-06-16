import React from "react";

import RootRouters from "./routers/RootRouter";

import "./App.css";
import { AppStyle } from "./App.style";

const App: React.FC = () => {
  return (
    <AppStyle>
      <RootRouters />
    </AppStyle>
  );
};

export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { useTranslation } from "react-i18next";
// import { useAppDispatch } from "../src/stores";
// import { changeLanguage } from "../src/stores/common/i18n/i18n.aciton";

// function App() {
//   const { t } = useTranslation();
//   const dispatch = useAppDispatch();

//   return (
//     <div className="App">
//       {/* <div>test i18n</div>
//       <button onClick={() => dispatch(changeLanguage("jp"))}>
//         doi ngon ngu
//       </button> */}
//       {/* {t("common.demo")} */}
//   );
// }

// export default App;
