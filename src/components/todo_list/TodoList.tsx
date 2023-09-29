import { useReducer, useState } from "react";
import ITodo from "../../interfaces/ITodo";
import TodoAction from "../../types/TodoAction";

const TodoList = () => {

    const todoReducer = (state: ITodo[], action: TodoAction): ITodo[] => {
        
        switch(action.type) {
            case 'ADD_TODO':
                return [...state, { text: action.payload, completed: false }]
            case 'TOGGLE_TODO':
                return state.map((todo, index) => 
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                );
            case 'DELETE_TODO':
                return state.filter((_, index) => index !== action.payload)
            default:
                return state;
        }
    }

    const [todos, dispatch] = useReducer(todoReducer, [])
    const [newTodo, setNewTodo] = useState<string>('')

    const handleAddTodo = () => {
        if(newTodo.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: newTodo })
            setNewTodo('')
        }

    }
    return ( 
        <>
            <h1>Lista de tareas</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Nueva tarea" 
            />
            <button onClick={handleAddTodo}>Agregar</button>
            <ul>
                {todos.map((todo, index) => (
                    <li>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: index })}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </>
     );
}
 
export default TodoList;