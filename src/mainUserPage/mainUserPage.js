import React from 'react';
import'./mainUserPage.css';
import PageNav from '../nav/pageNav';
import GoalsDashboard from '../goalsDashboard/goalsDashboard';
import GoalsNav from '../goalsNav/goalsNav';
import Goals from '../goals/goals';
import PageFooter from '../footer/pageFooter';

class MainUserPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <PageNav/>
                <GoalsDashboard/>
                <GoalsNav/>
                <Goals/>
                <PageFooter/>
            </div>
        )
    }
}

export default MainUserPage;