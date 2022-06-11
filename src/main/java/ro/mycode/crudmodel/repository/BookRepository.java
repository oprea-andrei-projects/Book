package ro.mycode.crudmodel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ro.mycode.crudmodel.model.Book;

import java.util.List;
import java.util.Map;


@Repository
public interface BookRepository extends JpaRepository<Book,Long> {


    @Query("select  b from Book b order by b.title asc ")
    public List<Book> getSortedBooks();

    @Query("select  b from Book b where b.author = ?1 ")
    public List<Book> getBookByAuthor(String author);

    //select b from Book b where b.year = (select min(b.year) from Book b)

    @Query("select b from Book b where b.year = (select min(b.year) from Book b)")
    public Book getOldestBook();


    @Query("select distinct b.genre from Book b order by b.genre")
    public List<String> genres();

}
