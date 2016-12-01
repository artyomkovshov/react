import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="App-header__search">
                <input type="text" placeholder="Search"/>
                <button>Go</button>
            </div>


        );
    }
}

export default Search;