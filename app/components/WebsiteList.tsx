import React from 'react'
import WebsiteCard from '@/app/components/WebsiteCard'

const WebsiteList = () => {
    return (
        <div className='flex flex-wrap justify-center gap-8'>
            <WebsiteCard />
            <WebsiteCard />
            <WebsiteCard />
            <WebsiteCard />
            <WebsiteCard />
            <WebsiteCard />
        </div>
    )
}

export default WebsiteList