import React, { Component } from  'react';
import './addGoal.css';
import GoalsContext from '../GoalsContext';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        errorMessage: '',
    }
    console.log(props);
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
        //this need to be updated
        const url =`http://localhost:8000/api/annualGoals`;
  
    // correcting for where user enters 
    if (!(content.length>1)) {
        this.setState({
            errorDisplay: 'block',
            errorMessage: 'folder name must be longer than 1 character'
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

    fetch(url, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return res.json();
        })
        .then(data => {
            this.setState({
                name: ''
            });
            this.context.goalsFetch();
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({
                error: err.message
            });
        });
    }

    navigateBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        return (
        <div className="addGoal">
            <h2>Add Goal</h2>
             
            <form className="addGoal__form" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="content">Goal:</label>
            <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
            <div className="addGoals__buttons">
                <button onClick={this.navigateBack}>Cancel</button>
                <button type="submit" >Save</button>
                <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>
            </div>  
            </form>
        </div>
        );
    }
}

export default AddGoal;