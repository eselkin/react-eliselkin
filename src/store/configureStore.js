import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "../redux-reducers";
import thunk from "redux-thunk";

export const hist = createBrowserHistory();

export default function configureStore(preloadedState) {
  // Create Store
  const store = createStore(
    createRootReducer(hist),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(hist), thunk))
  );

  return store;
}
