/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));




const ReyId = () => (
    <Provider store={store}>
    <App />
  </Provider>
);

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('reyid', () => ReyId);
