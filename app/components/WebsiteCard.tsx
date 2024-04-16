import React from 'react'
import Image from 'next/image'

interface Props {
    website: Website
}

const WebsiteCard = ({ website }: Props) => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis odio vel vehicula malesuada. Praesent hendrerit ornare nunc, rutrum tempus ipsum commodo quis. Donec tristique elit et venenatis imperdiet."
        .substring(0, 50 + Math.random() * 100);

    return (
        <div className="card compact px-2 bg-base-100 shadow border">
            <div className="card-body">
                <div className='flex flex-row justify-start gap-4'>
                    <h2 className="flex-1 card-title">
                        <a
                            className='hover:link break-all text-lg text-blue-500'
                            href={website.url} target='_blank'>
                            {website.url.substring(website.url.indexOf(".") + 1)}
                        </a>
                    </h2>
                    <Image className='flex-none w-[50px] h-[50px]' src={website.imageUrl} alt='piracy' width={50} height={50}></Image>
                </div>
                <p>
                    {website.description}
                </p>
                {/* <div className="mt-4 card-actions justify-end">
                    <button className="btn btn-outline btn-secondary btn-sm">Learn more</button>
                    <button className="btn btn-primary btn-sm text-white">
                        <a href={website.url} target='_blank'>Open</a>
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default WebsiteCard