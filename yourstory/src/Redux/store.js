import thunk from "redux-thunk";
import { authReducer } from "./AuthRedux/reducer";
import reducer from "./DataRedux/reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducers = combineReducers({auth:authReducer,app:reducer})

const store = createStore(
    rootReducers, 
    createComposer(applyMiddleware(thunk))
)
export default store;