// Form Page Elements
let formName = document.getElementById("name");
let intro = document.getElementById("intro");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let profile = document.getElementById("profile");
let place = document.getElementById("location");
let institution = document.getElementById("institution");
let course = document.getElementById("course");
let marks = document.getElementById("marks");
let year = document.getElementById("year");
let exp = document.getElementById("exp");
let company = document.getElementById("company");
let role = document.getElementById("role");
let date = document.getElementById("date");
let picture = document.getElementById("picture");
let skills = document.getElementById("skills");
let allInput = document.getElementsByClassName("inputs");
// Buttons
let skillBtn = document.getElementById("skill-btn");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

skillBtn.addEventListener("click", (e) => {
  let newInput = document.createElement("input");
  newInput.setAttribute("id", "skills");
  newInput.classList.add("inputs");
  newInput.placeholder = "Enter Skill";
  if (!skills.value) {
    skills.placeholder = "Enter here First";
  } else skillBtn.before(newInput);
});

// form
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Getting Data...");
  document.body.innerHTML = `<div class="navbar-div"><p>Resume Builder</p></div>
    <div class="body-div">
      <div class="result-div">
        <div class="resume-div">
          <div class="upper-section-div">
            <div class="photo-div">
              <img src="./assets/strong2.jpg" id="image-val" />
            </div>
            <div class="name-div">
              <p id="name-val">${formName.value}</p>
            </div>
          </div>
          <div class="middle-section-div">
            <div class="left-section-div">
              <div class="left-middle-div">
                <div class="left-headings">
                  <p class="heading">ADDRESS</p>
                  <p class="heading">PHONE</p>
                  <p class="heading">EMAIL</p>
                  <p class="heading">PORTFOLIO</p>
                </div>
                <div class="left-values">
                  <p id="address-val" class="values">${place.value}</p>
                  <p id="phone-val" class="values">${phone.value}</p>
                  <p id="email-val" class="values">${email.value}</p>
                  <p id="portfolio-val" class="values">${profile.value}</p>
                </div>
              </div>

              <div class="left-lower-div">
                <div class="education-div left-divs">
                  <div class="heading-div">EDUCATION</div>
                  <div class="desc-div">
                    <p class="heading" id="course-val">${course.value}</p>
                    <p class="values" id="marks-val">${marks.value}</p>
                    <p class="values" id="institution-val">
                      ${institution.value}
                    </p>
                    <p class="values" id="year-val">${year.value}</p>
                  </div>
                </div>
                <div class="reffrence-div">
                  <div class="heading-div">REFERENCE</div>
                  <div class="desc-div">
                    <p class="heading" id="company-val">AMAZON</p>
                    <p class="values" id="ref-name-val">Vishal</p>
                    <p class="values" id="ref-role-val">HR Expert</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="middle-mid-section-div"></div>
            <div class="right-section-div right-divs">
              <div class="intro-div">
                <p class="right-head">INTRODUCTION</p>
                <p class="right-desc" id="intro-val">
                ${intro.value}
                </p>
              </div>
              <div class="exp-div right-divs">
                <p class="right-head">EXPERIENCE</p>
                <p class="heading" id="role-val">${role.value}</p>
                <p class="right-desc" id="exp-val">${exp.value}</p>
                <p class="right-desc" id="comp-val">${company.value}</p>
                <p class="right-desc" id="date-val">${date.value}</p>
              </div>
              <div class="skills-div right-divs">
                <p class="right-head">SKILLS</p>
                <p class="right-desc" id="skill-val">
                ${skills.value}
                </p>
              </div>
              <div class="projects-div right-divs">
                <p class="right-head">PROJECTS</p>
                <p class="right-desc" id="project-val">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem nisi, dolorem sint quas hic impedit ipsa dicta
                  voluptatum asperiores alias, obcaecati commodi. Voluptate
                  maiores et eaque iure dicta earum soluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
});
