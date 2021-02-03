import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./DataRedux/reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer, 
    createComposer(applyMiddleware(thunk))
    )
    
export default store;