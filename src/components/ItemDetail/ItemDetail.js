import React from "react";

export const ItemDetail = ({detalle}) => {

    return (<div>
        <h2>{detalle.nombre}</h2>
        <img src={detalle.imagen} alt="Botella de whisky DOBLE-V"/>
        <p>{detalle.descripcion}</p>        
    </div>

    );

};
export default ItemDetail;