import React from 'react';
import'./goals.css';
import GoalCards from '../goalCards/goalCards';

class Goals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const goalList = this.props.currentGoals.map((goal) => {
            return <GoalCards 
                goal={goal}
                viewGoals={this.props.viewGoals}
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