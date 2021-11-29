import React from 'react';
import './Banner.css'
import resume from './files/Taufikul-Islam-Resume.pdf'

const Banner = () => {
    return (
        <div>
            <section className="d-flex justify-content-around py-5">
                <div className="text-white d-flex flex-column justify-content-start align-items-start button-hover">
                    <p className="text-white">Hi, I am </p>
                    <h1 className="title-font" style={{ color: "#ecf1ff" }}>Taufikul Islam</h1>
                    <h6 className="title-font">I build User Interfaces.</h6>
                    <p className=" pt-4 paragraph-color my-0"> I am excited to be at the deployment phase of my new career as a Web Developer.
                    </p> <p className="py-0  my-0 paragraph-color">Skilled in Front End technologies such as Html5 , Css3 , JavaScript , React, Bootstrap, </p> <p className="py-0 my-0 paragraph-color">  and Back End technologies such as Node.JS, Express JS and MongoDB.</p>
                    <a href={resume} target="_blank" download>
                        <button className="text-white my-5 py-2 px-4 border border-2 border-white">Download Resume</button>
                    </a>
                </div>
                <div>.</div>
            </section>
        </div>
    );
};

export default Banner;