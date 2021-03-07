import React from "react"
import {Carousel} from "react-bootstrap"
import image from '../../img/image'
import  '../../Style/home.css'

import ButtonLink from "../Atoms/ButtonLink"


const Home = ()=>(
  <>

     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image.imgProbabilida}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="demo">Aprende conceptos básicos de probabilidad </h3>
        
               <ButtonLink link="/ebook/probabilidad"  text="Conoce más"  color="primary"  />
                
         
    </Carousel.Caption>
  </Carousel.Item>
                
  
   



  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image.imgProgramacion}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className="demo">Aprende conceptos básicos de Programación </h3>
    <ButtonLink link="/ebook/probabilidad"  text="Conoce más"  color="success"  />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image.imgProbabilida}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
 </> 




)

export default Home