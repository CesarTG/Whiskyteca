import React, { useState } from "react";

export const ItemCount = () => {

    const [suma, setSuma] = useState(0)
    const [resta, setResta] = useState(0)


    return <>
    <button onClick={() => setSuma (suma + 1) }>  Añadir producto </button>
    <button onClick={() => setResta (suma - 1) }>  Restar producto </button>
    <h3>{suma - resta}</h3>  
    </>
 
};

