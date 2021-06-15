package buddyenterprises.demo;

import buddyenterprises.demo.models.Pet;
import buddyenterprises.demo.models.User;
import buddyenterprises.demo.repositories.PetRepository;
import buddyenterprises.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    PetRepository petRepo;

    @Resource
    UserRepository userRepo;

    @Override
    public void run(String... args) throws Exception {

        String a = "For Play";
        String b = "For Companionship";
        String c = "For Therapy";

        Pet captain = new Pet("Captain", "Lizard", 5, "Captain is a friendly Iguana who loves to perch on your shoulder.", 1,
                "Captain was malnourished early in life and has slightly weaker bones. You must be gentle with him. He would love if you fed him crickets for a treat",
                true, true, "/images/captain.jpg", b);
        Pet belle = new Pet ("Belle", "Rabbit", 2, "Belle is a great fluffy bunny to have to hop around your home.", 2,
                "Rabbits require a special diet. If you would like to feed her, you may gave her lettuce and carrots. Belle must stay in a play pen during her visit", true,
                false, "/images/Belle.jpg", a);
        Pet halo = new Pet ("Halo", "Dog", 10, "Halo is an old lab mix who loves to play tug of war.", 2,
                "Halo has no special needs. She loves to be walked and loves to play.", true, false, "/images/halo.jpg", a);
        Pet jelly = new Pet ("Jelly", "Cat", 6, "Jelly loves to play dress up and would be perfect for a photo shoot.", 3,
                "Jelly must stay inside at all times during her visit. Do not let her interact with dogs", false, false, "/images/Jelly.jpg", c);
        Pet lilSebastian = new Pet ("Lil Sebastian", "Mini Horse", 16, "Lil Sebastian is a certified therapy animal for emotional support.",
                4, "Lil Sebastian must stay outside during his visit and monitored closely. While he is good with children, do not leave with children unsupervised",
                true, true, "/images/MiniHorse.jpg", a);
        Pet malley = new Pet ("Malley", "Dog", 2, "Malley to play in water and play fetch with sticks.",
                2, "Malley has no special needs. He is an easy going dog", true, false, "/images/Malley.jpg", c);
        Pet ollie = new Pet("Ollie", "Cat", 1, "Ollie loves to ride around on your shoulders, play and cuddle.",
                1, "Ollie may go outside during his visit but only if he stays on a harness", true, false, "/images/Ollie1.jpg", a);
        Pet rufus = new Pet ("Rufus", "Dog", 6, "Rufus loves other dogs and loves to play fetch. ", 4,
                "Rufus is allergic to chicken. He can be grumpy when overwhelmed.", false, true, "/images/Rufus.jpg", c);
        Pet schnitzel = new Pet("Schnitzel", "Cat", 4, "Schnitzel is very relaxed and would be perfect to just sit and snuggle."
                , 2, "Schnitzel is afraid of loud noises, please maintain a calm environment", true, false, "/images/Schnitzel.jpg", a);
        Pet teddy = new Pet("Teddy", "Dog", 1, "Teddy would love to go for a run or chase around your yard.", 4,
                "Teddy is on a grain free diet.", true, false, "/images/Teddy.jpg", a);

        Pet penny = new Pet("Penny", "Cat", 1, "Penny is great to snuggle and play with.", 1,
                "Penny loves to be brushed", true, true, "/images/penny.jpg", a);

        Pet judge = new Pet("Judge", "Cat", 8, "Judge is incredibly sweet and relaxed, a perfect cuddle buddy.", 4,
                "Judge is leash trained! Feel free to take him on a walk.", true, false, "/images/judge.jpg", b);

        Pet max = new Pet("Max", "Dog", 6, "Max is a small mutt who loves to play tug-of-war.", 3,
                "Max has no special needs", true, false, "/images/max.jpg", a);

        Pet dot = new Pet("Dot", "Rabbit", 3, "Dot loves to relax around people, a perfect cuddle buddy.", 5,
                "Dot must stay inside and under supervision at all times.", false, false, "/images/dot.jpg", b);

        Pet george = new Pet("George", "Lizard", 5, "George likes to ride on shoulders and go for walks outside.", 3,
                "You may feed George crickets during his visit for treats.", true, true, "/images/george.jpg", b);

        Pet trotsky = new Pet("Trotsky", "Mini Horse", 4, "Trotsky is a certified therapy horse that loves carrots.", 2,
                "Trotsky must wear reins at all times", false, false, "/images/trotsky.jpg", c);

        Pet roxy = new Pet("Roxy", "Cat", 7, "Roxy loves to lay on your lap in purr. She is a certified therapy cat.", 5,
                "Roxy must stay inside during her visit", true, false, "/images/roxy.jpg", c);

        Pet professor = new Pet("Professor", "Dog", 10, "Professor may be older but still loves to play outside. ", 3,
                "Professor cannot walk far. If you walk him please take short walks.", true, true, "/images/professor.jpg", b);

        Pet shiloh = new Pet("Shiloh", "Dog", 6, "Shiloh is a skilled finder and loves to play fetch.", 2,
                "Shiloh has no special needs.", true, false, "/images/shiloh.jpg", a);

        Pet regina = new Pet("Regina", "Mini Horse", 4, "Regina is a certified therapy mini horse, perfect to help you de-stress. ", 4,
                "Regina must stay outside during her visit.", true, true, "/images/regina.jpg");


        petRepo.save(captain);
        petRepo.save(belle);
        petRepo.save(halo);
        petRepo.save(jelly);
        petRepo.save(lilSebastian);
        petRepo.save(malley);
        petRepo.save(ollie);
        petRepo.save(rufus);
        petRepo.save(schnitzel);
        petRepo.save(teddy);
        petRepo.save(penny);
        petRepo.save(judge);
        petRepo.save(max);
        petRepo.save(dot);
        petRepo.save(george);
        petRepo.save(trotsky);
        petRepo.save(roxy);
        petRepo.save(professor);
        petRepo.save(shiloh);
        petRepo.save(regina);

        User cliff = new User("Cliff", "Jenkins", 30, "cliffEmail", "Columbus", "I have good taste in movies", a, "Mini Horse",true, true, "/images/buddyAvatars1.png");
        userRepo.save(cliff);
    }
}