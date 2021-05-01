import React, { useState } from 'react';

const SearchBar = ({ label }) => {

    const [term, setTerm] = useState('');

    const onChange = (event) => {

        setTerm(event.target.value)

    }

    const onSubmit = (event) => {

        event.preventDefault()

    }

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>{label}</label>
                    <input value={term} type="text" onChange={onChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;