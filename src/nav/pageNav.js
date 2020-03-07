import React from 'react';
import'./pageNav.css';
import { Link } from 'react-router-dom';

class PageNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="PageNav">
                <section>
                    <Link to='/'>Relentless</Link>                   
                </section>
                <section> 
                    <Link to='/user1'>User1</Link>
                </section>
            </nav>
        )
    }
}

export default PageNav;