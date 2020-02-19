import React from 'react';
import'./goals.css';

class Goals extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div>Goal 1</div>
                <div>Goal 2</div>
                <div>Goal 3</div>
            </div>
        )
    }
}

export default Goals;