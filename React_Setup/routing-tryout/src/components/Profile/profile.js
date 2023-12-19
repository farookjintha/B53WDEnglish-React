// useParams - to access path parameters
// useSearchParams - to access search parameters
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = (props) => {
  const { profiles } = props;
  const params = useParams();
  const { profileId } = params;

  const [currentProfile, setCurrentProfile] = useState(null);

  useEffect(() => {
    if (profileId) {
      let profileFound = profiles.find((profile) => profile.id === profileId);
      setCurrentProfile(profileFound);
    }
  }, []);
  return (
    <div>
      <h1>Greetings! {currentProfile && currentProfile.name} </h1>
    </div>
  );
};

export default Profile;
