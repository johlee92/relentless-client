import React, { Component } from  'react';
import './editGoal.css';
import config from '../config';
import GoalsContext from '../GoalsContext';

class EditGoal extends Component {
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
                annual_goal: e.target.associated_goal.value
            }
        } else if(!e.target.getAttribute("id") && this.props.viewGoals.toLowerCase() === 'weekly') {
            newGoal = {
                content: content,
                //gets the value from the Select form
                monthly_goal: e.target.associated_goal.value
            }
        } else {
            newGoal = {content};
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
            method: 'PATCH',
            body: JSON.stringify(newGoal),
            headers: {
                "Content-Type": "application/json"
            }
        };

        if(this.props.viewGoals.toLowerCase() === 'annual') {
            fetch(url + '/api/annualGoals/' + this.props.targetGoalId, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    this.setState({
                        content: ''
                    });
                    this.context.goalsFetch();
                    this.props.changeDisplayEditGoals();
                    return res.json();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                    });
                });
        }

        if(this.props.viewGoals.toLowerCase() === 'monthly') {
            
            fetch(url + '/api/monthlyGoals/' + this.props.targetGoalId, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    this.setState({
                        content: ''
                    });
                    this.context.goalsFetch();
                    this.props.changeDisplayEditGoals();
                    return res.json();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                    });
                });
        }

        if(this.props.viewGoals.toLowerCase() === 'weekly') {
            fetch(url + '/api/weeklyGoals/' + this.props.targetGoalId, options)
                .then(res => {
                    if(!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    this.setState({
                        content: ''
                    });
                    this.context.goalsFetch();
                    this.props.changeDisplayEditGoals();
                    return res.json();
                })
                .catch(err => {
                    this.setState({
                        error: err.message
                    });
                });
        }
    }

    editGoalFrom() {
        if(this.props.viewGoals.toLowerCase() === 'annual') {
            return (
                <span>
                    <h2>Edit Annual Goal</h2>
                    <form className="editGoal__form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="content">Goal:</label>
                    <input 
                        type="text" 
                        name="content" 
                        id="content" 
                        placeholder={this.props.targetGoal.content}
                        onChange={e => this.contentChange(e.target.value)}
                    />
                    <div className="editGoals__buttons">
                        <button className="editGoals" onClick={this.props.changeDisplayEditGoals}>Cancel</button>
                        <button className="editGoals" type="submit" >Save</button>
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
                    <h2>Edit Monthly Goal</h2>
                    <form className="editGoal__form" onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="content">Goal:</label>
                        <input 
                            type="text" 
                            name="content" 
                            id="content" 
                            placeholder={this.props.targetGoal.content} 
                            onChange={e => this.contentChange(e.target.value)}
                        />
                        <label htmlFor="associated_goal">Associated Annual Goal:</label>
                        <select name="associated_goal" id="associated_goal">
                            {associatedGoalsOptions}
                        </select>
                        <div className="editGoals__buttons">
                            <button className="editGoals" onClick={this.props.changeDisplayEditGoals}>Cancel</button>
                            <button className="editGoals" type="submit" >Save</button>
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
                    <option key={goal.id} value={goal.id} id={goal.id}>{goal.content}</option>    
                )
            })
            
            return  (
                <span>
                    <h2>Edit Weekly Goal</h2>
                    <form className="editGoal__form" onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="content">Goal:</label>
                        <input 
                            type="text" 
                            name="content" 
                            id="content" 
                            placeholder={this.props.targetGoal.content} 
                            onChange={e => this.contentChange(e.target.value)}
                        />
                        <label htmlFor="associated_goal">Associated Monthly Goal:</label>
                        <select name="associated_goal" id="associated_goal">
                            {associatedGoalsOptions}
                        </select>
                        <div className="editGoals__buttons">
                            <button className="editGoals" onClick={this.props.changeDisplayEditGoals}>Cancel</button>
                            <button className="editGoals" type="submit" >Save</button>
                            <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>
                        </div>  
                    </form>
                </span>
            )
        }
    }

    render() {
        return (
        <div className="editGoal">
            {this.editGoalFrom()}
        </div>
        );
    }
}

export default EditGoal;