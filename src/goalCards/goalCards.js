import React from 'react';
import'./goalCards.css';

class GoalCards extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    render() {
        let statusGoal = 'Incomplete';
        if (this.props.goal.complete.toLowerCase() === 'true') {
            statusGoal = 'Complete'
        }

        return (
            <div className="goal-cards">
                {this.props.goal.content}
                <div>
                    <button>Status: {statusGoal}</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}

export default GoalCards;