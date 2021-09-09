import {setUpMedia} from "./matchMedia.mock";
import LoginForm from '../components/LoginForm'
import Enzyme from './enzyme.cfg'

const { shallow } = Enzyme

describe('登录表单组件LoginForm', () => {
    beforeAll(() => setUpMedia())

    let wrapper = shallow(<LoginForm/>)
    it('当：渲染login页面时，则：页面有类名为login-form-button的容器', () => {
        expect(wrapper.find('.login-form-button').exists()).toBe(true)
    });
})

