import React from 'react';
import './pageNav.css';
import { Link } from 'react-router-dom';
import relentlessLogo from '../images/RelentlessLogo.jpg';

class PageNav extends React.Component {

    render() {
        return (
            <nav className="PageNav">
                <section>
                    <Link to='/'>
                        <img className="nav-content" src={relentlessLogo} alt="Relentless Logo"/>
                        Relentless
                    </Link>                   
                </section>
                <section> 
                    <Link to='/user1'>
                        <button className="try-for-free">Try for Free</button>
                    </Link>
                </section>
            </nav>
        )
    }
}

export default PageNav;