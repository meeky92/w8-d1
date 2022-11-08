// i coded along with a yt video and it still doesnt work nor do i understand much lol
import React, { useState } from 'react';
// import Form from "./components/Form";

function App() {
    const[todo, setTodo] = useState("");
    const [items, setItems] = useState([]);

    function addTodo(todo) {
        const item = {
            value: todo
        };

        setItems(oldList => [...oldList, item]);
        setTodo("");
    }

    return ( 
        <div className="App">
            <h1>To Do List</h1>

            <input 
            type="text" 
            placeholder='Enter Task' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />

            <button onClick={() => addTodo()}>Enter</button>

            <ul>
                {items.map((item) => {
                    return(
                        <li key={item}>{item.value}</li>
                    )
                })}
            </ul>

        </div>
    );

}

export default App;
