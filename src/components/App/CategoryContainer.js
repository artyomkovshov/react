import React, { Component } from 'react';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';

class CategoryContainer extends Component {
     constructor(props) {
        super(props);
        this.state = {
            categories: [
                {name: "High priority" , id: 1, parentID: null, select: false, indent: 0},
                {name: "Medium priority" , id: 2, parentID: null, select: false, indent: 0},
                {name: "Low priority" , id: 3, parentID: null, select: false, indent: 0},
                {name: "Sub" , id: 4, parentID: 3, select: false, indent: 2},
            ]
        }
    }

    render() {
        return (
            <div className="App-main__category">
                <AddCategory></AddCategory>
                <CategoryList categories={this.state.categories}/>
            </div>
        );
    }
}

export default CategoryContainer;