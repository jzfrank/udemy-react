import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const userInputSubmitHanlder = (user) => {
    setUserInfo((prevUserInfo) => [...prevUserInfo, user]);
  };

  const userDisplayClickHandler = (index) => {
    setUserInfo((prevUserInfo) => {
      prevUserInfo.pop(index);
      return prevUserInfo;
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={userInputSubmitHanlder} />
      <UsersList users={userInfo} />
    </React.Fragment>
  );
}

export default App;
