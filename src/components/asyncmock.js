const products =[
    { id: 1, name:'whisky Jameson', price: '$4000', category: 'whisky', stock: 10, img: './images/jameson.jpg', descripcion:''},
    { id: 2, name:'whisky J&B', price: '$5000', category: 'whisky', stock: 9, img:'./images/jb.jpg'},
    { id: 3, name:'whisky Chivas Regal', price: '$6000', category: 'whisky', stock: 10, img:'./images/chivas.jpeg'}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
                    resolve(products)

        }, 3000);

    })
}

export const traerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
                    resolve(products[2])

        }, 2000);

    })
}