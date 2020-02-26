import React from 'react';
import'./landingPage.css';
import PageNav from '../nav/pageNav';
import PageFooter from '../footer/pageFooter';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clarity: 'none',
            hyperfocus: 'none',
            discipline: 'none'
        }
    }

    //one simple toggle for display, instead of having three
    displayToggle = (event) => {
        const name = event.target.getAttribute("name");
        let value = this.state[name] === 'none' ? 'block' : 'none';
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <PageNav/>
                <div>
                    <h2>Relentless: Live with Intent</h2>
                </div>
                <div>
                    We strive to help you achieve your goals by focusing on three factors.  
                </div>
                <div className="methodology">
                    <div className="methodology-cards" name="clarity" onClick={this.displayToggle}>
                        <h3>Clarity</h3>
                        <p style={{display:this.state.clarity}}>
                            Know the destinations (i.e. setting the goals) is an important step of the process
                        </p>
                    </div>
                    <div className="methodology-cards" name="hyperfocus" onClick={this.displayToggle}>
                        <h3>Hyperfocus</h3>
                        <p style={{display:this.state.hyperfocus}}>
                            Determine which three goals are the top priorities right now to focus our precious time and energy
                        </p>
                    </div>
                    <div className="methodology-cards" name="discipline" onClick={this.displayToggle}>
                        <h3>Discipline</h3>
                        <p style={{display:this.state.discipline}}>
                            Transformation requires presistent effort - breaking goals down into actionable pieces drives change
                        </p>
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
}

export default LandingPage;