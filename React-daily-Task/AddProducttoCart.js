let cart=[];

function addToCart(name,price){
    let products={
        name:name,
        price:price
    }
    cart.push(products)

    console.log(cart)
}
addToCart('Pen',8000)



let checkCart=[]

function addToCheckCart(n,p,c){
    let pro={
        name:n,
        price:p,
        color:c
    }
    checkCart.push(pro)
    console.log(checkCart)
}

addToCheckCart('Lap',90000,'pink')
addToCheckCart('phone',7990,'black')
addToCart('cat',9000)