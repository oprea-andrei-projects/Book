package ro.mycode.crudmodel.service;

import org.springframework.stereotype.Service;
import ro.mycode.crudmodel.exceptions.BookAlreadyExistsException;
import ro.mycode.crudmodel.exceptions.NoBooksByThisAuthorException;
import ro.mycode.crudmodel.exceptions.WrongIDException;
import ro.mycode.crudmodel.model.Book;
import ro.mycode.crudmodel.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceBook {

    BookRepository bookRepository;

    public ServiceBook (BookRepository bookRepository){

        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks(){

        return this.bookRepository.findAll();
    }

    public void addBook(Book b){

        Optional<Book> optionalBook = Optional.of(this.bookRepository.bookByTitle(b.getTitle()));

        if(optionalBook.isEmpty()==false){

            throw new BookAlreadyExistsException("Book already exists exception !!! ");
        }

        this.bookRepository.save(b);

    }

    public void deleteBook(Long id){

        Optional<Book> optionalBook = this.bookRepository.findById(id);

        if(optionalBook.isEmpty()){

            throw new WrongIDException("Wrong ID provided !!!");
        }

        this.bookRepository.delete(optionalBook.get());
    }

    public void updateBook(Book book){

        Optional<Book> optionalBook = this.bookRepository.findById(book.getId());

        if(optionalBook.isEmpty()){

            throw new WrongIDException("Book doesn't exist !!! ");
        }
        Book book1 = optionalBook.get();
        book1.setTitle(book.getTitle());
        book1.setAuthor(book.getAuthor());
        book1.setGenre(book.getGenre());
        book1.setYear(book.getYear());

        this.bookRepository.save(book1);

    }


    public Book findTheBookByID(Long id){

        Optional<Book> optionalBook = this.bookRepository.findById(id);

        if(optionalBook.isEmpty()){

            throw new WrongIDException("Book doesn't exist !!!");
        }

        return optionalBook.get();
    }

    public List<Book> sortBooksByTitle(){

        return this.bookRepository.getSortedBooks();

    }

    public List<Book> getBooksByTheAtuthor(String author){

        List<Book> books = this.bookRepository.getBookByAuthor(author);

        if(books.isEmpty()){

            throw new NoBooksByThisAuthorException("No books found by this author !!!");
        }

        return books;

    }

    public Book getTheOldestBook(){


        return this.bookRepository.getOldestBook();
    }

    public List<Book> getTheBookByGenre(String genre){

        return this.bookRepository.getBookByGenre(genre);
    }






}
