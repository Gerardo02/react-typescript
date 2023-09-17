import React, { useState } from "react";
import { List, Button, Modal, Col, Row, Card } from "antd";
import Project, { baseProject } from "./IProject.ts";
import generateGuid from "../../GenerateGuid.ts";
import ProjectInput from "./ProjectInput.tsx";

const ProjectList: React.FC = () => {
    const [listProject, setListProject] = useState<Project[]>([baseProject]);

    
    return ( 
        <>

            <ProjectInput setListProject={setListProject} listProject={listProject} />

            {listProject.map(item => {
                return(
                    <Card key={item.id++} title={item.name} style={{ width: 300 }}>
                        <p>Scope: {item.scope}</p>
                        <p>Time: {item.time}</p>
                        <p>Budget: {item.budget}</p>
                        <p>Created: {item.created}</p>
                    </Card>
                )
            })}
            
            {/* <List
                size="large"
                grid={{ column: 1 }}
                header={<div className='header'>Project List</div>}
                bordered
                dataSource={listProject}
                renderItem={(item) => (
                    <List.Item>
                        <span>{item.name}</span>
                        <br />
                        <span>{item.created}</span>
                    </List.Item>
                )}

            >
                
            </List> */}
        </>
     );
}
 
export default ProjectList;