package ro.mycode.crudmodel.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import ro.mycode.crudmodel.dto.UserDto;
import ro.mycode.crudmodel.model.User;
import ro.mycode.crudmodel.service.UserService;
import ro.mycode.crudmodel.utility.JWTTokenProvider;
import ro.mycode.crudmodel.utility.JwtAuthenticationEntryPoint;

import static ro.mycode.crudmodel.constans.Util.JWT_TOKEN_HEADER;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class eUserController {

    private UserService userService;
    private AuthenticationManager authenticationManager;
    private JWTTokenProvider jwtTokenProvider;

    public UserController(UserService userService, AuthenticationManager authenticationManager, JWTTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserDto user){

        authenticate(user.getMail(), user.getPassword());
        User loginUser = userService.findUserByEmail(user.getMail());
        User userPrincipal = new User(loginUser.getMail(), loginUser.getPassword());
        HttpHeaders jwtHeader = getJwtHeader(userPrincipal);

        return new ResponseEntity<>(loginUser,jwtHeader, HttpStatus.OK);

    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> addUser(@RequestBody UserDto user){
        this.userService.addUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    private HttpHeaders getJwtHeader(User user){
        HttpHeaders headers = new HttpHeaders();
        headers.add(JWT_TOKEN_HEADER,jwtTokenProvider.generateJwtToken(user));
        return headers;
    }

    private void authenticate(String username, String password){

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
