import {setUpMedia} from './matchMedia.mock'
import { screen } from '@testing-library/react';
import Login from '../views/Login';
import LoginForm from '../components/LoginForm'
import Enzyme from './enzyme.cfg'

const { shallow } = Enzyme


// describe一个测试套件，it或者test测试用例，expect断言期望
describe('Login页面', () => {
  // 对所有测试执行前进行处理
  beforeAll(() => setUpMedia())

  let wrapper = shallow(<Login/>)
  it('当：渲染login页面时，则：页面有id名为login-wrapper的容器', () => {
    // screen.debug 能够打印出当前页面内容
    expect(wrapper.find('#login-wrapper').exists()).toBe(true)
  });

  it('当：渲染login页面时，则：页面有类名为left-wrapper的容器', () => {
    expect(wrapper.find('.left-wrapper').exists()).toBe(true)
  });

  it('当：渲染login页面时，则：页面有类名为right-wrapper的容器', () => {
    expect(wrapper.find('.right-wrapper').exists()).toBe(true)
  });

  it('当：渲染login页面时，则：页面有LoginForm组件', () => {
    expect(wrapper.find(LoginForm).exists()).toBe(true);
  })
})

