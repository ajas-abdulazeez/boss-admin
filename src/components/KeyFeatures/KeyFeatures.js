import React from 'react'
import './style.css'
import KeyFeaturesTabView from './KeyFeaturesTabView'

const KeyFeatures = () => {
  return (
<div id="keyFeaturesSection" className="key-features-layout">

<div className='main-container'>
    <br/>
    <br/>

    <br/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className="keyfeatures-container">
        <div className="key-features-section1">
        <div className="key-feature-section-title">Key Features</div>
        <br/>
        <div className="key-feature-section-tagline">How We Help You To Sell Your Product</div>
        <br/>
        <div className="key-feature-section-divider"></div>
        <br/>

        <div className="key-feature-section-description">“ Say goodbye to complex programming
languages and tedious lines of code. 
With BOSS, you can build your dream app
using simple drag-and-drop tools. 
It’s like organizing items in your store, 
but with a dash of retail magic!! “</div>
        </div>
        <div className="key-features-section-2">
            <div className="key-features-title">What you get</div><br/>
            <KeyFeaturesTabView/>
        </div>
    </div>
    </div>   
 </div>  )
}

export default KeyFeatures