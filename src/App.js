import React, { useState, useEffect } from "react";
import 

function App() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUserProfile(data.results[0]))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {userProfile ? (
        <div>
          <img src={userProfile.picture.large} alt="user" />
          <h2>{userProfile.name.first} {userProfile.name.last}</h2>
          <p>Email: {userProfile.email}</p>
          <p>Location: {userProfile.location.city}, {userProfile.location.country}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
      <button onClick={fetchUserProfile}>Reload user profile</button>
    </div>
  );
}

export default App;
