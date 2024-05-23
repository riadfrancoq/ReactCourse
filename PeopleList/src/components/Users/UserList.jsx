import React from "react";
import Card from '../UI/Card';
import classes from './UsersList.module.css';
const UserList = (props) => {
    return (
        <Card className={classes.users}>
        <ul>
            {props.users.map((user, i) => (
                <li key={i}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
        </Card>
    )
}


export default UserList;