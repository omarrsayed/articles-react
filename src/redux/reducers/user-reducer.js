import * as actionTypes from "../actions/action-types";

export default function userReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOAD_USERS_SUCCESS:
            return action.users;
        case actionTypes.REGISTER_SUCCESS:
            return [...state, {...action.user}];
        default:
            return state;
    }
}
