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

    //redundant code, need to fix; is there a toggle function readily available?
    clarityDisplayToggle = () => {
        let value = this.state.clarity === 'none' ? 'block' : 'none';
        this.setState({
            clarity: value
        })
    }
    hyperfocusDisplayToggle = () => {
        let value = this.state.hyperfocus === 'none' ? 'block' : 'none';
        this.setState({
            hyperfocus: value
        })
    }
    disciplineDisplayToggle = () => {
        let value = this.state.discipline === 'none' ? 'block' : 'none';
        this.setState({
            discipline: value
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
                    <div className="methodology-cards"  onClick={() => this.clarityDisplayToggle()}>
                        <h3>Clarity</h3>
                        <p style={{display:this.state.clarity}}>
                            Know the destinations (i.e. setting the goals) is an important step of the process
                        </p>
                    </div>
                    <div className="methodology-cards" onClick={() => this.hyperfocusDisplayToggle()}>
                        <h3>Hyperfocus</h3>
                        <p style={{display:this.state.hyperfocus}}>
                            Determine which three goals are the top priorities right now to focus our precious time and energy
                        </p>
                    </div>
                    <div className="methodology-cards" onClick={() => this.disciplineDisplayToggle()}>
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