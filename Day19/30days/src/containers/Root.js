import React from 'react';
import {Provider} from 'react-redux';
import App from './App';

// Using ES6 destructuring of the `props`
// variable so we just get the values of `store`
// and `actions`:
export const Root = ({store, actions}) => {
  return (
    <Provider store={store}>
      <App actions={actions} />
    </Provider>
  );
}

export default Root;
