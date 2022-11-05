package ro.mycode.crudmodel.utility;


import com.auth0.jwt.JWT;
import lombok.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import ro.mycode.crudmodel.model.User;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static ro.mycode.crudmodel.security.SecurutyConstants.SecurityConstant.*;

@Component
@ConfigurationProperties(prefix = "application.jwt")
public class JWTTokenProvider {

    private String secret;

    public String generateJwtToken(UserDetails user){

        String[] claims = getClaimsFromUser(user);
        return JWT.create().withIssuer(MY_CODE).withAudience(ADMINISTRATION)
                .withIssuedAt(new Date()).withSubject(user.getUsername())
                .withArrayClaim(AUTHORITIES, claims).withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(HMAC512(secret.getBytes()));

    }


    private String[] getClaimsFromUser(UserDetails user) {
        List<String> authorities = new ArrayList<>();
        for (GrantedAuthority grantedAuthority : user.getAuthorities()){
            authorities.add(grantedAuthority.getAuthority());
        }
        return authorities.toArray(new String[0]);
    }


}
