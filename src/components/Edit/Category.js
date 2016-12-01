import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <li className="App-main__category-item">
                <label><span className="category-name">This is category</span></label>
                <div className="item__button-block">
                    <button className="item__button">Revert</button>
                </div>
            </li>
        );
    }
}

export default Category;