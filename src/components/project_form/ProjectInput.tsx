import React, { useState } from "react";
import { Input, Button, Modal, Form, Row, Col, Select, InputNumber } from "antd";
import Project from "./IProject";
import generateGuid from "../../GenerateGuid";

const ProjectInput = (props: { listProject: Project[], setListProject: React.Dispatch<React.SetStateAction<Project[]>> }) => {

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [isDelModalOpen, setIsDelModalOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const showAddModal = () => {
        setIsAddModalOpen(true);
    };

    const showDelModal = () => {
        setIsDelModalOpen(true)
    }

    const handleOk = (value: any) => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setIsAddModalOpen(false);

            const temporaryData: Project = {
                key: generateGuid(),
                name: value.name,
                scope: value.scope,
                time: value.time,
                budget: value.budget,
                created: Date.now()
            }

            props.setListProject([...props.listProject, temporaryData])
            

          }, 1500);
        
    };

    const handleOkDel = (value: any) => {

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsDelModalOpen(false)

            props.listProject.forEach(elem => {
                if(value.id === elem.key) {
                    props.setListProject(list => list.filter((e) => e.key !== value.id))
                };
         
            })

        }, 1000)

        
    }
    

    const handleCancel = () => {
        setIsAddModalOpen(false);
        setIsDelModalOpen(false);
    };

    return ( 
        <>

            <Button type="primary" onClick={showAddModal}>New Project</Button>
            <Button onClick={showDelModal} style={{ backgroundColor: 'red', color: 'white', border: 'none' }}>Delete Project</Button>

            <br />
            <br />
                
                <Modal 
                    title='Add new projects' 
                    open={isAddModalOpen} 
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

                <Modal 
                    title='Delete project' 
                    open={isDelModalOpen} 
                    onOk={handleOkDel} 
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <Form onFinish={handleOkDel}>

                        <Form.Item 
                            name="id"
                            rules={[{ 
                                required: true, 
                                message: 'Please input a valid project id' 
                            }]}
                        >
                            <Input placeholder="Project id" />

                        </Form.Item>
                        
                        <Row>
                            <Col span={4} offset={14}>
                                <Form.Item>

                                    <Button onClick={handleCancel}>
                                        Cancel
                                    </Button>

                                </Form.Item>

                            </Col>

                            <Col span={4}>
                                <Form.Item>
                                <Button 
                                    onClick={showDelModal} 
                                    style={{ backgroundColor: 'red', color: 'white', border: 'none' }}
                                    htmlType="submit"
                                    type="primary"
                                    loading={isLoading}
                                >
                                    Delete Project
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