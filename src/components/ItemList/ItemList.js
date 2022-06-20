import React from "react";
import Item from "../Item/Item";

function ItemList({ productos }) {
    return (
        productos.map(p =>
            <Item key={p.id} nombre={p.nombre} role={p.role} />))
}

export default ItemList;