import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";


const initailState = {
    loading: false,
    order: [],
    error: null,
    
};

export const orderReducer = (state = initailState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
            };
        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_USERS_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_USERS_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
            };
        case GET_USERS_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};