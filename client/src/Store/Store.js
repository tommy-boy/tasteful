import React, { createContext, useContext, useReducer } from "react";
import produce from "immer";

const initialState = [];

const invariantUpdaterFn = () => {
  if (process.env.NODE_ENV === "development") {
    throw new Error("Updater was called without an enclosing provider.");
  }
};

export function createStore(initialState) {
  const StateContext = createContext(initialState);
  const UpdateContext = createContext(invariantUpdaterFn);

  function StoreProvider({ children }) {
    const [state, updater] = useReducer(produce, initialState);
    return (
      <UpdateContext.Provider value={updater}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </UpdateContext.Provider>
    );
  }

  function useStore() {
    return [useContext(StateContext), useContext(UpdateContext)];
  }

  return { Provider: StoreProvider, useStore };
}
