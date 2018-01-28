import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
const appReducers = combineReducers({
    products, // product: product
    cart, // cart : cart
})

export default appReducers;