import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import '../css/signup.css'
import { BASE_URL } from "./Collections"

function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

        async function userSignup(e) {
            e.preventDefault()
          
            try {

            const userData ={
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify({username,password})
            }
            const response = await fetch(`${BASE_URL}/signup`,userData)
            const data = await response.json()
           //validation to make sure the user doesn't already exist and also 
           // the user id is correctly filed out.
            if(data && data== 'user-exists'){
                 alert('User already exists Please Login')
                navigate('/')
            }
            else if(!username || !password){
                alert('please fill in both both fields')
               
            }
            else{
                alert('new user created')
                navigate('/home')
            }
                
           } catch (error) {
            console.log(error)
           }
            
        }
    return (
        <div className="Login-page">

            <form onSubmit={userSignup}>
                <p>SIGN-UP</p>
                <input className="input-field" type="username" onChange={(event) => { setUsername(event.target.value) }} placeholder="USERNAME" />
                <input className="input-field" type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="PASSWORD" />

                <input className="submit-btn" type="submit" value='Sign Up' style={{backgroundColor:"black"}}/>
            </form>
            <hr />
            <br/>
            <p>Existing User?</p>
        

            <Link className="login-btn" to='/'>LOGIN</Link>
        </div>

    )
}

export default Signup
