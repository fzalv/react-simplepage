import React from 'react';
import './Demo.css';

function Demo() {
    return (
        <div className='demo'>
            <div className="container">
                <div className="col-1">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, enim.</p>
                    <button className='button'>Get your analysis</button>
                </div>
                <div className="col-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/G4W2qfsHLGo" title="YouTube video Vlog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Demo;
