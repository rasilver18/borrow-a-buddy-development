package buddyenterprises.demo;


import buddyenterprises.demo.controllers.PetController;
import buddyenterprises.demo.models.Pet;
import buddyenterprises.demo.repositories.PetRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.ui.Model;

import java.util.Arrays;
import java.util.Collection;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class PetControllerTest {

    @Mock
    private PetRepository petRepo;

    @InjectMocks
    private PetController underTest;

    @Mock
    private Pet testPet;

    @Mock
    private Pet testPet1;

    @Mock
    private Model mockModel;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        testPet = new Pet("TestPet", "type", 2, "desc", 5, "needs", true, true, "image");
    }


    @Test
    public void shouldBeABleToReturnAllPets() {
        Collection<Pet> allPets = Arrays.asList(testPet, testPet1);
        when(petRepo.findAll()).thenReturn(allPets);
        underTest.displayPets(mockModel);
        verify(mockModel).addAttribute("allPets", allPets);
    }

    @Test
    public void shouldBeAbleToAddAPet() {
        underTest.addPet("TestPet", "type", 2, "desc", 5, "needs", true, true, "image");
        verify(petRepo).save(new Pet("TestPet", "type", 2, "desc", 5, "needs", true, true, "image"));
    }

    @Test
    public void shouldAddPetAndRedirectToPetsEndpoint() {
        String result = underTest.addPet("TestPet", "type", 2, "desc", 5, "needs", true, true, "image");
        assertThat(result).isEqualTo("redirect:pets");
    }




}
