import React from 'react';
import'./goalCards.css';

class GoalCards extends React.Component {
    constructor(props) {
        super(props);
    }

    statusChange = () => {
        
    }


    render() {
        let statusGoal = 'Incomplete';
        // need to talk to mentor about why the below code doesn't work
        // const completeString = this.props.goal.complete;
        // console.log(typeof completeString); // this returns 'string'
        // console.log(completeString.toLowerCase()); // why doesn't this work?
        if (this.props.goal.complete === 'true') {
            statusGoal = 'Complete'
        }

        return (
            <div className="goal-cards">
                {this.props.goal.content}
                <div>
                    <button >Status: {statusGoal}</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}

export default GoalCards;