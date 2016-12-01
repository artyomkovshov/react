import React, { Component } from 'react';

class AddItem extends Component {
    render() {
        return (
            <div className="App-main__add-items">
                <input type="text" placeholder="New input"/>
                <button>Add</button>
            </div>


        );
    }
}

export default AddItem;