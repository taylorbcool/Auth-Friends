import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
    HANDLE_NAME,
    HANDLE_AGE,
    HANDLE_EMAIL,
} from '../actions/friendActions';
  
const initialState = {
    friendData: null,
    isFetching: false,
    isPosting: false,
    error: '',
    inputValues: {
        name: '',
        age: 0,
        email: ''
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                friendData: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case HANDLE_NAME:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    name: action.payload
                }
            };
        case HANDLE_AGE:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    age: action.payload
                }
            };
        case HANDLE_EMAIL:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    height: action.payload
                }
            };
        case POST_DATA_START:
            return {
                ...state,
                isPosting: true,
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                isPosting: false,
                inputValues: {
                    name: '',
                    age: 0,
                    email: ''
                }
            }
        case POST_DATA_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
