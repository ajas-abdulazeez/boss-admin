import React from 'react'
import './style.css'


const LandingHeaderComponent = () => {

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth' // Make the scrolling smooth
        });
    }
};
  return (
    <div className="header">
        <div className="main-container">
            <div className="header-blocks">
                <div className="header-block-1">BOSS</div>
                <div className="header-block-2">
                  <div className="header-action-button" onClick={() => scrollToSection('bossMagicSection')}>Boss Magic</div>
                  <div className="header-action-button" onClick={() => scrollToSection('keyFeaturesSection')}>Key Features</div>
                  <div className="header-action-button" onClick={() => scrollToSection('pricingSection')}>Pricing</div>
                  <div className="header-action-button" onClick={() => scrollToSection('contactusSection')}>Contact us</div>
                  <div className="book-demo-action-button" onClick={() => scrollToSection('bossMagicSection')}>Book a demo</div>
                  <div className="login-actn-btn">Login/Register</div>


          
                </div></div>
            </div>
        </div>
  )
}

export default LandingHeaderComponent