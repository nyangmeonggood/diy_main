import ReactDOM from "react-dom";
import { createContext, useReducer } from "react";
import Header from "./component/Header";
import Intro from "./component/Intro";
import Main from "./component/Main";
import Setting from "./component/Setting";
import QNA from "./component/QNA";

import "./scss/css reset.scss";

export const settingDispatch = createContext(() => {});
export const settingState = createContext({});

const CATELIST = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <settingDispatch.Provider value={dispatch}>
        <settingState.Provider value={state}>
          {!state.isLoaded && <Intro />}
          {!state.isSetting && <QNA />}
          <Header cateList={CATELIST} height={60} />
          <Main />

          {ReactDOM.createPortal(
            <Setting />,
            document.getElementById("setting")
          )}
        </settingState.Provider>
      </settingDispatch.Provider>
    </>
  );
}

const INITIAL_STATE = {
  isLoaded: false,
  isSetting: false,
  isSearch: false,
  isFixed: true,
  isText: true,
  isPic: true,
  isSlide: true,
  isSlideList: false,
  isPicBg: true,
  bgColor: "#fff",
  titleAlign: "left",
  titleTop: "50",
  titleMainSize: "24",
  titleSubSize: "18",
  titleBtnSize: "16",
};

function reducer(state, action) {
  switch (action.type) {
    case "isLoaded":
      return { ...state, isLoaded: action.isLoaded };
    case "isSetting":
      return { ...state, isSetting: action.isSetting };
    case "isSearch":
      return { ...state, isSearch: action.isSearch };
    case "isFixed":
      return { ...state, isFixed: action.isFixed };
    case "isText":
      return { ...state, isText: action.isText };
    case "isPic":
      return { ...state, isPic: action.isPic };
    case "isSlide":
      return { ...state, isSlide: action.isSlide };
    case "isSlideList":
      return { ...state, isSlideList: action.isSlideList };
    case "isPicBg":
      return { ...state, isPicBg: action.isPicBg };
    case "bgColor":
      return { ...state, bgColor: action.bgColor };
    case "titleAlign":
      return { ...state, titleAlign: action.titleAlign };
    case "titleTop":
      return { ...state, titleTop: action.titleTop };
    case "titleMainSize":
      return { ...state, titleMainSize: action.titleMainSize };
    case "titleSubSize":
      return { ...state, titleSubSize: action.titleSubSize };
    case "titleBtnSize":
      return { ...state, titleBtnSize: action.titleBtnSize };
    default:
      return state;
  }
}

export default App;
