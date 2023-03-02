import React, { useState } from "react";
import { useEffect } from "react";
import { reqResApi } from "../api/reqResApi";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
    const [usuario, setUsuarios] = useState<Usuario>([]);

    useEffect(() => {
        // llamar al API
        reqResApi
            .get<ReqResListado>("/users")
            .then((resp) => {
                console.log(resp.data.data[0].last_name);
            })
            .catch(console.log);
    }, []);

    return (
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
};
