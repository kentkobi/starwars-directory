import React from "react";
import FilmItem from './FilmItem';

const FilmList = ({films}) => {
    return (
        <ul className="film-list">
            {films && films.map(film => 
                <li><FilmItem key={film} url={film} /></li>
            )}
        </ul>
    )
}

export default FilmList;