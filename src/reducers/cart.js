import * as types from './../constants/actionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id: 1,
            name: 'NodeJS',
            image: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png',
            description: 'Code NodeJS',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            
            return [...state];
        default:
            return [...state];
    }
}

export default cart;