let movieListField = document.querySelector(".movie-list-div");
let searchBar = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");
let data = [];
const filmApi = async () => {
  const api = await fetch("./localApi.json");
  data = await api.json();
  for (const film of data.data) {
    movieListField.innerHTML += `
        <div class="movie-box-div">
        <img src="${film.poster}" alt="movie-poster" id="poster" />
          <h3 id="title">${film.name}</h3>
          <p id="desc">
          ${film.desc}
          </p>
        </div>`;
  }
};
filmApi();

// Search Film By Search Button
const searchFilmBySearchBtn = async () => {
  movieListField.innerHTML = "";
  const val = searchBar.value.toLowerCase();
  console.log(val);
  let filterData = data.data.filter((film) => film.name.toLowerCase() === val);
  filterData.forEach((film) => {
    movieListField.innerHTML += `
          <div class="movie-box-div">
          <img src="${film.poster}" alt="movie-poster" id="poster" />
            <h3 id="title">${film.name}</h3>
            <p id="desc">
            ${film.desc}
            </p>
          </div>`;
  });
};

// Search Film By Search Bar
searchBtn.addEventListener("click", (e) => {
  searchFilmBySearchBtn();
});
const searchFilmBySearchBar = async () => {
  movieListField.innerHTML = "";
  const val = searchBar.value.toLowerCase();
  for (const film of data.data) {
    if (film.name.toLowerCase().includes(val)) {
      console.log(val);
      movieListField.innerHTML += `
                <div class="movie-box-div">
                    <img src="${film.poster}" alt="movie-poster" id="poster" />
                    <h3 id="title">${film.name}</h3>
                    <p id="desc">
                    ${film.desc}
                    </p>
                    </div>`;
    }
  }
};
// searchBar.addEventListener("input", () => {
//   searchFilmBySearchBar();
// });
