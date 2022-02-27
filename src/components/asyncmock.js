const products =[
    { id: 1, name:'Whisky Jameson', price: '$4000', category: 'whisky', stock: 10, img: './images/jameson.jpg', descripcion:''},
    { id: 2, name:'Whisky J&B', price: '$5000', category: 'whisky', stock: 9, img:'./images/jb.jpg'},
    { id: 3, name:'Whisky Chivas Regal', price: '$6000', category: 'whisky', stock: 10, img:'./images/chivas.jpeg'},
    { id: 4, name:'Cerveza Quilmes', price: '$200', category: 'cervezas', stock: 25, img:'./images/quilmes.jpg'},
    { id: 5, name:'Cerveza Patagonia', price: '$200', category: 'cervezas', stock: 25, img:'./images/Patagonia.jpg'},
    { id: 6, name:'Licor de crema Baileys', price: '$2600', category: 'licores', stock: 12, img:'./images/tiamaria.jpg'},
    { id: 7, name:'Licor Tia Maria', price: '$2600', category: 'licores', stock: 25, img:'./images/baileys.jpg'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)

        }, 2000);

    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        const product =  products.find(p => p.id === parseInt(id))
        setTimeout(() =>{
            resolve(product)

        }, 1000);

    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        const producstByCategory = products.filter(cat => cat.category == categoryId);
        console.log(producstByCategory)
        setTimeout(()=> {
            categoryId ? resolve(producstByCategory) : resolve(products)
            }, 1000);     
    })
}
