const itemList = document.querySelector(".app_item");
const petInput = document.querySelector("#pet");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const durationInput = document.querySelector("#duration");


    const li = document.createElement("li");



    function display() {


        let apptLst2 = JSON.parse(localStorage.getItem('appointments'));
        console.log(apptLst2);
        //list of all appointments

    if(apptLst2){
        itemList.innerHTML = "";
        for(var i = 0; i < apptLst2.length ; i++) {  //Find all entries with a key that begins with 20
            const li = document.createElement("li");
            li.className = "app_item__item";
            li.innerText = apptLst2[i];



            itemList.appendChild(li);
        }
    }



    }


function addItem() {


    var appointment = "You have booked an appointment with " + petInput.value + " on " + 		dateInput.value + " at " + timeInput.value + " for " + durationInput.value;
    let appointments = JSON.parse(localStorage.getItem('appointments'));
    console.log(appointments);
    if(appointments === null) {
        appointments = [appointment];
    } else {
        appointments.push(appointment);
    }
    localStorage.setItem('appointments', JSON.stringify(appointments));

    display();





    }



window.onload = display();

const ourAppointments = [];

window.onload = function() {
    let x;
    for(x in localStorage){
        if(charAt(x.key[0])==2)
        {
            ourAppointments.push(x);
        }
    }
    console.log("firing: appointments include: " + x.values());
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("allPets");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";



}*/


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pet__column_mobile");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";



}