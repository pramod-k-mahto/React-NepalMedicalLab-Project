import { useNavigate } from "react-router";
// import Links from "../Links";
import Product from "../Product";

import "./ProductDescription.css";

import { useState } from "react";
function ProductDescription(props) {


    const [val,setVal] = useState(1);
    const Navigate = useNavigate();

    const Id = props.id;
    const name = Product.filter((val) => {
        return Id === val.id;


    })

    // console.log(name[0].id);

    return (
        <div>
            <div className="Product-Description-component">
                {/* for image */}
                <div className="cart-img-dic" >
                    <img src={name[0].pic} alt="img" />
                </div>

                <div className="product-desc">
                    {/* display name */}
                    <div className="name">
                        <p>Name {name[0].name}</p>
                    </div>
                    {/* display price */}
                    <div className="price">
                        <p>Rs.{name[0].NewPrice}</p>
                        <p>Rs.{name[0].OldPrice}</p>
                        <span>12%</span>
                    </div>

                    {/* increement and decriment */}
                    <div className="Pquntity">
                        <span className="Q">Quantity</span>

                        <button className="decrease" onClick={() => {
                            if (val <= 1) {
                                setVal(1)

                            } else {
                                setVal(val - 1);

                            }
                        }}  >
                        -

                        </button>

                        {/* value */}
                        <span>{val}</span>

                        <button
                            className="increase" onClick={() => {
                                setVal(val + 1);
                            }}  >
                            +

                        </button>

                    </div>


                    {/* //for button */}
                    <div className="Two-btn">

                        <button className="buy-now-btn" onClick={() => {
                            Navigate('/Payment')
                        }}>Buy Now</button>

                        <button className="Add-cart-btn" onClick={() => { props.pramod(Id) }} >Add To Cart</button>

                    </div>

                </div>

                <div  className="delivery-address">
                    <h3>Delivery</h3>
                    <p>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad	</p>
                    <p>Standard Delivery</p>
                    <p>Cash on Delivery Available	</p>
                    <h3>Service	</h3>
                    <p>7 Days Returns</p>
                    <p>Warranty not available</p>

                    <div className="seller">
                        <h3>Sold by</h3>
                        <h3>pramod</h3>
                        <ul>
                            <li>Positive Seller Ratings</li>
                            <li>Ship on Time</li>
                            <li>Chat Response Rate</li>
                        </ul>
                        <a href="#">Vist store</a>

                    </div>

                    
                </div>

            </div>





        </div>


    )
}

export default ProductDescription;
