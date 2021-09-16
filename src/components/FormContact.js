import React from 'react'

import { Form, Row, Col, Button } from 'react-bootstrap'

import { BsStar, BsStarFill } from 'react-icons/bs'

const FormContact = ({ handleSubmit }) => {

    return (

        <div className="registry-form container">
            <Form onSubmit={handleSubmit} id='myForm'>
                <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column md={4}>
                        Name
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            minLength="2"
                            maxLength="50"
                            pattern="^[a-zA-Z ]+$"
                            required
                        />
                        <Form.Text id="NameHelpBlock" muted>
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="phone">
                    <Form.Label column md={4}>
                        Phone
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="Your phone number"
                            minLength="6"
                            maxLength="30"
                            pattern="^[0-9 ]+$"
                        />
                        <Form.Text id="phoneHelpBlock" muted>

                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column md={4}>
                        Email
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            type="email"
                            placeholder="name@email.com"
                            minLength="8"
                            maxLength="250"
                            required
                        />
                        <Form.Text id="phoneHelpBlock" muted>

                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="message">
                    <Form.Label column md={4}>
                        Message
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '80px' }}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 stars" controlId="star-list">
                    <Form.Label column md={4}>
                        Rate Us
                    </Form.Label>
                    <Col xs={9} md={5}>
                        <ul className=" d-flex star-bar mb-3 mt-2">
                            <li className="mx-2"><BsStar className='star' data-star-value="DREADFUL" id="1"></BsStar></li>
                            <li className="mx-2"><BsStar className='star' data-star-value="BAD" id="2"></BsStar></li>
                            <li className="mx-2"><BsStar className='star' data-star-value="MEDIUM" id="3"></BsStar></li>
                            <li className="mx-2"><BsStar className='star' data-star-value="GOOD" id="4"></BsStar></li>
                            <li className="mx-2"><BsStar className='star' data-star-value="GREAT" id="5"></BsStar></li>
                        </ul>
                    </Col>
                    <Col>
                        <div className=" rate"><span id="rate">NULL</span></div>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col md={{ span: 8, offset: 4 }}>
                        <Button type="submit" form='myForm'>Submit</Button>
                        <Button className="mx-2" variant='secondary' type="reset" form='myForm'>Reset</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div >
    )

}

export default FormContact
