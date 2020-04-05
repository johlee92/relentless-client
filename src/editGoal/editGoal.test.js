import React from 'react';
import ReactDOM from 'react-dom';
// because using Enzyme to test
// need to make sure the setupTest.js file links to adapter
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditGoal from './editGoal';
import { BrowserRouter } from 'react-router-dom';

describe(`EditGoal component`, () => {
    const props = {
        className: 'test-class-name',
        viewGoals: 'test-view-goals'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <EditGoal {...props}/>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component from props', () => {
        const wrapper = shallow(<EditGoal {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
