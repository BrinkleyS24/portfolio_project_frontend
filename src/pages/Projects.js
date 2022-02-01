import { useState, useEffect } from "react";
import { Button } from 'react-bulma-components';


function Projects({ URL }) {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch(URL + "projects");
        const data = await response.json();
        setProjects(data)
    }

    useEffect(() => getProjectsData(), []);

    const loaded = () => {
        return projects.map((project) => (
          <div >
            <h1>{project.name}</h1>
            <img src={project.image} />
            <br />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>Live site</button>
            </a>
          </div>
        ));
      };
    
      return projects ? loaded() : <h1>Loading...</h1>;
    }

export default Projects;
