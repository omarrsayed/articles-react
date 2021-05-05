function isActionTypeError(type) {
  return type.substring(type.length - 6) === "_ERROR";
}

export default function errorReducer(state = {}, action) {
  if (isActionTypeError(action.type)) return action.error;
  return null;
}
