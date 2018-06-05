import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
