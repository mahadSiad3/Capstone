import '/css/dropdown.css'

function animeDisplay({ anime }) {

    
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  function dropdownButtonClick() {
    setDropdownOpen(!dropdownOpen);
  }

    return (
        <div className="anime-card">
            <div className="anime-image">
                <img src={anime.images.jpg.image_url} alt={anime.title_english || anime.title} />
                <div className="anime-button">
                    <button onClick={dropdownButtonClick} className="dropbtn">Collection</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">Watching</a>
                        <a href="#">Plan to Watch</a>
                        <a href="#">Completed</a>
                        <a href="#">Dropped</a>
                    </div>
                </div>
            </div>
            <div className="anime-info">
                <h3>{anime.title_english}</h3>
                <p>{anime.aired?.prop?.from?.year}</p>
            </div>
        </div>
    )
}

export default animeDisplay