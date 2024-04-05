import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({todos,setTodos}){
    const [todo,setTodo]=useState({name:"",done:false});
    
    function handlesubmit(e){
        
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
    }
    return (
        <div>
        <form className={styles.todoform} onSubmit={handlesubmit}>
            <div className={styles.Container}>
            <input className={styles.moduleinput} onChange={(e)=>setTodo({name:e.target.value,done:false})} type="Text" value={todo.name} placeholder="Enter Todo Item..."/>
            <button className={styles.modulebutton}>Add</button>  
            </div>
            
              
        </form>
        </div>
        
    )
}