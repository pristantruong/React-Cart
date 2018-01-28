import * as types from './../constants/actionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,   //product : product
        quantity,  //quantity : quantity
    }
}