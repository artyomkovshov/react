import React, { Component } from 'react';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';

class CategoryContainer extends Component {
    render() {
        return (
            <div className="App-main__category">
                <AddCategory></AddCategory>
                <CategoryList/>
            </div>
        );
    }
}

export default CategoryContainer;