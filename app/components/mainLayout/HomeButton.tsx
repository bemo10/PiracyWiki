import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomeButton = () => {
    return (
        <div className="flex justify-center items-center gap-2 py-8">
            <Image src="/assets/images/piracy.png" alt='piracy' width={50} height={50} quality={100} />
            <Link className="link-hover text-xl" href='/'>PiracyWiki</Link>
        </div>
    )
}

export default HomeButton