import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_RESTAURANT_ORDER_STATUS_FAILURE, UPDATE_RESTAURANT_ORDER_STATUS_REQUEST, UPDATE_RESTAURANT_ORDER_STATUS_SUCCESS } from "./Actiontype";

const initialState = {
    orders: [],
    loading: false,
    error: null,

};
 export const restaurantsOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT_ORDER_REQUEST:
            case UPDATE_RESTAURANT_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_RESTAURANT_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            };
        case UPDATE_RESTAURANT_ORDER_STATUS_SUCCESS:
          const updatedOrder = state.orders.map(order => 
              order.id === action.payload.id ? action.payload : order
           );
            return {
                ...state,
                orders: updatedOrder,
                loading: false
            };
        case GET_RESTAURANT_ORDER_FAILURE:
            case UPDATE_RESTAURANT_ORDER_STATUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;

    }};
export default restaurantsOrderReducer;