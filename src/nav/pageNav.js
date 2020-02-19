import React from 'react';
import'./pageNav.css';

class PageNav extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <nav>
                <section> 
                    part 1                   
                </section>
                <section> 
                    part 2                   
                </section>
                <section> 
                    part 3                   
                </section>
            </nav>
        )
    }
}

export default PageNav;