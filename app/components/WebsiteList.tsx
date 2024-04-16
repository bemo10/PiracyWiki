import React from 'react'
import WebsiteCard from '@/app/components/WebsiteCard'

interface Props {
    websites: Array<Website>;
}

const WebsiteList = ({ websites }: Props) => {
    const gridStyle = {
        gridTemplateColumns: 'repeat(auto-fill, minmax(22em, 22em))'
    }

    return (
        <div>
            <div className='grid grid-flow-row gap-4 justify-center' style={gridStyle}>
                {websites.map(website =>
                    <WebsiteCard key={website.url} website={website} />
                )}
            </div>
            <div className='flex flex-row justify-center'>
                {/* TODO: This button should open a search with the queries that correspond to this category/subcategory */}
                <a className='hover:link mt-8 font-bold text-pink-400' href="/search?category&section">More</a>
            </div>
        </div>
    )
}

export default WebsiteList

// 384