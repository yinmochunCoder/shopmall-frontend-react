import Enzyme from './enzyme.cfg'
import {setUpMedia} from "./matchMedia.mock";
import Register from '../views/Register'
import {RegisterForm} from "../styles/register";


const {shallow} = Enzyme

describe('注册页面',() => {
    let wrapper = shallow(<Register/>)
    test('当：进入注册页面时，会渲染RegisterForm的表单', () => {
        expect(wrapper.last()).toEqual('register')
    })
})
