import React from "react";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import store, {reducers, middleware} from "../store";
import '@testing-library/jest-dom';

export * from '@testing-library/react';

export function renderWithRedux(ui, initialState) {
  const newStore = initialState ? createStore(reducers, initialState, middleware) : store;
  return {
    ...render(<Provider store={newStore}>{ui}</Provider>),
    store: newStore,
  };
}
