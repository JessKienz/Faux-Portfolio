import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
                <div id="contact">
                    <a className="to-top" href="/home">
                        <i> className="far fa-arrow-alt-circle-up" </i>
                    </a>
                    <header>
                        <h1>Contact Me</h1>
                        <p>Please feel free to drop a line with compliments and good vibes!</p>

                    </header>
                    <form action="#" method="post">
                        <div className="form-field">
                            <label htmlFor="user_name">Name</label>
                            <br />
                            <input type="text" name="user_name" required/>
                        </div>
                            <br />
                        <div className="form-field">
                            <label htmlFor="user_email">Email</label>
                            <br />
                            <input type="email" name="user_email" required/>
                        </div>
                            <br />
                        <div className="form-field">
                            <textarea name="message"></textarea>
                        </div>
                        {/* <button type="submit">Submit</button>
                        <input type="submit">Submit</button> */}
                        <input type="submit" value="Contact me! 😃"/>
                    </form>
                
                <aside>
                    <div className="social">
                    <a href="https://facebook.com" target="_blank">
                        <i className="fab fa-facebook-square fa-3x"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter-square fa-3x"></i>
                    </a> 
                    <a href="https://github.com" target="_blank">
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <p> © IzzyCode 2018</p>
                        
                    <div id="ga-toolbar-root">
                        <div></div>
                    </div>
                    </div>
                </aside>
                </div>
        )
    }
}

export default Contact;
