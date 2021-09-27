import React, { useState, useReducer } from 'react'
import axios from 'axios'

// Bootstrap components
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from 'react-bootstrap/Tooltip'
import Alert from 'react-bootstrap/Alert'


import { BsStar, BsStarFill } from 'react-icons/bs'

import formReducer from './FormReducer'

export const initialFormState = {
    name: '',
    phone: '',
    email: '',
    message: ''
}

const FormContact = () => {

    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    const [rate, setRate] = useState('')
    const [starId, setStarId] = useState(0)

    const [helpName, setHelpName] = useState('')
    const [helpPhone, setHelpPhone] = useState('')

    const tooltip = (<Tooltip id="tooltip">Please rate us</Tooltip>)
    const [showtooltip, setShowtooltip] = useState(false);

    const [alert, setAlert] = useState({ show: false, variant: '', text: '' })

    const Stars = (myid) => {
        if (myid <= starId) {
            return <BsStarFill className='star'></BsStarFill>
        } else {
            return <BsStar className='star'></BsStar>
        }
    }

    const handleStarClick = (e) => {//=========================Clik on Stars===
        const liStar = e.currentTarget
        setStarId(liStar.id)
        setRate(liStar.getAttribute('data-star-value'))
        setShowtooltip(false)
    }
    const clearForm = () => {//=========================Clear Imputs and stars===
        dispatch({
            type: 'Clear',
        })
        setStarId(0)
        setRate('')
        setShowtooltip(false)
    }
    const handleSubmit = (e) => {//=========================Submit===
        e.preventDefault()
        if (starId === 0) {
            console.log('No Submited form')
            setShowtooltip(true)
        } else {
            formState.calification = starId
            const data = JSON.stringify(formState)
            const url = 'http://localhost:4000/api/messages'

            console.log('Submited form')
            console.log(data)
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            axios.post(url, data, { headers }).then(res => {
                console.log(res)
                clearForm()
                setAlert({ show: true, variant: 'success', text: res.data.message })
            }).catch(err => {
                console.log(err)
                setAlert({ show: true, variant: 'danger', text: 'Something was wrong' })
            })
        }
    }
    const handleChange = (e) => {//========================= handle Change===
        let Field = e.target.name
        let Payload = e.target.value
        let input = e.target

        if (Field === 'name') {
            const regex = /^[a-zA-Z ]+$/
            const words = 'Only Words'
            const minlenght = 'Please lengthen this text to 2 charaters or more'

            if (!regex.test(Payload) && Payload.length !== 0) {
                setHelpName(words)
                Payload = e.target.value.replace(/[^a-z ]+/ig, '')
                setTimeout(() => {
                    setHelpName('')
                }, 2000)
            } else if (Payload.length < 2 && Payload.length !== 0) {
                setHelpName(minlenght)
                input.classList.add('invalid')
            } else {
                setHelpName('')
                input.classList.remove('invalid')
            }
        } else if (Field === 'phone') {
            const regex = /^[0-9 ]+$/
            const digits = 'Only Digits'
            const minlenght = 'Please lengthen this text to 6 charaters or more'

            if (!regex.test(Payload) && Payload.length !== 0) {
                setHelpPhone(digits)
                Payload = e.target.value.replace(/[^0-9 ]+/g, '')
                setTimeout(() => {
                    setHelpPhone(' ')
                }, 2000)
            } else if (Payload.length < 6 && Payload.length !== 0) {
                setHelpPhone(minlenght)
                input.classList.add('invalid')
            } else {
                setHelpPhone(' ')
                input.classList.remove('invalid')
            }
        }

        dispatch({
            type: 'Input text',
            field: Field,
            payload: Payload
        })
    }
    return (

        <div className="registry-form container">
            <Form onSubmit={handleSubmit} onReset={clearForm} id='myForm'>
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
                            name='name'
                            value={formState.name}
                            onChange={(e) => handleChange(e)}
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
                            name='phone'
                            value={formState.phone}
                            onChange={(e) => handleChange(e)}
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
                            name='email'
                            value={formState.email}
                            onChange={(e) => handleChange(e)}
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
                            name='message'
                            value={formState.message}
                            onChange={(e) => handleChange(e)}
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
            {(() => {
                if (alert.show) {
                    return (
                        <Alert variant={alert.variant} >
                            <p>{alert.text}</p>
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setAlert({ show: false })} variant={`outline-${alert.variant}`}>
                                    Close
                                </Button>
                            </div>
                        </Alert>
                    )
                }
            })()}

        </div >
    )
}

export default FormContact
