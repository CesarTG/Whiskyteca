import React, { useState, useEffect } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'
import licores from "../../utils/productos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getDetalle = new Promise((resolve) => {
            setTimeout(() => {
                resolve(licores)
            }, 1000);
        });
        if (id) {
            getDetalle.then(whisky => setDetalle(whisky.find(producto => producto.id === 1)));
        } else {
            getDetalle.then(whisky => setDetalle(whisky))
        }

    }, [id])
    //getDetalle.then(whisky => setDetalle(whisky)) 

    return (<>
        <ItemDetail detalle={detalle} />
    </>
    );
};
export default ItemDetailContainer;