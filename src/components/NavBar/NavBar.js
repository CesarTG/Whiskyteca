import React from "react";

export const NavBar = (props) => {

    const { children } = props;

    return <nav>
        <h1 className="titulo">Whiskyteca</h1>

        <ul className="lista">
            <li>
                <a href="/#">Inicio</a>
            </li>
            <li>
                <a href="/#">Whiskys</a>
            </li>
            <li>
                <a href="/#">A.A.</a>
            </li>
            {children}
        </ul>
    </nav>;
}