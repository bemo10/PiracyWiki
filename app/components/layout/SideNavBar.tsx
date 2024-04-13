import React from 'react'

const SideBar = () => {
    return (
        <div className="overflow-y-scroll h-full pl-4 w-[16rem]">
            <ul className="menu">
                <li><a>General Purpose</a></li>
                <li>
                    <details>
                        <summary><a>Software</a></summary>
                        <ul>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Video Games</a></summary>
                        <ul>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Movies & TV Shows</a></summary>
                        <ul>
                            <li><a>Stream</a></li>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Anime</a></summary>
                        <ul>
                            <li><a>Stream</a></li>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Music</a></summary>
                        <ul>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Books</a></summary>
                        <ul>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Sports</a></summary>
                        <ul>
                            <li><a>Stream</a></li>
                            <li><a>Direct Download</a></li>
                            <li><a>Torrent</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>Misc.</a></li>
            </ul>
        </div>
    )
}

export default SideBar