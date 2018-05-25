// React Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Reducers
import reducers from "./reducers";

// Components
import App from "./App";

// Utility Functions
import registerServiceWorker from "./registerServiceWorker";

// CSS
import "../node_modules/bulma/css/bulma.min.css";

const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
