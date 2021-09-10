import styled from 'styled-components'
import {Form} from "antd";
// 注册页面wrapper
export const RegisterWrapper = styled.div`
    height: 100%;
    background: #fafafa;
    position: relative;
`

// 注册表单，styled覆盖antd组件Form样式
export const RegisterForm = styled(Form)`
    background: #FFFFFF;
    width: 600px;
    height: 1000px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #efefef;
`
