import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
<<<<<<< HEAD
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
=======
>>>>>>> parent of 1c0f4cc (Added login screen, login test successful)

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
<<<<<<< HEAD
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer, 
=======
    cart: cartReducer
>>>>>>> parent of 1c0f4cc (Added login screen, login test successful)
})

const cartItemsFromStorage =localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store