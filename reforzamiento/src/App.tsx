import React from "react";
import "./App.css";
import { TiposBasicos } from "./Ts/TiposBasicos";
import { ObjetosLiterales } from "./Ts/ObjetosLiterales";
import { Funciones } from "./Ts/Funciones";

function App() {
    return (
        <div className="App">
            {/* <TiposBasicos /> */}
            <ObjetosLiterales />
            <Funciones />
        </div>
    );
}

export default App;
