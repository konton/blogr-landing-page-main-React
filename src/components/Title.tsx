import React, { Component } from 'react'
import './App.css';
import { Button } from './Button';


const Title = () => {

    return (
        <div className='title'>
          
            <div className="header">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div className="header-btn">
                    <Button class='startbtn'>Start for Free</Button>
                    <Button class='learnbtn'>Learn More</Button>
                    {/* <button className='startbtn'>Start for Free</button> */}
                    {/* <button className='learnbtn'>Learn More</button> */}
                </div>

            </div>
        </div>
    )

}

export default Title