import React from 'react'
import './style.css'
import { ReactTyped } from "react-typed";

const BossMagicSection = () => {
  return (
    <div id="bossMagicSection" className='BossMagicSection'>
        <div className="boss-magic-container">
                <div className="boss-magic-centralised-blocks">
                    <div className="boss-magic-title">Boss Magic</div>
                    <br/>
                    <div className="boss-magic-tag">
                    <ReactTyped
          strings={[
            "Become your own Boss",
            "Build your store app instantly",
          ]}
          typeSpeed={180}
          backSpeed={140}
          loop
        />
                        <br/></div>
                    <br/>
                    <div className="boss-magic-description">“ Are you ready to transform your brick-and-mortar business into a digital powerhouse?
 Look no further! Introducing BOSS, the ultimate solution for creating stunning
 e-commerce mobile applications without the hassle of coding. Ready to dive into the BOSS universe?
 Watch the video to create your own app within minutes. ”</div>
 <br/>
                    <div className="boss-magic-video"></div>
                    <br/>
                    <br/>

                    <div className="boss-magic-action"><form>
                        <input type="text" id="fname" name="fname" placeholder='Enter your email' className='book-a-demo-ip'>
                        </input></form>
                        <div className="book-a-demo-btn">Book a demo</div>
                        </div>
                </div>
        </div>
        </div>
  )
}

export default BossMagicSection