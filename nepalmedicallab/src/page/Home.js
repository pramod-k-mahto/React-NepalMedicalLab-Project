import './Home.css';
import { useNavigate } from 'react-router-dom';
import Product from '../Product';
import Midnam from './Midnav';
function Home(props) {
    const Navigate = useNavigate();

    function setIdNO(id) {
        props.setId(id)
        Navigate('/ProductDescription');

    }
    return (

        <div className='mydiv' >

           <div><Midnam/></div>

            {Product.map((e) =>

                <div className="Component" key={e.id} onClick={() => {
                    setIdNO(e.id);
                }}>
                    <div className="image1">
                        <img src={e.pic} alt="" />
                    </div>


                    <div className="describtion">
                        <h4>{e.name}
                        </h4>
                    </div>
                    <div className="price">
                        <h4 className='new-price'> Rs.{e.NewPrice} </h4>
                        <h4 className='old-Price' >Rs.{e.OldPrice} </h4>
                        {/* <h6>12%</h6> */}
                    <span> Discount:12%</span>
                    </div>
                </div>


            )}


        </div>

    )



}

export default Home;
