import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.css'

export default function ImageCarousel() {
  return (
    <div className='image-carousel'>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        interval='5000'
        transitionTime='1000'
      className='images'>
      <img width='80%' src='https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='millenium-park'/>
      <img width='80%' src='https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80' alt='chicago-theater'/>
      <img width='80%' src='https://images.unsplash.com/photo-1563029295-f4441b6a7860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80' alt='chicago-skyline' />
      </Carousel>
    </div>
  )
}
