'use client';
import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="form-control">
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/search?${search}` }} method='get'>
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered mr-6 w-72 focus:outline-none focus:shadow"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar