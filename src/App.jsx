import React, { useState } from "react";
import ToDoList from "./ToDoList"; 
import './index.css';


const App = () =>{

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    


    const itemEvent = (event)=> {
        setInputList(event.target.value);
    };

    const listofitems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    }

    const deleteItems = (id) =>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
                <button onClick={listofitems}> + </button>


                <ol>
                    {/* <li>{inputList}</li> */}

                    {
                    Items.map( (itemval , index ) => {
                        return <ToDoList key={index} 
                                        id ={index} 
                                        text = {itemval}
                                        onSelect = {deleteItems}
                                        />
                    })
                    }
                </ol>
            </div>
            <footer className="footer_div">
                <p>
                    Copyright © 2024 Shishir Deshmukh
                </p>
            </footer>
                    
        </div>
        </>
    )
}

export default App;