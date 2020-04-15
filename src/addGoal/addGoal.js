import React, { Component } from  'react';
import './addGoal.css';
import config from '../config';
import GoalsContext from '../GoalsContext';
import moment from 'moment';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            errorMessage: '',
        }
    }

    static contextType = GoalsContext;

    contentChange = (content) => {
        this.setState({
            content,
            errorDisplay: 'none'
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {content} = this.state;
        let newGoal;

        if(!e.target.getAttribute("id") && this.props.viewGoals.toLowerCase() === 'monthly') {
            newGoal = {
                content: content,
                //gets the value from the Select form
                annual_goal: e.target.associated_goal.value,
                date_created: moment(new Date(this.props.yearNum, 0, 1, 0, 0, 0)).add(this.props.weekNum - 1, 'weeks').format()
            }
        } else if(!e.target.getAttribute("id") && this.props.viewGoals.toLowerCase() === 'weekly') {
            newGoal = {
                content: content,
                //gets the value from the Select form
                monthly_goal: e.target.associated_goal.value,
                date_created: moment(new Date(this.props.yearNum, 0, 1, 0, 0, 0)).add(this.props.weekNum - 1, 'weeks').format()
            }
        } else {
            newGoal = {
                content: content,
                date_created: moment(new Date(this.props.yearNum, 0, 1, 0, 0, 0)).add(this.props.weekNum - 1, 'weeks').format()
            };
        }

        const url = `${config.API_ENDPOINT}`;
  
        // correcting for where user enters less than 1 character 
        if (!(content.length>1)) {
            this.setState({
                errorDisplay: 'block',
                errorMessage: 'Content must be longer than 1 character'
            })
            return;
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(newGoal),
            headers: {
                "Content-Type": "application/json"
            }
        };

        if(this.props.viewGoals.toLowerCase() === 'annual') {
            fetch(url + '/api/annualGoals/', options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        content: ''
                    });
                    this.context.goalsFetch();
                    this.props.changeDisplayAddGoals();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                    });
                });
        }

        if(this.props.viewGoals.toLowerCase() === 'monthly') {
            
            fetch(url + '/api/monthlyGoals/', options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        content: ''
                    });
                    this.context.goalsFetch();
                    this.props.changeDisplayAddGoals();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                    });
                });
        }

        if(this.props.viewGoals.toLowerCase() === 'weekly') {
            fetch(url + '/api/weeklyGoals/', options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        content: ''
                    });
                    this.context.goalsFetch();
                    this.props.changeDisplayAddGoals();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                    });
                });
        }
    }

    parentGoalSelection() {
        if(this.props.viewGoals.toLowerCase() === 'annual') {
            return (
                <span>
                    <h2>Add Annual Goal</h2>
                    <form className="addGoal__form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="content">New Goal:</label>
                    <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
                    <div className="addGoals__buttons">
                        <button className="addGoals" onClick={this.props.changeDisplayAddGoals}>Cancel</button>
                        <button className="addGoals" type="submit" >Save</button>
                        <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>
                    </div>  
                    </form>
                </span>
            );
        }

        if(this.props.viewGoals.toLowerCase() === 'monthly') {
            if(this.props.currentGoals.annualGoals.length === 0) {
                return  (
                    <span>
                        Please add annual goals
                    </span>
                )
            }

            let associatedGoalsOptions = this.props.currentGoals.annualGoals.map((goal) => {
                return (                    
                    <option value={goal.id} id={goal.id}>{goal.content}</option>    
                )
            })
            
            return  (
                <span>
                    <h2>Add Monthly Goal</h2>
                    <form className="addGoal__form" onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="content">New Goal:</label>
                        <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
                        <label htmlFor="associated_goal">Associated Annual Goal:</label>
                        <select name="associated_goal" id="associated_goal">
                            {associatedGoalsOptions}
                        </select>
                        <div className="addGoals__buttons">
                            <button className="addGoals" onClick={this.props.changeDisplayAddGoals}>Cancel</button>
                            <button className="addGoals" type="submit" >Save</button>
                            <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>
                        </div>  
                    </form>
                </span>
            )
        }

        if(this.props.viewGoals.toLowerCase() === 'weekly') {
            if(this.props.currentGoals.monthlyGoals.length === 0) {
                return  (
                    <span>
                        Please add this month's goals
                    </span>
                )
            }

            let associatedGoalsOptions = this.props.currentGoals.monthlyGoals.map((goal) => {
                return (                    
                    <option value={goal.id} id={goal.id}>{goal.content}</option>    
                )
            })
            
            return  (
                <span>
                    <h2>Add Weekly Goal</h2>
                    <form className="addGoal__form" onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="content">New Goal:</label>
                        <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
                        <label htmlFor="associated_goal">Associated Monthly Goal:</label>
                        <select name="associated_goal" id="associated_goal">
                            {associatedGoalsOptions}
                        </select>
                        <div className="addGoals__buttons">
                            <button className="addGoals" onClick={this.props.changeDisplayAddGoals}>Cancel</button>
                            <button className="addGoals" type="submit" >Save</button>
                            <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>
                        </div>  
                    </form>
                </span>
            )
        }
    }

    render() {
        return (
        <div className="addGoal">
            {this.parentGoalSelection()}
        </div>
        );
    }
}

export default AddGoal;