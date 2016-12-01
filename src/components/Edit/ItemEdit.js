import React, { Component } from 'react';

class ItemEdit extends Component {
    render() {
        return (
            <div className="App-main__items">
                <button>Save Changes</button>
                <button>Cancel</button>
                <input type="text" placeholder="Header"/>
                <label><input type="checkbox"/><span>Done</span></label>
                <input type="text" placeholder="Description"/>
            </div>
        );
    }
}

export default ItemEdit;