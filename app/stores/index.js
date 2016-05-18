import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleWare = applyMiddleware(thunkMiddleware)(createStore);

export default function buildStore(initialState) {
  const store = createStoreWithMiddleWare(rootReducer, initialState);

  return store;
}
