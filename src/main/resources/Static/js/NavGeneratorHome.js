function hamburgerMenu(y) {
    var x = document.getElementById("dropBackdrop");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    //
    // y.classList.toggle("change");
}


const container = document.getElementsByClassName("container");
const logIn = document.getElementsByClassName("logIn");

const header = document.createElement("header");
document.body.appendChild(header);

const mobileLinksDiv = document.createElement("div");
mobileLinksDiv.setAttribute("class", "mobileLinks")
header.appendChild(mobileLinksDiv);


const iconA = document.createElement("a");
iconA.setAttribute("href", "javascript:void(0);");
iconA.setAttribute("class", "icon");
iconA.setAttribute("onclick", "hamburgerMenu()");
mobileLinksDiv.appendChild(iconA);


const faBars = document.createElement("i");
faBars.setAttribute("class", "fa fa-bars");
iconA.appendChild(faBars);

const dropBackdrop = document.createElement("div");
dropBackdrop.setAttribute("id", "dropBackdrop");
dropBackdrop.setAttribute("style", "display: none;");
mobileLinksDiv.appendChild(dropBackdrop);

const dropDownLinks = document.createElement("div");
dropDownLinks.setAttribute("class", "dropDownLinks");
dropBackdrop.appendChild(dropDownLinks);

// WELCOME SIDE
const sideLinkBoxWelcome = document.createElement("a");
sideLinkBoxWelcome.setAttribute("class", "sideLinkBox");
sideLinkBoxWelcome.setAttribute("href", "/home.html");
dropDownLinks.appendChild(sideLinkBoxWelcome);

const sideLinkWelcome = document.createElement("div");
sideLinkWelcome.setAttribute("class", "sideLink");
sideLinkWelcome.innerText = "Welcome";
sideLinkBoxWelcome.appendChild(sideLinkWelcome);

// WHO WE ARE SIDE
const sideLinkBoxWho = document.createElement("a");
sideLinkBoxWho.setAttribute("class", "sideLinkBox");
sideLinkBoxWho.setAttribute("href", "/who-we-are.html");
dropDownLinks.appendChild(sideLinkBoxWho);

const sideLinkWho = document.createElement("div");
sideLinkWho.setAttribute("class", "sideLink");
sideLinkWho.innerText = "Who We Are";
sideLinkBoxWho.appendChild(sideLinkWho);

// OUR PETS SIDE
const sideLinkBoxPets = document.createElement("a");
sideLinkBoxPets.setAttribute("class", "sideLinkBox");
sideLinkBoxPets.setAttribute("href", "/pets");
dropDownLinks.appendChild(sideLinkBoxPets);

const sideLinkPets = document.createElement("div");
sideLinkPets.setAttribute("class", "sideLink");
sideLinkPets.innerText = "Our Pets";
sideLinkBoxPets.appendChild(sideLinkPets);

// // SCHEDULE AN APPOINTMENT
const sideLinkBoxCalendar = document.createElement("a");
sideLinkBoxCalendar.setAttribute("class", "sideLinkBox");
sideLinkBoxCalendar.setAttribute("href", "/calendar");
dropDownLinks.appendChild(sideLinkBoxCalendar);

const sideLinkCalendar = document.createElement("div");
sideLinkCalendar.setAttribute("class", "sideLink");
sideLinkCalendar.innerText = "Schedule An Appointment";
sideLinkBoxCalendar.appendChild(sideLinkCalendar);

// CONTACT US SIDE
const sideLinkBoxContact = document.createElement("a");
sideLinkBoxContact.setAttribute("class", "sideLinkBox");
sideLinkBoxContact.setAttribute("href", "/contact-us.html");
dropDownLinks.appendChild(sideLinkBoxContact);

const sideLinkContact = document.createElement("div");
sideLinkContact.setAttribute("class", "sideLink");
sideLinkContact.innerText = "Contact Us";
sideLinkBoxContact.appendChild(sideLinkContact);


// Mobile Logos
const logoContainerSide = document.createElement("div");
logoContainerSide.setAttribute("class", "logo-container");
mobileLinksDiv.appendChild(logoContainerSide);

const logoSide = document.createElement("img");
logoSide.setAttribute("class", "logo");
logoSide.setAttribute("src", "/images/BAB_logoWhite.png");
logoSide.setAttribute("alt", "BAB logo");
logoContainerSide.appendChild(logoSide);


// HorizontalNavElements
const topBanner = document.createElement("div");
topBanner.setAttribute("class", "top-banner");
header.appendChild(topBanner);

const horizontalLinks = document.createElement("div");
horizontalLinks.setAttribute("class", "horizontalLinks");
topBanner.appendChild(horizontalLinks);

//Welcome Link
const WelcomeLinkBoxH = document.createElement("a");
WelcomeLinkBoxH.setAttribute("class", "horizontalLinkBox");
WelcomeLinkBoxH.setAttribute("href", "/home.html");
horizontalLinks.appendChild(WelcomeLinkBoxH);

const WelcomeLinkH = document.createElement("div");
WelcomeLinkH.setAttribute("class", "horizontalLink");
WelcomeLinkH.innerText = "Welcome";
WelcomeLinkBoxH.appendChild(WelcomeLinkH);

//Who We Are Link
const WhoLinkBoxH = document.createElement("a");
WhoLinkBoxH.setAttribute("class", "horizontalLinkBox");
WhoLinkBoxH.setAttribute("href", "/who-we-are.html");
horizontalLinks.appendChild(WhoLinkBoxH);

const WhoLinkH = document.createElement("div");
WhoLinkH.setAttribute("class", "horizontalLink");
WhoLinkH.innerText = "Who We Are";
WhoLinkBoxH.appendChild(WhoLinkH);

//Our Pets
const PetsLinkBoxH = document.createElement("a");
PetsLinkBoxH.setAttribute("class", "horizontalLinkBox");
PetsLinkBoxH.setAttribute("href", "/pets");
horizontalLinks.appendChild(PetsLinkBoxH);

const PetsLinkH = document.createElement("div");
PetsLinkH.setAttribute("class", "horizontalLink");
PetsLinkH.innerText = "Our Pets";
PetsLinkBoxH.appendChild(PetsLinkH);


//Horizontal Logo
const logoContainerH = document.createElement("div");
logoContainerH.setAttribute("class", "logo-container");
topBanner.appendChild(logoContainerH);

const logoH = document.createElement("img");
logoH.setAttribute("class", "logo");
logoH.setAttribute("src", "/images/BAB_logoWhite.png");
logoH.setAttribute("alt", "BAB logo");
logoContainerH.appendChild(logoH);

//Horizontal Links Right
const horizontallinksH2 = document.createElement("div");
horizontallinksH2.setAttribute("class", "horizontalLinks");
topBanner.appendChild(horizontallinksH2);

//Schedule an Appointment Horizontal
const scheduleLinkBoxH = document.createElement("a");
scheduleLinkBoxH.setAttribute("class", "horizontalLinkBox");
scheduleLinkBoxH.setAttribute("href", "/calendar");
horizontallinksH2.appendChild(scheduleLinkBoxH);

const scheduleLinkH = document.createElement("div");
scheduleLinkH.setAttribute("class", "horizontalLink");
scheduleLinkH.innerText = "Schedule an Appointment";
scheduleLinkBoxH.appendChild(scheduleLinkH);

//Contact Us Horizontal
const contactLinkBoxH = document.createElement("a");
contactLinkBoxH.setAttribute("class", "horizontalLinkBox");
contactLinkBoxH.setAttribute("href", "/contact-us.html");
horizontallinksH2.appendChild(contactLinkBoxH);

const contactLinkH = document.createElement("div");
contactLinkH.setAttribute("class", "horizontalLink");
contactLinkH.innerText = "Contact Us";
contactLinkBoxH.appendChild(contactLinkH);


//FOOOOOOOOOOTER
const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);

const footBar = document.createElement("div");
footBar.setAttribute("class", "foot-bar");
footerElement.appendChild(footBar);

//SAFETY bottom bar
const safetyBox = document.createElement("a");
safetyBox.setAttribute("class", "horizontalLinkBox");
safetyBox.setAttribute("href", "/safety.html");
footBar.appendChild(safetyBox);

const safetyWording = document.createElement("div");
safetyWording.setAttribute("class", "horizontalLink");
safetyWording.innerText = "Safety & Code of Conduct";
safetyBox.appendChild(safetyWording);

//ABOUT bottom bar
const aboutUsBox = document.createElement("a");
aboutUsBox.setAttribute("class", "horizontalLinkBox");
aboutUsBox.setAttribute("href", "/about-buddy-enterprises.html");
footBar.appendChild(aboutUsBox);

const aboutUsWording = document.createElement("div");
aboutUsWording.setAttribute("class", "horizontalLink");
aboutUsWording.innerText = "About Buddy Enterprises";
aboutUsBox.appendChild(aboutUsWording);

//LOGIN BUTTON
const barRightBottom = document.createElement("div");
barRightBottom.setAttribute("class", "bar-right");
footerElement.appendChild(barRightBottom);

const logInButton = document.createElement("div");
logInButton.setAttribute("class", "logIn");
logInButton.innerText = "Login";
logInButton.setAttribute("th:if", "${loggedIn == false}");
// logInButton.setAttribute("href","/users");
barRightBottom.appendChild(logInButton);




//COPYRIGHT ETC
const copyright = document.createElement("p");
copyright.setAttribute("class", "copywrite");
copyright.innerText = "© 2020 WCCI Buddy Enterprises";
footerElement.appendChild(copyright);


//LOGIN MODAL
const centeringBox = document.createElement("div");
centeringBox.setAttribute("class", "centering");
document.body.appendChild(centeringBox);

const modalBox = document.createElement("form");
modalBox.setAttribute("action", "/users/{lastName}");
modalBox.setAttribute("class", "modal-box");
centeringBox.appendChild(modalBox);

const modalContent = document.createElement("div");
modalContent.className="modal-content";
modalBox.appendChild(modalContent);

//X BUTTON
const xOut = document.createElement("p");
xOut.innerText = "X";
xOut.setAttribute("class", "x");
modalBox.appendChild(xOut);
//
// const xSpan = document.createElement("span");
// xSpan.className="close";
// xSpan.innerText="&times;";
// xOut.appendChild(xSpan);

const loginInstructions = document.createElement("h4");
loginInstructions.innerText = "Please enter your login information:";
loginInstructions.setAttribute("class", "blackH4Title");
modalContent.appendChild(loginInstructions);

const inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "email");
inputName.setAttribute("placeholder", "email");
modalContent.appendChild(inputName);

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "text");
inputPassword.setAttribute("id", "password");
inputPassword.setAttribute("placeholder", "password");
modalContent.appendChild(inputPassword);


const submitButton = document.createElement("input");
submitButton.setAttribute("value", "Submit");
submitButton.setAttribute("class", "submitButton");

submitButton.setAttribute("type", "submit");
modalContent.appendChild(submitButton);

//
// function openModal() {
//     if (modalBox.style.display === "flex") {
//         modalBox.style.display = "none";
//     } else {
//         modalBox.style.display = "flex";
//     }
// }

logInButton.onclick = function () {
    if (modalBox.style.display === "flex") {
        modalBox.style.display = "none";
    } else {
        modalBox.style.display = "flex";
    }
}

inputName.onclick = function () {
    inputName.value = "";
}

inputPassword.onclick = function () {
    inputPassword.value = "";
}

xOut.onclick = function () {
    modalBox.style.display = "none";
}