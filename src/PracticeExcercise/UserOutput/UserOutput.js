import React from "react";

const UserOutput = ({userName,value}) => {
  return (
    <div>
      This is UserOutput Component
      <p>UserName: <b>{userName}</b></p>
      <p>{value}</p>
    </div>
  );
};

export default UserOutput;
