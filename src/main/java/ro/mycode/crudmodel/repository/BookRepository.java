package ro.mycode.crudmodel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ro.mycode.crudmodel.model.Book;

import java.util.List;
import java.util.Map;


@Repository
public interface BookRepository extends JpaRepository<Book,Long> {


    @Query("select  b from Book b order by b.title desc")
     List<Book> getSortedBooks();


    @Query("select  b from Book b order by b.title asc")
    List<Book> getSortedBooksAsc();

    @Query("select  b from Book b where b.author = ?1")
     List<Book> getBookByAuthor(String author);




    @Query("select b from Book b where b.year = (select min(b.year) from Book b)")
     Book getOldestBook();


    @Query("select distinct b.genre from Book b order by b.genre")
     List<String> genres();



    @Query("select b from Book b where b.title = ?1")
    Book bookByTitle(String title);

    @Query("select b from Book b where b.genre = ?1")
    List<Book> getBookByGenre(String genre);

    @Query("select  distinct b.genre from Book b ")
    List<String> getAllGenres();


}