import React, { useState } from 'react';
 
// usestate ???
function TodoList(props) {
    const [todo, setTodo] = useState([]);
    const [task,setTask] = useState("");

    // addTask la Function
    const addTask = () => {
       setTodo([...todo, task]);
       setTask("");
    }
    // Xóa một task khỏi danh sách
    const deleteTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index)); // Lọc bỏ task tại index
        //Dấu "_" dùng để bỏ qua tham số.
        // 1 != index điều kiện filter, i là vị trí trong mảng còn index là phần tử bạn muốn xoá nếu i != index => true thì phần tử được giữ ngược lại xoá 

        // Gọi lại hàm setTodo để cho ra 1 mảng mới nơi bạn đã xoá index bạn mong muốn
    };
  
    return (
        <div>
            <div className='text-center mb-5'>
                <p className='mb-2'>To do list</p>
                <input value={task} onChange={(e) => setTask(e.target.value)} className='p-2 mr-2' type="text" placeholder='What to do ?' />
                <button onClick={addTask} className='bg-green-500 text-white p-2 rounded-lg'>Add</button>
            </div>
            {todo.map((element,index) => (
                <div className='bg-black text-white flex items-center justify-between h-12 p-2 mt-2'>
                    <p>{index + 1}</p>
                    <p>{element}</p>
                    <div>
                        <button className=' p-2 mr-2 bg-blue-400 text-white'>
                            Edit
                        </button>
                        <button onClick={() => deleteTask(index)} className=' p-2 bg-red-600 text-white'>
                            Delete
                        </button>
                    </div>
                </div>
            ))
            }


        </div>
    );
}

export default TodoList;