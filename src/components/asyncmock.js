const products =[
    { id: 1, name:'whisky Jameson', price: '$4000', category: 'whisky', stock: 10},
    { id: 2, name:'whisky J&B', price: '$5000', category: 'whisky', stock: 9},
    { id: 3, name:'whisky Chivas Regal', price: '$6000', category: 'whisky', stock: 10}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
                    resolve(products)

        }, 3000)

    })
}