import React from 'react'
import Link from 'next/link'

interface NavigationItem {
    name : string,
    path : string,
    sections?: Array<NavigationItem>
}

const SideBar = () => {
    const streaming : NavigationItem = {
        name: 'Streaming',
        path: '#streaming'
    };
    const directDownload : NavigationItem = {
        name: 'Direct Downloads',
        path: '#direct-downloads'
    };
    const torrent : NavigationItem = {
        name: 'Torrents',
        path: '#torrents'
    };

    const menu : Array<NavigationItem> = [
        {
            name: 'General Purpose',
            path: "/general-purpose",
            sections: []
        },
        {
            name: 'Software',
            path: "/software",
            sections: [
                directDownload,
                torrent
            ]
        },
        {
            name: 'Video Games',
            path: "/video-games",
            sections: [
                directDownload,
                torrent
            ]
        },
        {
            name: 'Movies & TV Shows',
            path: "/movies-and-tv-shows",
            sections: [
                streaming,
                directDownload,
                torrent
            ]
        },
        {
            name: 'Anime',
            path: "/anime",
            sections: [
                streaming,
                directDownload,
                torrent
            ]
        },
        {
            name: 'Music',
            path: "/music",
            sections: [
                directDownload,
                torrent
            ]
        },
        {
            name: 'Books',
            path: "/books",
            sections: [
                directDownload,
                torrent
            ]
        },
        {
            name: 'Sports',
            path: "/sports",
            sections: [
                streaming,
                directDownload,
                torrent
            ]
        }
    ];

    return (
        <div className="ml-4">
            <ul className="menu text-base font-medium text-slate-600">
                {menu.map((category) =>
                    <li>
                        <details>
                            <summary>
                                <Link className='hover:link' href={'/category/'+category.path}>{category.name}</Link>
                            </summary>
                            <ul>
                                {category.sections?.map(section =>
                                    <li>
                                        <Link scroll={true} className='hover:link' href={'/category'+category.path+section.path}>{section.name}</Link>
                                    </li>
                                )}
                            </ul>
                        </details>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SideBar