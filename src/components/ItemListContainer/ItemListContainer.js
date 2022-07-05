import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import licores from "../../utils/productos";
import ItemList from "../ItemList/ItemList";

export const ItemL = (props) => {

    const { texto } = props;
    return <section>
        <Textual parrafo={texto} />
    </section>
}

const Textual = (props) => {

    return <>
        <h2>{props.parrafo}</h2>
    </>
};

//----------------------------promise
export function ItemListContainer() {

    const [productos, setProductos] = useState([])

    const { sabor } = useParams();

    useEffect(() => {
        const getProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(licores)
            }, 1000);
        });
        if (sabor) {
            getProductos.then(respuesta => setProductos(respuesta.filter(sabe => sabe.sabor === sabor)));
        } else {
            getProductos.then(respuesta => setProductos(respuesta))
        }

    }, [sabor])

    return (
        <>
            <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
