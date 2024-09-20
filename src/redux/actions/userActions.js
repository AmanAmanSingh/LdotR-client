import axios from 'axios';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: GET_USERS_REQUEST });
    try {
        const response = await axios.get(`${BASE_URL}/allUsers`);
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data.users
        });
        return response;

    } catch (error) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: error.message
        });
    }
}

export const addUser = (user) => async (dispatch) => {
    console.log(user);
    try {
        const response = await axios.post(`${BASE_URL}/addUser` , user);
        dispatch({
            type: ADD_USER_SUCCESS,
            payload: response.data.users
        })
    } catch (error) {
        dispatch({
            type: ADD_USER_FAILURE,
            payload : error.message
        });
        console.error('Error adding user:', error);
    }
}