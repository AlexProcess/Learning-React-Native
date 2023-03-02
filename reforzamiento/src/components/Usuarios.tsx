import { renderHook } from "@testing-library/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { reqResApi } from "../api/reqResApi";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        // llamar al API
        reqResApi
            .get<ReqResListado>("/users")
            .then((resp) => {
                console.log(resp.data.data);
                setUsuarios(resp.data.data);
            })
            .catch(console.log);
    }, []);

    const renderItem = ({
        id,
        first_name,
        last_name,
        email,
        avatar,
    }: Usuario) => {
        return (
            <>
                <tr key={id.toString()}>
                    <td>
                        <img
                            src={avatar}
                            alt={first_name}
                            style={{
                                width: 50,
                                borderRadius: 100,
                            }}
                        ></img>
                    </td>
                    <td>
                        {first_name} {last_name}
                    </td>
                    <td>{email}</td>
                </tr>
            </>
        );
    };
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
                <tbody> {usuarios.map(renderItem)} </tbody>
            </table>
        </>
    );
};
