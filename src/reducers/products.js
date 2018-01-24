var initialState = [
    {
        id: 1, 
        name: 'NodeJS',
        image: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png',
        description: 'Code NodeJS',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Angular',
        image: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png',
        description: 'Code Angular',
        price: 450,
        inventory: 9,
        rating: 4
    },
    {
        id: 3,
        name: 'ReactJS',
        image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        description: 'Code ReactJS',
        price: 600,
        inventory: 5,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;