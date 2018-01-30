import * as Types from './../constants/actionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1; //-1 là không tìm thấy
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product); //state các sp trong gh, product là sp đang thêm
            if (index!==-1){
                state[index].quantity += quantity; 
            }else{
                state.push({
                    product,
                    quantity,
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index!==-1){
                state.splice(index, 1); //cắt phần tử mảng ở vị trí index, và cắt 1 phẩn tử 
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

 var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0){
        for (var i = 0; i < cart.length ; i ++){
            if(cart[i].product.id === product.id){
                index = i;
                break; //thoát khỏi vòng lặp
            }
        }
    }
    return index;
}

export default cart;