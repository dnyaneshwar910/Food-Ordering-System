// import { api } from "../../config/api";
// import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CARTS_ITEMS_FAILURE, GET_ALL_CARTS_ITEMS_REQUEST, GET_ALL_CARTS_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionType";

// export const findCart = (token) => {
//     return async (dispatch) => {
//         dispatch({ type: FIND_CART_REQUEST });
//         try {
//             const response = await api.get(`/api/cart/`, {
        
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             console.log( "gat card items ",response.data);
//             dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
//         } catch (error) {
//             console.log(" catch error", error);
//             dispatch({ type:FIND_CART_FAILURE, payload: error });
//         }
//     }

// }

// export const getAllCartItems = ( reqData ) => {
//     return async (dispatch) => {
//         dispatch({ type: GET_ALL_CARTS_ITEMS_REQUEST });
//         try {
//             const response = await api.get(`/api/carts/${reqData.cardId}/items`, {
        
//                 headers: {
//                     Authorization: `Bearer ${reqData.token}`,
//                 },
//             });
//             console.log("delete food ",reqData.data);
//             dispatch({ type: GET_ALL_CARTS_ITEMS_SUCCESS, payload: response.data });
//         } catch (error) {
//             console.log(" catch error", error);
//             dispatch({ type:GET_ALL_CARTS_ITEMS_FAILURE, payload:error.message });
//         }
//     }

// };

// export const addItemToCart = (reqData) => {
//     return async (dispatch) => {
//         dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
//         try {
//             const { data } = await api.put(`/api/cart/add`,reqData.cartItem ,{
        
//                 headers: {
//                     Authorization: `Bearer ${reqData.token}`,
//                 },
//             });
//             console.log("add item to cart ",data);
//             dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data });
//         } catch (error) {
//             console.log(" catch error", error);
//             dispatch({ type:ADD_ITEM_TO_CART_FAILURE, payload: payload.error.message });
//         }
//     }

// };

// export const updateCartItem = (reqData) => {
//     return async (dispatch) => {
//         dispatch({ type: UPDATE_CARTITEM_REQUEST });
//         try {
//             const { data } = await api.put(`/api/cart-item/update`,reqData.data ,{
        
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`,
//                 },
//             });
//             console.log("add item to cart ",data);
//             dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: response.data });
//         } catch (error) {
//             console.log(" catch error", error);
//             dispatch({ type:UPDATE_CARTITEM_FAILURE, payload: payload.error.message });
//         }
//     }
// };

// export const removeCartItem = ({cartItemId, jwt}) => {
//     return async (dispatch) => {
//         dispatch({ type: REMOVE_CARTITEM_REQUEST });
//         try {
//             const { data } = await api.delete(`/api/cart-item/delete/${reqData.cartItemId}/remove`,{
        
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             console.log("remove cart item ",data);
//             dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
//         } catch (error) {
//             console.log(" catch error", error);
//             dispatch({ type:REMOVE_CARTITEM_FAILURE, payload: payload.error.message });
//         }
//     }

// };

// export const clearCartAction = () => {
//     return async (dispatch) => {
//         dispatch({ type: CLEARE_CART_REQUEST });
//         try {
//             const { data } = await api.put(`/api/cart/clear`,{},{
        
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//                 },
//             });
//             console.log("remove cart item ",data);
//             dispatch({ type: CLEARE_CART_SUCCESS, payload: data });
//         } catch (error) {
//             console.log(" catch error", error);
//             dispatch({ type:CLEARE_CART_FAILURE, payload: payload.error.message });
//         }
//     }
// }
import { api } from "../../config/api";
import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    CLEARE_CART_FAILURE,
    CLEARE_CART_REQUEST,
    CLEARE_CART_SUCCESS,
    FIND_CART_FAILURE,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CARTS_ITEMS_FAILURE,
    GET_ALL_CARTS_ITEMS_REQUEST,
    GET_ALL_CARTS_ITEMS_SUCCESS,
    REMOVE_CARTITEM_FAILURE,
    REMOVE_CARTITEM_REQUEST,
    REMOVE_CARTITEM_SUCCESS,
    UPDATE_CARTITEM_FAILURE,
    UPDATE_CARTITEM_REQUEST,
    UPDATE_CARTITEM_SUCCESS
} from "./ActionType";

// ✅ Find Cart
export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST });
        try {
            const response = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
            console.log("my cart ", response.data);
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: FIND_CART_FAILURE, payload: error });
        }
    };
};

// ✅ Get All Cart Items
export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_CARTS_ITEMS_REQUEST });
        try {
            const { data } = await api.get(`/api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            console.log("Fetched cart items: ", data);
            dispatch({ type: GET_ALL_CARTS_ITEMS_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_ALL_CARTS_ITEMS_FAILURE, payload: error.message });
        }
    };
};

// ✅ Add Item to Cart
export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
        try {
            const { data } = await api.put(`/api/cart/add`, reqData.cartItem, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            console.log("Added item to cart: ", data);
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
        }
    };
};

// ✅ Update Cart Item
export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_CARTITEM_REQUEST });
        try {
            const { data } = await api.put(`/api/cart-item/update`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            console.log("Updated cart item: ", data);
            dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error.message });
        }
    };
};

// ✅ Remove Cart Item
export const removeCartItem = ({ cartItemId, token }) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_CARTITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/cart-item/delete/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Removed cart item: ", data);
            dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
        }
    };
};

// ✅ Clear Cart
export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type: CLEARE_CART_REQUEST });
        try {
            const { data } = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("Cleared cart: ", data);
            dispatch({ type: CLEARE_CART_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: CLEARE_CART_FAILURE, payload: error.message });
        }
    };
};
