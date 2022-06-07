import React from "react";

export const NavBar = () => {
    return <div>
        <nav>
            <div>
                <h1>Whiskyteca</h1>
            </div>
            <div>
                <ul className="lista">
                    <li>
                        <a>Inicio</a>
                    </li>
                    <li>
                        <a>Whiskys</a>
                    </li>
                    <li>
                        <a>A.A.</a>
                    </li>
                </ul>               
            </div>
        </nav>

    </div>;
}