package buddyenterprises.demo.repositories;

import buddyenterprises.demo.models.Pet;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PetRepository extends CrudRepository<Pet, Long> {


    Pet findByPetType(String petType);

    Pet findByPetName(String petName);

}
