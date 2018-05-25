import { combineReducers } from "redux";
import authentication from "./authentication";
import apples from "./apples";

const app = combineReducers({
  apples,
  authentication
});

export default app;
