import React, { Component } from 'react';

class AddCategory extends Component {
    render() {
        return (
            <div className="App-main__add-category">
                <input type="text" placeholder="New category"/>
                <input type="button" value={"Add"} className="button" />
            </div>


        );
    }
}

export default AddCategory;