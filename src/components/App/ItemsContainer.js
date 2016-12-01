import React, { Component } from 'react';
import ItemsList from './ItemsList';
import AddItem from './AddItem';

class ItemsContainer extends Component {
    render() {
        return (
            <div className="App-main__items">
                <AddItem></AddItem>
                <ItemsList/>
            </div>
        );
    }
}

export default ItemsContainer;