import React, { useState } from 'react';

const SearchBar = ({ label }) => {

    const [term, setTerm] = useState('');

    return (
        <div className="ui segment search-bar">
            <form className="ui form">
                <div className="field">
                    <label>{label}</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;