import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">ABOUT US</h1>
                            <p>The only thing we're serious about is food.</p>
                        </div>
                        <p className="mid">
                            Our restaurant offers a unique blend of flavors and a cozy atmosphere,
                             perfect for food lovers seeking a memorable dining experience. Each dish 
                             is crafted with fresh ingredients, delivering a taste of excellence in every bite.
                        </p>
                        <Link to={"/"}>
                            Explore Menu{" "}
                            <span>
                                <HiOutlineArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div className="banner">
                        <img src="about.png" alt="about" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;