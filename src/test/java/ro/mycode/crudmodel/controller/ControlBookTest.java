package ro.mycode.crudmodel.controller;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import ro.mycode.crudmodel.CrudModelApplication;
import ro.mycode.crudmodel.model.Book;
import ro.mycode.crudmodel.repository.BookRepository;
import ro.mycode.crudmodel.service.ServiceBook;


import java.util.*;






@TestPropertySource(
        locations = "classpath:application-it.properties"
)
@RunWith(SpringRunner.class)
@SpringBootTest(classes = CrudModelApplication.class)
@AutoConfigureMockMvc
class ControlBookTest {



    @MockBean
    private BookRepository mockBookRepo;

    @MockBean
    private ServiceBook mockBookService;

    @Autowired
    private MockMvc mockMvc;


    @Test
    void test_getAllBooks() throws Exception {

        Book b  = new Book("book","author","gen",2000);
        b.setId(1L);
        List<Book> books = new ArrayList<>();
        books.add(b);

        when(mockBookRepo.findById(1l)).thenReturn(Optional.of(b));
        when(mockBookRepo.findAll()).thenReturn(books);

        ObjectMapper mapper = new ObjectMapper();
        mockMvc.perform(MockMvcRequestBuilders.get("/allBooks")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(asJsonString(books)));

    }


    @Test
    void test_addABook() throws Exception {
        Book b  = new Book("book","author","gen",2000);
        b.setId(1L);
        mockBookRepo.save(b);

        when(mockBookRepo.findById(1L)).thenReturn(Optional.of(b));

        mockMvc.perform(MockMvcRequestBuilders.post("/addBook")
                .contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(asJsonString(b))));

    }

    @Test
    void test_deleteBook() throws Exception {

        Book b  = new Book("book","author","gen",2000);
        b.setId(1L);
        mockBookRepo.save(b);
        mockBookRepo.delete(b);

        when(mockBookRepo.findById(1L)).thenReturn(Optional.of(b));

        mockMvc.perform(MockMvcRequestBuilders.delete("/deleteBook/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());



    }

    @Test
    void test_updateBook() throws Exception {

        Book b  = new Book("book","author","gen",2000);
        b.setId(1L);

        Book b1 = new Book();

        b1.setId(b.getId());
        b1.setTitle(b.getTitle());
        b1.setAuthor(b.getAuthor());
        b1.setGenre(b.getGenre());
        b1.setYear(b.getYear());

        mockBookRepo.save(b1);
        when(mockBookRepo.findById(1L)).thenReturn(Optional.of(b1));

        mockMvc.perform(MockMvcRequestBuilders.put("/updateBook")
                .content(String.valueOf(asJsonString(b1)))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(asJsonString(b1)));



    }

    @Test
    void test_getSortedBooks() throws Exception {

        Book b  = new Book("book","author","gen",2000);
        b.setId(1L);
        Book b1 = new Book("book1","author1","gen1",1999);
        b1.setId(2L);

        ObjectMapper mapper = new ObjectMapper();
        List<Book>books = new ArrayList<>();
        books.add(b);
        books.add(b1);

        when(mockBookRepo.findAll()).thenReturn(books);
        Collections.sort(books, Comparator.comparing(Book::getTitle));

        when(mockBookRepo.getSortedBooks()).thenReturn(books);

        mockMvc.perform(MockMvcRequestBuilders.get("/sortBooksByTitle")
                .contentType(MediaType.APPLICATION_JSON));
//               .andExpect(status().isOk())


    }

    @Test
    void test_getBookByAuthor() throws Exception {

        Book b  = new Book("book","author","gen",2000);
        b.setId(1L);
        Book b1 = new Book("book1","author1","gen1",1999);
        b1.setId(2L);

        ObjectMapper mapper = new ObjectMapper();
        List<Book>books = new ArrayList<>();
        books.add(b);
        books.add(b1);

        when(mockBookService.getBooksByTheAtuthor("author1")).thenReturn(books);

        mockMvc.perform(MockMvcRequestBuilders.get("/getBooksByAuthor/{author}")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(asJsonString(books)));

    }



    public static String asJsonString(final Object obj) throws JsonProcessingException {
        try{
            return new ObjectMapper().writeValueAsString(obj);

        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }



}