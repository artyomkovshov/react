import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {name: "High priority" , id: 1, parentID: null, select: false},
                {name: "Medium priority" , id: 2, parentID: null, select: false},
                {name: "Low priority" , id: 3, parentID: null, select: false}
            ]
        }
    }


    render() {
        const sub = {
            left: '2em'
        };

        const array = this.state.categories.map((elem) => <Category params={elem}/>);

        return (
            <ul className="App-main__category-list">
                {array}
                {/*<Category style={sub}/>*/}
                {/*<Category style={sub}/>*/}
                {/*<Category style={sub}/>*/}
            </ul>
        );
    }
}

export default CategoryList;