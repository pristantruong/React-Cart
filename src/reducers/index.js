import {combineReducers} from 'redux';
import products from './products';

const appReducers = combineReducers({
    products // product: product
})

export default appReducers;