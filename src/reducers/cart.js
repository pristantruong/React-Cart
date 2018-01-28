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
    },
    {
        product : {
            id: 3,
            name: 'ReactJS',
            image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            description: 'Code ReactJS',
            price: 600,
            inventory: 5,
            rating: 5
        },
        quantity: 3
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