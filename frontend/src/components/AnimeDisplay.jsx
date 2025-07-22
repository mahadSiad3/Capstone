import '/css/dropdown.css'
import { useState, useRef, useEffect } from 'react';

function AnimeDisplay({ anime }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    function dropdownButtonClick() {
        setDropdownOpen(!dropdownOpen);
    }

     async function addAnimeCollection (category){
     const savedAnime = {
        mal_id: anime.mal_id,
        title: anime.title_english || anime.title,
        image_url: anime.images.jpg.image_url,
        category: category
     }
     console.log(savedAnime)
     console.log('line 21 reached on animedisplay')

        //   const response = await fetch('http://localhost:8080/login',userData)
        //     console.log(response)
        //     const data = await response.json()
        //     console.log(data)
        //     if(data === 'user-exists'){
                  
                 
        //       navigate('/')
        //        console.log(response)
        //          alert('user-exists')
        //     }
        //     else{
        //         alert('user does not exist')
        //     }
                
        //    } catch (error) {
        //     console.log(`userdata: ${userData.body} , data: ${''}`)
        //    }
            
        // }
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
            </div>
        </div>
    )
}

export default AnimeDisplay