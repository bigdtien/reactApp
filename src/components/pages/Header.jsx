import React from 'react';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { logo } from '../utils/Data';
import { Link } from 'react-router-dom';

function Header(props) {
    console.log(logo);
    
    return (
        <div className='flex justify-evenly items-center bg-slate-600 p-2 text-white'>
            <div className='w-48 '>
                <img src={logo} alt="" />
            </div>
            <input type="text" placeholder='Ban tim gi ?' className='w-56 rounded-xl p-1 text-black' />

            <div className='flex gap-3 '>
                <Link to={"/todolist"} className='flex gap-1 items-center'>
                    <CiUser />
                    To do list
                </Link>
                <Link to={"/categories"} className='flex gap-1 items-center '>
                    <CiShoppingCart />
                    Categories 
                </Link>
            </div>
            <div>
                <Link to={"/products"} className='flex gap-1 items-center'>
                    <FaLocationDot />

                    Products
                </Link>
            </div>

        </div>
    );
}

export default Header;