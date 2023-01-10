export const SET_PRODUCTS = (state,products) => {
    state.products = products;
}

export const SET_CARTS = (state , carts) => {

    state.carts.products = carts.products
    console.log(state.carts.products)
}

export const SET_CATEGORIES = (state,categories) => {
    state.categories = categories;
}

export const SET_PRODUCT = (state,product) => {
    state.product = product;
}

export const ADD_TO_CART = (state , {product , quantity}) => {
    state.cart.push({
        product,
        quantity
    })
}