import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Goals from './goals';
import { BrowserRouter } from 'react-router-dom';

describe(`Goals component`, () => {
    const props = {
        className: 'test-class-name',
        viewGoals: 'annual',
        currentGoals: {
            weeklyGoals: [],
            monthlyGoals: [],
            annualGoals: ['test']
        }
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <Goals {...props}/>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Goals component from props', () => {
        const wrapper = shallow(<Goals {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
