import React from 'react';
import './Cast.css'

const Cast = (props) => {
    // console.log(props);
    const { name, role, age, country, salary, img } = props.cast;
    return (




        <div className="col-md-4">
            <div className="card shadow">
                <img className="imgw card-img-top" src={img} alt="..." />
                <div className="card-body">
                    <p><b>Name:</b> {name}</p>
                    <p><b>Role:</b> {role}</p>
                    <p><b>Age:</b> {age} </p>
                    <p><b>Country:</b> {country}</p>
                    <p><b>Salary:</b>$ {salary}</p>
                    <button onClick={() => props.handleAddToCart(props.cast)} className='cart-btn'><i class="fas fa-shopping-cart"></i> Add To Cart</button>
                </div>
            </div>
        </div>



    );
};

export default Cast;