let userBox = document.querySelector(".user-box-parent-div");
let addUserDiv = document.querySelector(".add-user-div");
let proPic = document.getElementById("pro-pic");
let salutationVal = document.getElementById("salutation-val");
let nameVal = document.getElementById("name-val");
let name = "Suzuki Hanma";
let address = "Kyoto, Japan";
let email = "suzukihanma43@gmail.com";
let phone = "(91) 7973314896";
let buttons = document.getElementsByClassName("buttons");
let dob = "1989-10-24";
let addUserBtn = document.getElementById("add-user");

async function apiFetch() {
  try {
    let apiData = await fetch("https://randomuser.me/api");
    let data = await apiData.json();
    console.log("Fetching data...");
    console.log(data);
    for (let val of data.results) {
      name = `${val.name.first} ${val.name.last}`;
      address = `${val.location.city}, ${val.location.state}, ${val.location.country}`;
      phone = val.phone;
      email = val.email;
      dob = val.dob.date.slice(0, 10);
      proPic.src = val.picture.medium;
    }
    nameVal.innerText = name;
  } catch (error) {
    console.log(error);
  }
}
// apiFetch();
for (let btn of buttons) {
  btn.addEventListener("mouseover", () => {
    switch (btn.innerHTML) {
      case "Name":
        nameVal.innerText = name;
        salutationVal.innerText = "Hi, My name is";
        break;
      case "Email":
        nameVal.innerText = email;
        salutationVal.innerText = "Hi, My email is";
        break;
      case "Phone":
        nameVal.innerText = phone;
        salutationVal.innerText = "Hi, My number is";
        break;
      case "Address":
        nameVal.innerText = address;
        salutationVal.innerText = "Hi, My address is";
        break;
      case "Birthday":
        nameVal.innerText = dob;
        salutationVal.innerText = "Hi, My Birthday is";
        break;
      default:
        console.log("not Working...");
        break;
    }
  });
}

// Add New User By Local Api
async function addUserApi() {
  let localApiData = await fetch("./testApi.json");
  let localData = await localApiData.json();

  let addUserBox = document.createElement("div");
  addUserBtn.style.display = "none";
  await localData.users.map((user) => {
    addUserDiv.innerHTML += `
    <div class="add-user-box">
    <div class="photo-div"><img src=${user.image} alt="photo" /></div>
    <div class="info-div">
      <h3>${user.name}</h3>
      <p>${user.phone}</p>
      <p>${user.email}</p>
      <p>${user.address}</p>
      <p>${user.dob}</p>
    </div>
    </div>
    `;
  });
  addUserDiv.innerHTML += `
      <button id="add-user" class="buttons">Generate users +</button>
    `;
}
addUserBtn.addEventListener("click", () => {
  addUserApi();
});
