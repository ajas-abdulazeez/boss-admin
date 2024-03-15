import React from 'react'
import LandingHeaderComponent from '../../components/LandingHeaderComponent'
import Demographics from '../../components/Demographics/Demographics'
import BossMagicSection from '../../components/BossMagic/BossMagicSection'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import Pricing from '../../components/Pricing/Pricing'


const LandingPage = () => {
  return (
    <div><LandingHeaderComponent/>
    <Demographics/>
    <BossMagicSection/>
    <KeyFeatures/>
    <Pricing/>
    </div>
  )
}

export default LandingPage