import React from 'react';
import myImage from "../../../../images/Taufik.png"

const About = () => {
    return (
        <div className="projects-container container" id="about">
            <section className="row row-cols-1 row-cols-md-2 g-4 align-items-center justify-content-between">
                <div className="col ps-0">
                    <div className="d-flex flex-column align-items-start text-white">
                        <h3 className="fw-bold">About Me</h3> <br />

                        <p className="mb-0">I am Junior Web developer able to build a Web presence from </p>
                        <p className="mb-0">the ground up - from concept, navigation, layout and</p>
                        <p className="mb-0"> programming. I would love to involve myself in an organization  </p>
                        <p className="mb-0">where I will be able to deliver my skills as a Full Stack Web Developer</p>
                        <p className=""> through my hard work and dedication towards my responsibility.</p>

                        <p className="mb-0">I always try to learn new things to build up my professional skills.</p>
                        <p className="mb-0">I am looking for a challenging opportunity that will enable me to</p>
                        <p className="mb-0">use my skills and abilities to achieve a challenging goal. I</p>
                        <p className="mb-0"> am ambitious, have excellent focus, communication, and the </p>
                        <p className="">ability to learn rapidly.</p>

                        <p className="mb-0">I also done some projects with the help of Frontend and  Backend technology.</p>
                        <p className=""></p>

                        {/*  <div>
                            <div className="d-flex">

                                <p className="mx-5">hello</p>
                                <p className="mx-5">hello</p>
                                <p className="mx-5">hello</p>

                            </div>
                        </div> */}

                        {/*  <strong className="pb-2">Here are a few technologies I’ve been working with recently:</strong> */}
                        {/*  <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start pe-4">
                                <li>JavaScript (ES6+)</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                            </div>
                              <div className="d-flex flex-column align-items-start">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Material UI</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="d-flex justify-content-center justify-content-lg-end col pe-0">
                    <img width="380" height="450" className="border border-3 border-secondary" src={myImage} alt="" />
                </div>
            </section>
        </div>
    );
};

export default About;