import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
         <main id="about-me">
            <div className="to-top">
                <a href="/home">
                    <i> class="far fa-arrow-alt-circle-up"</i>
                </a>
                </div>
            <h1>About Me</h1>
            <picture>
                <source media="(min-width: 769px)" srcSet="http://all4desktop.com/data_images/original/4246355-happy.jpg"/>
                <img src="https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg" alt="happy eggs"/>
            </picture>   
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </main>
        )
    }
};

export default Main;
