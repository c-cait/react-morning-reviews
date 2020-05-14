import React, { Component } from 'react';


function ListItem(props) {
    return (
        <div className='List-Item'>
            <img className='movie-poster' src={props.movie.posterImg}></img>

            <div className='movie-info'>
                <p>{props.movie.title}</p>
                <p>{props.movie.year}</p>
            </div>
            
        
        </div>
    )
}

export default ListItem;