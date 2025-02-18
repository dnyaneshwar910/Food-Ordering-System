import axios from "axios";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { api, API_URL } from "../../config/api";
// import { type } from "@testing-library/user-event/dist/type";

// sign up for user
export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })

    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "ROLE_RESTAURANT_OWNER") {

            reqData.navigate("/admin/restaurant")
        }
        else {
    reqData.navigate("/")
}
    dispatch({type:REGISTER_SUCCESS, payload:data.jwt})
    console.log("Register Success: ",data)
    } catch (error) {
        dispatch({type:REGISTER_FAILURE, payload:error})
    console.log("error", error);
}
};

// export const registerUser = (reqData) => async (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });

//     try {
//         // Make the POST request with correct payload and headers
//         const { data } = await api.post('/auth/signup', reqData, {
//             headers: {
//                 "Content-Type": "application/json", // Optional but recommended
//             },
//         });

//         // Save JWT to localStorage if present
//         if (data.jwt) localStorage.setItem("jwt", data.jwt);

//         // Navigate based on the role
//         if (data.role === "ROLE_RESTAURANT_OWNER") {
//             reqData.navigate("/admin/restaurant");
//         } else {
//             reqData.navigate("/");
//         }

//         // Dispatch success action
//         dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
//         console.log("Register Success: ", data);
//     } catch (error) {
//         // Dispatch failure action
//         dispatch({ type: REGISTER_FAILURE, payload: error.response?.data || error.message });
//         console.error("Register Error: ", error.response?.data || error.message);
//     }
// };


//login for user
export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "ROLE_RESTAURANT_OWNER") {

            reqData.navigate("/admin/restaurant")
        }
        else {
    reqData.navigate("/")
}
    dispatch({type:LOGIN_SUCCESS, payload:data.jwt})
    console.log("LOgin Success: ",data)
    } catch (error) {
        dispatch({type:LOGIN_FAILURE, payload:error})
    console.log("error", error);
}
}

//get user profile
export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })

    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
       
    dispatch({type:GET_USER_SUCCESS, payload:data})
        console.log("user Profile: ",data)

    } catch (error) {
        dispatch({type:GET_USER_FAILURE, payload:error})
    console.log("error", error);
}
}

// Add to favorite
export const addTOFavorite = ({jwt, restaurantId}) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })

    try {
        const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorite`,{}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
       
    dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:data})
        console.log("Added to favorite: ",data)

    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload:error})
    console.log("error", error);
}
}

//this for logout
export const logout = () => async (dispatch) => {

    try {
        
       localStorage.clear();
    dispatch({type:LOGOUT})
        console.log("logout success ")

    } catch (error) {
        
    console.log("error", error);
}
}