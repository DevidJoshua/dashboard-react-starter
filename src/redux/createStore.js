import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  middleware.push(createLogger)
  middleware.push(thunk.withExtraArgument())
  
  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))


  const com =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers)
  const store = createStore(rootReducer, com)
  // const store = createAppropriateStore(rootReducer, compose(...enhancers))


  return store
}
