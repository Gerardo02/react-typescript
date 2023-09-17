interface Project {
    id: number
    name: string
    scope: string
    time: string
    budget: number
    created: number
    
}

export const baseProject: Project = {
    id: 1,
    name: 'Modal lists', 
    scope: 'Small', 
    time: '300 hrs', 
    budget: 1000, 
    created: Date.now()
}

export default Project
