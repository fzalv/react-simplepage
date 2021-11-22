import React from 'react';
import './Testimonials.css';
import user1 from './images/user1.jpeg';
import user2 from './images/user2.jpeg';
import user3 from './images/user3.jpeg';

function Testimonials() {
    return (
        <div className='testimonials'>
            <div className="container">
                <h2>Testimonials</h2>
                <div className="content">
                    <div className="card">
                        <img src={user1} alt="user1" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, eveniet?</p>
                        <p><span>Jonhy Sins</span></p>
                        <p>Director of "Financial Times"</p>
                    </div>
                    <div className="card">
                        <img src={user2} alt="user2" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consectetur?</p>
                        <p><span>Ezza Ibara</span></p>
                        <p>Director of "Risk Solution"</p>
                    </div>
                    <div className="card">
                        <img src={user3} alt="user3" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, enim!</p>
                        <p><span>Jordi El Nino</span></p>
                        <p>CEO of Financial</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
