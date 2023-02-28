import React from "react";
import "./App.css";
import { TiposBasicos } from "./Ts/TiposBasicos";
import { ObjetosLiterales } from "./Ts/ObjetosLiterales";
import { Funciones } from "./Ts/Funciones";
import { Contador } from "./components/Contador";

function App() {
    return (
        <div className="App">
            {/* <TiposBasicos /> */}
            {/* <ObjetosLiterales />
            <Funciones /> */}
            <Contador />
        </div>
    );
}

export default App;
