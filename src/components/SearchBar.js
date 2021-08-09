import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [search, setSearch] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        // Callback from parent component
        onFormSubmit(search);
    };

    return (
        <div className="ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
