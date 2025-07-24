import '/css/dropdown.css'
import { useState, useRef, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import { BASE_URL } from '../../pages/Collections';


function AnimeDisplay({ anime }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const { username } = useContext(UserContext)
    console.log(username)

    //function to create the dropdown for the different categories.
    function dropdownButtonClick() {
        setDropdownOpen(!dropdownOpen);
    }
    // the saved list of anime into the collecion object based on the model. 
    async function addAnimeCollection(category) {
        const savedAnime = {
            mal_id: anime.mal_id,
            title: anime.title_english || anime.title,
            image_url: anime.images.jpg.image_url,
            category: category
        }
       // that is then sent as a post request creating the document

        const animeData = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ username, anime: savedAnime })
        }

       // this then checks to make sure the anime isn't already in the document under a different category
       // and adds it to the marked dropdown category.

        try {
            const response = await fetch(`${BASE_URL}/addcollection`, animeData);
        
            if (response.status === 409) {
                const result = await response.json()
                alert(`"${savedAnime.title}" is already in your "${result.category}" collection.`);

            } else if (response.ok) {
                alert(`"${savedAnime.title}" was added to your "${category}" collection.`);
            } else {
                alert("An unexpected error occurred.");
            }

        } catch (error) {
            console.error("Error adding anime to collection:", error);
            alert("An error occurred while adding the anime.");
        }

       
    }

    //useeffect to handle dropwdown 
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    console.log(anime.title)

    return (
        <div className="anime-card">
            <div className="anime-image">
                <img src={anime.images.jpg.image_url} alt={anime.title_english || anime.title} />
                <div className="anime-button" ref={dropdownRef}>
                    <button onClick={dropdownButtonClick} className="dropbtn">Collection</button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a onClick={() => addAnimeCollection("Watching")}>Watching</a>
                            <a onClick={() => addAnimeCollection("Plan to Watch")}>Plan to Watch</a>
                            <a onClick={() => addAnimeCollection("Completed")}>Completed</a>
                            <a onClick={() => addAnimeCollection("Dropped")}>Dropped</a>
                        </div>
                    )}
                </div>

            </div>
            <div className="anime-info">
                <h3>{anime.title_english}</h3>
                <p>{anime.aired?.prop?.from?.year}</p>
                <p>My-AnimeList score: {anime.score || 'No Score Voted on'}</p>
            </div>
        </div>
    )
}

export default AnimeDisplay