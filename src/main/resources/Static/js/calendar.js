// var radioPet = document.getElementById("listForm"); {
//     cal.pet=
//     radioPet.addEventListener("click", cal.save);
//     rememberPet: function() {
//     }
// }
//EXAMPLE JS


// const submitButton = document.getElementById("submit");
//
// // let appointment = document.getElementsByClassName("appointmentDetails");
//
// submitButton.addEventListener("click", pr);
// function pr() {
//     document.getElementById("result").innerHTML = "You have an appointment scheduled to play with " + document.getElementById('pet').value + " on " + document.getElementById('evt-details').value + " at " + document.getElementById('time').value + " for " + document.getElementById('duration').value;
//
// }
//
// const appointmentDetailsJ = document.getElementsByClassName("appointmentDetails");
// let appointment = document.createElement('p');
//
// function pr() {
//     let details = document.getElementById("result").innerHTML = "You have an appointment scheduled to play with " + document.getElementById('pet').value + " on " + document.getElementById('evt-details').value + " at " + document.getElementById('time').value + " for " + document.getElementById('duration').value;
//
// appointment.addEventListener('click', function pr () {
//     this.innerText = details;
//     appointmentDetailsJ.appendChild(appointment);
//
// });
// }
// html.addEventListener("launch", cal.list);
var cal = {
    // (A) PROPERTIES
    mName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Month Names
    data: null, // Events for the selected period
    sDay: 0, // Current selected day
    sMth: 0, // Current selected month
    sYear: 0, // Current selected year
    sMon: false, // Week start on Monday?
    pet: null,


    // (B) DRAW CALENDAR FOR SELECTED MONTH
    list: function () {
        // (B1) BASIC CALCULATIONS - DAYS IN MONTH, START + END DAY
        // Note - Jan is 0 & Dec is 11 in JS.
        // Note - Sun is 0 & Sat is 6
        cal.sMth = parseInt(document.getElementById("cal-mth").value); // selected month
        cal.sYear = parseInt(document.getElementById("cal-yr").value); // selected year
        var daysInMth = new Date(cal.sYear, cal.sMth + 1, 0).getDate(), // number of days in selected month
            startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), // first day of the month
            endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(); // last day of the month

        // (B2) LOAD DATA FROM LOCALSTORAGE
        cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
        if (cal.data == null) {
            localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
            cal.data = {};
        } else {
            cal.data = JSON.parse(cal.data);
        }

        // (B3) DRAWING CALCULATIONS
        // Determine the number of blank squares before start of month
        var squares = [];
        if (cal.sMon && startDay != 1) {
            var blanks = startDay == 0 ? 7 : startDay;
            for (var i = 1; i < blanks; i++) {
                squares.push("b");
            }
        }
        if (!cal.sMon && startDay != 0) {
            for (var i = 0; i < startDay; i++) {
                squares.push("b");
            }
        }

        // Populate the days of the month
        for (var i = 1; i <= daysInMth; i++) {
            squares.push(i);
        }

        // Determine the number of blank squares after end of month
        if (cal.sMon && endDay != 0) {
            var blanks = endDay == 6 ? 1 : 7 - endDay;
            for (var i = 0; i < blanks; i++) {
                squares.push("b");
            }
        }
        if (!cal.sMon && endDay != 6) {
            var blanks = endDay == 0 ? 6 : 6 - endDay;
            for (var i = 0; i < blanks; i++) {
                squares.push("b");
            }
        }

        // (B4) DRAW HTML CALENDAR
        // Container
        var container = document.getElementById("cal-container"),
            cTable = document.createElement("table");
        cTable.id = "calendar";
        container.innerHTML = "";
        container.appendChild(cTable);

        // First row - Day names
        var cRow = document.createElement("tr"),
            cCell = null,
            days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        if (cal.sMon) {
            days.push(days.shift());
        }
        for (var d of days) {
            cCell = document.createElement("td");
            cCell.innerHTML = d;
            cRow.appendChild(cCell);
        }
        cRow.classList.add("head");
        cTable.appendChild(cRow);

        // Days in Month
        var total = squares.length;
        cRow = document.createElement("tr");
        cRow.classList.add("day");
        for (var i = 0; i < total; i++) {
            cCell = document.createElement("td");
            if (squares[i] == "b") {
                cCell.classList.add("blank");
            } else {
                cCell.innerHTML = "<div class='dd'>" + squares[i] + "</div>";
                if (cal.data[squares[i]]) {
                    cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
                }
                cCell.addEventListener("click", function () {
                    cal.show(this);
                });
            }
            cRow.appendChild(cCell);
            if (i != 0 && (i + 1) % 7 == 0) {
                cTable.appendChild(cRow);
                cRow = document.createElement("tr");
                cRow.classList.add("day");
            }
        }

        // (B5) REMOVE ANY PREVIOUS ADD/EDIT EVENT DOCKET
        cal.close();
    },

    // (C) SHOW EDIT EVENT DOCKET FOR SELECTED DAY
    show: function (el) {
        // (C1) FETCH EXISTING DATA
        cal.sDay = el.getElementsByClassName("dd")[0].innerHTML;

        // (C2) DRAW EVENT FORM
        var tForm = "<h1>" + (cal.data[cal.sDay] ? "EDIT" : "ADD") + " EVENT</h1>";
        tForm += "<div id='evt-date'>" + cal.sDay + " " + cal.mName[cal.sMth] + " " + cal.sYear + "</div>";
        tForm += "<textarea id='evt-details' required>" + (cal.data[cal.sDay] ? cal.data[cal.sDay] : "") + "</textarea>";
        // tForm += "<input type='radio' id='pet' value=petsList required>" + (cal.data[cal.sDay] ? cal.data[cal.sDay] : petsList)+ "</input>";


        // function petName() {
        //
        // }


        tForm += "<br>";
        // "<input type='radio' value = captainElement/>";
        // tForm += "<input type='button' value= '' onclick='cal.close()'/>";
        tForm += "<input type='button' value='Delete' onclick='cal.del()'/>";
        tForm += "<input type='submit' value='Save'/>";

        tForm += "<br>";
        // function showName(name) {
        //     alert("You have booked an appointment with " + pet);
        // }
        // ;

        // (C3) ATTACH EVENT FORM
        var eForm = document.createElement("form");
        eForm.addEventListener("submit", cal.save);
        eForm.innerHTML = tForm;
        var container = document.getElementById("cal-event");
        container.innerHTML = "";
        container.appendChild(eForm);
    },

    // (D) CLOSE EVENT DOCKET
    close: function () {
        document.getElementById("cal-event").innerHTML = "";
    },

    // (E) SAVE EVENT
    save: function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        cal.data[cal.sDay] = document.getElementById("evt-details").value;
        localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, JSON.stringify(cal.data));
        // localStorage.setItem("pet"+ cal.pet,);
        cal.list();
    },

    // (F) DELETE EVENT FOR SELECTED DATE
    del: function () {
        if (confirm("Remove event?")) {
            delete cal.data[cal.sDay];
            localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, JSON.stringify(cal.data));
            cal.list();
        }
    }
};

// (G) INIT - DRAW MONTH & YEAR SELECTOR
window.addEventListener("load", function () {
    // (G1) DATE NOW
    var now = new Date(),
        nowMth = now.getMonth(),
        nowYear = parseInt(now.getFullYear());

    // (G2) APPEND MONTHS SELECTOR
    var month = document.getElementById("cal-mth");
    for (var i = 0; i < 12; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = cal.mName[i];
        if (i == nowMth) {
            opt.selected = true;
        }
        month.appendChild(opt);
    }

    // (G3) APPEND YEARS SELECTOR
    // Set to 10 years range. Change this as you like.
    var year = document.getElementById("cal-yr");
    for (var i = nowYear - 10; i <= nowYear + 10; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        if (i == nowYear) {
            opt.selected = true;
        }
        year.appendChild(opt);
    }

    // (G4) START - DRAW CALENDAR
    document.getElementById("cal-set").addEventListener("click", cal.list);
    cal.list();
});

const form = document.querySelector(".listForm");
const itemList = document.querySelector(".item-list");
const petInput = document.querySelector("#pet");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const durationInput = document.querySelector("#duration");

loadEvents();

function loadEvents() {
    form.addEventListener("submit", addItem);

    itemList.addEventListener("click", deleteItem);

}
    const li = document.createElement("li");
    const result = document.getElementById('result');

    // var appointment = "You have booked an appointment with " + petInput.value + " on " + dateInput.value + " at " + timeInput.value + " for " + durationInput.value;

    function load() {


        let apptLst = JSON.parse(localStorage.getItem('appointments'));
        console.log(apptLst);
        //list of all appointments

    if(apptLst){
        itemList.innerHTML = "";
        for(var i = 0; i < apptLst.length ; i++) {  //Find all entries with a key that begins with 20
            const li = document.createElement("li");
            li.className = "item-list__item";
            li.innerText = apptLst[i];
            const deleteButton = document.createElement("button");
            deleteButton.className = "item-list__delete";
            deleteButton.innerText = "x";
            //want this button to be a child of the list item
            li.appendChild(deleteButton);
            
            itemList.appendChild(li);
        }
    }
        // console.log(localStorage);
        // JSON.stringify(localStorage);
        //
        // li.innerText = localStorage.getItem(dateInput.value);
        // result.appendChild(li);



    }


function addItem(event) {


    var appointment = "You have booked an appointment with " + petInput.value + " on " + dateInput.value + " at " + timeInput.value + " for " + durationInput.value;
    let appointments = JSON.parse(localStorage.getItem('appointments'));
    console.log(appointments);
    if(appointments === null) {
        appointments = [appointment];
    } else {
        appointments.push(appointment);
    }
    localStorage.setItem('appointments', JSON.stringify(appointments));

    load();




        event.preventDefault(); //prevent default behavior of a form submit
    }

    function deleteItem(event) {
        console.log(event.target); //sends us back the delete button
        if (event.target.className === "item-list__delete") {
            // if (event.target.classList.contains("item-list__delete")) {      //more flexible, if class has more in it
            event.target.parentElement.remove();
        }
    }


window.onload = load();

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
//
// // document.querySelector(".app").innerText = "Hello World!";