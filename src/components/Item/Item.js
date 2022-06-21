import React from "react";

function Item ({id, nombre ,role }) {
    return <div>
        <h4>{id}</h4>
        <h3>{nombre}</h3>
        <h3>{role}</h3>
        <button>Tomar 1 Rock glass</button>        
    </div>;     
};
export default Item;