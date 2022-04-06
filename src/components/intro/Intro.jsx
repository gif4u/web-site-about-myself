import React from "react"
import './intro.css'
import Me from '../../img/фотка в красном.png'

const Intro = () => {
    return(
    <div className="i">
<div className="i-left">
    <div className="i-left-wrapper">
             <h2 className="i-intro">Hello, my name is</h2>
             <h1 className="i-name">Galikhanov Ildar</h1>
         <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Guitar player</div>
                <div className="i-title-item">Geologist</div>
                <div className="i-title-item">Petroleum engineer</div>
            </div>
         </div>
         <p className="i-desc">
             I design and develop services for customers of all sizes,
             specializing in creating stylish, modern websites, web services,
             and online stores.
         </p>
    </div>
</div>
         <div className="i-right">
             <div className="i-bg"></div>
             <img src={Me} alt="" className="i-img" />
         </div>
         </div>
    
    )
}

export default Intro