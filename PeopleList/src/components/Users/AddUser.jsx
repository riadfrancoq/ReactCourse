import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from '../UI/Button';
const AddUser = () => {
    const [enteredUsername, setEnteredUsername] =useState("");
    const [enteredAge, setEnteredAge] =useState(null);

    const addUserHandler = (e) => {
        e.preventDefault();

    };

    const usernameChangeHandler = (e) => {
        e.preventDefault();
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        e.preventDefault();
        setEnteredAge(e.target.value);
    };

    return( 

    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>

            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
            
                <label htmlFor="age">Age (Years)</label>

            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

            <Button type="submit"> Add User</Button>

        </form> 
    </Card>

    );
};


export default AddUser;