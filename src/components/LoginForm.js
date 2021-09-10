import { Form, Input, Button } from "antd";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import {login} from '../api/login-api'


const FormWrapper = styled(Form)`
    margin-top: 104px;
`
const FormWrapperInput = styled(Form.Item)`
    color: #909399;
    width: 100%;
    input {
        width: 100%;
        display: inline-block;
        line-height: 48px;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #c9c9c9;
        padding: 0 10px;
    }
    #pwd { margin-top: 24px; }
    .login-form-button {
        margin-top: 48px;
        width: 100%;
        height: 48px;
        background: #5080f5 !important;
        border-radius: 30px;
        padding: 0;
        border: 0;
        font-size: 16px !important;
        cursor: pointer;
        color: #FFFFFF;
    }
    .register-link {
        display: inline-block;
        margin-top: 10px;
        width:100%;
        text-align: right;
        color: #5080f5;
        font-size: 22px;
        transform: scale(0.5);
        cursor: pointer;
    }
`


function LoginForm() {
    let history = useHistory();
    async function onFinish(values) {
        let params = {
            ...values
        }
        let res = await login(params)
        console.log(res)
    }
    // 跳转到注册页面
    function goRegister() {
        history.push("/register")
    }
    return(
        <FormWrapper
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <FormWrapperInput
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input placeholder="请输入用户名" />
            </FormWrapperInput>
            <FormWrapperInput
                name="password"
                rules={[{ required: true, message: '请输入用户密码!' }]}>
                <Input type="password" placeholder="请输入用户密码" id='pwd'/>
            </FormWrapperInput>
            <FormWrapperInput>
                <Button type="primary" htmlType="submit" className="login-form-button">
                   登录
                </Button>
                <span onClick={goRegister} className="register-link">快速注册</span>
            </FormWrapperInput>
        </FormWrapper>
    )
}
export default LoginForm
