import * as types from './../constants/actionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,   //product : product
        quantity,  //quantity : quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message, // message : message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product,
    }
}

export const actUpdateProductInCart = (product,quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity,
    }
}