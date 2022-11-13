package ro.mycode.crudmodel.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ro.mycode.crudmodel.model.Book;
import ro.mycode.crudmodel.repository.BookRepository;
import ro.mycode.crudmodel.service.ServiceBook;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@Slf4j
public class ControlBook {

    private BookRepository bookRepository;
    private ServiceBook serviceBook;
    public ControlBook(BookRepository bookRepository, ServiceBook serviceBook) {
        this.bookRepository = bookRepository;
        this.serviceBook = serviceBook;
    }




    @GetMapping("/allBooks")
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    public ResponseEntity<List<Book>> getAllBooks() throws InterruptedException {

        List<Book> books = this.serviceBook.getAllBooks();

        return new ResponseEntity<>(books, HttpStatus.OK);

    }



    @PostMapping("/addBook")
    public ResponseEntity<Book> addBook(@Valid @RequestBody Book book){

        this.serviceBook.addBook(book);

        return new ResponseEntity<>(book, HttpStatus.OK);
    }





    @PutMapping("/updateBook")
    public ResponseEntity<Book>  updateBook(@RequestBody Book book){

        this.serviceBook.updateBook(book);

        return new ResponseEntity<>(book,HttpStatus.OK);


    }


    @GetMapping("/findBook/{id}")
    public ResponseEntity<Book> myBook(@PathVariable Long id){

        Book book = this.serviceBook.findTheBookByID(id);

        return new ResponseEntity<>(book, HttpStatus.OK);
    }



    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity<Long> deleteBook(@PathVariable Long id){

        this.serviceBook.deleteBook(id);

        return new ResponseEntity<>(id, HttpStatus.OK);
    }




    @GetMapping("/sortBooksByTitle")
    public ResponseEntity<List<Book>> sortedByTitle(){

       List<Book> sortedBooks = this.serviceBook.sortBooksByTitle();

        return new ResponseEntity<>(sortedBooks, HttpStatus.OK);
    }

    @GetMapping("/sortBooksByTitleAsc")
    public ResponseEntity<List<Book>> sortedByTitleAsc(){

        List<Book> sortedBooksAsc = this.serviceBook.sortBookByTitleAsc();

        return new ResponseEntity<>(sortedBooksAsc, HttpStatus.OK);
    }

    @GetMapping("/getBooksByAuthor/{author}")
    public ResponseEntity<List<Book>> booksbyAuthor(@PathVariable String author){

        List<Book> books = this.serviceBook.getBooksByTheAtuthor(author);

        return new ResponseEntity<>(books,HttpStatus.OK);
    }

    @GetMapping("/getOldestBook")
    public ResponseEntity<Book> oldie(){

        Book b  = this.serviceBook.getTheOldestBook();

        return new ResponseEntity<>(b, HttpStatus.OK);
    }



    @GetMapping("/findByGenre/{genre}")
    public ResponseEntity<List<Book>> bookByGenre(@PathVariable String genre){
        List<Book> books = this.serviceBook.getTheBookByGenre(genre);
        return new ResponseEntity<>(books, HttpStatus.OK);

    }

    @GetMapping("/getAllGenres")
    public ResponseEntity<List<String>> getAllBookGenres(){

        List<String> genrelist = this.serviceBook.getAllTheGenres();

        return new ResponseEntity<>(genrelist, HttpStatus.OK);
    }


}
