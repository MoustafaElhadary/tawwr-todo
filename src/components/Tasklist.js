import React from 'react'

export default function TaskList({ tasks, setTasks, filter }) {

    function handleDelete(id) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    function handleComplete(id){
        const taskIdx = tasks.findIndex(t=> t.id === id)
        tasks[taskIdx] = {...taskIdx, isCompleted:true }
        setTasks(tasks);
    }

    function filterList(tasks) {
        switch (filter) {
            case 'all':
                return tasks;
            case 'urgent':
                return tasks.filter(task => task.urgent);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }
    return (
        <ul>
            {filterList(tasks).map((task, index) => (
                <li key={index}>
                    {task.title} {" "}
                    {task.urgent.toString()}
                    <button
                        onClick={() => handleDelete(task.id)}
                    >Delete</button>
                     <button
                        onClick={() => handleComplete(task.id)}
                    >Complete</button>
                </li>
            ))}
        </ul>

    )
}
