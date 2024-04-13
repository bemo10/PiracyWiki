import React from 'react'
import Image from 'next/image'

interface Props {
    website: Website
}

const WebsiteCard = ({ website }: Props) => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis odio vel vehicula malesuada. Praesent hendrerit ornare nunc, rutrum tempus ipsum commodo quis. Donec tristique elit et venenatis imperdiet."
        .substring(0, 50 + Math.random() * 100);

    return (
        <div className="card compact px-4 w-96 bg-base-100 shadow-md border">
            <div className="card-body">
                <div className='flex justify-start gap-4'>
                    <h2 className="card-title">
                        <a className='hover:link break-all' href={website.url} target='_blank'>{website.url.substring(website.url.indexOf(".") + 1)}</a>
                    </h2>
                    <Image className='ml-auto' src={website.imageUrl} alt='piracy' width={60} height={60}></Image>
                </div>
                <p>
                    {website.description}
                </p>
                <div className="mt-4 card-actions justify-end">
                    <button className="btn btn-outline btn-secondary btn-sm">Learn more</button>
                    <button className="btn btn-primary btn-sm text-white">
                        <a href={website.url} target='_blank'>Open</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WebsiteCard