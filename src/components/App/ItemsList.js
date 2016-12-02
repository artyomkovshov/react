import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: "Cook dinner", id: 1, done: false},
                {name: "Learn react", id: 2, done: false},
                {name: "Fix skedooler", id: 3, done: false}
            ]
        }
    }

    render() {

        const array = this.state.items.map((elem) => <Item params={elem}/>);


        return (

        <ul className="App-main__items-list">
            {array}
        </ul>

        );
    }
}

export default ItemsList;