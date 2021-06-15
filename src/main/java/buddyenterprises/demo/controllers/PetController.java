package buddyenterprises.demo.controllers;

import buddyenterprises.demo.models.Pet;
import buddyenterprises.demo.repositories.PetRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Optional;


@Controller
public class PetController {

    @Resource
    private PetRepository petRepo;


    @RequestMapping("/pets")
    public String displayPets(Model model) {
        model.addAttribute("allPets", petRepo.findAll());
        return "allPetsView";

    }
    @RequestMapping("/calendar")
    public String displayPetsAppointments(Model model){
        model.addAttribute("allPets", petRepo.findAll());
        return "calendar";
    }

    @RequestMapping("/pets/{petName}")
    public String displayPetByName(@PathVariable String petName, Model model) {
        Pet pet = petRepo.findByPetName(petName);
        String goodWithKidsIcon = "";
        String hypoAllergenicIcon = "";
        if (!pet.getGoodWithKids()) {
            goodWithKidsIcon = "/images/kidFalse.png";
        } else {
            goodWithKidsIcon = "/images/kidTrue.png";
        }
        if (!pet.getHypoallergenic()) {
            hypoAllergenicIcon = "/images/hypoFalse.png";
        } else {
            hypoAllergenicIcon = "/images/hypoTrue.png";
        }
        model.addAttribute("goodWithKidsIcon", goodWithKidsIcon);
        model.addAttribute("hypoAllergenicIcon", hypoAllergenicIcon);
        model.addAttribute("pet", pet);
        return "petView";
    }

    @PostMapping("/add-pet")
    public String addPet(@RequestParam String petName, String petType, int petAge, String petDesc, int petTemperament, String petNeeds, Boolean goodWithKids, Boolean hypoallergenic, String petImageUrl) {
        Pet petToAdd = new Pet(petName, petType, petAge, petDesc, petTemperament, petNeeds, goodWithKids, hypoallergenic, petImageUrl);
        petRepo.save(petToAdd);
        return "redirect:pets";
    }



}
