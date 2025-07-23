import { useContext, useEffect,useState } from "react";
import { UserContext } from "../src/App";

function collections(params) {

    const [allAnime, setAllAnime] = useState([]);

    const {username}= useContext(UserContext)

    useEffect(() => {
        async function fetchCollection() {
            try {
                const response = await fetch(`http://localhost:8080/getcollection/${username}`);
                const data = await response.json();
                    console.log
                setAllAnime(data);
            } catch (error) {
                console.error("Failed to fetch collection:", error);
            }
        }

        if (username) {
            fetchCollection();
        }
    }, [username]);

    console.log(username)
    
    return(
         <div className="homePage">
          
        </div>
    )
}

export default collections