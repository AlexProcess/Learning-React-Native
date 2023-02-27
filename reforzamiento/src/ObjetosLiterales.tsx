import React from "react";

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: number;
    casaNo: number;
}

export const ObjetosLiterales = () => {
    const persona = {
        nombreCompleto: "alex",
        edad: 35,
        direccion: {
            pais: "Spain",
            numero: "33",
        },
    };

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre> {JSON.stringify(persona, null, 2)} </pre>
            </code>
        </>
    );
};
