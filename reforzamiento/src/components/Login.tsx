export const Login = () => {
    return (
        <>
            <h3>Login</h3>

            <div className="alert alert-info">Validando...</div>

            <div className="alert alert-danger">No autenticado</div>

            <div className="alert alert-success">No autenticado</div>

            <button className="btn btn-primary">Log in</button>
            <button className="btn btn-danger">Log out</button>
        </>
    );
};
