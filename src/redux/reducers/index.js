import { combineReducers } from 'redux';
import articles from './article-reducer';
import users from "./user-reducer";
import error from "./error-reducer";

const rootReducer = combineReducers({
    articles,
    users,
    error
});

export default rootReducer;