import React from 'react';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { logo } from '../utils/Data';

function Header(props) {
    console.log(logo);
    
    return (
        <div className='flex justify-evenly items-center bg-slate-600 p-2 text-white'>
            <div className='w-48 '>
                <img src={logo} alt="" />
            </div>
            <input type="text" placeholder='Ban tim gi ?' className='w-56 rounded-xl p-1 text-black' />

            <div className='flex gap-3 '>
                <button className='flex gap-1 items-center'>
                    <CiUser />
                    Dang nhap
                </button>
                <button className='flex gap-1 items-center '>
                    <CiShoppingCart />

                    Gio hang
                </button>
            </div>
            <div>
                <button className='flex gap-1 items-center'>
                    <FaLocationDot />

                    Dia chi
                </button>
            </div>

        </div>
    );
}

export default Header;