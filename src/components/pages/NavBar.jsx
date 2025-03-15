import React from 'react';

function NavBar({handleOpen}) {
    return (
        <div>
            <div className='flex justify-between p-3 items-center'>
                <p>List Categories</p>
                <input className='border' type="text" />
                <button onClick={handleOpen} className='bg-blue-400 p-2 rounded-lg text-white'>Add</button>
            </div>
        </div>
    );
}

export default NavBar;