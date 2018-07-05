import React, { Component } from 'react';


class Resume extends Component {
    render() {
        return (
            <div id="main">
                <div className="resume">
                    <div className="to-top">
                        <a href="/home">
                            <i> class="far fa-arrow-alt-circle-up"</i>
                        </a>
                        </div>
                <br />
                <h1>Resume</h1>
                <h2>This Student</h2> 
                <header>
                    <address>
                        <p><a href="tel:3051234321">(305) 123-4321</a></p>
                        <p><a href="mailto:israel@wyncode.co">israel@wyncode.co</a></p>
                        <p><a href="https://izzycode.co" rel="nofollow">http://izzycode.co</a></p>
                        <p> Happy Street 1919 Miami, Florida USA </p>
                    </address>
                </header>
            {/* <div className="accessory"> */}
                <hr />
                    <ol>
                        <li>
                            <h3>Technical Skills</h3>
                                <ul>
                                    <li>Languages: HTML, CSS, Javascript</li>
                                    <li>Languages: HTML, CSS, Javascript</li>
                                    <li>Languages: HTML, CSS, Javascript</li>
                                </ul>
                            <p>A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.
                            </p>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <h3>Experience</h3>
                                <ul>
                                    <li>
                                        <h4>"The One Place - ""
                                            <small> 2000-2010 </small>
                                        </h4>
                                            <ul>
                                                <li>I did this</li>
                                                <li>I did that</li>
                                            </ul>
                                    </li> 
                                    <li>       
                                        <h4>The Other Place
                                            <small> 2000-2010 </small>
                                         </h4>
                                             <ul>
                                                <li>I did this</li>
                                                <li>I did that</li>
                                            </ul>
                                    </li>  
                                </ul>
                            </li>
                         </ol>  
                     </div>  
             </div>
        // </div>
        )
    }
}

export default Resume;
