import axios from 'axios';

// call api for get all products 
//skip and limit for pagination define in product component where action dispatched.
export const getProducts = ({commit},[limit,skip]) => {
    axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(response =>{
        //here commit for mutation where update the state
        commit('SET_PRODUCTS', response.data.products)
    })
}

//this action was dispatch in category component 
//get all categories from api
export const getCategories = ({commit}) => {
    axios.get('https://dummyjson.com/products/categories')
    .then(response =>{
        //here commit for mutation where update the state
        commit('SET_CATEGORIES', response.data)
    })
}

//singlr product fetch with id 
//send id in params to detail page and with  dispatch pass id to action where api get single data against that id
export const getProduct = ({commit}, productId) =>{
    axios.get(`https://dummyjson.com/products/${productId}`)
    .then(response=> {
        //here commit for mutation where update the state
        commit('SET_PRODUCT', response.data)
    })
}

//product add to cart and push in array(state)
export const addToCart = ({commit, state},product) =>{
    const carts = state.carts;
    carts.push(product);
    //here commit for mutation where update the state
    commit('UPDATE_CART', carts)
}

