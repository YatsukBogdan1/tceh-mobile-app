import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const rootSaga = function * () {
	yield all([
		// common
		fork(watchFailedRequests),
	]);
};

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
