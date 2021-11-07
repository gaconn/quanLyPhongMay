import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

import { useHistory } from "react-router-dom";
const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        userName: "",
        password: ""
    });
    const [alert, setAlert] = useState(null);
    const { loginUser } = useContext(AuthContext);
    const history = useHistory();
    const { userName, password } = loginForm;

    const onchangeLoginForm = (e) => {
        setAlert(null);
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    const login = async (event) => {
        event.preventDefault();
        try {
            const data = await loginUser(loginForm);
            if (data.success) {
                history.push("/dashboard");
            } else {
                setAlert({ info: "danger", message: data.message });
            }
        } catch (error) {}
    };
    return (
        <div className='loginContainer'>
            <div className=' loginForm'>
                <div className='login-alert'>
                    <AlertMessage type={alert} />
                </div>
                <form className='text-center d-block' onSubmit={login}>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Email</label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='userName'
                                value={userName}
                                onChange={onchangeLoginForm}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>
                            Password
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                value={password}
                                onChange={onchangeLoginForm}
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};
export default LoginForm;
