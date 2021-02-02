import React, { useEffect, useState }  from "react";
import filmService from '../services/films'


const FilmItem = ({url}) => {
    const [filmDetails, setFilmDetails] = useState(null)

    useEffect( async () => {
        setFilmDetails( await filmService.getFilmDetails(url) )
    },[url])

    return (
        <div className="film">
            {filmDetails && filmDetails.title || 'loading...'}
        </div>
    )
}

export default FilmItem;