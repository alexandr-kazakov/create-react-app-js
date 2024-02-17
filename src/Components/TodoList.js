import { useEffect, useState } from "react";
import Button from "./Button";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));

        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        } else {
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => setTodos(data.slice(0, 10)))
            .catch(error => console.error('Error fetching data:', error));
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);
      

    const handleAddTodo = () => {
        if(inputValue.trim() !== '') {
            setTodos([...todos, {id: todos.length + 1, title: inputValue}]);
            setInputValue('');
        }
    }

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div className="todo-list">
            <div className="mb-10">
                <input className="border border-slate-400 h-12 pl-2 pr-2" type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder="Enter your task"></input>
                <Button onClick={handleAddTodo} className="bg-primary text-white pl-8 pr-8 pt-3 pb-3" text="Add"></Button>
            </div>

            <table className="table-auto border-collapse border border-slate-400 max-w-5xl w-full">
            <thead>
                <tr>
                <th className="border border-slate-300">Info</th>
                <th className="border border-slate-300">Nav</th>
                </tr>
            </thead>
            <tbody>

            {todos.map(todo => (
                    <tr key={todo.id}>
                       <td className="border border-slate-300 p-2"><span className="mr-5">{todo.title}</span></td>
                       <td className="border border-slate-300">                       
                            <Button onClick={_ => handleDeleteTodo(todo.id)} className="bg-primary text-white pl-6 pr-6 pt-1 pb-1" text="Delete"></Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>


        </div>
    )
}



