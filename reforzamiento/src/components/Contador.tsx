import React, { useState } from "react";

export const Contador = () => {
    const [value, setValue] = useState(0);

    const acumular = (numero: number) => {
        setValue(value + numero);
    };

    return (
        <>
            <h3>
                Contador <small> {value} </small>
            </h3>
            <button onClick={() => acumular(1)} className="btn btn-primary">
                +1
            </button>
            &nbsp;
            <button onClick={() => acumular(-1)} className="btn btn-primary">
                -1
            </button>
        </>
    );
};
