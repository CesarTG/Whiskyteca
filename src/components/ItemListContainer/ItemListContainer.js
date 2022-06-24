import React, { useEffect, useState } from "react";
import licores from "../../utils/productos";
import promesa from "../../utils/promises";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom"


export const ItemL = (props) => {

    const {texto} = props;   
    return <section>
        <Textual parrafo={texto}/>       
    </section>
}

const Textual = (props) => {

    return<>
    <h2>{ props.parrafo}</h2>       
    </>
}; 

//----------------------------promise
export function ItemListContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        promesa(2000, licores)
            .then(respuesta => setProductos(respuesta))
    }, [productos])

    return (
    <>
    <ItemList productos={productos} />
    <Link to="/carrito">Ir a la cesta de compras!.</Link>
    <Link to="/whiskys">Ir a los brebajes!</Link>      
    </>
    );
};

export default ItemListContainer;
