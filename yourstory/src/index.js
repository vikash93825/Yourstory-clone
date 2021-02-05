import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={(<div>...Loading</div>)}>
    <Provider store={store} >
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

