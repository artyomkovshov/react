import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {
    render() {
        return (
            <ul className="App-main__items-list">
                <Item/>
                <Item/>
                <Item/>
            </ul>
        );
    }
}

export default ItemsList;