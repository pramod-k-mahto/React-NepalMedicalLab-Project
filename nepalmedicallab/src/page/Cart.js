import './Cart.css'
import Product from "../Product";

import { useState } from 'react';
function Cart(props) {
    const array = props.array;
    const [cartItem, setCartItem] = useState(1);
    console.log("from cart " + array);

    const arr = Product.filter((val, j) => {
        return array.includes(val.id)
        


    })

    var [cart_price, setCartPrice] = useState(0);

    function increment(price) {

        setCartItem(cartItem + 1);
        setCartPrice(cart_price + price);

    }

    function decrement(price) {
if(cartItem<=1){  

    setCartItem(1);
    setCartPrice(price);
}
else{
     setCartItem(cartItem - 1);
    setCartPrice(cart_price - price);
}
       

    }
    return (
        <div>
            {array.map((e, i) => {
                return (

                    <div key={i}>
                        <div className="cart-Item">

                            <input type="checkbox" name="" id="checkbox" />

                            <div className="cart-img">
                                <img src={arr[i].pic} alt="" />

                            </div>
                            <div className="name">name{arr[i].name}</div>

                            <div className="cart-price">
                                <p> Price:{arr[i].NewPrice} </p>
                                <p>newPrice:Rs.9876</p>
                                <p>discount:70%</p>
                                <button>Delete</button>

                            </div>

                            <div className="incementAndDecrement">

                                <button className="increment" onClick={() => { decrement(arr[i].NewPrice) }}>-</button>
                                <p className='val'>{cartItem}</p>
                                <button className="increment" onClick={() => { increment(arr[i].NewPrice) }}>+</button>

                            </div>

                        </div>


                    </div>)


            })}

            <div className="cart-orderSummery">
                <h3>Order Summary
                </h3>
                <p className='p'>Substotal(Total Item)</p>
                <span>Rs.{cart_price}</span>
                <br />
                <input type="number" name="" id="input" placeholder='Enter Voucher Code' />
                <button className='apply-btn'>Apply</button>
                <p className='p2'>Total</p>
                <span>Rs.10000</span>
                <button className='btn'>Proceed to checkout (1)</button>
            </div>




        </div>
    )
}

export default Cart;
