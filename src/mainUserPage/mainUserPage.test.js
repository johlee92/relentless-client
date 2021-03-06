import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainUserPage from './mainUserPage';
import { BrowserRouter } from 'react-router-dom';

describe(`MainUserPage component`, () => {
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
                <MainUserPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component by default', () => {
        const wrapper = shallow(<MainUserPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the component with props', () => {
        const wrapper = shallow(<MainUserPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
