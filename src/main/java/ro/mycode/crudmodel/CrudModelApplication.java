package ro.mycode.crudmodel;

import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import ro.mycode.crudmodel.model.Book;
import ro.mycode.crudmodel.repository.BookRepository;
import ro.mycode.crudmodel.service.ServiceBook;

import java.util.List;

@SpringBootApplication
public class CrudModelApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudModelApplication.class, args);


    }


    @Bean
    CommandLineRunner commandLineRunner(
            ServiceBook serviceBook) {
        return args -> {

//            bookRepository.getSortedBooks().stream().forEach(System.out::println);

//            bookRepository.getBookByAuthor("asdasdas").stream().forEach(e-> System.out.println(e));

//              bookRepository.getNewestBook().entrySet().stream()
//                   .forEach(e-> System.out.println(e.getKey() + e.getValue()));

      // bookRepository.getBookByGenre("Classic").stream().forEach(System.out::println);

            serviceBook.addBook(new Book("4urueyryr","yqywgdugdq","bcucuec",1900));

        };

    }
}
