import React, { Component } from 'react';

class AddCategory extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="New category"/>
                <button>Add</button>
            </div>


        );
    }
}

export default AddCategory;