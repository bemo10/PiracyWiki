'use client';
import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="form-control ml-4">
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/search?${search}` }} method='get'>
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar