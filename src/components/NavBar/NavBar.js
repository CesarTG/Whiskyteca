import React from "react";
import { CartWidget } from "../CartWidget/CarWidget";

export const NavBar = () => {

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
            <CartWidget/>          
        </ul>        
    </nav>;
}