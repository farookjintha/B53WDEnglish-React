import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = (props) => {
  const { profiles } = props;
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  // retrieving search parameters:
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let name = searchParams.get("profilename");
    console.log("Name: ", name);

    let email = searchParams.get("profileemail");
    console.log("Email: ", email);
    if (email) {
      let results = profiles.filter((profile) => profile.email === email);
      setFilteredProfiles(results);
    } else {
      setFilteredProfiles(profiles);
    }
  }, []);

  return (
    <div>
      <h1>This is Home Component</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredProfiles.map((profile, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>
                  <Link to={`/profiles/${profile.id}`}>
                    <span>Go to profile</span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
