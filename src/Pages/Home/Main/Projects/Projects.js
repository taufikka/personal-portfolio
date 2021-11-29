import React, { useEffect, useState } from 'react';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div className="projects-container container">
            <h3 className="mb-3 my-5 fw-bold text-white">All Portfolio Projects</h3>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    projects.map(project =>
                        <div class="col rounded-0">
                            <div style={{ backgroundColor: "rgb(32, 31, 31)" }} class="card h-100 rounded-0">
                                <img src="https://image.freepik.com/free-vector/development-colorful-outline-horizontal-icon-illustration_104589-537.jpg" class="card-img-top rounded-0" alt="..." />
                                <div style={{ color: "white" }} class="card-body text-start rounded-0">
                                    <h5 class="card-title d-flex justify-content-between"><h5>{project.name}</h5>

                                        <div className="d-flex justify-content-between align-items-center">

                                            <a className="text-decoration-none text-white" target="_blank" href={project.live}><i class="fas fa-link pe-3"></i></a>
                                            <button type="button" style={{ backgroundColor: "#11243F" }} class="border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <i style={{ color: "#ccd6f6" }} class="fab fa-github"></i></button>
                                        </div>

                                    </h5>
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div style={{ backgroundColor: "#0a192f" }} class="modal-content rounded-0">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Wanna see Code link ?</h5>

                                                </div>
                                                <div class="modal-body d-flex justify-content-around">
                                                    <a className="text-decoration-none btn text-white rounded-0" style={{ backgroundColor: "#11243F" }} target="_blank" href={project.client}>Client Side</a>
                                                    <a className="text-decoration-none btn text-white  rounded-0" style={{ backgroundColor: "#11243F" }} target="_blank" href={project.server}>Server Side</a>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" style={{ backgroundColor: "#11243F" }} class="btn text-white rounded-0" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" style={{ backgroundColor: "#11243F" }} class="btn rounded-0 text-white" data-bs-dismiss="modal">OK</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="card-text">{project.des}</p>
                                    <div className="d-flex justify-content-between">
                                        <small style={{ wordSpacing: "10px" }} className="">{project.tech}</small>
                                        <p type="button" style={{ backgroundColor: "rgb(17, 16, 16)" }} className="text-white px-4 btn py-0">Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Projects;