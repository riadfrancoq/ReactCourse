import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();


    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim() === 0) {
            setError({
                title: "Invalid input ",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;

        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid input ",
                message: "Please enter a valid age > 0 (non-empty values)."
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
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
            ref={nameInputRef}
            />
            
                <label htmlFor="age">Age (Years)</label>

            <input
            id="age"
            type="number"
            ref={ageInputRef}
            />

            <Button type="submit"> Add User</Button>

        </form> 
    </Card>
        </ >
    );
};


export default AddUser;