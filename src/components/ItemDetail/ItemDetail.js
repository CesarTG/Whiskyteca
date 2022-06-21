import React from "react";
import '../ItemDetail/ItemDetail.css'

export const ItemDetail = ({detalle}) => {

    return (<div className="item-contDetail">
        <h2 className="h2-ID">{detalle.nombre}</h2>
        <img className="img-ID" src={detalle.imagen} alt="Botella de whisky DOBLE-V"/>
        <p className="p-itemDetail">{detalle.descripcion}</p>        
    </div>

    );

};
export default ItemDetail;