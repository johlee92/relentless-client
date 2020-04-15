import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoalsNav from './goalsNav';
import { BrowserRouter } from 'react-router-dom';

describe(`GoalsNav component`, () => {
    const props = {
        className: 'test-class-name'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <GoalsNav />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component by default', () => {
        const wrapper = shallow(<GoalsNav />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the component from props', () => {
        const wrapper = shallow(<GoalsNav {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
