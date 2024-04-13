import React, { useEffect } from 'react'
import WebsiteList from "@/app/components/WebsiteList";

const PageContent = async () => {
    const randomNum = Math.random(); // use random number as query parameter to bypass caching
    const websites = await fetch(`https://raw.githubusercontent.com/bemo10/PiracyWiki/master/public/assets/json/websites.json?${randomNum}`, {
        cache: 'no-store'
    })
        .then((response) => {
            return response.json();
        });
    const streamingWebsites = websites;
    const directDownloadWebsites = websites;
    const torrentWebsites = websites;

    return (
        <>
            <h1 className="mt-5 mb-8 text-3xl font-bold">Movies & TV Shows</h1>

            <div className="divider divider-start mt-11 mb-8">
                <h1 className="text-lg font-bold">Streaming</h1>
            </div>
            <WebsiteList websites={streamingWebsites} />

            <div className="divider divider-start mt-11 mb-8">
                <h1 className="text-lg font-bold">Direct donwloads</h1>
            </div>
            <WebsiteList websites={directDownloadWebsites} />

            <div className="divider divider-start mt-[5rem] mb-8">
                <h1 className="text-lg font-bold">Torrents</h1>
            </div>
            <WebsiteList websites={torrentWebsites} />

            <div className='py-11' />
        </>
    )
}

export default PageContent