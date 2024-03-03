
import React, {useContext} from "react";
import UserContext from "../context/UserContext.js";

export const Profile = () => {

    const {user} = useContext(UserContext)


    if (!user) {
        return <h1>Please Login</h1>
    }

    return (
        <>

            <h1>Welcome {user.username}</h1>
        </>
    )
}
