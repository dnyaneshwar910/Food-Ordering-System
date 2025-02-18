// import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
//  // Adjust the path as necessary
// import { thunk } from 'redux-thunk';
// import authReducer from './Authentication/Reducer';
// import { menuItemReducer } from './Menu/Reducer';
// import cartReducer from './Cart/cartReducer';
// import { orderReducer } from './Order/Reducer';
// import restaurantsOrderReducer from './Restaurant Order/Reducer';
// import { IngredientsReducer } from './Ingredients/Reducer';
// import restaurantReducer from './Restaurant/Reducer';

// export const rooteReducer = combineReducers({
//     auth:authReducer,
//     restaurant:restaurantReducer,
//     menu:menuItemReducer,
//     cart:cartReducer,
//     order:orderReducer,
//     restaurantOrder:restaurantsOrderReducer,
//     ingredeint:IngredientsReducer,

// })


// export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk),

// );

// import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'; // Importing directly without brackets
// import authReducer from './Authentication/Reducer';
// import { menuItemReducer } from './Menu/Reducer';
// import cartReducer from './Cart/cartReducer';
// import { orderReducer } from './Order/Reducer';
// import restaurantsOrderReducer from './Restaurant Order/Reducer';
// import { IngredientsReducer } from './Ingredients/Reducer';
// import restaurantReducer from './Restaurant/Reducer';
// import { thunk } from 'redux-thunk';

// // Combine all reducers
// const rootReducer = combineReducers({
//     auth: authReducer,
//     restaurant: restaurantReducer,
//     menu: menuItemReducer,
//     cart: cartReducer,
//     order: orderReducer,
//     restaurantOrder: restaurantsOrderReducer,
//     ingredient: IngredientsReducer, // Fixed typo (ingredient instead of ingredeint)
// });

// // Enable Redux DevTools Extension


// // Create Store with Middleware and DevTools
// export const store = legacy_createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// );


import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; // Correct import
import authReducer from './Authentication/Reducer';
import { menuItemReducer } from './Menu/Reducer';
import cartReducer from './Cart/cartReducer';
import { orderReducer } from './Order/Reducer';
import restaurantsOrderReducer from './Restaurant Order/Reducer';
import { IngredientsReducer } from './Ingredients/Reducer';
import restaurantReducer from './Restaurant/Reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantsOrderReducer,
    ingredient: IngredientsReducer,
});

export const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
