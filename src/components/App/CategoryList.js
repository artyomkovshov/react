import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {
    render() {
        const sub = {
            left: '2em'
        };

        return (
            <ul className="App-main__category-list">
                <Category/>
                <Category/>
                <Category/>
                <Category style={sub}/>
                <Category style={sub}/>
                <Category style={sub}/>
            </ul>
        );
    }
}

export default CategoryList;