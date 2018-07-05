import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <article>
                    <ul>
                        <li><a className="active" href="#home"><h1>About Me</h1></a></li>
                        <li><a className="active" href="#projects"><h1>Portfolio</h1></a></li>
                        <li><a className="active" href="#main"><h1>Resume</h1></a></li>
                        <li><a className="active" href="#contact"><h1>Contact</h1></a></li>
                    </ul>
                </article>
            </nav>
        )
    }
}

export default Navbar;
