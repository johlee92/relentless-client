import React from 'react';
import'./goalsDashboard.css';

class GoalsDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    //need to collect the data and sum up key results
    //count and show the # of consecutive weeks logging in and setting calls
    //dropped the consecutive weeks functionality. need to talk to mentor about it.
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
    //show the user how many goals have been set for the current period
    currentGoalsMissing = () => {
        let weeklyGoalsMissing = Math.max(3 - (this.props.currentGoals.weeklyGoals.length),0);
        let monthlyGoalsMissing = Math.max(3 - (this.props.currentGoals.monthlyGoals.length),0);

        if (weeklyGoalsMissing > 0 && monthlyGoalsMissing > 0) {
            return `Please add ${monthlyGoalsMissing} monthly goals and ${weeklyGoalsMissing} weekly goals`;
        } else if (monthlyGoalsMissing > 0) {
            return `Please add ${monthlyGoalsMissing} monthly goals`;
        } else if (weeklyGoalsMissing > 0) {
            return `Please add ${weeklyGoalsMissing} weekly goals`;
        }
    }
    //user should be able to interact with the KPIs

    render() {
        return (
            <span>
                <div className="dashboard">
                    <div>
                        {this.currentGoalsMissing()}
                    </div> 
                </div>
                <div className="dashboard">
                    <div className="dashboard-cards">
                        Weekly Goals Completion: {this.weeklyCompletion(this.props.currentWeekGoals)}
                    </div>
                    <div className="dashboard-cards">
                        YTD Accomplishment: {this.ytdCompletion(this.props.annual_goals, this.props.monthly_goals, this.props.weekly_goals)}
                    </div> 
                </div>
            </span>
        )
    }
}

export default GoalsDashboard;