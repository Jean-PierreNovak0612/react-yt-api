import React from 'react';

import SearchBar from './SearchBar';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
    return (
        <div className="ui container">
            <SearchBar label="Video search"/>
        </div>
    )
};

export default App;