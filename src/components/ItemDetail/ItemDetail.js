import React, { useState } from "react";
import '../ItemDetail/ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from "react-router-dom"

export const ItemDetail = ({ detalle }) => {

    const [cesta, setCesta] = useState(false);

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} botellas`)
        setCesta(true);
    }

    return (<div className="item-contDetail">
        <h2>{`${detalle.id}`}</h2>
        <h2 className="h2-ID">{`${detalle.nombre}`}</h2>        
        <img className="img-ID" src={`${detalle.imagen}`} alt="Botella de whisky " />
        <p className="p-itemDetail">{`${detalle.role}`}</p>
        <>
            {
                cesta
                    ? <Link to="/carrito">Embriagarme con esto ya!</Link>
                    : <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            };
        </>
        <Link to="/">Volver a la sobriedad!</Link>
    </div>
    );
};
export default ItemDetail;