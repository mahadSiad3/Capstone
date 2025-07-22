import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useUser } from "../src/UserContext.jsx"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {setUsername: setLoggedUser} = useUser();

    console.log(username,password)

        async function loginValidate(e) {
            e.preventDefault()

             const userData ={
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify({username,password})
            }
            
           try {

            // const userData ={
            //     method:'POST',
            //     headers:{'content-type':'application/json'},
            //     body: JSON.stringify({username,password})
            // }
            console.log(userData)

            const response = await fetch('http://localhost:8080/login',userData)
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(data === 'user-exists'){
                    setLoggedUser(username)
                 
              navigate('/')
               console.log(response)
                 alert('user-exists')
            }
            else{
                alert('user does not exist')
            }
                
           } catch (error) {
            console.log(`userdata: ${userData.body} , data: ${''}`)
           }
            
        }

    return (
        <div className="Login-page">

            <form onSubmit={loginValidate}>
                <input type="username" onChange={(event) => { setUsername(event.target.value) }} placeholder="USERNAME" />
                <input type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="PASSWORD" />

                <input type="submit" value="Login" style={{backgroundColor:"black"}}/>
            </form>
            <hr />
            <p>New User?</p>
        

            <Link to='/signup'>SIGN-UP</Link>
        </div>

    )
}

export default Login