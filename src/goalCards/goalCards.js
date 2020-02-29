import React from 'react';
import'./goalCards.css';
import config from '../config';

class GoalCards extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    // static contextType = GoalsContext;

    statusChange = () => {
        const url = `${config.API_ENDPOINT}`;
        let newGoalComplete = {
            complete: !(this.props.goal.complete)
        }

        const options = {
            method: 'PATCH',
            body: JSON.stringify(newGoalComplete),
            headers: {
                "Content-Type": "application/json"
            }
        };

        if(this.props.viewGoals === 'annual') {
            fetch(url + '/api/annualGoals/' + `${this.props.goal.id}`, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later.');
                    }
                return res;
                })
                .then(res => res.json())
                .then(data => {
                    console.log('data updated');
                    this.context.goalsFetch();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                });
            });
        }
        
        if(this.props.viewGoals === 'monthly') {
            fetch(url + '/api/monthlyGoals/' + `${this.props.goal.id}`, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later.');
                    }
                return res;
                })
                .then(res => res.json())
                .then(data => {
                    this.context.goalsFetch();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                });
            });
        }

        if(this.props.viewGoals === 'weekly') {
            fetch(url + '/api/weeklyGoals/' + `${this.props.goal.id}`, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later.');
                    }
                return res;
                })
                .then(res => res.json())
                .then(data => {
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
        if (this.props.goal.complete) {
            statusGoal = 'Complete'
        }

        return (
            <div className="goal-cards">
                {this.props.goal.content}
                <div>
                    <button onClick={this.statusChange}>Status: {statusGoal}</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}

export default GoalCards;