import React from 'react';
import'./goalsDashboard.css';

class GoalsDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    //need to collect the data and sum up key results
    //count and show the # of consecutive weeks logging in and setting calls
    //show the # of goals completed in the week
    weeklyCompletion = (listWeeklyGoals) => {
        const totalNumWeekGoals = listWeeklyGoals.length;
        let completedWeekGoals = (listWeeklyGoals.filter(goal => (goal.complete))).length; 
        return `${completedWeekGoals}/${totalNumWeekGoals}`
    }
    //show the # of goals completed over YTD period
    ytdCompletion = (annualGoals, monthlyGoals, weeklyGoals) => {
        let totalNumGoals = annualGoals.length + monthlyGoals.length + weeklyGoals.length;
        let completedNumGoals = 
            (annualGoals.filter(goal => (goal.complete))).length +
            (monthlyGoals.filter(goal => (goal.complete))).length +
            (weeklyGoals.filter(goal => (goal.complete))).length;
        return `${completedNumGoals}/${totalNumGoals}`
    }
    //user should be able to interact with the KPIs

    //dropped the consecutive weeks functionality. need to talk to mentor about it.

    render() {
        return (
            <div className="dashboard">
                {/* <div className="dashboard-cards">
                    Consecutive Weeks: 5
                </div> */}
                <div className="dashboard-cards">
                    Weekly Goals Completion: {this.weeklyCompletion(this.props.currentWeekGoals)}
                </div>
                <div className="dashboard-cards">
                    YTD Accomplishment: {this.ytdCompletion(this.props.annual_goals, this.props.monthly_goals, this.props.weekly_goals)}
                </div> 
            </div>
        )
    }
}

export default GoalsDashboard;