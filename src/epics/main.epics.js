import {
  SEARCH_USER,
  GET_NEWS,
  setProgress,
  fetchNewsSuccess,
  fetchStoreItemsSuccess,
  setUid,
  fetchError,
  GET_STORE_ITEMS,
  GET_USER_DATA,
  getUserDataSuccess
} from "../redux/ducks/main.ducks";
import { ajax } from "rxjs/ajax";
import { catchError, map, switchMap } from "rxjs/operators";
import { of, concat } from "rxjs";
import { ofType } from "redux-observable";

const AUTH_TOKEN = "035465470f589833d40ca69c3c4df4ff";
const headers = { Authorization: `${AUTH_TOKEN}` };
const BASE_URL = "https://fortnite-api.theapinetwork.com";

export function epicSeachUser(action$) {
  return action$.pipe(
    ofType(SEARCH_USER),
    switchMap(action => {
      const { payload } = action;
      return concat(
        of(setProgress("loading")),
        ajax({
          url: `${BASE_URL}/users/id?username=${encodeURIComponent(payload)}`,
          method: "GET",
          headers: headers
        }).pipe(
          map(apiRes => {
            const data = apiRes.response.data;
            return setUid(data);
          }),
          catchError(err => {
            return of(fetchError(err));
          })
        )
      );
    }) //finish swithcMap
  );
}

export function epicSearchUserData(action$) {
  return action$.pipe(
    ofType(GET_USER_DATA),
    switchMap(action => {
      const { payload } = action;
      return concat(
        of(setProgress("loading")),
        ajax({
          url: `${BASE_URL}/prod09/users/public/br_stats_v2?user_id=${encodeURIComponent(
            payload
          )}`,
          method: "GET",
          headers: headers
        }).pipe(
          map(apiRes => {
            const data = apiRes.response.data;
            return getUserDataSuccess(data);
          }),
          catchError(err => {
            return of(fetchError(err));
          })
        )
      );
    }) //finish swithcMap
  );
}

export function epicGetNews(action$) {
  return action$.pipe(
    ofType(GET_NEWS),
    switchMap(() => {
      return concat(
        of(setProgress("loading")),
        ajax({
          url: `${BASE_URL}/stw_motd/get`,
          method: "GET",
          headers
        }).pipe(
          map(res => {
            return fetchNewsSuccess(res);
          })
        )
      );
    })
  );
}

export function epicGetStoreItems(action$) {
  return action$.pipe(
    ofType(GET_STORE_ITEMS),
    switchMap(() => {
      return concat(
        of(setProgress("loading")),
        ajax({
          url: `${BASE_URL}/store/get`,
          method: "GET",
          headers
        }).pipe(
          map(res => {
            return fetchStoreItemsSuccess(res);
          })
        )
      );
    })
  );
}
