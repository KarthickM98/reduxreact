import { createStore } from "redux";
import rootReducer from "./reducer/RootReducer";

const store =createStore( rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  // should know how to spread this store data  ///Redux dev tools needed as 2nd param

export default store


/// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()