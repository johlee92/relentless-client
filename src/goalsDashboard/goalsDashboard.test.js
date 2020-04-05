import React from 'react';
import ReactDOM from 'react-dom';
// because using Enzyme to test
// need to make sure the setupTest.js file links to adapter
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoalsDashboard from './goalsDashboard';
import { BrowserRouter } from 'react-router-dom';
import dummyGoals from '../dummyGoals'

describe.only(`GoalsDashboard component`, () => {
    const props = {
        className: 'test-class-name',
        viewGoals: 'annual',
        currentWeekGoals: dummyGoals.weekly_goals,
        currentGoals: {
            weeklyGoals: dummyGoals.weekly_goals,
            monthlyGoals: dummyGoals.monthly_goals,
            annualGoals: dummyGoals.annual_goals
        },
        annual_goals: dummyGoals.annual_goals,
        monthly_goals: dummyGoals.monthly_goals,
        weekly_goals: dummyGoals.weekly_goals
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter> 
                <GoalsDashboard {...props}/>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component from props', () => {
        const wrapper = shallow(<GoalsDashboard {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
