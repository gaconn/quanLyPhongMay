import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext);

    if (authLoading)
        return (
            <div className='d-flex justify-content-center'>
                <Spinner animation='border' variant='info' />
            </div>
        );
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <>
                        <Component {...rest} {...props} />
                    </>
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    );
};

export default ProtectedRoute;
