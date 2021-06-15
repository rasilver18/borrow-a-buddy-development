package buddyenterprises.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Address {

    @Id
    @GeneratedValue
    private Long id;


    @OneToOne(mappedBy = "userAddress")
    private User user;

    private String number;
    private String streetName;
    private String city;
    private String state;
    private String zip;

    public User getUser(){
        return user;
    }



    public String getNumber() {
        return number;
    }

    public String getStreetName() {
        return streetName;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getZip() {
        return zip;
    }

    public Address(){

    }



}
