import { ADD_USER, GET_USERS, DELETE_USER, EDIT_USER } from "../constants";

export default (store = [], action) => {
  switch (action.type) {
    case GET_USERS: return action.payload;
    case ADD_USER: return [...store, action.payload];
    case DELETE_USER: return store.filter(user => user._id !== action.id);
    case EDIT_USER: return store.map(user => user._id === action.payload._id ? action.payload : user);
    default: return store;
  }
};
