import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] =useState("");
    const [enteredAge, setEnteredAge] =useState('');
    const [error, setError] = useState();
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
            setError({
                title: "Invalid input ",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;

        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid input ",
                message: "Please enter a valid age > 0 (non-empty values)."
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    };

    const usernameChangeHandler = (e) => {
        e.preventDefault();
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        e.preventDefault();
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return( 
        <>
    {error &&<ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}/>}
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>

                <label htmlFor="username">Username</label>

            <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            />
            
                <label htmlFor="age">Age (Years)</label>

            <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler} 
            />

            <Button type="submit"> Add User</Button>

        </form> 
    </Card>
        </>
    );
};


export default AddUser;