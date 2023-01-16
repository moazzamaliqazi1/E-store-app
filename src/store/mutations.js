// bring  all products and set in state
export const SET_PRODUCTS = (state,products) => {
    state.products = products;
}
//set categories in state
export const SET_CATEGORIES = (state,categories) => {
    state.categories = categories;
}
//set single product in state
export const SET_PRODUCT = (state,product) => {
    state.product = product;
}
export const UPDATE_CART = (state, carts)=>{
    state.carts =  carts; // here cart is new cart
}
// delete product in cart
export const REMOVE_PRODUCT = (state,product)=>{
    state.carts = state.carts.filter(item => {
        return item.id !== product
    })
}
