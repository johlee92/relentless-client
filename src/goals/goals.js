import React from 'react';
import'./goals.css';
import GoalCards from '../goalCards/goalCards';

class Goals extends React.Component {

    render() {
        let desiredGoals;

        if (this.props.viewGoals.toLowerCase() === 'annual') {
            desiredGoals = this.props.currentGoals.annualGoals;
        } else if (this.props.viewGoals.toLowerCase() === 'monthly') {
            desiredGoals = this.props.currentGoals.monthlyGoals;
        } else if (this.props.viewGoals.toLowerCase() === 'weekly') {
            desiredGoals = this.props.currentGoals.weeklyGoals;
        }

        //taking the list of goals from props, sorting them in ascending order, then map to list as cards
        const goalList = desiredGoals.sort((a,b) => a.id - b.id).map((goal) => { 
            return <GoalCards 
                goal={goal}
                viewGoals={this.props.viewGoals}
                key={`${this.props.viewGoals}: ${goal.id}`}
                changeDisplayEditGoals={this.props.changeDisplayEditGoals}
            />
        });

        return (
            <div>
                {goalList}
            </div>
        )
    }
}

export default Goals;