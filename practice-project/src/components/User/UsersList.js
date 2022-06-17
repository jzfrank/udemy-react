import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import { v4 as uuidv4 } from "uuid";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={uuidv4()}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
