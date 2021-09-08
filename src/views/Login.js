import {LoginWrapper} from "../styles/login";
import LoginForm from '../components/LoginForm.js'
import loginPng from '../assets/images/login/login.png'


function Login() {
  return (
    <LoginWrapper>
        <div id='login-wrapper'>
            <div className="left-wrapper">
                <img src={loginPng} alt="背景图"/>
            </div>
            <div className='right-wrapper'>
                <p>欢迎光临</p>
                <LoginForm/>
            </div>
        </div>
    </LoginWrapper>
  );
}

export default Login;
