import React from 'react'

import FormContact from './FormContact.js'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Contact = () => {

    return (
        <section className='registry py-5' id='contact'>
            <Container className="registry-form">
                <Row>
                    <Col className='mb-3' md={{ span: 4, order: 2 }}>
                        <h3>Details</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis animi,
                            doloremque fugit cumque sunt aliquid porro numquam ut soluta recusandae saepe
                            voluptatum beatae ullam accusamus tempore provident quam aut pariatur.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis animi,
                            doloremque fugit cumque sunt aliquid porro numquam ut soluta recusandae saepe
                            voluptatum beatae ullam accusamus tempore provident quam aut pariatur.</p>
                    </Col>
                    <Col md={{ span: 8, order: 1 }}>
                        <h3 className="mb-3">Registry Form</h3>
                        <FormContact />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
export default Contact