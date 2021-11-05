import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { history } from "react-router-dom";
const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });
    const { loginUser } = useContext(AuthContext);
    const { username, password } = loginForm;
    const onchangeLoginForm = (e) =>
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    const login = async (event) => {
        event.preventDefault();
        try {
            const data = await loginUser(loginForm);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='loginContainer'>
            <div className=' loginForm'>
                <form className='text-center d-block' onSubmit={login}>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Email</label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='username'
                                value={username}
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
