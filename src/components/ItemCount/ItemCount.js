import React, { useState } from "react";

export const ItemCount = ({stock,initial}) => {

    const [total, setSuma] = useState(initial)    

    return <>
    <button disabled={total>=stock} onClick={() => setSuma (total +1) }>  Añadir whisky</button>
    <button disabled={total<=0} onClick={() => setSuma (total -1) }>  Restar botellas </button>
    <h3>{total}</h3>  
    </> 
};

