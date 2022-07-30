package ro.mycode.crudmodel.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.mycode.crudmodel.model.Book;
import ro.mycode.crudmodel.repository.BookRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class ControlBook {
    private BookRepository bookRepository;
    public ControlBook(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }


//    @GetMapping("/allBooks")
//    public List<Book> getAllBooks(){
//        return  this.bookRepository.findAll();
//    }

    @GetMapping("/allBooks")
    public ResponseEntity<List<Book>> getAllBooks(){

        List<Book> books = this.bookRepository.findAll();

        return new ResponseEntity<>(books, HttpStatus.OK);

    }

//    @PostMapping("/addBook")
//    public  Book addBook(@RequestBody Book book){
//        this.bookRepository.save(book);
//        return  book;
//    }

    @PostMapping("/addBook")
    public ResponseEntity<Book> addBoook(@RequestBody Book book){

        this.bookRepository.save(book);

        return new ResponseEntity<>(book, HttpStatus.OK);
    }





    @PutMapping("/updateBook")
    public ResponseEntity<Book>  updateBook(@RequestBody Book book){

        Book book1 = bookRepository.findById(book.getId()).get();

        book1.setTitle(book.getTitle());
        book1.setAuthor(book.getAuthor());
        book1.setGenre(book.getGenre());
        book1.setYear(book.getYear());

            this.bookRepository.save(book1);
        return new ResponseEntity<>(book1,HttpStatus.OK);


    }

    //end-point trimit id si primesc cartea
    @GetMapping("/findBook/{id}")
    public Book myBook(@PathVariable Long id){
        return bookRepository.findById(id).get();
    }



    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity<Book> deleteBook(@PathVariable Long id){

        Book myBook = this.bookRepository.findById(id).get();
        this.bookRepository.delete(myBook);
        return new ResponseEntity<>(myBook, HttpStatus.OK);
    }




    @GetMapping("/sortBooksByTitle")
    public ResponseEntity<List<Book>> sortedByTitle(){

        List<Book> sortedBooks = this.bookRepository.getSortedBooks();

        return new ResponseEntity<>(sortedBooks, HttpStatus.OK);
    }

    @GetMapping("/getBooksByAuthor/{author}")
    public List<Book> booksbyAuthor(@PathVariable String author){

        return this.bookRepository.getBookByAuthor(author);
    }

    @GetMapping("/getOldestBook")
    public Book oldie(){

        return this.bookRepository.getOldestBook();
    }

    @GetMapping("/allGenres")
    public List<String> myGenreList(){

        return this.bookRepository.genres();
    }

    @GetMapping("/findByGenre/{genre}")
    public List<Book> bookByGenre(@PathVariable String genre){

        return this.bookRepository.findAll().stream()
                .filter(e->e.getGenre().equalsIgnoreCase(genre))
                .collect(Collectors.toList());


    }




}
