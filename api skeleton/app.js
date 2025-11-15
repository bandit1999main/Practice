// (นี่คือที่ที่เราจะ "เพิ่ม" ทฤษฎีใหม่ๆ เข้าไป)
const{useState, useEffect} = React;

// 1. นี่คือ "Component" (ส่วนประกอบ) หลักของแอปเรา
function App() {

    // (เดี๋ยว State จะมาอยู่ตรงนี้)
    const[users, setUsers] = useState([])
    // (เดี๋ยว useEffect จะมาอยู่ตรงนี้)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    function deleteUser(idToDelete){
        const newUsers = users.filter( (user) => {
            return user.id !== idToDelete;
        });
        setUsers(newUsers)
    }

    // 2. นี่คือ "หน้าตา" (JSX) ที่เราจะวาด
return (
        <div className="user-list-container">
            <h1>User List (from API)</h1>
            
            <ul>
                {users.map( (user) => {
                    return (
                        <li key={user.id}>
                            <span>
                                <strong>{user.name}</strong> ({user.email})
                            </span>

                            {/* --- (นี่คือ "ปุ่ม" ที่เราเพิ่มเข้ามาใหม่) ---
                                1. เรา "เชื่อม" onclick
                                2. เรา "เรียก" deleteUser
                                3. เรา "ส่ง" user.id (ของคนนี้) เข้าไป
                            */}
                            <button onClick={() => deleteUser(user.id)}>
                                ลบ (Delete)
                            </button>
                            {/* --- (สิ้นสุดส่วนที่เพิ่ม) --- */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// 3. "สั่ง" React: "จงวาด <App /> ลงไปใน <div id='root'>"
ReactDOM.render(<App />, document.getElementById('root'));