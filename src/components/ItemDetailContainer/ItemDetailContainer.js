import React, { useState, useEffect } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'
import licores from "../../utils/productos";


/* const doblev = [
    {
        id: 4,
        nombre: "DOBLE-V",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_833044-MLA30548552299_052019-O.jpg",
        descripcion: "Mejor conocido por nosotros como WD-40, si!, como el aceite, porque sabe a rayos pero te deja la garganta lubricada, aunque suene turbio."
    },
    {
        id: 2,
        nombre: "Criadores",
        role: "Fuerte",
        imagen: "https://elparaisodelvinardo.com.ar/wp-content/uploads/2021/07/CRIADORES.jpg"
    },
    {
        id: 3,
        nombre: "Tocornal",
        role: "Muy suave",
        imagen: "https://www.grupoelnene.com.ar/4176/vino-tocornal-tinto-1125cc.jpg"
    },
] */

export const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([]);

    useEffect(() => {
        const getDetalle = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([licores])
            }, 2000);
        })
        getDetalle.then(whisky => setDetalle(whisky))
    }, [])

    return (<>
    
        <ItemDetail detalle={detalle} />
    </>
    );
};
export default ItemDetailContainer;