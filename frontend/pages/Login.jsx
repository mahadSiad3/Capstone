import { useState,useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { UserContext } from "../src/App"
import '../css/login.css'
import { BASE_URL } from "./Collections"


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const loggedUser = useContext(UserContext)

    console.log(username,password)

        async function loginValidate(e) {
            e.preventDefault()

             const userData ={
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify({username,password})
            }
            
           try {

           
            console.log(userData)

            const response = await fetch(`${BASE_URL}/login`,userData)
            console.log(response)
            const data = await response.json()
            console.log(data)
            // validation check to make sure each user is logs in and is navigated to their personal collecitons.
            if(data === 'user-exists'){
                  loggedUser.setUsername(username)
                 localStorage.setItem('username',username)
              navigate('/home')
               console.log(response)
            }
            else{
                alert('user does not exist, please sign up using the sign up link below')
            }
                
           } catch (error) {
            console.log(`userdata: ${userData.body} , data: ${''}`)
           }
            
        }

    return (
        <div className="Login-page">

            <form onSubmit={loginValidate}>
                 <p>LOGIN </p>
                <input className="input-field" type="username" onChange={(event) => { setUsername(event.target.value) }} placeholder="USERNAME" />
                <input className="input-field" type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="PASSWORD" />

                <input className="submit-btn" type="submit" value="Login" style={{backgroundColor:"black"}}/>
            </form>
            <hr />
            <p>New User?</p>
        

            <Link to='/signup'>SIGN-UP</Link>
        </div>

    )
}

export default Login