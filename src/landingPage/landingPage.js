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
                <PageNav
                    {...this.props}
                />
                <div className="landing-page">
                    <div className="landing-page-container">
                        <div>
                            <h1>Live with Intent. Have clarity. Be hyperfocused. Be disciplined. And Achieve your goals.</h1>
                            <img className="landing-page-image" src={trackField} alt="track and field lanes into the unknown"/>
                        </div>
                        <div className="section-break">
                            <h2>How Relentless Works:</h2>
                            <div>
                                Three easy steps towards achieivng more!  
                            </div>
                            <div className="methodology">
                                <div className="methodology-cards even-section-cards">
                                    <h4>1. Determine Annual Goals</h4>
                                    <p>
                                        Signup and write down three goals for this calendar year. Keep the "SMART" concept in mind - Specific, Measurable, Attainable, Relevant, and Time-based. 
                                    </p>
                                </div>
                                <div className="methodology-cards even-section-cards">
                                    <h4>2. Set Micro-Goals</h4>
                                    <p>
                                        Think through the smaller goals that you need to achieve both monthly and weekly to make the annual goal reachable. A good general rule is to have 1 monthly and weekly goal for each of your annual goals.
                                    </p>
                                </div>
                                <div className="methodology-cards even-section-cards">
                                    <h4>3. Monitor Progress</h4>
                                    <p>
                                        Note your progress as you meet and exceed your weekly, monthly, and annual goals. Remember to pat yourself on the back as you go!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-break">
                            <h2>Our Three Pillars</h2>
                            <div>
                                We strive to help you achieve your goals by focusing on three factors.  
                            </div>
                            <div className="methodology">
                                <div className="methodology-cards" name="clarity" onClick={this.displayToggle}>
                                    <h4 name="clarity">Clarity</h4>
                                    <p>
                                        Know the destinations (i.e. setting the goals) is an important step of the process
                                    </p>
                                </div>
                                <div className="methodology-cards" name="hyperfocus" onClick={this.displayToggle}>
                                    <h4 name="hyperfocus">Hyperfocus</h4>
                                    <p>
                                        Determine which three goals are the top priorities right now to focus our precious time and energy
                                    </p>
                                </div>
                                <div className="methodology-cards" name="discipline" onClick={this.displayToggle}>
                                    <h4 name="discipline">Discipline</h4>
                                    <p>
                                        Transformation requires presistent effort - breaking goals down into actionable pieces drives change
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-break">
                            <h2>Let's reach new heights together!</h2>
                            <img className="landing-page-image" src={newHeightsImage} alt="Relentless Logo"/>
                            <Link to='/user1'>
                                <button className="try-for-free">Try for Free</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
}

export default LandingPage;