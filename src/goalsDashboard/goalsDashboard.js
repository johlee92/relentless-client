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
            <div className="dashboard">
                <div className="dashboard-cards">
                    Consecutive Weeks: 5
                </div>
                <div className="dashboard-cards">
                    Weekly Goals Completion: 1/3
                </div>
                <div className="dashboard-cards">
                    YTD Accomplishment: 23/45
                </div> 
            </div>
        )
    }
}

export default GoalsDashboard;