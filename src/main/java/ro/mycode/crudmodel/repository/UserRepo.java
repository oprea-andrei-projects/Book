package ro.mycode.crudmodel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.mycode.crudmodel.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
}
