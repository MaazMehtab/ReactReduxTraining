import { all } from "redux-saga/effects";
import { waitForFetchUsers } from "../sagas/user";

export default function* rootSaga() {
  yield all([waitForFetchUsers()]);
}