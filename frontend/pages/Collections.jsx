import { useContext, useEffect, useState } from "react";
import { UserContext } from "../src/App";
import '../css/collections.css'

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

    function renderSection(title, animeList) {
        if (animeList.length === 0) {
            return 
        }
        else {
            return (
                <div className="collection-section">
                    <h2>{title}</h2>
                    <div className="anime-grid">
                        {animeList.map((anime) => (
                            <div className="anime-card" key={anime.mal_id}>
                                <img
                                    src={anime.image_url || anime.images?.jpg?.image_url}
                                    alt={anime.title}
                                />
                                <p>{anime.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }


    return (
        <div className="collection-page">

            <h1 className="collection-title">YOUR ANIME COLLECTIONS</h1>
            {allAnime.length === 0 && username && (
                <p className="collection-empty">You have no anime in your collection.</p>
            )}
            {renderSection("Watching", watching)}
            {renderSection("Plan to Watch", planToWatch)}
            {renderSection("Dropped", dropped)}
            {renderSection("Completed", completed)}
        </div>
    )
}

export default collections
