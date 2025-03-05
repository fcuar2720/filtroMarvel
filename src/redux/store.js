import reducers from "./reducer";
import { createStore } from "redux";

let store = createStore(reducers)

export default store;