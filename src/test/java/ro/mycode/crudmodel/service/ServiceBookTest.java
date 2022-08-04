package ro.mycode.crudmodel.service;

import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.test.context.TestPropertySource;
import ro.mycode.crudmodel.model.Book;
import ro.mycode.crudmodel.repository.BookRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.when;

@TestPropertySource(

        locations = "classpath:application-it.properties"
)
class ServiceBookTest {

    @Mock
    private BookRepository mockBookRepo;

    @InjectMocks
    private  ServiceBook mockServiceBook;

    @Captor
    private ArgumentCaptor<Book> bookArgumentCaptor;



    public ServiceBookTest(){

        MockitoAnnotations.openMocks(this);

    }

    @Test
    void test_getAllBooks(){

        List<Book> allBooks = new ArrayList<>();
        Book b = new Book("asad","adaddq","adddq",2000);
        allBooks.add(b);
        when(mockBookRepo.findAll()).thenReturn(allBooks);
        assertEquals(mockServiceBook.getAllBooks().size(),1);

    }

    @Test
    void test_addBook(){


        List<Book> allBooks = new ArrayList<>();
        Book b = new Book("asad","adaddq","adddq",2000);
        allBooks.add(b);
        when(mockBookRepo.findAll()).thenReturn(allBooks);
        assertEquals(mockServiceBook.getAllBooks().get(0).getYear(),2000);
    }

    @Test
    void test_deleteBook(){

        Book b = new Book("asad","adaddq","adddq",2000);
        b.setId(1L);

        when(mockBookRepo.findById(1L)).thenReturn(Optional.of(b));

        mockServiceBook.deleteBook(1L);
        then(mockBookRepo).should().delete(bookArgumentCaptor.capture());

        assertEquals(b.getYear(),bookArgumentCaptor.getValue().getYear());

    }

    @Test
    void test_updateBook(){

        Book b = new Book("asad","adaddq","adddq",2000);
        b.setId(1L);

        Book b1 = new Book("asad","andrei","adddq",2002);
        b1.setId(1L);

        when(mockBookRepo.findById(1l)).thenReturn(Optional.of(b));
        when(mockBookRepo.bookByTitle("asad")).thenReturn(b);

        mockServiceBook.updateBook(b1);

        assertEquals(b.getYear(),2002);

    }

    @Test
    void test_sortedBooks(){

        List<Book> allBooks = new ArrayList<>();
        Book b1 = new Book("asad","adaddq","adddq",2000);

        Book b2 = new Book("bsad","adaddq","adddq",2000);
        allBooks.add(b2);
        allBooks.add(b1);
        when(mockBookRepo.getSortedBooks()).thenReturn(allBooks);
        assertEquals(mockServiceBook.sortBooksByTitle().get(0).getTitle(),"asad");

    }

    @Test
    void test_getBooksByAuthor(){

        List<Book> allBooks = new ArrayList<>();
        Book b1 = new Book("asad","adaddq","adddq",2000);

        Book b2 = new Book("bsad","adaddq","adddq",2000);
        allBooks.add(b2);
        allBooks.add(b1);
        when(mockBookRepo.getBookByAuthor("adaddq")).thenReturn(allBooks);

        assertEquals(mockServiceBook.getBooksByTheAtuthor("adaddq").size(),2);

    }

    @Test
    void test_oldestBook(){

        List<Book> allBooks = new ArrayList<>();
        Book b1 = new Book("asad","adaddq","adddq",2007);

        Book b2 = new Book("bsad","adaddq","adddq",2003);
        allBooks.add(b1);
        allBooks.add(b2);

        when(mockBookRepo.getOldestBook()).thenReturn(b2);

        assertEquals(mockServiceBook.getTheOldestBook().getYear(),2003);

    }

    @Test
    void test_booksByGenre(){
        List<Book> allBooks = new ArrayList<>();
        Book b1 = new Book("asad","adaddq","adddq",2007);

        Book b2 = new Book("bsad","adaddq","adddq",2003);
        allBooks.add(b1);
        allBooks.add(b2);

        when(mockBookRepo.getBookByGenre("adddq")).thenReturn(allBooks);

        assertEquals(mockServiceBook.getTheBookByGenre("adddq").size(),2);

    }





}