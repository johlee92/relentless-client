import React from 'react';
import'./mainUserPage.css';
import PageNav from '../nav/pageNav';
import GoalsDashboard from '../goalsDashboard/goalsDashboard';
import GoalsNav from '../goalsNav/goalsNav';
import Goals from '../goals/goals';
import PageFooter from '../footer/pageFooter';
import moment from 'moment';
import GoalsContext from '../GoalsContext';

//import dummy data into the main user page
import dummyGoals from '../dummyGoals';

class MainUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annual_goals: [],
            monthly_goals: [],
            weekly_goals: [],
            //returns the current week number
            weekNum: 0,
            monthNum: 0,
            yearNum: 0,
            //defaults the view for the user to the weekly view
            viewGoals: 'weekly'
        }
    }

    componentDidMount() {
        const thisWeekNum = moment().week();
        //month is 0 based so goes from 0 to 11
        const thisMonthNum = moment().month();
        const thisYearNum = moment().year();
        this.setState({
            weekNum: thisWeekNum,
            monthNum: thisMonthNum,
            yearNum: thisYearNum
        })
        // fake date loading from API call
        this.goalsFetch();
    }

    changeWeekNum = (event) => {
        const newDate = event.target.getAttribute('value');
        const weekNum = moment(newDate,'DD MM YYYY').week();
        const monthNum = moment(newDate,'DD MM YYYY').month();
        const yearNum = moment(newDate,'DD MM YYYY').year();
        this.setState({
            weekNum: weekNum,
            monthNum: monthNum,
            yearNum: yearNum
        })
    }

    changeViewGoals = (event) => {
        const newViewGoals = event.target.getAttribute('value');
        this.setState({
            viewGoals: newViewGoals
        })
        // discuss with mentor, appears to be some lag in updating the state
        // console.log(this.state.viewGoals)
    }

    goalsFetch = () => {
        const url = 'http://localhost:8000';
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
    
        fetch(url + '/api/annualGoals', options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
            return res;
            })
            .then(res => res.json())
            .then(data => {
                // console.log(typeof moment(data[0].date_created).year())
                this.setState({
                    annual_goals: data,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
            });
        });

        fetch(url + '/api/monthlyGoals', options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
            return res;
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    monthly_goals: data,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
            });
        });

        fetch(url + '/api/weeklyGoals', options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
            return res;
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    weekly_goals: data,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
            });
        });
    }

    render() {
        const {annual_goals, monthly_goals, weekly_goals, weekNum, yearNum} = this.state;
        let currentGoals;

        //should the below be refactored into a different area
        if (this.state.viewGoals.toLowerCase() === 'weekly') {
            currentGoals = weekly_goals.filter(
                goal => ( 
                    moment(goal.date_created).week() === this.state.weekNum &&
                    moment(goal.date_created).month() === this.state.monthNum &&
                    moment(goal.date_created).year() === this.state.yearNum 
            ));
        } else if (this.state.viewGoals.toLowerCase() === 'monthly') {
            currentGoals = monthly_goals.filter(
                goal => (
                    moment(goal.date_created).month() === this.state.monthNum &&
                    moment(goal.date_created).year() === this.state.yearNum
            ));
        } else {
            currentGoals = annual_goals.filter(
                goal => moment(goal.date_created).year() === this.state.yearNum
            );
        }

        const contextValue = {
            goalsFetch: this.goalsFetch,
        }

        return (
            <div>
                <GoalsContext.Provider value={contextValue}>
                    <PageNav/>
                    <GoalsDashboard/>
                    <GoalsNav
                        weekNum={weekNum}
                        yearNum={yearNum}
                        changeWeekNum={this.changeWeekNum}
                        changeViewGoals={this.changeViewGoals}
                    />
                    <Goals
                        currentGoals={currentGoals}
                    />
                    <PageFooter/>
                </GoalsContext.Provider>
            </div>
        )
    }
}

export default MainUserPage;