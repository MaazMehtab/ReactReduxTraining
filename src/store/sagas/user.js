import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USERS } from "../types/";
import userService from "../../services";
import { setUsers } from "../actions/userAction";

function* fetchUsers() {
  try {
     // use the call Effect
    const users = yield call(userService.getAllUsers);
    
    // create and yield a dispatch Effect
    yield put(setUsers(users));
  } catch (e) {}
}
//watcher and listner function
export function* waitForFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
