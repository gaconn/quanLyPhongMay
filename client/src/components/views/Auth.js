import LoginForm from "../Auth/LoginForm";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router";
import { Spinner } from "react-bootstrap";

const Auth = ({ auth }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext);
    let body;
    if (authLoading) {
        body = (
            <div className='d-flex justify-content-center'>
                <Spinner animation='border' />
            </div>
        );
    } else if (isAuthenticated) return <Redirect to='/dashboard' />;
    else body = <>{auth === "login" && <LoginForm />}</>;
    return body;
};
export default Auth;
