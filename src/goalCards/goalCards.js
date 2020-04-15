import React from 'react';
import'./goalCards.css';
import config from '../config';
import GoalsContext from '../GoalsContext';

class GoalCards extends React.Component {
    constructor(props) {
        super(props);
    }

    // check this to make sure I don't need it
    static contextType = GoalsContext;
    componentDidMount() {
        // console.log(this.context);
        // console.log(this.context.goalsFetch);
    }

    statusChange = () => {
        const url = `${config.API_ENDPOINT}`;
        let newGoalComplete = {
            //why must I convert the option into a string for this to work?
            complete: `${!(this.props.goal.complete)}`
        }
        // console.log(JSON.stringify(newGoalComplete))

        const options = {
            method: 'PATCH',
            body: JSON.stringify(newGoalComplete),
            headers: {
                "Content-Type": "application/json"
            }
        };

        if(this.props.viewGoals.toLowerCase() === 'annual') {
            fetch(url + '/api/annualGoals/' + `${this.props.goal.id}`, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later.');
                    }
                return res;
                })
                .then(res => {
                    this.context.goalsFetch();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                });
            });
        }
        
        if(this.props.viewGoals.toLowerCase() === 'monthly') {
            fetch(url + '/api/monthlyGoals/' + `${this.props.goal.id}`, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later.');
                    }
                return res;
                })
                .then(res => {
                    this.context.goalsFetch();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                });
            });
        }

        if(this.props.viewGoals.toLowerCase() === 'weekly') {
            fetch(url + '/api/weeklyGoals/' + `${this.props.goal.id}`, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later.');
                    }
                return res;
                })
                .then(res => {
                    this.context.goalsFetch();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                });
            });
        }
    }

    render() {
        let statusGoal = 'Incomplete';
        // need to talk to mentor about why the below code doesn't work
        // const completeString = this.props.goal.complete;
        // console.log(typeof completeString); // this returns 'string'
        // console.log(completeString.toLowerCase()); // why doesn't this work?
        // console.log(this.props.goal.complete);
        // console.log(this.props.goal.complete.toLowerCase());
        if (this.props.goal.complete) {
            statusGoal = 'Complete'
        }

        return (
            <div className="goal-cards">
                <p>{this.props.goal.content}</p>
                <div>
                    <button className="goal-cards" onClick={this.statusChange}>Status: {statusGoal}</button>
                    <button className="goal-cards" onClick={() => this.props.changeDisplayEditGoals(this.props.goal.id)}>Edit</button>
                </div>
            </div>
        )
    }
}

export default GoalCards;