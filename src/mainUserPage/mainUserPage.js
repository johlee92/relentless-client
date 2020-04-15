import React from 'react';
import config from '../config';
import moment from 'moment';
import PageNav from '../nav/pageNav';
import GoalsDashboard from '../goalsDashboard/goalsDashboard';
import GoalsNav from '../goalsNav/goalsNav';
import Goals from '../goals/goals';
import AddGoal from '../addGoal/addGoal';
import EditGoal from '../editGoal/editGoal';
import PageFooter from '../footer/pageFooter';
import GoalsContext from '../GoalsContext';
import'./mainUserPage.css';

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
            viewGoals: 'weekly',
            //display mechanisms for the goals or add goals sections
            displayGoals: 'block',
            displayAddGoal: 'none',
            displayEditGoal: 'none',
            targetGoalId: '',
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
        // API call to the backend API
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

    changeDisplayAddGoals = () => {
        if (this.state.displayAddGoal === 'none') {
            this.setState({
                displayGoals: 'none',
                displayAddGoal: 'block',
                displayEditGoal:'none'
            })
        } else  {
            this.setState({
                displayGoals: 'block',
                displayAddGoal: 'none',
                displayEditGoal:'none'
            })
        }
    }

    changeDisplayEditGoals = (id) => {
        if (this.state.displayEditGoal === 'none') {
            this.setState({
                displayGoals: 'none',
                displayAddGoal: 'none',
                displayEditGoal: 'block',
                targetGoalId: id,
            })
        } else  {
            this.setState({
                displayGoals: 'block',
                displayAddGoal: 'none',
                displayEditGoal:'none',
                targetGoalId: '',
            })
        }
    }

    goalsFetch = () => {
        const url = `${config.API_ENDPOINT}`;
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        // debugger;
        fetch(url + '/api/annualGoals', options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
            return res;
            })
            .then(res => res.json())
            .then(data => {
                // debugger;
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
        const {annual_goals, monthly_goals, weekly_goals, weekNum, yearNum, viewGoals, targetGoalId} = this.state;
        
        let currentWeekGoals = weekly_goals.filter(
            goal => ( 
                moment(goal.date_created).week() === this.state.weekNum &&
                moment(goal.date_created).month() === this.state.monthNum &&
                moment(goal.date_created).year() === this.state.yearNum 
        ));

        let currentMonthGoals = monthly_goals.filter(
            goal => (
                moment(goal.date_created).month() === this.state.monthNum &&
                moment(goal.date_created).year() === this.state.yearNum
        ));

        let currentAnnualGoals = annual_goals.filter(
            //need to undersatnd why it's returning 2019
            goal => moment(goal.date_created).add(1, 'weeks').year() === this.state.yearNum
        );

        let currentGoals = {
            annualGoals: currentAnnualGoals,
            monthlyGoals: currentMonthGoals,
            weeklyGoals: currentWeekGoals
        }

        const contextValue = {
            currentGoals: currentGoals,
            goalsFetch: this.goalsFetch,
        }

        let targetGoal;
        if(targetGoalId === ''){
            targetGoal = '';
        } else if(viewGoals.toLowerCase() === 'annual') {
            targetGoal = annual_goals.find(goal => goal.id = targetGoalId)
        } else if(viewGoals.toLowerCase() === 'monthly') {
            targetGoal = monthly_goals.find(goal => goal.id = targetGoalId)
        } else if(viewGoals.toLowerCase() === 'weekly') {
            targetGoal = weekly_goals.find(goal => goal.id = targetGoalId)
        }

        return (
            <div>
                <GoalsContext.Provider value={contextValue}>
                    <PageNav/>
                    <div className="main-user-page"> 
                        <div className="main-user-page-container">
                            <GoalsNav
                                weekNum={weekNum}
                                yearNum={yearNum}
                                changeWeekNum={this.changeWeekNum}
                                changeViewGoals={this.changeViewGoals}
                            />
                            <GoalsDashboard
                                annual_goals={annual_goals}
                                monthly_goals={monthly_goals}
                                weekly_goals={weekly_goals}
                                currentWeekGoals={currentGoals.weeklyGoals}
                                currentGoals={currentGoals}
                            />
                            <h2>Period Goals:</h2>
                            <button 
                                className="add-goals"
                                style={{display:this.state.displayGoals}}
                                onClick={this.changeDisplayAddGoals}
                            >
                                Add Goals
                            </button>
                            <span style={{display:this.state.displayGoals}}>
                                <Goals
                                    currentGoals={currentGoals}
                                    viewGoals={viewGoals}
                                    changeDisplayEditGoals={this.changeDisplayEditGoals}
                                />
                            </span>
                            <span style={{display:this.state.displayAddGoal}}>
                                <AddGoal
                                    viewGoals={viewGoals}
                                    currentGoals={currentGoals}
                                    changeDisplayAddGoals={this.changeDisplayAddGoals}
                                    weekNum = {weekNum}
                                    yearNum = {yearNum}
                                />
                            </span>
                            <span style={{display:this.state.displayEditGoal}}>
                                <EditGoal
                                    viewGoals={viewGoals}
                                    currentGoals={currentGoals}
                                    changeDisplayEditGoals={this.changeDisplayEditGoals}
                                    targetGoalId={targetGoalId}
                                    targetGoal={targetGoal}
                                />
                            </span>
                        </div>
                    </div>
                    <PageFooter/>
                </GoalsContext.Provider>
            </div>
        )
    }
}

export default MainUserPage;