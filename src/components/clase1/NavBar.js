import React from "react";

export const MiPrimerComponente = () => {
    return <div>     

        <nav class="navbar navbar-expand-xl navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Whiskyteca</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse show" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Whiskys</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">A.A.</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Compre todo el Whisky que desees!
                    </span>
                </div>
            </div>
        </nav>

    </div>;
}