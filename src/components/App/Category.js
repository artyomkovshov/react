import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <li className="App-main__category-item">
                <label><button>Subs</button><span className="category-name">This is category</span></label>
                <button>Edit</button>
                <div className="item__button-block">
                    <button className="item__button">Remove</button>
                    <button className="item__button">Add</button>
                </div>
            </li>
        );
    }
}

export default Category;