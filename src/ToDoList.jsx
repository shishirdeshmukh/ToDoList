import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ToDoList = (props) => {
    const { text, completed, id, onDelete, onToggleCompletion } = props;

    return (
        <div className="todo_style">
             <div className="sd">
             <span className="checkbox" onClick={() => onToggleCompletion(id)}>
                {completed ? <i className="bi bi-check-square-fill"></i> :  <i className="bi bi-check-square"></i>}
            </span>
            </div>
            
            <li className="listItems" style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</li>
           
          
          

            <i className="fa-solid fa-trash" onClick={() => onDelete(id)} />
        </div>
    );
};

export default ToDoList;
