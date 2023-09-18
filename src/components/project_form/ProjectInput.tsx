import React, { useState } from "react";
import { Input, Button, Modal, Form, Row, Col, Select, InputNumber } from "antd";
import Project from "./IProject";
import generateGuid from "../../GenerateGuid";

const ProjectInput = (props: { listProject: Project[], setListProject: React.Dispatch<React.SetStateAction<Project[]>> }) => {

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [isDelModalOpen, setIsDelModalOpen] = useState<boolean>(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [editForm, setEditForm] = useState<JSX.Element>(<></>)
    const [isInputValue, setIsInputValue] = useState<string>('')
    


    const showAddModal = () => {
        setIsAddModalOpen(true);
    };

    const showDelModal = () => {
        setIsDelModalOpen(true)
    }

    const showEditModal = () => {
        setIsEditModalOpen(true)
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

    const handleOkDel = () => {


        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)

        }, 1000)

        
        for(let i = 0; i < props.listProject.length; i++){
            if(isInputValue === props.listProject[i].key) {
                props.setListProject((list: Project[]) => list.filter((e: Project) => e.key !== isInputValue));
                setIsError(false)
                setIsDelModalOpen(false)
                
                break;
            }

            setIsError(true)

        }

        
    }

    const handleEditOk = () => {

        for(let i = 0; i < props.listProject.length; i++){
            if(isInputValue === props.listProject[i].key) {
                setEditForm(
                    <>
                        <Form.Item 
                            name="name"
                            initialValue={props.listProject[i].name}
                            rules={[{ 
                                required: true, 
                                message: 'Please input the name of project!' 
                            }]}
                        >
                            <Input placeholder="Project name" />

                        </Form.Item>
                        

                        <Form.Item 
                            name="scope"
                            initialValue={props.listProject[i].scope}
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
                            initialValue={props.listProject[i].time}
                            rules={[{ 
                                required: true, 
                                message: 'Please input the time of the project' 
                            }]}
                        >
                            <Input placeholder="Time of project" />

                        </Form.Item>

                        <Form.Item 
                            name="budget"
                            initialValue={props.listProject[i].budget}
                            rules={[{ 
                                required: true, 
                                message: 'Please input the budget of the project' 
                            }]}
                        >
                            <InputNumber placeholder="Budget" prefix='$' />

                        </Form.Item>

                        <Form.Item 
                            name="key"
                            initialValue={props.listProject[i].key}
                        >
                            <Input disabled />

                        </Form.Item>

                        <Row>

                            <Col span={4}>
                                <Form.Item>
                                    <Button 
                                        style={{ backgroundColor: 'green', color: 'white', border: 'none' }}
                                        htmlType="submit"
                                        type="primary"
                                    >
                                        Edit Project
                                        </Button>
                                </Form.Item>

                            </Col>

                        </Row>
                    </>
                )
                
            }

            setIsError(true)

        }

    }

    const editProyect = (value: any) => {
        for(let i = 0; i < props.listProject.length; i++){
            if(value.key === props.listProject[i].key) {

                const temporaryData: Project = {
                    key: props.listProject[i].key,
                    name: value.name,
                    scope: value.scope,
                    time: value.time,
                    budget: value.budget,
                    created: props.listProject[i].created
                }
    
                props.setListProject(list => {
                    const newList = [...list]
                    newList.splice(i, 1, temporaryData)
                    return newList
                })
                //console.log(props.listProject[i])
                setIsEditModalOpen(false)
                setEditForm(<></>)
                
            }

        }
    }
    
    const validateProjectKey = () => {
        if (!isError) {
            return Promise.resolve();
        } else {
            return Promise.reject('Key non existent')
        }

    }


    const handleCancel = () => {
        setIsAddModalOpen(false);
        setIsDelModalOpen(false);
        setIsEditModalOpen(false)
        setEditForm(<></>)
    };

    return ( 
        <>

            <Button type="primary" onClick={showAddModal}>New Project</Button>
            <Button type="primary" onClick={showEditModal} style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>Edit</Button>
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
                    <Form>

                        <Form.Item 
                            name="id"
                            rules={[
                                { 
                                    required: true, 
                                    message: 'Please input a valid project id' 
                                },
                                {
                                    validator: validateProjectKey
                                }
                            ]}
                        >
                            <Input onChange={e => setIsInputValue(e.target.value)} placeholder="Project key" />

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
                                        onClick={handleOkDel} 
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

                <Modal 
                    title='Delete project' 
                    open={isEditModalOpen} 
                    onOk={handleEditOk} 
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <Form onFinish={editProyect}>

                        <Form.Item 
                            name="id"
                            rules={[
                                { 
                                    required: true, 
                                    message: 'Please input a valid project key' 
                                },
                            ]}
                        >
                            <Input onChange={(e) => setIsInputValue(e.target.value)} placeholder="Project key" />

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

                                    <Button onClick={handleEditOk} style={{ backgroundColor: 'blue', color: 'white', border: 'none' }}>
                                        Search
                                    </Button>

                                </Form.Item>
                            </Col>
                        </Row>
                        
                        {editForm}

                        
                    </Form>
                    
                </Modal>

                            
            
        </>
     );
}
 
export default ProjectInput;