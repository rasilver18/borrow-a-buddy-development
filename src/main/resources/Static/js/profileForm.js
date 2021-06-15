const profilePetDropDownButton = document.getElementById('pet__dropdown');
const reasonChoice = document.getElementById('reasons__dropdown');
const hypoAllergenic = document.getElementById('Hypoallergenic');
const goodWithKids = document.getElementById('Good-with-kids');
const avatar1 = document.getElementById('avatarList1');
const avatar2 = document.getElementById('avatarList2');
const avatar3 = document.getElementById('avatarList3');
const avatar4 = document.getElementById('avatarList4');
const avatar5 = document.getElementById('avatarList5');

profilePetDropDownButton.addEventListener("click", function () {
    if (profilePetDropDownButton.selectedIndex === 1){
        profilePetDropDownButton.value = "Dog";
    } else if (profilePetDropDownButton.selectedIndex === 2) {
        profilePetDropDownButton.value = "Cat";
    } else if (profilePetDropDownButton.selectedIndex === 3) {
        profilePetDropDownButton.value = "Rabbit";
    } else if (profilePetDropDownButton.selectedIndex === 4) {
        profilePetDropDownButton.value = "Mini Horse";
    } else if (profilePetDropDownButton.selectedIndex === 5) {
        profilePetDropDownButton.value = "Lizard";
    }
});

reasonChoice.addEventListener("click", function () {
    if (reasonChoice.selectedIndex === 1){
        reasonChoice.value = "For Play";
    } else if (reasonChoice.selectedIndex === 2) {
        reasonChoice.value = "For Companionship";
    } else if (reasonChoice.selectedIndex === 3) {
        reasonChoice.value = "For Therapy";
    }
});

hypoAllergenic.addEventListener("click", function (){
    hypoAllergenic.value = "true";
})

goodWithKids.addEventListener("click", function (){
    goodWithKids.value = "true";
})

avatar1.addEventListener('click', function (){
    avatar1.value = "/images/buddyAvatars1.png";
})

avatar2.addEventListener('click', function (){
    avatar2.value = "/images/buddyAvatars2.png";
})

avatar3.addEventListener('click', function (){
    avatar3.value = "/images/buddyAvatars3.png";
})

avatar4.addEventListener('click', function (){
    avatar4.value = "/images/buddyAvatars4.png";
})

/*avatar5.addEventListener('click', function (){
    avatar5.value = "/images/Rachael.jpg";
})*/





$(function () {
    $("#firstName, #lastName").bind("change keyup",
        function () {
            if ($("#firstName").val() && $("#lastName").val() && $("#age").val() && $("#email").val() && $("#location").val() && $("#reasons__dropdown").val() !== "")
                $(this).closest("form").find(":submit").removeAttr("disabled");
            else
                $(this).closest("form").find(":submit").attr("disabled", "disabled");
        });
});


//   ***                     leaving our former JS code below in case we need it again. (Nov 23)   ***



// const profilePetDropDown=document.getElementById("pet__options");
// const profilePetDropDownButton=document.getElementById("pet__dropdown");
//
// profilePetDropDownButton.addEventListener("click", function () {
//     profilePetDropDown.classList.remove("hidden");
//     profilePetDropDown.style.display="block";
//
// })


// Create an expression that results in true or false.
// var Answer = confirm(
//     "Do you want to display the secret message?");
// // Test the expression using the if statement.
// if (Answer)
// {
//     // Display the secret message when the user
//     // clicks OK.
//     document.getElementById("Result").innerHTML =
//         "This is the secret message!";
// }
// else
// {
//     // Perform an alternative task.
//     alert("Click OK next time to see the message!");
// }
// th:text="'You ' + ${user.firstName} + 'require a hypoallergenic pet.'"

