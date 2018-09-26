import { ADD_USER, GET_USERS, DELETE_USER, EDIT_USER } from "./constants";
import { fetchUsers, addUser as addUsertoDB, deleteUser as deleteUserFromDB, editUser as editUserAtDB } from './../api';

export const getUsers = () => dispatch => {
  fetchUsers().then(users => dispatch({ type: GET_USERS, payload: users }))
}

export const addUser = (user) => dispatch => {
  addUsertoDB(user).then(resp => {
    if (!resp.errmsg) dispatch({ type: ADD_USER, payload: resp })
  })
}

export const deleteUser = (id) => dispatch => {
  deleteUserFromDB(id).then(_ => dispatch({ type: DELETE_USER, id }))
}

export const editUser = (id, data, cb) => dispatch => {
  editUserAtDB(id, data).then(newUser => (dispatch({ type: EDIT_USER, payload: newUser }), cb()))
}
