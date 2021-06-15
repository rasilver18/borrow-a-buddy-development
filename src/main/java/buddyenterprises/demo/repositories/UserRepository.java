package buddyenterprises.demo.repositories;

import buddyenterprises.demo.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByLastName(String lastName);
}
