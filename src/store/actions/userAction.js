import { SET_USERS, FETCH_USERS } from "../types";
// import userService from "../../services";

export const fetchUsers = () => {
  //Done for REDUX_THUNK
//    return async function (dispatch) {
//     const users = await userService.getAllUsers();
//     dispatch(setUsers(users));
//   }; 

  //Done for REDUX_SAGA
  
  return { type: FETCH_USERS };
};

export const setUsers = (users = null) => {
  if (users) {
    return {
      type: SET_USERS,
      payload: users,
    };
  }
};