import React from "react";
import { useEffect } from "react";
import { reqResApi } from "../api/reqResApi";

export const Usuarios = () => {
    useEffect(() => {
        // llamar al API
        reqResApi
            .get("/users")
            .then((resp) => {
                console.log(resp.data.data);
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
