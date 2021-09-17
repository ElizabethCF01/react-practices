import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-7.jpg'
import img5 from '../images/img-9.jpg'

const MyCarousel = () => {
    return (
        <Carousel prevLabel='' nextLabel='' className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={img1}
                    alt="img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={img2}
                    alt="img"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={img3}
                    alt="img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={img4}
                    alt="img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={img5}
                    alt="img"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default MyCarousel
