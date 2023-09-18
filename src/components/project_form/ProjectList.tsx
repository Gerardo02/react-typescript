import React, { useState } from "react";
import { Card } from "antd";
import Project from "./IProject.ts";
import ProjectInput from "./ProjectInput.tsx";

const ProjectList: React.FC = () => {
    const [listProject, setListProject] = useState<Project[]>([]);
    let count: number = 0;
    
    return ( 
        <>

            <ProjectInput setListProject={setListProject} listProject={listProject} />

            {listProject.map(item => {
                return(
                    <Card key={count++} title={item.name} style={{ width: 300 }}>
                        <p>Scope: {item.scope}</p>
                        <p>Time: {item.time}</p>
                        <p>Budget: {item.budget}</p>
                        <p>Created: {item.created}</p>
                        <p>Unique key: {item.key}</p>
                    </Card>
                )
            })}
            
            
        </>
     );
}
 
export default ProjectList;