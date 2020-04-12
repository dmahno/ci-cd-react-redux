import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { settingsDataReducer } from "./reducers/settings-data";
import { rootEpic } from "./root-epic";
import thunk from "redux-thunk";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { buildDataReducer } from './reducers/build-data';

// Create the root reducer by combing all the required reducers
const rootReducer = combineReducers({
    settingsData: settingsDataReducer,
    buildData: buildDataReducer
});

// Setup persist config
const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: "",
    stateReconciler: hardSet,
    blacklist: ['loaderData']
}
// Create persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);

// Create redux-observable middleware instance
const observableMiddleware = createEpicMiddleware();

// To connect redux dev tools for better visualization of redux structure 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store
export const store = createStore(
    pReducer,
    undefined,
    composeEnhancers(applyMiddleware(observableMiddleware, thunk))
);

observableMiddleware.run(rootEpic);

export const persistor = persistStore(store);