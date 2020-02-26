import React from 'react';
import'./goals.css';
import GoalCards from '../goalCards/goalCards';

class Goals extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const goalList = this.props.currentGoals.map((goal) => {
            return <GoalCards goal={goal}/>
        });

        return (
            <div>
                {goalList}
            </div>
        )
    }
}

export default Goals;