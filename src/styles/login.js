import styled from 'styled-components'
export const LoginWrapper = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   background: linear-gradient(0deg, #5080f5, #89b6d5);
    #login-wrapper {
        position: absolute;
        width: 1024px;
        height: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #FFFFFF;
        border-radius: 20px;
        .left-wrapper {
            width: 48%;
            height: 100%;
            float: left;
            >img {
                width: 100%;
                height: 100%;
                border-radius: 20px 0 0 20px;
            }
        }
        .right-wrapper {
            width: calc(52% - 120px);
            display: inline-block;
            height: calc(100% -40px);
            padding: 20px 60px;
            >p {
                font-size: 30px;
                color: #5080f5;
                line-height: 49px;
                text-align: left;
            }
            .login-form {
                
            }
        }
    }
`
