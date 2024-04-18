import React from 'react'
import Link from 'next/link';
import WebsiteCard from '@/app/components/WebsiteCard'

interface Props {
    websites: Array<Website>;
}

const WebsiteGrid = ({ websites }: Props) => {
    const gridStyle = {
        gridTemplateColumns: 'repeat(auto-fill, 22em)'
    }

    return (
        <div>
            <div className='grid grid-flow-row gap-4 justify-center' style={gridStyle}>
                {websites.length
                    // Content
                    ? websites.map(website =>
                        <WebsiteCard key={website.url} website={website} />
                    )
                    // Skeleton while data loads
                    : [...Array(8)].map((e, i) =>
                        <div key={i} className="skeleton w-[22em] h-[11em] bg-base-200"></div>
                    )
                }
            </div>
            <div className='flex flex-row justify-center'>
                <Link className='hover:link mt-8 font-bold text-pink-400' href="/search?category=test&section=test">More</Link>
            </div>
        </div>
    )
}

export default WebsiteGrid