package buddyenterprises.demo.controllers;


import buddyenterprises.demo.models.Address;
import buddyenterprises.demo.models.Pet;
import buddyenterprises.demo.models.User;
import buddyenterprises.demo.repositories.PetRepository;
import buddyenterprises.demo.repositories.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.ArrayList;

@Controller
public class UserController {

    @Resource
    private UserRepository userRepo;

    @Resource
    private PetRepository petRepo;

    @RequestMapping("/users")
    public String displayAllUsers(Model model) {
        model.addAttribute("allUsers", userRepo.findAll());
        return "newUserTest";
    }

    @RequestMapping("/user-profile-form")
    public String displayUserQuestionForm() {
        return "userProfileForm";
    }

    @RequestMapping("/users/{lastName}/{id}")
    public String displaySinglePet(@PathVariable long id, Model model) {
        String preferenceStatement = "";
        String noPetsStatement = "";
        String hypoallergenicStatement = "";
        String allergenicIcon = "";
        String kidsIcon = "";
        String goodWithKidsStatement = "";
        User newUser = userRepo.findById(id).get();


        preferenceStatement = "You prefer a " + newUser.getPreferredPetType().toLowerCase() + " " + newUser.getPrimaryReason().toLowerCase() + ".";

        ArrayList<Pet> possiblePets = new ArrayList<>();
        for (Pet pet : petRepo.findAll()) {
            if (newUser.getPrimaryReason().equals(pet.getServiceType())
                    & newUser.getPreferredPetType().equals(pet.getPetType())) {
                possiblePets.add(pet);
            }
        }
        if (possiblePets.size() == 0) {
            noPetsStatement = "There are no pets that match your current preferences. However, new pets are added often. Please check back soon!";
        }

        if (newUser.getAllergyRequirement()) {
            hypoallergenicStatement = "You prefer a pet that is hypoallergenic.";
            allergenicIcon = "/images/hypoTrue.png";
        } else {
            hypoallergenicStatement = "";
        }
        if (newUser.getGoodWithKidsRequirement()) {
            goodWithKidsStatement = "You prefer a pet that is good with children.";
            kidsIcon = "/images/kidTrue.png";
        } else {
            goodWithKidsStatement = "";
        }

        model.addAttribute("goodWithKids", goodWithKidsStatement);
        model.addAttribute("kidsIcon", kidsIcon);
        model.addAttribute("hypoallergenic", hypoallergenicStatement);
        model.addAttribute("allergenicIcon", allergenicIcon);
        model.addAttribute("preferredPet", preferenceStatement);
        model.addAttribute("possiblePets", possiblePets);
        model.addAttribute("noPetsStatement", noPetsStatement);
        model.addAttribute("user", newUser);
        model.addAttribute("loggedIn", true);
        return "userProfileView";
    }


    @PostMapping("/add-user")
    public String addUser(@RequestParam String firstName, String lastName, int age, String email, String location, String description, String primaryReason, String preferredPetType, boolean allergyRequirement, boolean goodWithKidsRequirement, String avatar) {

        if (primaryReason == null || preferredPetType == null) {
            User userToAdd = new User(firstName, lastName, age, email, location, description, allergyRequirement, goodWithKidsRequirement);
            userRepo.save(userToAdd);
            long newUserId = userToAdd.getId();
            return "redirect:/users/" + lastName + "/" + newUserId;
        } else {
            User userToAdd = new User(firstName, lastName, age, email, location, description, primaryReason, preferredPetType, allergyRequirement, goodWithKidsRequirement, avatar);
            userRepo.save(userToAdd);
            long newUserId = userToAdd.getId();
            return "redirect:/users/" + lastName + "/" + newUserId;
        }
    }
}


//    @RequestMapping("/newUserTest")
//    public String displayNewUser(Model model) {
//        model.addAttribute("allUsers", userRepo.findAll());
//        return "newUserTest";
//    }


//    @PostMapping("/delete-user")
//    public String deleteUser(@RequestParam Long id) {
//        if (userRepo.existsById(id)){
//            userRepo.deleteById(id);
//        }
//        return "redirect:users";
//    }
//}

//    @RequestMapping("/users/{id}")
//    public String displaySinglePet(@PathVariable long id, Model model) {
//        model.addAttribute("pet", userRepo.findById(id));
//        return "userProfileView";
//    }
