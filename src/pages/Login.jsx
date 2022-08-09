import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { setStorage, getStorage } from "../services/utils";
import { useLoginMutation } from "../services/employee";
import Button from "../components/Button"
import InputField from "../components/InputField";
import loginImg from "../assets/login-img.png";
import kvLogo from "../assets/kv logo.png"
import "../styles/Login.css"

const Login = () => {
    const [ login, {isLoading: loginLoading} ] = useLoginMutation();
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        username: '',
        password: ''
    });

    const onChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleClick = async () => {
        const res = await login(user);
        if(!res.error && res.data){
            const idToken = res.data.data.idToken;
            setStorage("idToken", idToken);
            navigate('/list')
        }
        else {
            alert("Invalid credentials")
        }
    }

    return(
        <>
            <div className="flex-col-2-container">
                <div className="flex-col-2-el">
                    <img src={loginImg}/>
                </div>
                <div className="flex-col-2-el">
                    <img src={kvLogo} />
                    <InputField 
                        // label="Username"
                        value={user.username}
                        placeHolder='Username'
                        field='username'
                        className='login-input-field'
                        onChange={onChange}
                    />
                    <InputField 
                        // label="Password"
                        value={user.password}
                        placeHolder='Password'
                        field='password'
                        className='login-input-field'
                        onChange={onChange}
                    />
                    <Button
                        label="login" 
                        className='btn-login'
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </>
    )
}

export default Login;