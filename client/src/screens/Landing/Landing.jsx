import React from 'react'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import './Landing.css'

export default function Landing() {
  return (
    <div className='landing-container'>
       <div className='landing-text'>
        <h3>A place for Chicagoans to share where to find the best pizza in Chicago. Login / Register to join the party!</h3> 
      </div>
      <div className='carousel-container'>
        <ImageCarousel />
      </div>
     
    </div>
  )
}
