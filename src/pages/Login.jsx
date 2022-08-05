import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/list')
    }

    return(
        <>
            <Button
                label="login" 
                handleClick={handleClick}
            />
        </>
    )
}

export default Login;