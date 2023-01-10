import axios from 'axios';

export const getProducts = ({commit}) => {
    axios.get('https://dummyjson.com/products')
    .then(response =>{
        commit('SET_PRODUCTS', response.data.products)
    })
}

export const getcarts = ({commit}) =>{
    axios.get('https://dummyjson.com/carts/1')
    .then(response =>{
        commit('SET_CARTS', response.data)
    })
}

export const getCategories = ({commit}) => {
    axios.get('https://dummyjson.com/products/categories')
    .then(response =>{
        commit('SET_CATEGORIES', response.data)
    })
}


export const getProduct = ({commit}, productId) =>{
    axios.get(`https://dummyjson.com/products/${productId}`)
    .then(response=> {
        commit('SET_PRODUCT', response.data)
    })
}

