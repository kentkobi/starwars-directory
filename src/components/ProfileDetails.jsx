import React from "react";
import FilmList from './FilmList';

const ProfileDetails = ({id, name, birth_year, gender, films}) => {
    return (
        <div id={id} className="profile-details">
            <div>Name: {name}</div>
            <div>Birth year: {birth_year}</div>
            <div>Gender: {gender}</div>
            <br />
            <div>
                List of Films:
                <FilmList films={films} />
            </div>
        </div>
    )
}

export default ProfileDetails;