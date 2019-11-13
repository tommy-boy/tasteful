import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "./Store/Store";
import Registration from "./views/Registration/Registration";
import "./App.css";

const TastefulStore = createStore([]);

export const useTasteful = TastefulStore.useStore;

function App() {
  return (
    <Router>
      <TastefulStore.Provider>
        <Registration />
      </TastefulStore.Provider>
    </Router>
  );
}

export default App;
