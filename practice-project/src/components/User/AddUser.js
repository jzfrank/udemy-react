import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const isValidAge = (age) => {
    if (isNaN(age)) return false;
    const numericAge = +age;
    if (numericAge < 0 || numericAge > 120) return false;
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "username cannot be empty!",
      });
    } else if (enteredAge.trim().length === 0) {
      setError({
        title: "Invalid age",
        message: "age cannot be empty!",
      });
    } else if (!isValidAge(enteredAge)) {
      setError({
        title: "Invalid age",
        message: "age must make sense!",
      });
    } else {
      const newUser = {
        name: enteredName,
        age: enteredAge,
      };
      props.onAddUser(newUser);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
