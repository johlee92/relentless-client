import React from 'react';
import'./landingPage.css';
import PageNav from '../nav/pageNav';
import PageFooter from '../footer/pageFooter';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <PageNav/>
                <div>
                    <h1>Relentless</h1>
                    <h2>Live with Intent</h2>
                </div>
                <div>
                    We strive to help you achieve your goals by focusing on three factors.  
                </div>
                <div>
                    <div>
                        Clarity
                    </div>
                    <div>
                        Hyperfocus
                    </div>
                    <div>
                        Discipline
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
}

export default LandingPage;