import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"


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
            const response = await fetch('http://localhost:8080/signup',userData)
            const data = response.json()

            if(data== 'user-exists'){
                
            }
            else{
                alert('new user created')
               
            }
                
           } catch (error) {
            console.log(error)
           }
            
        }
    return (
        <div className="Login-page">

            <form onSubmit={userSignup}>
                <input type="username" onChange={(event) => { setUsername(event.target.value) }} placeholder="USERNAME" />
                <input type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="PASSWORD" />

                <input type="submit" value='Sign Up' style={{backgroundColor:"black"}}/>
            </form>
            <hr />
            <br/>
            <p>Existing User?</p>
        

            <Link to='/login'>LOGIN</Link>
        </div>

    )
}

export default Signup
