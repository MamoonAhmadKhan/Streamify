import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../toolkit/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleSidebarHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-2 m-1 shadow shadow-white">
            <div className="logo flex items-center text-center text-xl col-span-2">
                <FontAwesomeIcon className='cursor-pointer' onClick={() => toggleSidebarHandler()} icon={faBars} />
                <h1 className="ml-8 text-2xl font-bold text-cyan-500">STREAMIFY</h1>
            </div>

            <div className="input-search col-span-8 text-center">
                <input className="border-1 p-1.5 w-4/6 rounded-l-full" type="text" placeholder="Search" />
                <button className="border-1 border-l-0 p-1.5 rounded-r-full cursor-pointer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className="col-span-2 text-right text-2xl p-2">
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
        </div>
    );
}

export default Header;