import React, { Component } from  'react';
import './addGoal.css';
import config from '../config';
import GoalsContext from '../GoalsContext';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            errorMessage: '',
        }
        console.log(props)
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
        const newGoal = {content};
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

    //this isn't working. need to talk to mentor about it
    // navigateBack = (e) => {
    //     e.preventDefault();
    //     this.props.history.goBack();
    // }

    render() {
        return (
        <div className="addGoal">
            <h2>Add Goal</h2>
             
            <form className="addGoal__form" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="content">Goal:</label>
            <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
            <div className="addGoals__buttons">
                <button onClick={this.props.changeDisplayAddGoals}>Cancel</button>
                <button type="submit" >Save</button>
                <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>
            </div>  
            </form>
        </div>
        );
    }
}

export default AddGoal;