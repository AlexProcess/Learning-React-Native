import React from "react";
import "./App.css";
import { TiposBasicos } from "./Ts/TiposBasicos";
import { ObjetosLiterales } from "./Ts/ObjetosLiterales";
import { Funciones } from "./Ts/Funciones";
import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";

function App() {
    return (
        <div className="App">
            {/* <TiposBasicos /> */}
            {/* <ObjetosLiterales />
            <Funciones /> */}
            {/* <ContadorConHook /> */}
            <Login />
        </div>
    );
}

export default App;
