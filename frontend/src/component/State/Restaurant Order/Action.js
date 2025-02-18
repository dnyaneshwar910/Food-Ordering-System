import { data } from "react-router-dom";
import { api } from "../../config/api";


export const updateOrderStatus = ({orderId, orderStatus, jwt}) =>{
    return async (dispatch) => {
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
        try {
            const response = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{},{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                }
            });
            const updateOrder = response.data;
            console.log("updated Order", updateOrder);
            dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: updateOrder});
        }
        catch (error){
            console.log("catch error", error);
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload:error})
        }
    }
};

export const fetchRestaurantOrder  = ({jwt, restaurantId}) =>{
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_ORDER_REQUEST});
        try {
            const response = await api.get(`/api/admin/order/restaurant/${restaurantId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                }
            });
            const order = data;
            console.log("Order restaurants ", order);
            dispatch({type: GET_RESTAURANT_ORDER_SUCCESS, payload: order});
        }
        catch (error){
            console.log("catch error", error);
            dispatch({type: GET_RESTAURANT_ORDER_FAILURE, payload:error})
        }
    }
};
            