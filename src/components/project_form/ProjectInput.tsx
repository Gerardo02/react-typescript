import React, { useState } from "react";
import { Input, Button, Modal, Form, Row, Col, Select, InputNumber } from "antd";
import Project from "./IProject";

const ProjectInput = (props: {setListProject: React.Dispatch<React.SetStateAction<Project[]>>, listProject: Project[]}) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    let temporaryData: Project = {
        id: 1,
        name: '', 
        scope: '', 
        time: '', 
        budget: 0, 
        created: Date.now()
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (value: any) => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setIsModalOpen(false);

            temporaryData = {
                id: 1,
                name: value.name,
                scope: value.scope,
                time: value.time,
                budget: value.budget,
                created: Date.now()
            }

            props.setListProject([...props.listProject, temporaryData])
            

          }, 1500);
        
    };
    

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return ( 
        <>

            <Button type="primary" onClick={showModal}>New Project</Button>
                
                <Modal 
                    title='Add new projects' 
                    open={isModalOpen} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <Form onFinish={handleOk}>

                        <Form.Item 
                            name="name"
                            rules={[{ 
                                required: true, 
                                message: 'Please input the name of project!' 
                            }]}
                        >
                            <Input placeholder="Project name" />

                        </Form.Item>
                        

                        <Form.Item 
                            name="scope"
                            initialValue="Small"
                            rules={[{ 
                                required: true, 
                                message: 'Please choose the scope of your project' 
                            }]}
                        >
                            <Select
                                style={{ width: 120 }}
                                options={[
                                    { value: 'Small', label: 'Small' },
                                    { value: 'Small-Medium', label: 'Small-Medium' },
                                    { value: 'Medium', label: 'Medium' },
                                    { value: 'Large', label: 'Large' },
                                ]}
                                />

                        </Form.Item>

                        <Form.Item 
                            name="time"
                            rules={[{ 
                                required: true, 
                                message: 'Please input the time of the project' 
                            }]}
                        >
                            <Input placeholder="Time of project" />

                        </Form.Item>

                        <Form.Item 
                            name="budget"
                            rules={[{ 
                                required: true, 
                                message: 'Please input the budget of the project' 
                            }]}
                        >
                            <InputNumber placeholder="Budget" prefix='$' />

                        </Form.Item>

                        <Row>
                            <Col span={4} offset={16}>
                                <Form.Item>

                                    <Button onClick={handleCancel}>
                                        Cancel
                                    </Button>

                                </Form.Item>

                            </Col>

                            <Col span={4}>
                                <Form.Item>
                                    <Button htmlType="submit" type="primary" loading={isLoading}>
                                        Submit
                                    </Button>
                                </Form.Item>

                            </Col>

                        </Row>

                        
                    </Form>
                    
                </Modal>

            
            
        </>
     );
}
 
export default ProjectInput;