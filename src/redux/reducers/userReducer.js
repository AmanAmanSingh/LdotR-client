import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    ADD_USER_SUCCESS
} from "../actions/userActions";


const initialState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
          return { ...state, loading: true };
        case GET_USERS_SUCCESS:
          return { ...state, loading: false, users: action.payload };
        case GET_USERS_FAILURE:
          return { ...state, loading: false, error: action.payload };
        case ADD_USER_SUCCESS:
          return { ...state, users: [...state.users, action.payload] };
        default:
          return state;
      }

}


export default userReducer;
