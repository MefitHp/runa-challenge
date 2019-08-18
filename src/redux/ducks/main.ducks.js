// Actions
export const SEARCH_USER = "fortnite-stats/users/SEARCH_USER";
export const GET_USER_DATA = "fortnite-stats/users/GET_USER_DATA";
export const SET_UID = "fortnite-stats/users/SET_UID";
export const SET_PROGRESS = "fortnite-stats/progress/SET_PROGRESS";
export const FETCH_SUCCESS = "fortnite-stats/fetch/SUCCESS";
export const FETCH_ERROR = "fortnite-stats/fetch/ERROR";
export const GET_NEWS = "fortnite-stats/news/GET_NEWS";
export const GET_STORE_ITEMS = "fortnite-stats/news/GET_STORE_ITEMS";

const initState = {
  data: [],
  isLoading: "",
  progress: ""
};

// Reducer

export default function reducer(state = initState || {}, action = {}) {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };

    case GET_USER_DATA:
      return {
        ...state,
        data: action.payload.response.data
      };

    case FETCH_SUCCESS:
      console.log("ACTION STATE", action.payload);
      return {
        ...state,
        progress: "success",
        data: action.payload.response.data
      };

    case FETCH_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    case SET_UID:
      return {
        ...state,
        uid: action.payload
      };
    default:
      return state;
  }
}
// Action Creators
export const searchUser = searchInput => {
  return {
    type: SEARCH_USER,
    payload: searchInput
  };
};

export const fetchError = payload => {
  return {
    type: FETCH_ERROR,
    payload: payload
  };
};
export const fetchUserSuccess = payload => {
  return {
    type: FETCH_SUCCESS,
    payload: payload
  };
};

export const getNews = () => {
  return { type: GET_NEWS };
};

export const fetchNewsSuccess = news => {
  return {
    type: FETCH_SUCCESS,
    payload: news
  };
};

export const getStoreItems = () => {
  return { type: GET_STORE_ITEMS };
};

export const fetchStoreItemsSuccess = storeItems => {
  return { type: FETCH_SUCCESS, payload: storeItems };
};

export const setUid = uid => {
  return {
    type: SET_UID,
    payload: uid
  };
};
export const setProgress = value => {
  return {
    type: SET_PROGRESS,
    payload: value
  };
};
