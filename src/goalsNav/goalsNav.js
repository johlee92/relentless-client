import React from 'react';
import'./goalsNav.css';
import moment from 'moment';

class GoalsNav extends React.Component {

    render() {
        return (
            <div className="GoalsNavSection">
                <h2>Week of {moment(`${this.props.yearNum}`).add(this.props.weekNum -1, 'weeks').startOf('week').format('MM/DD/YYYY')}</h2>
                <button
                    className="week-nav"
                    value={moment(`${this.props.yearNum}`).add(this.props.weekNum - 2, 'weeks').endOf('week').format('DD MM YYYY')}
                    onClick={this.props.changeWeekNum}
                >
                    Previous Week
                </button>
                <button 
                    className="week-nav"
                    value={moment(`${this.props.yearNum}`).add(this.props.weekNum, 'weeks').endOf('week').format('DD MM YYYY')}
                    onClick={this.props.changeWeekNum}
                >
                    Next Week
                </button>
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