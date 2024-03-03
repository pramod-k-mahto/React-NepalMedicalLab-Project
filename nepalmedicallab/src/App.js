import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Footer';
import Links from './Links';
import About from "./page/About";
import Cart from './page/Cart';
import Contact from "./page/Contact";
import Home from "./page/Home";
import Login from './page/Login';
import PageNotFound from './page/PageNotFound';
import Payment from './page/Payment';
import ProductDescription from './page/ProductDescription';

function App() {
    const[array,setarry]=useState([])
    const[Number,setNumber]=useState(0);
    const [id,setId]=useState(0);
    const [cartid,setCartid]=useState(1);

     function pramod(a){
        setNumber(Number+1);
setarry([...array,a])
    setCartid(a);
     }
     console.log(array);

    return (
        <div>
            <Links Number={Number}/>
            <div className="App">
                <Routes>
                    <Route path="/"element={<Home setId={setId} setCartid={setCartid}/>}/>
                    <Route path="/About"element={<About/>}/>
                    <Route path="/Contact"element={<Contact/>}/>
                    <Route path="/Login"element={<Login/>}/>
                    <Route path="/ProductDescription"element={<ProductDescription pramod={pramod} id={id}setNumber={setNumber}/>}/>
                    <Route path="/Cart" element={<Cart cartid={cartid}  array={array}/>}/>
                    <Route path="/Payment" element={<Payment/>}/>
                    <Route path='/*' element={<PageNotFound/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
export default App;
