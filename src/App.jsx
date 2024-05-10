import React, { useState } from "react";
import ToDoList from "./ToDoList";
import './index.css';

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setInputList(event.target.value);
    };

    const addTask = () => {
        if (inputList.trim() !== "") {
            setItems([...items, { text: inputList, completed: false }]);
            setInputList("");
        }
    };

    const deleteTask = (id) => {
        setItems(items.filter((_, index) => index !== id));
    };

    const toggleTaskCompletion = (id) => {
        setItems(items.map((item, index) => {
            if (index === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    return (
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a Item" value={inputList} onChange={handleInputChange} />
                <button onClick={addTask}> + </button>

                <ol>
                    {items.map((item, index) => (
                        <ToDoList
                            key={index}
                            id={index}
                            text={item.text}
                            completed={item.completed}
                            onDelete={deleteTask}
                            onToggleCompletion={toggleTaskCompletion}
                        />
                    ))}
                </ol>
            </div>
            <footer className="footer_div">
                <p>Copyright © 2024 Shishir Deshmukh</p>
            </footer>
        </div>
    );
};

export default App;
