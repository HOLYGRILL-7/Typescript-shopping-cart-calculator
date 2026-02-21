//an array of objects 
type products = {
    name: string;
    price: number;
};

const cart: products[] = [
    {name: 'watch', price: 51},
    {name: 'bag', price: 400}
]

//Find the total price, average price and highest price in the cart

if (cart.length === 0) {
    throw new Error('Cart is empty. Please add some products.');
}

const sum = (cart: products[]): number => {
    return cart.reduce((acc, user) => {return acc + user.price}, 0)
}

console.log(`Total Price: ${sum(cart)}`)



const avg = (cart: products[]) => {
    const totalPrice = sum(cart)
    
    const avgPrice: number = totalPrice / cart.length;
    return avgPrice;
}

console.log(`Average Price: ${avg(cart)}`)


const highestPrice = (cart: products[]): number => {
    return cart.reduce((acc, user)=>{return Math.max(acc, user.price)}, -Infinity)
}

console.log(`The highest price in your cart is: ${highestPrice(cart)}`)