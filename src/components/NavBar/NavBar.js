import React from "react";
import { CartWidget } from "../CartWidget/CarWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

    return <nav>
        <h1 className="titulo">Whiskyteca</h1>

        <ul className="lista">
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/whisky/fuerte">Fuertes</NavLink>
            </li>
            <li>
                <NavLink to="/whisky/suave">Suaves</NavLink>
            </li>
            <li>
                <NavLink to="/whisky/venenoso">Venenosos</NavLink>
            </li>
            <li>
                <NavLink to="/">A.A.</NavLink>
            </li>
            <CartWidget />
        </ul>
    </nav>;
}