
import React,{ useState , useContext} from "react";
import userContext from "../context/UserContext.js";
export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(userContext)
    const handleSunmit = (e) => {

        e.preventDefault()
        setUser({username, password})

    }
    return (
        <>

            <div style={{height: "30vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <h2>Login</h2>
                <input  type="text" placeholder='Username' value={username}
                       onChange={(e) => setUsername(e.target.value)}/>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"
                       placeholder='Password'/>
                <button onClick={handleSunmit}>Submit</button>
            </div>
        </>
    )
}
