import { API } from '../Config';

export const createCategory = (userId, token, category) => {
    // console.log(name, email, password)
    return fetch(`${API}/category/create/${userId}`, {
        method: "Post",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: ` Bearer ${token} `
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json()
        })

        .catch(error => {
            console.log(error)
        })
};

export const createProduct = (userId, token, product) => {
    // console.log(name, email, password)
    return fetch(`${API}/product/create/${userId}`, {
        method: "Post",
        headers: {
            Accept: 'application/json',
            Authorization: ` Bearer ${token} `
        },
        body: product
    })
        .then(response => {
            return response.json()
        })

        .catch(error => {
            console.log(error)
        })
};

export const getCategories = () => {
    return fetch (`${API}/categories`, {
        method : "GET"
    })

    .then(function(response){
        return response.json()
    })

    .catch( err => console.log(err))
};