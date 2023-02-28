import React, { useState } from "react";
import { useCounter } from "../Hooks/useCounter";

export const ContadorConHook = () => {
    const { value, acumular } = useCounter(100);
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
