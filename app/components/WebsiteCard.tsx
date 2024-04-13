import React from 'react'
import Image from 'next/image'

const WebsiteCard = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis odio vel vehicula malesuada. Praesent hendrerit ornare nunc, rutrum tempus ipsum commodo quis. Donec tristique elit et venenatis imperdiet."
        .substring(0, 50 + Math.random() * 100);

    return (
        <div className="card w-96 bg-base-100 shadow-md border">
            <div className="card-body">
                <div className='flex justify-start gap-4'>
                        <h2 className="card-title">
                            <a className='link' href="" target='_blank'>piracywebsite.com</a>
                        </h2>
                    <div className='ml-auto'>
                        <Image src="/assets/images/piracy.png" alt='piracy' width={60} height={60}></Image>
                    </div>
                </div>
                <p>
                    {description}
                </p>
                <div className="mt-4 card-actions justify-end">
                    <button className="btn btn-secondary">Learn more</button>
                    <button className="btn btn-primary">Open</button>
                </div>
            </div>
        </div>
    )
}

export default WebsiteCard