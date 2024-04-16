import React from 'react'
import Image from 'next/image'
import SearchBar from '@/app/components/mainLayout/SearchBar'
import HomeButton from '@/app/components/mainLayout/HomeButton'

const NavBar = () => {


    return (
        <div className='navbar z-10 bg-base-100 border-b'>
            <div className="flex-1 ml-8">
                <HomeButton />
            </div>
            <div className='flex-1'>
                <SearchBar />
            </div>
            <div className='flex-none gap-6'>
                <a className="text-xs leading-5 font-medium text-primary border rounded-full hover:shadow px-3" href='https://www.reddit.com/r/Piracy/wiki/megathread/' target='_blank'>
                    r/piracy megathread
                </a>
                <button className="btn btn-outline text-secondary px-3">Donate</button>
                {/* <button className="btn btn-ghost px-3">
                    Forum
                    <div className="badge badge-secondary text-xs text-white">new</div>
                </button> */}
                <div className="dropdown dropdown-end ml-6">
                    <div tabIndex={0} role="button" className="btn btn-circle avatar mr-4 bg-base-100">
                        <div className="w-10 rounded-full">
                            <Image src="/assets/images/guest.png" alt='piracy' width={60} height={60}></Image>
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