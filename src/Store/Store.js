import React from "react";
import produce from "immer";

const initialState = [];

const invariantUpdaterFn = () => {
  if (process.env.NODE_ENV === "development") {
    throw new Error("Updater was called without an enclosing provider.");
  }
};

export function createStore(initialState) {
  const StateContext = React.createContext(initialState);
  const UpdateContext = React.createContext(invariantUpdaterFn);

  function StoreProvider({ children }) {
    const [state, updateState] = React.useReducer(produce, initialState);
    return (
      <UpdateContext.Provider value={updateState}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </UpdateContext.Provider>
    );
  }

  function useStore() {
    return [React.useContext(StateContext), React.useContext(UpdateContext)];
  }

  return { Provider: StoreProvider, useStore };
}
