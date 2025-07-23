import { useContext, useEffect, useState } from "react";
import { UserContext } from "../src/App";

function collections(params) {

    const [allAnime, setAllAnime] = useState([]);

    const { username } = useContext(UserContext)

    useEffect(() => {
        async function fetchCollection() {
            try {
                const response = await fetch(`http://localhost:8080/getcollection/${username}`);
                const data = await response.json();
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

    const dropped = allAnime.filter(anime => anime.category === 'Dropped');
    console.log(dropped)
    const planToWatch = allAnime.filter(anime => anime.category === 'Plan to Watch');
    console.log(planToWatch)
    const watching = allAnime.filter(anime => anime.category === 'Watching');
    const completed = allAnime.filter(anime => anime.category === 'Completed');


    return (
        <div className="homePage">

        </div>
    )
}

export default collections

