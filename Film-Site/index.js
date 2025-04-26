let movieListField = document.querySelector(".movie-list-div");
let searchBar = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");
let data = [];
let val = searchBar.value.toLowerCase();

async function apiCallFxn() {
  try {
    const response = await fetch("./localapi.json");
    const result = await response.json();
    console.log(result);

    data = result.movies;
    console.log(data);
    data.map((film) => {
      movieListField.innerHTML += `
        <div class="movie-box-div">
        <img src="${film.poster_url}"  onerror="this.onerror=null; this.src='./assets/coming.webp';" alt="movie-poster" id="poster" />
          <h3 id="title">${film.title}</h3>
          <p id="desc">
          ${film.synopsis}
          </p>
          <p id="desc">
          Genres : ${film.genre}
          </p>
          <span class="span"><p id="desc">Rating :  ${film.rating}</p> <p>l</p> <p id="desc">Released : ${film.release_year}</p></span>
        </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}
apiCallFxn();

// Search Film By Search Button

const searchFilmBySearchBtn = async () => {
  movieListField.innerHTML = "";
  data.map((film) => {
    if (film.title.toLowerCase().includes(val)) {
      movieListField.innerHTML += `
        <div class="movie-box-div">
        <img src="${film.poster_url}"  onerror="this.onerror=null; this.src='./assets/coming.webp';" alt="movie-poster" id="poster" />
          <h3 id="title">${film.title}</h3>
          <p id="desc">
          ${film.synopsis}
          </p>
          <p id="desc">
          Genres : ${film.genre}
          </p>
          <span class="span"><p id="desc">Rating :  ${film.rating}</p> <p>l</p> <p id="desc">Released : ${film.release_year}</p></span>
        </div>`;
    }
  });
};

searchBtn.addEventListener("click", (e) => {
  if (val) {
    searchFilmBySearchBtn();
  } else {
    searchBar.value = "enter name first";
  }
});

// Search Film By Search Bar
const searchFilmBySearchBar = async () => {
  movieListField.innerHTML = "";
  const val = searchBar.value.toLowerCase();
  data.map((film) => {
    if (film.title.toLowerCase().includes(val)) {
      console.log(val);
      movieListField.innerHTML += `
        <div class="movie-box-div">
        <img src="${film.poster_url}"  onerror="this.onerror=null; this.src='./assets/coming.webp';" alt="movie-poster" id="poster" />
          <h3 id="title">${film.title}</h3>
          <p id="desc">
          ${film.synopsis}
          </p>
          <p id="desc">
          Genres : ${film.genre}
          </p>
          <span class="span"><p id="desc">Rating :  ${film.rating}</p> <p>l</p> <p id="desc">Released : ${film.release_year}</p></span>
        </div>`;
    }
  });
};
searchBar.addEventListener("input", () => {
  searchFilmBySearchBar();
});
