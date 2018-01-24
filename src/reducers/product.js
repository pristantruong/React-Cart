var initialState = [
    {
        id: 1, 
        name: 'NodeJS',
        image: '',
        description: 'Code NodeJS',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Angular',
        image: '',
        description: 'Code Angular',
        price: 450,
        inventory: 9
    },
    {
        id: 3,
        name: 'ReactJS',
        image: '',
        description: 'Code ReactJS',
        price: 600,
        inventory: 5
    }
];

const product = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default product;