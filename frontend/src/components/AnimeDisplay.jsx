import '/css/dropdown.css'

function animeDisplay({ anime }) {
    function dropdownButtonClick() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
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