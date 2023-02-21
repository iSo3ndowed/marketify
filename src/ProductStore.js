import product1 from './images/product 1.jpg'
import product2 from './images/product 2.jpg'
import product3 from './images/product 3.jpg'
import product4 from './images/product 4.jpg'
import product5 from './images/product 5.jpg'
import product6 from './images/product 6.jpg'
import product7 from './images/product 7.jpg'
import product8 from './images/product 8.jpg'
import product9 from './images/product 9.jpg'
import product10 from './images/product 10.jpg'
import product11 from './images/product 11.jpg'


const productsArray = [
    {
        id: '1',
        title: 'toddler shoes',
        price: 7000,
        avatar: product1
    },
    {
        id: '2',
        title: 'heels',
        price: 8200,
        avatar: product2
    },
    {
        id: '3',
        title: 'flip flop',
        price: 11600,
        avatar: product3
    },
    {
        id: '4',
        title: 'slippers',
        price: 8700,
        avatar: product4
    },
    {
        id: '5',
        title: 'shoes',
        price: 6500,
        avatar: product5
    },
    {
        id: '6',
        title: 'shoes',
        price: 7100,
        avatar: product6
    },
    {
        id: '7',
        title: 'shoes',
        price: 3800,
        avatar: product7
    },
    {
        id: '8',
        title: 'shoes',
        price: 6200,
        avatar: product8
    },
    {
        id: '9',
        title: 'shoes',
        price: 4500,
        avatar: product9
    },
    {
        id: '10',
        title: 'shoes',
        price: 6300,
        avatar: product10
    },
    {
        id: '11',
        title: 'shoes',
        price: 7900,
        avatar: product11
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    
    if (productData == undefined) {
        console.log('Oops! product not available for ID: ' + id)
        return undefined
    } 
    return productData
}

export { productsArray, getProductData }