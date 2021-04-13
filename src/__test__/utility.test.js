import React from 'react';
import { render,cleanup,fireEvent,waitForElement } from '@testing-library/react';
import { createStore } from "redux";
import { observable, action, decorate } from "mobx";
import LoginTemplate from '../client/themes/membership/pages/LoginTemplate';

afterEach(cleanup);

const DecoratedCounterStore = decorate(form, {
  email: observable,
  password: observable,
  onSubmit: action,

});

const renderWithStore = counterStore =>
  render(
    <Provider CounterStore={form}>
      <LoginTemplate />
    </Provider>
  );

it("renders initial count", () => {
  const counterStore = new DecoratedCounterStore();

  const { getByTestId } = renderWithStore(counterStore);

  expect(getByTestId("text-field")).toHaveTextContent("0");
});

it("renders after increment", () => {
  const counterStore = new DecoratedCounterStore();
  const { getByTestId } = renderWithStore(counterStore);

  expect(getByTestId("button")).toHaveTextContent("0");
});
