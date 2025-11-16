const{useState,useEffect} = React;

function App(){
    
    const[inputText, setInputText] = useState("");
    const[todos, setTodos] = useState([]);

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    function handleAddTodo() {
        const newTodo = {
            id: Date.now(),
            text: inputText
        };

        setTodos([...todos, newTodo]);
        
        setInputText("");
    }

    function handleDeleteTodo(idToDelete){
        const newTodos = todos.filter( (todo) => todo.id !== idToDelete);
        setTodos(newTodos);
    }
    
    return (
        <div className="todo-app-container">
            <h1>My Ultimate To-Do List</h1>

            <div className="input-area">
                <input
                    type="text"
                    placeholder="พิมพ์สิ่งที่ต้องทำ"
                    value={inputText}
                    onChange={handleInputChange}
                />

                <button className="add-button" onClick={handleAddTodo}>
                    เพิ่ม
                </button>
            </div>

            <ul>
                {todos.map( (todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>
                            ลบ
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))