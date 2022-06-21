import React from "react";
import '../Item/Item.css'

function Item ({id, nombre ,role }) {
    return <div className="item-container">
        <h4>{id}</h4>
        <h3 className="name">{nombre}</h3>
        <h3 className="role">{role}</h3>
        <button>Tomar 1 Rock glass</button>        
    </div>;     
};
export default Item;