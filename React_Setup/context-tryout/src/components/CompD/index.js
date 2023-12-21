import { useContext } from "react";
import { AppContext } from "../../context";
import "./compD.css";

const CompD = () => {
  const { profiles, addProfile } = useContext(AppContext);

  //   console.log("App Data: in CompD:  ", appData);

  const addNewProfile = () => {
    let newProfile = {
      id: "PQR789",
      name: "Santhosh",
      email: "santhosh@gmail.com",
    };

    addProfile(newProfile);
  };

  return (
    <div>
      <h1>CompD</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => {
          return (
            <div key={index} className="profile-container">
              <div>Name: {profile.name}</div>
              <div>Email: {profile.email}</div>
            </div>
          );
        })}
      </div>
      <button onClick={addNewProfile}> Add a new Profile </button>
    </div>
  );
};

export default CompD;
