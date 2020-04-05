import React from 'react';
import ReactDOM from 'react-dom';
// because using Enzyme to test
// need to make sure the setupTest.js file links to adapter
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoalCards from './goalCards';
import { BrowserRouter } from 'react-router-dom';

describe(`GoalCards component`, () => {
    const props = {
        className: 'test-class-name',
        goal:  {
            complete: 'test'
        },
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <GoalCards {...props}/>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the component from props', () => {
        const wrapper = shallow(<GoalCards {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
