import React from 'react';
import'./landingPage.css';
import PageNav from '../nav/pageNav';
import PageFooter from '../footer/pageFooter';
import { Link } from 'react-router-dom';
import trackField from '../images/trackField.jpeg'
import newHeightsImage from '../images/new-heights.jpeg';

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
                <div className="landing-page">
                    <div className="landing-page-container">
                        <div>
                            <h2>Live with Intent. Have clarity. Be hyperfocused. Be disciplined. And Achieve your goals.</h2>
                        </div>
                        <img className="landing-page-image" src={trackField} alt="track and field lanes into the unknown"/>
                        <Link to='/user1'>
                            <button className="try-for-free">Try for Free</button>
                        </Link>
                        <div>
                            <h2>Our Three Pillars</h2>
                        </div>
                        <div>
                            We strive to help you achieve your goals by focusing on three factors.  
                        </div>
                        <div className="methodology">
                            <div className="methodology-cards" name="clarity" onClick={this.displayToggle}>
                                <h3 name="clarity" onClick={this.displayToggle}>Clarity</h3>
                                <p style={{display:this.state.clarity}}>
                                    Know the destinations (i.e. setting the goals) is an important step of the process
                                </p>
                            </div>
                            <div className="methodology-cards" name="hyperfocus" onClick={this.displayToggle}>
                                <h3 name="hyperfocus" onClick={this.displayToggle}>Hyperfocus</h3>
                                <p style={{display:this.state.hyperfocus}}>
                                    Determine which three goals are the top priorities right now to focus our precious time and energy
                                </p>
                            </div>
                            <div className="methodology-cards" name="discipline" onClick={this.displayToggle}>
                                <h3 name="discipline" onClick={this.displayToggle}>Discipline</h3>
                                <p style={{display:this.state.discipline}}>
                                    Transformation requires presistent effort - breaking goals down into actionable pieces drives change
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2>Let's reach new heights together!</h2>
                        </div>
                        <img className="landing-page-image" src={newHeightsImage} alt="Relentless Logo"/>
                        <Link to='/user1'>
                            <button className="try-for-free">Try for Free</button>
                        </Link>
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
}

export default LandingPage;