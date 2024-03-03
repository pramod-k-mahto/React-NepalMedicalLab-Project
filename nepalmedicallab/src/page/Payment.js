import "./Payment.css"

function Payment() {

    return (
        <div>
            <div className="payment">

                {/* <div className="Address"><h1>Add Address</h1></div> */}

                <div className="ProductDetail">
                    <div className="img-part">
                        <div>  <img src="https://freepngimg.com/thumb/categories/2378.png" alt="" /></div>
                        <div className="productname"> <p>100X-2000X Microscopes for Kids Students Adults, with Microscope Slides Set, Phone Adapter Home Education</p></div>
                        <br></br>
                        {/* <div className="qty"> <p>QTY: 1</p></div>
                        <br></br>

                        <div className="price"><p>Price:Rs.1345</p></div> */}
                    </div>

                    <div className="Standar-delivery">
                        <p>Stander Delivery || Rs.54</p>
                        <p>Recived by 1/22/2023-4/22/2023</p>
                    </div>

                    <div className="store-voucher">
                        <p>store voucher</p>
                    </div>

                </div>

            </div>


            <div className="discountPayment">
                    <p>Order Summary </p>
                    <p>Items Total:Rs.1200</p>
                    <p>Delivery fee:Rs.60</p>
                    <p>Total Amount Rs.1260</p>
                    <p>Total:Included All Tax:Rs.1260</p>
                </div>



        </div>
    )
}

export default Payment;