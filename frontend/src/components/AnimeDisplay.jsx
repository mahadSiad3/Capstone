import '/css/dropdown.css'
import { useState, useRef, useEffect } from 'react';

function AnimeDisplay({ anime }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    function dropdownButtonClick() {
        setDropdownOpen(!dropdownOpen);
    }

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


    return (
        <div className="anime-card">
            <div className="anime-image">
                <img src={anime.images.jpg.image_url} alt={anime.title_english || anime.title} />
                <div className="anime-button" ref={dropdownRef}>
                    <button onClick={dropdownButtonClick} className="dropbtn">Collection</button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a href="#">Watching</a>
                            <a href="#">Plan to Watch</a>
                            <a href="#">Completed</a>
                            <a href="#">Dropped</a>
                        </div>
                    )}
                </div>

            </div>
            <div className="anime-info">
                <h3>{anime.title_english}</h3>
                <p>{anime.aired?.prop?.from?.year}</p>
            </div>
        </div>
    )
}

export default AnimeDisplay