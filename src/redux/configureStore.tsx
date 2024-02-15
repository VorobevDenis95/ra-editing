import {
    combineReducers,
    compose,
    legacy_createStore
} from 'redux';
import editReducer from './editReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.
__REDUX_DEVTOOLS_EXTENSION__();


function configureStore() {
  return legacy_createStore(
    combineReducers({
        edit: editReducer,
    }),
    compose(
        ReactReduxDevTools,
    )
  )
}

export default configureStore;