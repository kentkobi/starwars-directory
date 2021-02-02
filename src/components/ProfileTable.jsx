import React from "react";

const ProfileTable = ({profiles, getProfiles, getProfileDetails}) => {

    const renderHeader = () => {
        let headerElement = ['name', 'height', 'mass']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return profiles && profiles.results && profiles.results.map(profile => {
            return (
                <tr onClick={() => getProfileDetails(profile)}>
                    <td>{profile.name}</td>
                    <td>{profile.height}</td>
                    <td>{profile.mass}</td>
                </tr>
            )
        })
    }

    return (
        <div className="profile-list">
            <table>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>

            <button onClick={() => getProfiles(profiles.previous)} disabled={!profiles.previous}>previous</button>
            <button onClick={() => getProfiles(profiles.next)}  disabled={!profiles.next}>next</button>
        </div>
    )
}


export default ProfileTable;