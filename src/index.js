import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import { counterReducer } from './Component/CounterReducer';
import Counter from './Counter';

const store =configureStore({
  reducer: {
  counter:counterReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <Counter />
  </Provider>
 
);

