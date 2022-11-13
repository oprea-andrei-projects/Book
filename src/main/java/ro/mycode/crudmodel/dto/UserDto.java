package ro.mycode.crudmodel.dto;


import lombok.Data;

@Data
public class UserDto {

    private String mail;
    private String password;

    public UserDto(String mail, String password) {
        this.mail = mail;
        this.password = password;
    }
}
