import React from 'react';
import './Team.css'
import { useEffect, useState } from 'react';
import Cast from '../Cast/Cast';
import Cart from '../Cart/Cart';

const Team = () => {
    const [casts, setCasts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./cast.json')
            .then(res => res.json())
            .then(data => setCasts(data))
    }, [])
    const handleAddToCart = (cast) => {
        const newCart = [...cart, cast];
        setCart(newCart);
    }
    return (
        <div className="container my-5">

            <div className="team-container row">
                <div className="cards-container col-md-9">

                    <div className="row gy-5">

                        {
                            casts.map(cast => <Cast key={cast.key} cast={cast} handleAddToCart={handleAddToCart}></Cast>)
                        }
                    </div>

                </div>
                <div className="cart-container col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Team;





