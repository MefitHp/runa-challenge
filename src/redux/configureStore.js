import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import main from "./ducks/main.ducks";
import {
  epicSeachUser,
  epicGetNews,
  epicGetStoreItems
} from "../epics/main.epics";

export default function configureStore() {
  const rootEpic = combineEpics(epicSeachUser, epicGetNews, epicGetStoreItems);

  const epicMiddleware = createEpicMiddleware();
  const rootReducer = combineReducers({
    main
  });

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
