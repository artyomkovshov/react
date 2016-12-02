import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <li className="App-main__item">
                <label><input type="checkbox"/><span className="item-name">This is item</span></label>
                <div className="item__button-block">
                    <input type="button" className="edit-button icon" />
                </div>
            </li>
        );
    }
}

export default Item;