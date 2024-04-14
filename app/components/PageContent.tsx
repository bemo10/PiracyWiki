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
        <div>
            <h1 className="mt-5 mb-8 ml-4 text-3xl font-bold">Movies & TV Shows</h1>

            <div className="divider divider-start mt-11 mb-8 px-11">
                <h1 className="text-lg font-bold text-slate-500">Streaming</h1>
            </div>
            <WebsiteList websites={streamingWebsites} />

            <div className="divider divider-start mt-11 mb-8 px-11">
                <h1 className="text-lg font-bold text-slate-500">Direct downloads</h1>
            </div>
            <WebsiteList websites={directDownloadWebsites} />

            <div className="divider divider-start mt-[5rem] mb-8 px-11">
                <h1 className="text-lg font-bold text-slate-500">Torrents</h1>
            </div>
            <WebsiteList websites={torrentWebsites} />
        </div>
    )
}

export default PageContent