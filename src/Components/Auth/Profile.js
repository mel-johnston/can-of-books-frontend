import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-info">
        <span><img src={user.picture} alt={user.name} />{user.name}</span>
      </div>
    )
  );
};

export default Profile;