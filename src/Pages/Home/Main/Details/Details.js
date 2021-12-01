import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';





const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#0dcaf0' : '#308fe8',
    },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                }}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
}


const Details = () => {



    const { id } = useParams();

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/61a746a601558c731ccc1d7a')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])



    return (
        <div class="gradient-border m-3" id="box">
            {
                projects.map(project => project.key == id ? <section className="row row-cols-1 row-cols-md-2">

                    <div className="col">

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={project.img1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" >
                                    <img src={project.img2} class="d-block w-100" alt="..." />
                                    {/* <img src={project.img4} class="d-block w-100" alt="..." /> */}
                                </div>
                                <div class="carousel-item">
                                    <img src={project.img3} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="mb-5 my-2">
                            <h2 className="fw-bold text-white" style={{ letterSpacing: "5px" }}>{project.name}</h2>
                            <p className="text-white">{project.des}</p>
                            <button className="w-100 text-white border border-info py-2 ">{project.tech}</button>
                            <BorderLinearProgress className="rounded-0" variant="determinate" value={90} /> <br />
                            <button className="w-100 text-white border border-info py-2 ">{project.tech1}</button>
                            <BorderLinearProgress className="rounded-0" variant="determinate" value={20} /><br />
                            <button className="w-100 text-white border border-info py-2 ">{project.tech2}</button>
                            <BorderLinearProgress className="rounded-0" variant="determinate" value={50} /><br />
                            <button className="w-100 text-white border border-info py-2 ">{project.tech3}</button>
                            <BorderLinearProgress className="rounded-0" variant="determinate" value={70} /><br />
                            {/* <button className="w-100 text-white border border-info py-2 ">{project.tech4}</button>
                            <BorderLinearProgress className="rounded-0" variant="determinate" value={80} /> */}

                        </div>
                        <p className="fw-bold text-white text-center mb-4">GitHub Source Code and Live Site</p>
                        <div className="mb-5 d-flex justify-content-evenly align-items-center">
                            <div>
                                <a className="text-decoration-none" href={project.client} target="_blank"><button data-bs-toggle="tooltip" data-bs-placement="top" title="Client Side Code" type="button" style={{ backgroundColor: "#11243F" }} className="btn d-flex justify-content-center align-items-center "><i class="fab fa-github fs-2 text-white py-2 px-2 rounded-pill"></i></button></a>
                            </div>

                            {project.server == "null" ? <span></span> : <div>
                                <a className="text-decoration-none" href={project.server} target="_blank"><button data-bs-toggle="tooltip" data-bs-placement="top" title="Server Side Code" type="button" style={{ backgroundColor: "#11243F" }} className="btn d-flex justify-content-center align-items-center "><i class="fab fa-github fs-2 text-white py-2 px-2 rounded-pill"></i></button></a>
                            </div>}

                            <div>
                                <a className="text-decoration-none" href={project.live} target="_blank"><button data-bs-toggle="tooltip" data-bs-placement="top" title="Client Side Code" type="button" style={{ backgroundColor: "#11243F" }} className="btn d-flex justify-content-center align-items-center "><i class="fas fa-external-link-alt  fs-2 text-white py-2 px-2 rounded-pill"></i></button></a>
                            </div>
                        </div>


                    </div>

                    <div className="col">
                        <img width="100%" src={project.img4} alt="" />
                    </div>
                </section> : <div></div>)
            }
        </div>
    );
};

export default Details;