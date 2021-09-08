import styled from 'styled-components'
import {Button} from 'antd'
const HomeWrapper = styled.div`
    .homePage {
        color: green;
    }
    .antB {
         width: 100px;
         height: 40px;
         border-radius: 3px;
         outline: none;
         border: none;
         cursor: pointer;
         background: red;
         color: #fff;
    }
`
function home() {
    return (
        <HomeWrapper>
            <div className="homePage">
                <header>首页</header>
                <Button className='antB'>1212</Button>
            </div>
        </HomeWrapper>
    )
}

export default home
