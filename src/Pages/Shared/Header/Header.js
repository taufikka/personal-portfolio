import './Header.css'
import React from 'react';


const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light mx-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img width="45" src="https://cdn-icons-png.flaticon.com/512/695/695102.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                    <a class="nav-link active text-white" href="#">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-white" href="#">Contact</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

