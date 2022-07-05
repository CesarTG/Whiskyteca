import React from "react";
import '../Item/Item.css'
import { Link } from "react-router-dom"

function Item({ id, nombre, role, imagen, sabor }) {
            
    return <div className="item-container">
        <h4 className="id">ID: {id}</h4>
        <h3 className="name">{nombre}</h3>
        <h3 className="role">Sabor: {role}</h3>
        <h3>flavor: {sabor}</h3>
        <img className="imagen" src={imagen} alt="Botella "/>
        <Link className="linkItem" to={`/whiskys/${id}`}> Tomar un RockGlass! </Link>
    </div>
};
export default Item;
