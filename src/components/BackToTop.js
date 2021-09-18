import React from 'react'

import { FaArrowCircleUp } from 'react-icons/fa'

import NavLink from 'react-bootstrap/NavLink'

const BackToTop = () => {
    return (
        <NavLink href="#home" className="up"><FaArrowCircleUp aria-hidden="true"> </FaArrowCircleUp></NavLink>
    )
}
export default BackToTop