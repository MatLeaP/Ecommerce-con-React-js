const products =[
    { id: 1, name:'Whisky Jameson', price: '4000', category: 'whisky', stock: 10, img: 'https://http2.mlstatic.com/D_NQ_NP_731774-MLA41802052251_052020-O.webp', descripcion:''},
    { id: 2, name:'Whisky J&B', price: '5000', category: 'whisky', stock: 9, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JJRTX0mIyqE_6nn0Qlyo95nvpWMRpEg7WA&usqp=CAU'},
    { id: 3, name:'Whisky Chivas Regal', price: '6000', category: 'whisky', stock: 10, img:'https://hiperlibertad.vteximg.com.br/arquivos/ids/161588-1000-1000/Whisky-CHIVAS-REGAL-Scotch-12-a-os-1-lt-1-8567.jpg?v=637287212574430000'},
    { id: 4, name:'Cerveza Quilmes', price: '200', category: 'cervezas', stock: 25, img:'https://tabueno.s3.us-east-2.amazonaws.com/productos/59/1615/CERVEZA%20VIDRIO%20CLASICA%201L%20QUILMES.jpg'},
    { id: 5, name:'Cerveza Patagonia', price: '200', category: 'cervezas', stock: 25, img:'https://tabueno.s3.us-east-2.amazonaws.com/productos/59/1624/CERVEZA%20VIDRIO%20WEISSE%201L%20PATAGONIA.jpg'},
    { id: 6, name:'Licor de crema Baileys', price: '2600', category: 'licores', stock: 12, img:'https://vinomanos.com/wp-content/uploads/2020/08/baileys.png'},
    { id: 7, name:'Licor Tia Maria', price: '2600', category: 'licores', stock: 25, img:'https://www.losvinos.com.ar/wp-content/uploads/2020/02/Tia-Maria-1200x1488.jpg'},
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
        const producstByCategory = products.filter(cat => cat.category === categoryId);
        setTimeout(()=> {
            categoryId ? resolve(producstByCategory) : resolve(products)
            }, 1000);     
    })
}
