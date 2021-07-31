import React from "react";
import infoData from "../../infoData";
import MyInfo from "../../components/MyInfo";
import profile from "../../../src/profile.jpg";
export default function Homepage() {
  const myInfo = infoData.map((info) => (
    <MyInfo
      key={info.id}
      name={info.name}
      motto={info.motto}
      hobbies={info.hobbies}
      ervaring={info.ervaring}
    />
  ));

  return (
    <div>
      <img src={profile} className="App-logo" alt="Karem Ortiz" />
      {myInfo}
    </div>
  );
}
