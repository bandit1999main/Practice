const{useState} = React;

function App(){

    const[inputText, setInputText] = useState("");
    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    const[todos, setTodos] = useState([])
    function handleAddTodo() {
            setTodos([...todos, inputText]);
            setInputText("")
    }

    return(
        <div className="todo-container">
            <h1>My To-Do List</h1>
            <h2>รายการที่ต้องทำ</h2>
            <input 
                type="text"
                placeholder=""
                value={inputText}
                onChange={handleInputChange}
            />

            <button onClick={handleAddTodo}>เพิ่มรายการ</button>
            <ul>
                {todos.map( (item, index) => {
                    return <li key="index">{item}</li>
                })}
            </ul>
            <hr />
            <p>คุณกำลังพิมพ์: {inputText}</p>
        </div>
    )

}

ReactDOM.render(<App />,document.getElementById('root'))