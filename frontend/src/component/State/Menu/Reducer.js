import React from 'react';
import {
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    CREATE_MENU_ITEM_FAILURE,
    GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,
    GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
    UPDATE_MENU_ITEM_AVAILABILITY_FAILURE
} from './ActionType';

const initialState = {
    menuItems: [], 
    loading: false,
    error: null,
    search: [],
    message: null,
};

export const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
    case CREATE_MENU_ITEM_REQUEST:
    case GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST:
    case DELETE_MENU_ITEM_REQUEST:
    case SEARCH_MENU_ITEM_REQUEST:
    case UPDATE_MENU_ITEM_AVAILABILITY_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
            message: null,
        };
    case CREATE_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: [...state.menuItems, action.payload],
            message: "Food item created successfully",
        };
    case GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: action.payload,
        };
    case DELETE_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: state.menuItems.filter((item) => item.id !== action.payload),
            message: "Food item deleted successfully",
        };
    case UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: state.menuItems.map((item) =>
                item.id === action.payload.id ? action.payload : item
            ),
            message: "Food item availability updated successfully",
        };
    case SEARCH_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            search: action.payload,
        };
    case CREATE_MENU_ITEM_FAILURE:
    case GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE:
    case DELETE_MENU_ITEM_FAILURE:
    case SEARCH_MENU_ITEM_FAILURE:
    case UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
            message: null,
        };
    default:
        return state;
    }
};

export default menuItemReducer;