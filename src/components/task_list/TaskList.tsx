import React, { useState } from "react";
import { Input, Button } from "antd";
import Task from "./Task";


const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = (): void => {
        if(newTask.trim() !== ''){
            setTasks([...tasks, { id: Date.now(), description: newTask, done: false }]);
            setNewTask('');
        }
    }

    return ( 
        <>
            <div>
                <h1>Lista de tareas</h1>

                <Input 
                    type="text" 
                    value={newTask} 
                    onChange={e => setNewTask(e.target.value)} 
                    placeholder="Nueva tarea" 
                />

                <Button onClick={addTask}>Agregar tarea</Button>

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.description}
                        </li>
                    ))}
                </ul>
                
            </div>
        </>
     );
}
 
export default TaskList;