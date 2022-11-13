package ro.mycode.crudmodel.service;


import org.springframework.stereotype.Service;
import ro.mycode.crudmodel.dto.UserDto;
import ro.mycode.crudmodel.exceptions.UserExistsException;
import ro.mycode.crudmodel.exceptions.UserNotFoundException;
import ro.mycode.crudmodel.model.User;
import ro.mycode.crudmodel.repository.UserRepo;

@Service
public class UserService {

    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public void addUser(UserDto user){

        boolean userExists = this.userRepo.findUserByMail(user.getMail()).isPresent();

        if(userExists){
            throw new UserExistsException("User " + user.getMail()+ " already exists !!! ");

        }

        this.userRepo.save(new User(user.getMail(), user.getPassword()));
    }


    public User findUserByEmail(String mail){

        boolean userExists = this.userRepo.findUserByMail(mail).isEmpty();

        if(userExists){

            throw new UserNotFoundException("User not found !!!");
        }

        return this.userRepo.findUserByMail(mail).get();
    }
}
