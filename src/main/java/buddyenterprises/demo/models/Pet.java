package buddyenterprises.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Pet {
    @Id
    @GeneratedValue
    private Long id;
    private String petName;
    private String petType;
    private int petAge;
    private String petDesc;
    private int petTemperament;
    private String petNeeds;
    private Boolean goodWithKids;
    private Boolean hypoallergenic;
    private String petImageUrl;
    private String serviceType;

    public Long getId() {
        return id;
    }

    public String getPetName() {
        return petName;
    }

    public String getPetType() {
        return petType;
    }

    public int getPetAge() {
        return petAge;
    }

    public String getPetDesc() {
        return petDesc;
    }

    public int getPetTemperament() {
        return petTemperament;
    }

    public String getPetNeeds() {
        return petNeeds;
    }

    public Boolean getGoodWithKids() {
        return goodWithKids;
    }

    public Boolean getHypoallergenic() {
        return hypoallergenic;
    }

    public String getPetImageUrl() {
        return petImageUrl;
    }

    public String getServiceType() {
        return serviceType;
    }

    public Pet() {
    }

    public Pet(String petName, String petType, int petAge, String petDesc, int petTemperament, String petNeeds, Boolean goodWithKids, Boolean hypoallergenic, String petImageUrl) {
        this.petName = petName;
        this.petType = petType;
        this.petAge = petAge;
        this.petDesc = petDesc;
        this.petTemperament = petTemperament;
        this.petNeeds = petNeeds;
        this.goodWithKids = goodWithKids;
        this.hypoallergenic = hypoallergenic;
        this.petImageUrl = petImageUrl;
    }

    public Pet(String petName, String petType, int petAge, String petDesc, int petTemperament, String petNeeds, Boolean goodWithKids, Boolean hypoallergenic, String petImageUrl, String serviceType) {
        this.petName = petName;
        this.petType = petType;
        this.petAge = petAge;
        this.petDesc = petDesc;
        this.petTemperament = petTemperament;
        this.petNeeds = petNeeds;
        this.goodWithKids = goodWithKids;
        this.hypoallergenic = hypoallergenic;
        this.petImageUrl = petImageUrl;
        this.serviceType = serviceType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pet pet = (Pet) o;
        return Objects.equals(id, pet.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
