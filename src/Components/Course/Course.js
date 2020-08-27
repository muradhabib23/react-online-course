import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const { name, img, price, instructor } = props.course;
    const addToCart = props.addToCart;
    
    return (
        <div className="col-md-4">
            <div>
                <div className="card">
                    <img style={{ height: "200px" }} src={img} alt="" />
                    <div className="card-body">
                        <h5>{name}</h5>
                        <h6>Instructor: {instructor}</h6>
                        <h4>${price}</h4>
                        <button className="btn btn-sm btn-primary" onClick={() => addToCart(props.course)}><FontAwesomeIcon icon={faPlusSquare} />Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;