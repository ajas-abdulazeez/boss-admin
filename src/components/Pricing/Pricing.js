import React from 'react'
import './style.css'
import PricingCards from './PricingCards'

const Pricing = () => {
  return (
    <div id="pricingSection" className="pricing-layout">
<div className='main-container'>
<br/>
<br/>
<br/>
<br/>
<br/>

    <div className="pricing-container">
    <div className="pricing-subsection">
        <div className="pricing-container-title">Pricing</div>
        <br/>
        <br/>

        <div className="pricing-cards-container">
            <PricingCards/>
            <PricingCards/>
            <PricingCards/>
            <PricingCards/>

        </div></div>
    </div>
</div>

    </div>
  )
}

export default Pricing