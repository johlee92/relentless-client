import React from 'react';
import'./pageFooter.css';
import jyLogo from '../images/logo.png';
import linkedIcon from '../images/linkedin.jpg';
import mailIcon from '../images/mail.jpg';
import githubIcon from '../images/GitHub.png';


class PageFooter extends React.Component {
    render() {
        return (
            <footer className="PageFooter">
                <section> 
                    <img className="content-info" src={jyLogo} alt="creator logo"/>                   
                </section>
                <section> 
                     
                </section>
                <section> 
                    <a href="mailto:johnathanlee72@hotmail.com">
                        <img className="content-info email" src={mailIcon} alt="JYL email"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img className="content-info linkedin" src={linkedIcon} alt="JYL linkedin"/>
                    </a>
                    <a href="https://github.com/johlee92" target="_blank" rel="noopener noreferrer">
                        <img className="content-info github" src={githubIcon} alt="JYL GitHub"/>
                    </a>                  
                </section>
            </footer>
        )
    }
}

export default PageFooter;