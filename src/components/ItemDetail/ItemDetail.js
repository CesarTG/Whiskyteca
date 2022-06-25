import React from "react";
import '../ItemDetail/ItemDetail.css'
import { Link } from "react-router-dom"
import licores from "../../utils/productos";


export const ItemDetail = ({ detalle }) => {

    return (<div className="item-contDetail">
        <h2>{`${licores.id}`}---id----</h2>
        <h2 className="h2-ID">{`${licores.nombre}`}----nombre----</h2>
        <img className="img-ID" src={`${licores.imagen}`} alt="Botella de whisky "/>
        <p className="p-itemDetail">{`${licores.role}`}----role---</p>
        <Link to="/">Volver a la sobriedad!</Link>            
    </div>

    );

};
export default ItemDetail;