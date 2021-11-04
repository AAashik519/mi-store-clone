import React from 'react'
import '../styles/slider.css'
import{Carousel} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'
const Slider = ({start}) => {
    return (
        < >
 <Carousel fade>
 
     
     { 
         start.map((item ,index)=>(
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
            </Carousel.Item>
         ))
        }
       
    
 

   </Carousel>
        </ >
    )
}

export default Slider
