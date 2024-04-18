'use client';
import React, { useEffect, useState } from 'react'
import WebsiteGrid from "@/app/components/WebsiteGrid";

const CategoryContent = () => {
    const [websites, setWebsites] = useState([]);
    
    useEffect(() => {
        setTimeout(() => { // TEMP: Timeout to simulate fetch delay (to test website cards sekeleton)
            const randomNum = Math.random(); // use random number as query parameter to bypass caching
            fetch(`https://raw.githubusercontent.com/bemo10/PiracyWiki/master/public/assets/json/websites.json?${randomNum}`, {
                cache: 'no-store'
            })
                .then((response) => {
                    response.json()
                        .then((json) => {
                            setWebsites(json);
                        });
                });
        }, 0);
        
    }, [])

    return (
        <div>
            <h1 className="mt-5 mb-8 ml-4 text-3xl font-bold">Movies & TV Shows</h1>

            <div id='streaming' className="divider divider-start pt-11 mb-8 px-11">
                <h1 className="text-lg font-bold text-slate-500">Streaming</h1>
            </div>
            <WebsiteGrid websites={websites} />

            <div id='direct-downloads' className="divider divider-start pt-11 mb-8 px-11">
                <h1 className="text-lg font-bold text-slate-500">Direct downloads</h1>
            </div>
            <WebsiteGrid websites={websites} />

            <div id='torrents' className="divider divider-start pt-11 mb-8 px-11">
                <h1 className="text-lg font-bold text-slate-500">Torrents</h1>
            </div>
            <WebsiteGrid websites={websites} />
        </div>
    )
}

export default CategoryContent