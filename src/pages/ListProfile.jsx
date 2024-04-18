import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ListProfile = () => {
  const [filteredData, setFilteredData] = useState(null);

  const profileData = [
    {
      id: 1,
      name: "John Doe",
      profilePhoto: "public/malePic.svg",
      location: "Pune"
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePhoto: "public/femalePic.svg",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Michael Johnson",
      profilePhoto: "public/malePic.svg",
      location: "Mumbai"
    },
    {
      id: 4,
      name: "Emily Brown",
      profilePhoto: "public/femalePic.svg",
      location: "Pune"
    },
    {
      id: 5,
      name: "Daniel Martinez",
      profilePhoto: "public/malePic.svg",
      location: "Delhi"
    },
    {
      id: 6,
      name: "Olivia Johnson",
      profilePhoto: "public/femalePic.svg",
      location: "Mumbai"
    },
    {
      id: 7,
      name: "William Lee",
      profilePhoto: "public/malePic.svg",
      location: "Pune"
    },
    {
      id: 8,
      name: "Sophia Garcia",
      profilePhoto: "public/femalePic.svg",
      location: "Delhi"
    },
    {
      id: 9,
      name: "Ethan Wilson",
      profilePhoto: "public/malePic.svg",
      location: "Mumbai"
    },
    {
      id: 10,
      name: "Ava Taylor",
      profilePhoto: "public/femalePic.svg",
      location: "Pune"
    },
    {
      id: 11,
      name: "Noah Rodriguez",
      profilePhoto: "public/malePic.svg",
      location: "Delhi"
    },
    {
      id: 12,
      name: "Isabella Martinez",
      profilePhoto: "public/femalePic.svg",
      location: "Mumbai"
    },
    {
      id: 13,
      name: "James Brown",
      profilePhoto: "public/malePic.svg",
      location: "Pune"
    },
    {
      id: 14,
      name: "Mia Davis",
      profilePhoto: "public/femalePic.svg",
      location: "Delhi"
    },
    {
      id: 15,
      name: "Alexander Wilson",
      profilePhoto: "public/malePic.svg",
      location: "Mumbai"
    },
  ];

  const listProfile = profileData.map((profile) => (
    <li className="list-group-item" key={profile.id}>
      <div className="py-3">
        <img src={profile.profilePhoto} alt="Profile picture" style={{ width: "50px" }} />
        <span className="ps-2">
        <Link style={{ textDecoration: "none" }} to={`/profile/${profile.name}`}>{profile.name}</Link>
        </span>
        <Link className="btn btn-primary float-end" to={`/profile/${profile.name}`}>View Profile</Link>
        <br />
        <br />
        <div className="ms-2">Location: {profile.location}</div>
      </div>
    </li>
  ));

  function handleLocation(event) {
    const selectedLocation = event.target.value;
    if (selectedLocation === "Choose...") {
      setFilteredData(null);
    } else {
      const filteredProfiles = profileData.filter(
        (profile) => profile.location === selectedLocation,
      );
      setFilteredData(filteredProfiles);
    }
  }

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="py-2">Profiles</h1>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Select filter location</label>
          <select className="form-select" id="inputGroupSelect01" onChange={handleLocation}>
            <option defaultValue>Choose...</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
        <ul className="list-group my-5">
          {filteredData ? filteredData.map((profile) => (
            <li className="list-group-item" key={profile.id}>
              <div className="py-3">
               <img src={`/${profile.profilePhoto}`} alt="Profile picture" style={{ width: "50px" }} />
               <span className="ps-2">
               <Link style={{ textDecoration: "none" }} to={`/profile/${profile.name}`}>{profile.name}</Link>
               </span>
               <Link className="btn btn-primary float-end" to={`/profile/${profile.name}`}>View Profile</Link>
               <br />
               <br />
              <div className="ms-2">Location: {profile.location}</div>
             </div>
            </li>
    )): listProfile}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ListProfile;
