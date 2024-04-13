import React from 'react'
import Image from 'next/image'
import SearchBar from '@/app/components/mainLayout/SearchBar'

const NavBar = () => {


    return (
        <div className='navbar z-10 bg-base-100'>
            <div className="flex-1">
                <SearchBar />
            </div>
            <div className='flex-none gap-1'>
                <button className="btn btn-outline text-secondary">Donate</button>
                <button className="btn btn-ghost">
                    Forum
                    {/* <div className="badge badge-secondary pb-1 text-white">coming soon</div> */}
                </button>
                <a className="btn btn-ghost mr-4" href='https://www.reddit.com/r/Piracy/' target='_blank'>
                    r/piracy
                </a>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="mr-4 btn btn-circle avatar bg-base-100">
                        <div className="w-10 rounded-full">
                            <Image src="/assets/images/bemo.png" alt='piracy' width={60} height={60}></Image>
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content mr-2 p-2 shadow border bg-base-100 rounded-box w-52">
                        <li><a>Login</a></li>
                        <li><a>Signup</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar