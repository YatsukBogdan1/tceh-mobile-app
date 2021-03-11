import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { all, fork } from 'redux-saga/effects';
import {watchLoginSubmit, watchRegistrationSubmit} from './screens/intro/sagas';

const sagaMiddleware = createSagaMiddleware();
const rootSaga = function * () {
	yield all([
		fork(watchRegistrationSubmit),
		fork(watchLoginSubmit),
	]);
};

export const getComposeEnhancers = () => {
	const isUsingDevTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	if (isUsingDevTools) {
		return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
	}
	return compose;
};
const middleware = [ sagaMiddleware ];
const composeEnhancers = getComposeEnhancers();

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
