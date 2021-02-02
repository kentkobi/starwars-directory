
import React, { useState, useEffect } from "react";

/* services */
import profileService from './services/profiles'

/* components */
import ProfileTable from './components/ProfileTable';
import ProfileDetails from './components/ProfileDetails';

import './App.css';

function App() {
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState(null)

  const getProfiles = ( url ) => {
    profileService.getByUrl( url )
      .then((profiles) => {
          setProfiles(profiles)
      })
  }

  const getProfileDetails = async ( profile ) => {
    setCurrentProfile(profile);
  }

  useEffect(() => {
    profileService.getAll()
      .then((profiles) => {
          setProfiles(profiles)
      })
  }, [])

  return (
    <div className="App">
      <ProfileTable profiles={profiles} getProfiles={getProfiles} getProfileDetails={getProfileDetails}/>
      <ProfileDetails {...currentProfile} />
    </div>
  );
}

export default App;
