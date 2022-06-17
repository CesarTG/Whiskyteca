import React from "react";


export const ItemList = () => {

    [{ nombre: "Blenders", precio: 800 },
    { nombre: "Criadores", precio: 700 },
    { nombre: "OldSmugler", precio: 900 }]

    return <div>
        {ItemList.map(licor => {
            return <div>
                <h2>{licor.nombre}</h2>
            </div>
        })}
    </div>

};

