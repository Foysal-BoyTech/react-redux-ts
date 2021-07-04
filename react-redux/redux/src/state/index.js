import axios from 'axios'
import { redux } from 'react-redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const store = redux.createStore
const initialState = {
  loading: true,
  users: [],
  error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const fetchUesrsRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUesrsRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data.map((user) => user.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.message))
      })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchUesrsRequest: {
      return {
        ...state,
        loading: true,
      }
    }
    case fetchUsersSuccess: {
      return {
        loading: false,
        users: action.payload,
        error: '',
      }
    }

    case FETCH_USERS_ERROR: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      }
    }
    default:
      return state
  }
}

store.subscribe(() => console.log(store.getState()))
export const storeState = store.dispatch(fetchUsers)
