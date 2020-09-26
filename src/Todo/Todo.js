import React from 'react'
import { useState } from 'react'
import '../Todo/Todo.css'
import TodoList from "../Todo/TodoList";
const Todo = () => {
    const [inputList, setinputList] = useState()
    const [Items, setItems] = useState([])


    const itemEvent =(e)=> {
        setinputList(e.target.value)
    } 
    
    const listOfItems = () => {
        setItems((oldItems)=>{
            return [...oldItems, inputList]
        })
        setinputList('');
    }

    const deleteItems = (id) => {
        console.log("deleted");


        setItems((oldItems)=>{
            return oldItems.filter((array, index)=>{
                return index !== id
            })
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">   
                    <h1>Todo List</h1>
                    <div>
                    <input type="text" placeholder="Add Item" name="name" value={inputList} onChange={itemEvent} /> 
                    <button onClick={listOfItems}> + </button>
                    </div>
                    <br />
                    <div className="body_div">
                    <ul>
                        {/* <li> { Display.name }</li> */}
                        {
                            Items.map( (ItemVal, index)=>{
                               return(
                                   <TodoList key={index} id={index} text={ItemVal} onSelect={deleteItems} />
                               )
                               
                            } )
                        }
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo