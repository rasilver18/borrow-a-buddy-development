package buddyenterprises.demo.models;

import buddyenterprises.demo.models.Address;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Objects;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;

    @OneToOne
    private Address userAddress;

    //    private LocalDate dateOfBirth;
    private int age;
    private String email;
    private String phoneNumber;
    private double rating;
    private String preferredPetType;
    private String primaryReason;
    private boolean allergyRequirement;
    private boolean goodWithKidsRequirement;

    private String description;
    private String city;

    @ManyToMany
    private Collection<User> friends;

    private String avatar;

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public String getEmail() {
        return email;
    }

    public String getCity() {
        return city;
    }

    public String getDescription() {
        return description;
    }

    public String getPreferredPetType() {
        return preferredPetType;
    }

    public String getPrimaryReason() {
        return primaryReason;
    }

    public boolean getAllergyRequirement() {
        return allergyRequirement;
    }

    public boolean getGoodWithKidsRequirement() {
        return goodWithKidsRequirement;
    }

    public String getAvatar(){
        return avatar;
    }


    public User() {
    }

    public User(String firstName, String lastName, Address userAddress, int age, String email, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userAddress = userAddress;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public User(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public User(String firstName, String lastName, int age, String email, String city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.city = city;
    }

    public User(String firstName, String lastName, int age, String email, String city, String preferredPetType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.city = city;
        this.preferredPetType = preferredPetType;
    }

    public User(String firstName, String lastName, int age, String email, String city, String description, String primaryReason,
                String preferredPetType, boolean allergyRequirement, boolean goodWithKidsRequirement, String avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.city = city;
        this.description = description;
        this.primaryReason = primaryReason;
        this.preferredPetType = preferredPetType;
        this.allergyRequirement = allergyRequirement;
        this.goodWithKidsRequirement = goodWithKidsRequirement;
        this.avatar = avatar;
    }

    public User(String firstName, String lastName, int age, String email, String city, String description, boolean allergyRequirement, boolean goodWithKidsRequirement) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.city = city;
        this.description = description;
        this.allergyRequirement = allergyRequirement;
        this.goodWithKidsRequirement = goodWithKidsRequirement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

