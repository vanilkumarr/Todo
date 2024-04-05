import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
    function handleDelete(item) {
        setTodos(todos.filter(todo => todo !== item));
        console.log(item, "deleted");
    }
function handleonclick(name){
    const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done}:todo)
 
    setTodos(newArray.sort())
    console.log(newArray)
}
const dashed=item.done ? styles.complete : ""

return (
    <div className={styles.item}> 
        <div className={styles.boldText}>
            <span  className={dashed} onClick={()=>handleonclick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => handleDelete(item)} className={styles.delete}>x</button>
            </span>
        </div>
        <hr className={styles.line}/>
        </div>
    );
}
