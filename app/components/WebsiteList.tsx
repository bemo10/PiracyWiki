import React from 'react'
import WebsiteCard from '@/app/components/WebsiteCard'

interface Props {
    websites: Array<Website>;
}

const WebsiteList = ({ websites }: Props) => {
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-6'>
                {websites.map(website =>
                    <WebsiteCard key={website.url} website={website} />
                )}
            </div>
            <div className='flex flex-row justify-center'>
                {/* TODO: This button should open a search with the queries that correspond to this category/subcategory */}
                <a className='hover:link mt-8 font-bold text-pink-400' href="/search?category&subcategory">More</a>
            </div>
        </div>
    )
}

export default WebsiteList