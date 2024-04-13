import React from 'react'
import WebsiteList from "@/app/components/WebsiteList";

const PageContent = () => {
    return (
        <>
            <h1 className="mt-5 mb-8 text-3xl font-bold">Software</h1>

            <div className="divider divider-start mt-11 mb-8">
                <h1 className="text-lg font-bold">Direct donwloads</h1>
            </div>
            <WebsiteList />

            <div className="divider divider-start mt-[5rem] mb-8">
                <h1 className="text-lg font-bold">Torrents</h1>
            </div>
            <WebsiteList />

            <div className='py-11' />
        </>
    )
}

export default PageContent