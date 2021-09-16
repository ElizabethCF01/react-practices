import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer p-3 backg-dark" role="contentinfo">
            <Container className="container p-y-1">
                <p>2021 © Copyright PHOTOGRAPH. All Rights Reserved</p>
                <ul className="social-media d-flex justify-content-center m-0 p-0">
                    <li><a href="https://facebook.com/" target='_blank' rel="noreferrer"><FaFacebookF aria-hidden="true"> </FaFacebookF> </a></li>
                    <li><a href="https://twitter.com/" target='_blank' rel="noreferrer"><FaTwitter aria-hidden="true"></FaTwitter> </a></li>
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noreferrer"><FaYoutube aria-hidden="true"></FaYoutube> </a></li>
                </ul>

            </Container>

        </footer>
    )
}
export default Footer
