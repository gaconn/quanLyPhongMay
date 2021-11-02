import LoginForm from "../Auth/LoginForm";

const Auth = ({ auth }) => {
    return <>{auth === "login" && <LoginForm />}</>;
};
export default Auth;
