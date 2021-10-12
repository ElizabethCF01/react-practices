import React, { useState, useReducer, useRef } from 'react'
import axios from 'axios'

// Bootstrap components
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from 'react-bootstrap/Tooltip'

import AlertResponse from './AlertResponse'
import { BsStar, BsStarFill } from 'react-icons/bs'

// Reducers
import formReducer, { FormState } from './FormReducer'

// Constants

import { RESET_FORM } from './FormReducer'

const FormContact = () => {

    const [state, dispatch] = useReducer(formReducer, new FormState())

    //const [rate, setRate] = useState('')
    // const [starId, setStarId] = useState(0)

    const tooltip = (help) => {
        return <Tooltip id="tooltip">{help}</Tooltip>
    }
    //const [showtooltip, setShowtooltip] = useState(false);


    const [alert, setAlert] = useState({ show: false, variant: '', text: '' })

    const stars = (myid) => {
        if (myid <= state.data.calification)
            return <BsStarFill className='star'></BsStarFill>

        return <BsStar className='star'></BsStar>
    }

    /* const handleStarClick = (e) => {//=========================Clik on Stars===
         const liStar = e.currentTarget
         setStarId(liStar.id)
         setRate(liStar.getAttribute('data-star-value'))
         setShowtooltip(false)
     }*/
    const handleSubmit = (e) => {//=========================Submit===
        e.preventDefault()
        if (state.data.calification !== 0) {
            // state.data.calification = starId
            console.log(state.data)
            const data = JSON.stringify(state.data)
            const url = 'http://localhost:4000/api/messages'

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            axios.post(url, data, { headers }).then(res => {
                setAlert({ show: true, variant: 'success', text: res.data.message })
            }).catch(err => {
                console.log(err)
                setAlert({ show: true, variant: 'danger', text: 'Something was wrong' })
            })
        }
    }

    const handleChange = (e) => {//========================= handle Change===
        const input = e.target
        dispatch({
            type: input.name.toUpperCase(),
            value: input.value
        })
    }
    //const toolh = useRef();

    return (
        <div className="registry-form container">
            <Form onSubmit={handleSubmit} onReset={() => dispatch({ type: RESET_FORM })} id='myForm'>
                <Form.Group as={Row} className="mb-3" /**controlId="name" */>
                    <Form.Label column md={4}>
                        Name
                    </Form.Label>
                    <Col md={8}>
                        {/* <OverlayTrigger
                            placement="top"
                            //show={}
                            delay={{ hide: 450, show: 300 }}
                            overlay={(props) => (<Tooltip {...props}>{state.tooltips.name}</Tooltip>)}
                        >*/}
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            minLength="2"
                            maxLength="50"
                            required
                            name='name'
                            value={state.data.name}
                            onChange={handleChange}
                            isInvalid={state.labels.name === '' ? false : true}
                        />
                        {/*</OverlayTrigger>*/}
                        <Form.Control.Feedback type='invalid'
                            className='helpWarning ml-2'
                            id="NameHelpBlock"
                        >
                            {state.labels.name}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column md={4}>
                        Phone
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="Your phone number"
                            minLength="6"
                            maxLength="30"
                            name='phone'
                            value={state.data.phone}
                            onChange={handleChange}
                            isInvalid={state.labels.phone === '' ? false : true}
                        />
                        <Form.Control.Feedback type='invalid'
                            className='helpWarning ml-2'
                            id="phoneHelpBlock"
                        >
                            {state.labels.phone}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        Email
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control
                            type="email"
                            placeholder="Your email"
                            minLength="8"
                            maxLength="250"
                            required
                            name='email'
                            value={state.data.email}
                            onChange={handleChange}
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
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '80px' }}
                            required
                            name='message'
                            value={state.data.message}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 stars" controlId="star-list" >
                    <Form.Label column md={4}>
                        Rate Us
                    </Form.Label>
                    <Col xs={9} md={5}>
                        <OverlayTrigger placement="top" show={false} overlay={tooltip('Please rate us')}>
                            <ul className=" d-flex star-bar mb-3 mt-2">
                                <li onClick={() => dispatch({
                                    type: 'STARS',
                                    value: 1
                                })} className="mx-2 liStar" id="1">{stars(1)}</li>
                                <li onClick={() => dispatch({
                                    type: 'STARS',
                                    value: 2
                                })} className="mx-2 liStar" id="2">{stars(2)}</li>
                                <li onClick={() => dispatch({
                                    type: 'STARS',
                                    value: 3
                                })} className="mx-2 liStar" id="3">{stars(3)}</li>
                                <li onClick={() => dispatch({
                                    type: 'STARS',
                                    value: 4
                                })} className="mx-2 liStar" id="4">{stars(4)}</li>
                                <li onClick={() => dispatch({
                                    type: 'STARS',
                                    value: 5
                                })} className="mx-2 liStar" id="5">{stars(5)}</li>
                            </ul>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <div className=" rate"><span id="rate">{state.labels.calification}</span></div>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col md={{ span: 8, offset: 4 }}>
                        <Button type="submit" form='myForm'>Submit</Button>
                        <Button className="mx-2" variant='secondary' type="reset" form='myForm'>Reset</Button>
                    </Col>
                </Form.Group>
            </Form>
            {alert.show &&
                <AlertResponse alertR={alert} setAlertR={setAlert}></AlertResponse>
            }
        </div >
    )
}

export default FormContact
