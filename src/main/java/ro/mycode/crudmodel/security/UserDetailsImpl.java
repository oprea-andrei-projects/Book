package ro.mycode.crudmodel.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import ro.mycode.crudmodel.model.User;
import ro.mycode.crudmodel.repository.UserRepo;


@Component
public class UserDetailsImpl implements UserDetailsService {

    private UserRepo userRepository;

    public UserDetailsImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        User user = userRepository.findUserByMail(s).get();

        if(user!=null){
            return user;
        }

        throw new UsernameNotFoundException("User " +s+ " not found");
    }
}
