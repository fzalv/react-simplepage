import React from 'react';
import './About.css';
import john from './images/john-doe.png'

function About() {
    return (
        <div className='about'>
            <div className="container">
                <img src={john} alt="john" />
                <div className="col-2">
                    <span className="line"></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laborum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa cupiditate aliquid unde quos itaque aliquam accusantium ipsam obcaecati sit!</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About;
