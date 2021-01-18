import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './reducers/authReducer';
import storyIdeaReducer from './reducers/storyIdeaReducer';
import characterReducer from './reducers/CharacterReducer';
import commentReducer from './reducers/commentReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  stories: storyIdeaReducer,
  characters: characterReducer,
  comments: commentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;