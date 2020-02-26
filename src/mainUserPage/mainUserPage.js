import React from 'react';
import'./mainUserPage.css';
import PageNav from '../nav/pageNav';
import GoalsDashboard from '../goalsDashboard/goalsDashboard';
import GoalsNav from '../goalsNav/goalsNav';
import Goals from '../goals/goals';
import PageFooter from '../footer/pageFooter';
import moment from 'moment';

//import dummy data into the main user page
import dummyGoals from '../dummyGoals';

class MainUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annual_goals: dummyGoals.annual_goals,
            monthly_goals: dummyGoals.monthly_goals,
            weekly_goals: dummyGoals.weekly_goals,
            //returns the current week number
            weekNum: 0,
            viewGoals: 'Weekly'
        }
    }

    componentDidMount() {
        const thisWeekNum = moment().week();
        this.setState({
            weekNum: thisWeekNum
        })
        // fake date loading from API call
    }

    changeWeekNum = (event) => {
        const num = parseInt(event.target.getAttribute('value'),10);
        this.setState({
            weekNum: num
        })
    }

    changeViewGoals = (event) => {
        const newViewGoals = event.target.getAttribute('value');
        this.setState({
            viewGoals: newViewGoals
        })
        // discuss with mentor, appears to be some lag in updating the state
        // console.log(this.state.viewGoals)
    }

    render() {
        const {annual_goals, monthly_goals, weekly_goals, weekNum} = this.state;
        let currentGoals;
        if (this.state.viewGoals.toLowerCase() === 'weekly') {
            currentGoals = weekly_goals;
        } else if (this.state.viewGoals.toLowerCase() === 'monthly') {
            currentGoals = monthly_goals;
        } else {
            currentGoals = annual_goals;
        }

        return (
            <div>
                <PageNav/>
                <GoalsDashboard/>
                <GoalsNav
                    weekNum={weekNum}
                    changeWeekNum={this.changeWeekNum}
                    changeViewGoals={this.changeViewGoals}
                />
                <Goals
                    currentGoals={currentGoals}
                />
                <PageFooter/>
            </div>
        )
    }
}

export default MainUserPage;