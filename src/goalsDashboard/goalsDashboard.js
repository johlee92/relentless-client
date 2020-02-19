import React from 'react';
import'./goalsDashboard.css';

class GoalsDashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    //need to collect the data and sum up key results
    //count and show the # of consecutive weeks logging in and setting calls
    //show the # of goals completed in the week
    //show the # of goals completed over YTD period 
    //user should be able to interact with the KPIs

    render() {
        return (
            <div>
                <p>Consecutive Weeks</p>
                <p>Weekly Goals Completion</p>
                <p>YTD Goals Accomplishment</p> 
            </div>
        )
    }
}

export default GoalsDashboard;