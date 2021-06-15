//package buddyenterprises.demo.controllers;
//
//import buddyenterprises.demo.models.Pet;
//import buddyenterprises.demo.repositories.PetRepository;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import javax.annotation.Resource;
//import java.util.ArrayList;
//import java.util.Collection;
//
//
//@Controller
//public class CalendarController {
//
//    @Resource
//    private PetRepository petRepo;
//
//    @RequestMapping("/calendar")
//        public String displayCalendar(Model model) {
//        ArrayList<String> petNames = new ArrayList<String>();
//        for (Pet pet : petRepo.findAll()){
//            petNames.add(pet.getPetName());
//        }
//        model.addAttribute("petNamesList", petNames);
//
//
//
//
////            model.addAttribute("allPets", petRepo.findAll());
//
//            return "calendar";
//        }
//    @PostMapping("/pets/{petName}")
//    public String displayPetByName(@PathVariable String petName, Model model) {
//        model.addAttribute("pet", petRepo.findByPetName(petName));
//        return "calendar";
//    }
//    }
//
//
//
//
