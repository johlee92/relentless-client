import React from 'react';
import'./goalsNav.css';

class GoalsNav extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <button>Annual</button>
                <button>Monthly</button>
                <button>Weekly</button> 
            </div>
        )
    }
}

export default GoalsNav