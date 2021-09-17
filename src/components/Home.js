import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCarousel from './MyCarousel'


const Home = () => (
    <section className="home" id="home">
        <header className="home__header text-xs-center">
            <Container fluid className="prueba">
                <Row className=" flex-md-row">
                    <Container as={Col} md='7' className=" header__text">
                        <h1 className="display-4">Photograph</h1>
                        <p className="description">Lorem ipsum dolor sit, amet consecr </p>
                    </Container>
                    <Container as={Col} md='5' fluid className="images">
                        <MyCarousel></MyCarousel>
                    </Container>
                </Row>
            </Container>
        </header>
    </section >
)
export default Home
