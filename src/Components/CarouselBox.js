import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slideImg_1 from '../assets/slide_1.jpg'
import slideImg_2 from '../assets/slide_2.jpg'
import slideImg_3 from '../assets/slide_3.jpg'


export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block slide-img'
            src={ slideImg_1 } 
            alt='slideImg_1'
            width='100%'         
          />
          <Carousel.Caption>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, dicta?</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block slide-img'
            src={ slideImg_2 } 
            alt='slideImg_2'
            width='100%'
          />
          <Carousel.Caption>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, dicta?</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block slide-img'
            src={ slideImg_3 } 
            alt='slideImg_3'
            width='100%'
          />
          <Carousel.Caption>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, dicta?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
