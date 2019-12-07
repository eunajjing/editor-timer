import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import DefaultPage from "./views/pages/DefaultPage";
import EditorPage from "./views/pages/EditPage";
import PayMoneyPage from "./views/pages/PayMoneyPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={DefaultPage} />
      <Route path="/editor" component={EditorPage} />
      <Route path="/paymoney" component={PayMoneyPage} />
    </BrowserRouter>
  );
};

export default App;
