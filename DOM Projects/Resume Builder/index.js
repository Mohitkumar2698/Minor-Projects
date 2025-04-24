const name = document.getElementById("name");
const intro = document.getElementById("intro");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const profile = document.getElementById("profile");
const place = document.getElementById("location");
const institution = document.getElementById("institution");
const course = document.getElementById("course");
const marks = document.getElementById("marks");
const year = document.getElementById("year");
const exp = document.getElementById("exp");
const company = document.getElementById("company");
const role = document.getElementById("role");
const date = document.getElementById("date");
const picture = document.getElementById("picture");
const skills = document.getElementById("skills");
const allInput = document.getElementsByClassName("inputs");

const skillBtn = document.getElementById("skill-btn");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

skillBtn.addEventListener("click", (e) => {
  let newInput = document.createElement("input");
  newInput.setAttribute("id", "skills");
  newInput.classList.add("inputs");
  newInput.placeholder = "Enter Skill";
  if (!skills.value) {
    skills.placeholder = "Enter here First";
  } else skills.after(newInput);
});
