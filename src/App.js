import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "./Store/Store";
import Registration from "./views/Registration/Registration";
import "./App.css";

const RatingsStore = createStore([]);

export const useRatings = RatingsStore.useStore;

function App() {
  return (
    <Router>
      <RatingsStore.Provider>
        <Registration />
      </RatingsStore.Provider>
    </Router>
  );
}

export default App;
