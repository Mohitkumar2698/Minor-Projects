let proPic = document.getElementById("pro-pic");
let salutationVal = document.getElementById("salutation-val");
let nameVal = document.getElementById("name-val");
let name = "Suzuki Hanma";
let address = "Kyoto, Japan";
let email = "suzukihanma43@gmail.com";
let phone = "(91) 7973314896";
let buttons = document.getElementsByClassName("buttons");
let dob = "1989-10-24";

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
apiFetch();
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
