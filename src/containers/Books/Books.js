import React, { Component } from 'react';
import {dataBook} from '../../helpers/constant';
import Book from '../Book/Book'

class Books extends Component {

    state = {

           dataBook
         

    }
    render() {
        console.log(this.state.dataBook)
        return (
            <div>
                <Book />
            </div>
        );
    }
}

export default Books;