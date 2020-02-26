import React from 'react';
import'./goalsNav.css';
import moment from 'moment';

class GoalsNav extends React.Component {
    constructor(props) {
        super(props);

        //need a way to determine, consistently, how to return the number of weeks in any given eyar
        let weekNumEOY = moment(moment().endOf('year')).week();
        
        this.state = {
            yearWeekNum: ''
        }
    }

    render() {
        return (
            <div className="GoalsNavSection">
                <div className="GoalsNav">
                    <button
                        value={this.props.weekNum - 1}
                        onClick={this.props.changeWeekNum}
                    >
                        Previous Week
                    </button>
                    <span>Week: {this.props.weekNum}</span>
                    <button 
                        value={this.props.weekNum + 1}
                        onClick={this.props.changeWeekNum}
                    >
                        Next Week
                    </button>
                </div>
                <div className="GoalsNav">
                    <button
                        value="Annual" 
                        onClick={this.props.changeViewGoals}
                    >
                        Annual
                    </button>
                    <button
                        value="Monthly" 
                        onClick={this.props.changeViewGoals}
                    >
                        Monthly
                    </button>
                    <button 
                        value="Weekly" 
                        onClick={this.props.changeViewGoals}
                    >
                        Weekly
                    </button> 
                </div>
            </div>
        )
    }
}

export default GoalsNav