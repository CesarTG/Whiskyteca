import React, { useState, useEffect } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'


const doblev = { id: 7, nombre: "DOBLE-V", imagen: "https://http2.mlstatic.com/D_NQ_NP_833044-MLA30548552299_052019-O.jpg", descripcion: "Mejor conocido por nosotros como WD-40, si!, como el aceite, porque sabe a rayos pero te deja la garganta lubricada, aunque suene turbio." }

export const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({});

    useEffect(() => {
        const getDetalle = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(doblev)
            }, 3000);
        })
        getDetalle.then(whisky => setDetalle(whisky))
    }, [])

    return (<>
        <ItemDetail detalle={detalle} />        
    </>
    );
};
export default ItemDetailContainer;