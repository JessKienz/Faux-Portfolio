import projects from '../data/projects.json';
import Project from './Project';
import React, { Component } from 'react';

class Projects extends Component {
    render() {
        console.log(projects);
        return (

            <div id='projects'>
                <div className="to-top">
                    <a href="/home">
                        <i className="far fa-arrow-alt-circle-up"/>
                    </a>
                </div>

                <header>
                    <h1>My Projects</h1>
                    <p>These are some of my projects </p>
                </header>
                
                <section>
                    {projects.allProjects.map((project)=> {
                        return <Project title={project.title} description={project.description} imgName={project.imgName} key={project.id}/>
                    })}
                </section>
                
                </div>
        )
    }
}
  
export default Projects;