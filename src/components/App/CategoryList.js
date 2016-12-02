import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {


    render() {
        const sub = {
            left: '2em'
        };

        const categories = [
            {name: "High priority" , id: 1, parentID: null, select: false},
            {name: "Medium priority" , id: 2, parentID: null, select: false},
            {name: "Low priority" , id: 2, parentID: null, select: false}
        ];


        return (
            <ul className="App-main__category-list">
                {categories.map((elem) => <Category params={elem}/>)}
                <Category style={sub}/>
                <Category style={sub}/>
                <Category style={sub}/>
            </ul>
        );
    }
}

export default CategoryList;