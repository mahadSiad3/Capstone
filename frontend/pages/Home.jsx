import { useEffect } from "react"
import AnimeDisplay from "../src/components/AnimeDisplay"
import { useState } from "react"
import '../css/home.css'
import '../css/NavBar.css'


function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [count, SetCount] = useState(1)

    const [animes, setAnimes] = useState([])



  

    async function getAllTopAnime() {
        try {
            const response = await fetch("https://api.jikan.moe/v4/top/anime")
            const data = await response.json()
            return data.data
        }
        catch (e) {
            console.log(e)
        }
    }

    async function searchAnime(query) {

        const response = await fetch(
            `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=${count}`
        );
        const data = await response.json();
        return data.data;
    };

    useEffect(() => {

        async function loadPopularAnime() {
            try {
                const loadAnime = await getAllTopAnime()
                setAnimes(loadAnime)
            }

            catch (e) {
                console.log(e)
            }
        }
        loadPopularAnime()
    }, [])



    async function searchFunction(event) {
        event.preventDefault()
        try {
            const searchResults = await searchAnime(searchQuery)
            setAnimes(searchResults)
        }
        catch (e) {
            console.log(e)
        }
        setSearchQuery("")
    }



    const duplicateIds = [60489, 60636]


    return (

        <div className="homePage">
            <form onSubmit={searchFunction} className="search-form">
                <input type="text" placeholder="Search" className="search-bar" value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)} />
                <button type="submit" className="Search-btn">Search</button>
                <select className="count-drpdwn" onChange={(e) => SetCount(parseInt(e.target.value))} >

                    {[1, 5, 10, 25].map(function (number) {
                        return <option key={number} value={number}>Count: {number}</option>;
                    })}
                </select>
            </form>
            <div className="anime-display">
                {animes
                    .filter(anime =>
                        !duplicateIds.includes(anime.mal_id)
                    )
                    .map(anime => (
                        <AnimeDisplay anime={anime} key={anime.mal_id} />
                    ))}
            </div>
           
        </div>

    )

}

export default Home