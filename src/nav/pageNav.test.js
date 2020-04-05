import React from 'react';
import ReactDOM from 'react-dom';
// because using Enzyme to test
// need to make sure the setupTest.js file links to adapter
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageNav from './pageNav';
import { BrowserRouter } from 'react-router-dom';

describe(`PageNav component`, () => {
    const props = {
        className: 'test-class-name'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <PageNav />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component by default', () => {
        const wrapper = shallow(<PageNav />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the component from props', () => {
        const wrapper = shallow(<PageNav {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
