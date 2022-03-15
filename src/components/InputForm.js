import React from 'react'
import { useState } from 'react';

export default function InputForm({ tasks, setTasks }) {

    const [inputText, setInputText] = useState("");
    const [isUrgent, setIsUrgent] = useState(false);

    function onAdd(e){
        e.preventDefault();
        const newTasks = [...tasks, {title: inputText, urgent: isUrgent, id: Math.random()* 1000, isCompleted: false}];
        setTasks(newTasks);
        setInputText("");
      }

    return (
        <form>
            <input
                type="text"
                placeholder="Enter a task"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                onClick={onAdd}
            >
                add
            </button>
            <input
                type="checkbox"
                id="urgentCheckbox"
                value={isUrgent}
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
            />
            <label htmlFor="urgentCheckbox">
                Urgent
            </label>
        </form>
    )
}
