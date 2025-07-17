import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="Login-page">

            <form action="Post">
                <input type="username" onChange={(event) => { setUsername(event.target.value) }} placeholder="USERNAME" />
                <input type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="PASSWORD" />

                <input type="submit" placeholder="LOGIN"/>
            </form>
            <hr />
            <p>New User?</p>
        

            <Link to='/signup'>SIGN-UP</Link>
        </div>

    )
}

export default Login