import React, { useState } from 'react';
import { foods } from "../utils/Data";

function Main(props) {
   const [count,setCount] = useState(true);

    return (
        <div className='grid grid-cols-3 gap-3' >
            <h1 className={count ? "hidden" : ""}>Hien</h1>
            {count}
              <button onClick={() => setCount(!count)}>++</button>
            {foods.map(element => (
                <div className='col-span-1 border border-1 border-black rounded-lg p-2'>
                    <img className='h-64' src={element.img} alt="" />
                    <p>{element.nameFood}</p>
                    <p>{element.price}</p>
                </div>
            ))
            }
        </div>

    );
}

export default Main;