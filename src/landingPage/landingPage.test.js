import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from './landingPage';
import { BrowserRouter } from 'react-router-dom';

describe(`LandingPage component`, () => {
    const props = {
        className: 'test-class-name',
        match: {
            path: '/'
        }
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <LandingPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component by default', () => {
        const wrapper = shallow(<LandingPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the component from props', () => {
        const wrapper = shallow(<LandingPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
