
import React from 'react'

const NavBar = () => {


    return (
        // <div className='bg-blue-200 flex fixed top-0 w-full py-4'>
        //     PiracyDex
        // </div>
        <div className='navbar fixed top-0 shadow-sm z-10 bg-base-300'>
            <div className="flex-1">
                <a className="btn btn-ghost bg-base-100 text-xl">PiracyWiki</a>
            </div>
            <details className="dropdown dropdown-end">
                <summary className="m-1 btn btn-circle avatar bg-base-100"></summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    <li><a>Login</a></li>
                    <li><a>Signup</a></li>
                </ul>
            </details>
        </div>
    )
}

export default NavBar