import React, { useEffect, useState } from "react";

import { FaArrowCircleUp } from 'react-icons/fa'
/*
import { Link } from 'react-router-dom'

const BackToTop = () => {
    return (

        <Link to={{
            pathname: "/main",
            //search: "?sort=name",
            hash: "#home",
            state: { fromDashboard: true }
        }
        }
            className="up">
            <FaArrowCircleUp aria-hidden="true"> </FaArrowCircleUp>
        </Link>
    )
}
export default BackToTop
*/

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible &&
                <div className="up" onClick={scrollToTop}>
                    <FaArrowCircleUp aria-hidden="true"> </FaArrowCircleUp>
                </div>}
        </div>
    );
}
export default BackToTop