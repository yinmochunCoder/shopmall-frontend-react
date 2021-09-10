import {RegisterWrapper, RegisterForm} from "../styles/register";
function Register() {
    function onFinish() {

    }


    return(
        <RegisterWrapper>
            <RegisterForm
                name='register'
                onFinish={onFinish}
            >
            </RegisterForm>
        </RegisterWrapper>
    )
}
export default Register
