package buddyenterprises.demo;


import buddyenterprises.demo.repositories.UserRepository;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Controller
public class UserControllerTest {

    @Resource
    private UserRepository userRepo;




}



