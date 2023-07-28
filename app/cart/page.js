import React from 'react';
import age from "./data.js"

function Cart() {
    let prodList=[{name:"pants",price:10,unit:1},
    {name:"shirts",price:100,unit:2},
    {name:"handbag",price:30,unit:1}]
    return (
        <div>
            age: {age}
            {prodList.map((k,i)=>{
                return(
<CartItem name={k.name} price={k.price} unit={k.unit}/>
                )
            })}
            
        </div>
    );
}
const CartItem=({name,price,unit})=>{
    return(
        <div className="cart-item">
            <p>{name}</p>
            <p>${price}</p>
            <p>unit: {unit}</p>
        </div>
    )
}
export default Cart;