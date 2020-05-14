import React, { Component } from 'react';
import ListItem from './ListItem';
import movieData from '../data/movies.json';

class List extends Component {
    constructor() {
        super();

        this.state = {
            movies: movieData
        }
    }


    render() {
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movie}/>
            //movie.id accessing object thorugh map and setting key = id
            //movie is the name of the prop we are about to pass
            //{movie} is accessing each element(object) in the movies.json file

        })
        return (
            <div>{moviesMap}</div>
        )
    }
}


export default List;