// 1. บอก React ว่าเราจะใช้ "useState" (นี่คือ "ความจำ" ของแอป)
const { useState } = React;

// 2. นี่คือ "Component" (ส่วนประกอบ) หลักของแอปเรา
function App() {

    // 3. นี่คือ "State" (ความจำ) ของเรา
    // เรา "จำ" 2 อย่าง: "รูปที่กำลังแสดง" และ "ชื่อที่กำลังแสดง"
    // (ค่าเริ่มต้นคือรูป "Gangster")
    const [currentImage, setCurrentImage] = useState("group.jpg");
    const [currentName, setCurrentName] = useState("Gangster");

    // 4. นี่คือ "ฟังก์ชัน" (สูตรอาหาร) ของเรา
    // สังเกตว่าเรามี "ฟังก์ชันเดียว" ที่รับ "ข้อมูล" (newImage, newName)
    function changeFriend(newImage, newName) {
        // "สั่ง" React: "จงเปลี่ยน State"
        setCurrentImage(newImage);
        setCurrentName(newName);
    }

    // 5. นี่คือ "หน้าตา" (JSX) ที่เราจะวาด
    // สังเกตว่า "src" และ "h2" ถูก "ผูก" (Bound) กับ "State" ของเรา
    return (
        <div> {/* React บังคับให้มี "กล่อง" หุ้ม 1 ชั้นเสมอ */}
            <h1>The Friend Switcher (React Version)</h1>
            <p>คลิกที่ปุ่มเพื่อเปลี่ยนรูป</p>

            <div className="gallery-container"> {/* (ใน JSX, "class" ต้องเขียนว่า "className") */}
                
                <img id="mainImage" src={currentImage} alt="Profile Photo" />
                
                <h2 id="friendName">{currentName}</h2>
            </div>

            <div className="button-container">
                {/* ------------------------------------
                    (ภารกิจของคุณเริ่มต้นตรงนี้)
                    ------------------------------------
                    "งาน" ของคุณคือ:
                    "เชื่อม" ปุ่มเหล่านี้ ให้ "เรียก" ฟังก์ชัน "changeFriend"
                    และ "ส่ง" ข้อมูล (URL รูป และ ชื่อ) ที่ถูกต้องเข้าไป
                */}

                {/* ตัวอย่าง (ปุ่ม "Gangster") ผมทำให้แล้ว: */}
                <button onClick={() => changeFriend("group.jpg", "Gangster")}>
                    Gangster
                </button>
                
                {/* ภารกิจที่ 1: ปุ่ม "Bird" */}
                {/* (คำใบ้: Copy-Paste-Edit จากปุ่ม Gangster) */}
                {/* (รูป: "bird.jpg", ชื่อ: "Bird") */}
                <button onClick={() =>changeFriend("bird.jpg","Bird")}>
                    Bird
                </button>

                {/* ภารกิจที่ 2: ปุ่ม "Arm" */}
                {/* (รูป: "arm.jpg", ชื่อ: "Arm") */}
                <button onClick={()=> changeFriend("arm.jpg","Arm")}>
                    Arm
                </button>

                {/* ภารกิจที่ 3: ปุ่ม "U" (Yu) */}
                {/* (รูป: "u.jpg", ชื่อ: "U") */}
                <button onClick={()=> changeFriend("u.jpg","U")}>
                    U
                </button>

                {/* ภารกิจที่ 4: ปุ่ม "Kik" */}
                {/* (รูป: "kik.jpg", ชื่อ: "Kik") */}
                <button onClick={()=> changeFriend("kik.jpg","Kik")}>
                    Kik
                </button>

                {/* ภารกิจที่ 5: ปุ่ม "Kwan" */}
                {/* (รูป: "kwan.jpg", ชื่อ: "Kwan") */}
                <button onClick={()=> changeFriend("kwan.jpg","Kwan")}>
                    Kwan
                </button>

                {/* ภารกิจที่ 6: ปุ่ม "Namo" */}
                {/* (รูป: "namo.jpg", ชื่อ: "Namo") */}
                <button onClick={()=> changeFriend("namo.jpg","Namo")}>
                    Namo
                </button>

            </div>
        </div>
    );
}

// 6. "สั่ง" React: "จงวาด <App /> ลงไปใน <div id='root'>"
ReactDOM.render(<App />, document.getElementById('root'));