import React, { useState, useEffect } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'
import licores from "../../utils/productos";

export const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([]);

    useEffect(() => {
        const getDetalle = new Promise((resolve) => {
            setTimeout(() => {
                resolve(licores)
            }, 1000);
        })
        getDetalle.then(whisky => setDetalle(whisky))
    }, [])  

    return (<>    
        <ItemDetail detalle={detalle} />
    </>
    );
};
export default ItemDetailContainer;