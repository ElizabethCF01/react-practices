import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../images/logo-extra.png'

const MainNavbar = () => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    const [BackG, setBackG] = useState(false)
    let [cont, setCont] = useState(0)
    useEffect(() => {
        const handleScroll = () => {

            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavBackground(show)

            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleDeployment = () => {
        setBackG(true)
        if (cont % 2 !== 0) {
            setBackG(false)
        }
        setCont(cont += 1)
    }

    return (
        <Navbar collapseOnSelect className='navbar' expand="md" bg={navBackground || BackG ? 'dark' : ''} variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className='d-flex align-items-center logo'>
                    <img
                        alt="logo"
                        src={logo}
                        className="d-inline-block align-top "
                    />
                    <span className='ws-name'>Photograph</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='menu-button' onClick={handleDeployment} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                        <Nav.Link href="#contact">SOMETHING</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar
