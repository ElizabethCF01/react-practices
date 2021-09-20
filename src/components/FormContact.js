import React, { useState } from 'react'
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from 'react-bootstrap/Tooltip'

import { BsStar, BsStarFill } from 'react-icons/bs'

const FormContact = () => {
    const name = document.getElementById('cliName')
    const phone = document.getElementById('cliPhone')
    const email = document.getElementById('cliEmail')
    const message = document.getElementById('cliMessage')

    const [rate, setRate] = useState('')
    const [starId, setStarId] = useState(0)

    const [helpName, setHelpName] = useState('')
    const [helpPhone, setHelpPhone] = useState('')

    const tooltip = (<Tooltip id="tooltip">Please rate us</Tooltip>)
    const [showtooltip, setShowtooltip] = useState(false);

    const Stars = (myid) => {
        if (myid <= starId) {
            return <BsStarFill className='star'></BsStarFill>
        } else {
            return <BsStar className='star'></BsStar>
        }
    }

    const handleStarClick = (e) => {
        const liStar = e.currentTarget
        setStarId(liStar.id)
        setRate(liStar.getAttribute('data-star-value'))
        setShowtooltip(false)
    }

    const clearStars = () => {
        setStarId(0)
        setRate('')
        setShowtooltip(false)
    }
    const clearInputs = () => {
        name.value = ''
        phone.value = ''
        email.value = ''
        message.value = ''
    }
    const handleSubmit = (e) => {//=========================Submit
        e.preventDefault()
        if (starId === 0) {
            console.log('No Submiited form')
            setShowtooltip(true)
        } else {
            console.log('Submiited form')
            clearStars()
            clearInputs()
        }
    }
    const handleChange = (e) => {//=========================BeforeSubmit
        let inputId = e.currentTarget.id

        if (inputId === 'cliName') {
            //const name = e.currentTarget
            const regex = /^[a-zA-Z ]+$/
            const words = 'Only Words'
            const minlenght = 'Please lengthen this text to 2 charaters or more'
            let value = name.value

            if (!regex.test(value) && value.length !== 0) {
                setHelpName(words)
                name.value = value.replace(/[^a-z ]+/ig, '')
                setTimeout(() => {
                    setHelpName(' ')
                }, 2000)
            } else if (value.length < 2 && value.length !== 0) {
                setHelpName(minlenght)
                name.classList.add('invalid')
            } else {
                setHelpName(' ')
                name.classList.remove('invalid')
            }
        }
        if (inputId === 'cliPhone') {
            //const phone = e.currentTarget
            const regex = /^[0-9 ]+$/
            const digits = 'Only Digits'
            const minlenght = 'Please lengthen this text to 6 charaters or more'
            let value = phone.value

            if (!regex.test(value) && value.length !== 0) {
                setHelpPhone(digits)
                phone.value = value.replace(/[^0-9 ]+/g, '')
                setTimeout(() => {
                    setHelpPhone(' ')
                }, 2000)
            } else if (value.length < 6 && value.length !== 0) {
                setHelpPhone(minlenght)
                phone.classList.add('invalid')
            } else {
                setHelpPhone(' ')
                phone.classList.remove('invalid')
            }
        }

    }
    return (

        <div className="registry-form container">
            <Form onSubmit={handleSubmit} onReset={clearStars} id='myForm'>
                <Form.Group as={Row} className="mb-3" /**controlId="name" */>
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
                            id='cliName'
                            onChange={handleChange}
                        />
                        <Form.Text className='helpWarning' id="NameHelpBlock" muted className='ml-2'>
                            {helpName}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" /*controlId="phone"*/>
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
                            id='cliPhone'
                            onChange={handleChange}
                        />
                        <Form.Text className='helpWarning' id="phoneHelpBlock" muted className='ml-2'>
                            {helpPhone}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        Email
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            id='cliEmail'
                            type="email"
                            placeholder="Your email"
                            minLength="8"
                            maxLength="250"
                            required
                        />
                        <FormControl.Feedback />
                        <Form.Text id="emailHelpBlock" style={{ color: '#6c757d !important' }}>
                            name@example.com
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        Message
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            id='cliMessage'
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '80px' }}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 stars" controlId="star-list" >
                    <Form.Label column md={4}>
                        Rate Us
                    </Form.Label>
                    <Col xs={9} md={5}>
                        <OverlayTrigger placement="top" show={showtooltip} overlay={tooltip}>
                            <ul className=" d-flex star-bar mb-3 mt-2">
                                <li onClick={handleStarClick} className="mx-2 liStar" data-star-value="DREADFUL" id="1">{Stars(1)}</li>
                                <li onClick={handleStarClick} className="mx-2 liStar" data-star-value="BAD" id="2">{Stars(2)}</li>
                                <li onClick={handleStarClick} className="mx-2 liStar" data-star-value="MEDIUM" id="3">{Stars(3)}</li>
                                <li onClick={handleStarClick} className="mx-2 liStar" data-star-value="GOOD" id="4">{Stars(4)}</li>
                                <li onClick={handleStarClick} className="mx-2 liStar" data-star-value="GREAT" id="5">{Stars(5)}</li>
                            </ul>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <div className=" rate"><span id="rate">{rate}</span></div>
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
