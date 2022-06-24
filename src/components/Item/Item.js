import React from "react";
import '../Item/Item.css'
import { Link } from "react-router-dom"

function Item({ id, nombre, role, imagen }) {

    return <div className="item-container">
        <h4 className="id">id de productos</h4>
        <h3 className="name">{nombre}</h3>
        <h3 className="role">{role}</h3>
        <Link to={`/whiskys/${id}`}> Ir a el brebaje! </Link>
    </div>
};
export default Item;
