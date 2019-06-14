import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Router } from "./components/Router/Router";
//import "./index.css";

if (module.hot) {
    module.hot.accept();
}
ReactDOM.render(<HashRouter><Router /></HashRouter>, document.getElementById("root"));
