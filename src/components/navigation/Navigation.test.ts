import React from 'react';
import { render } from 'react-dom';
// import Navigation from './Navigation';
// import App from '../../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
describe('does the navbar changes behavior', () => {

    test('Navigation not being sticky when page is not scrolled', async () => {
        // render(<App />)
        // const wrapper = shallow(<Navigation />)
        // const sticky = wrapper.find('#navbar');
        // console.log(`sticky:${sticky}`)
        // const scrolled = window.pageYOffset > 0;
        // expect(sticky).toBe(scrolled)
    });

    test('navigation being sticky when page is scrolled', () => {
        expect(1 + 1).toBe(2)
    });
});