import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import fakeData from '../fakeData/courses';
import './Shop.css'


const Shop = () => {
    const [courses] = useState(fakeData); 
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    const totalPrice = cart.reduce((total, current) => total + current.price, 0);
    
    return (
        <div className="shop-container border">
            <br/>
            <h1 style={{border: '5px solid gray',borderRadius: '10px', width: '500px', marginLeft: '400px' }} className="text-center">Welcome to online classes</h1>
            <br/>
            <br/>
            <div className="row container-fluid justify-content-center">
                <div className="row col-md-9 border-right border-top pt-4">
                    {courses.map(course => <Course course={course} key={course.id} addToCart={addToCart}></Course>)}
                </div>

                <div className="col-md-3 border-top pt-4">
                <h3 style={{ marginLeft: "90px" }}>Order Detail</h3>
                    <h4 style={{ marginLeft: "70px" }}>Course Ordered: {cart.length} </h4>
                    <ul>
                        {cart.map(course => <Cart course={course}></Cart>)}
                    </ul>
                    <button style={{ marginLeft: "30px" }} className="btn btn-primary btn-block">
                        Checkout <span>$ {totalPrice}</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Shop;