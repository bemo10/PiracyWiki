import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className="ml-2 font-semibold text-slate-600">
                <ul className="menu">
                    <li><a>General Purpose</a></li>
                    <li>
                        <details>
                            <summary><a>Software</a></summary>
                            <ul>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><a>Video Games</a></summary>
                            <ul>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><a>Movies & TV Shows</a></summary>
                            <ul>
                                <li><a>Streaming</a></li>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><a>Anime</a></summary>
                            <ul>
                                <li><a>Streaming</a></li>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><a>Music</a></summary>
                            <ul>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><a>Books</a></summary>
                            <ul>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><a>Sports</a></summary>
                            <ul>
                                <li><a>Streaming</a></li>
                                <li><a>Direct Downloads</a></li>
                                <li><a>Torrents</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar