package ro.mycode.crudmodel.model;

import com.sun.istack.NotNull;
import lombok.Data;

import lombok.NoArgsConstructor;
import org.hibernate.annotations.SortComparator;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name="books")
@Data
@NoArgsConstructor
public class Book implements Comparable<Book> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
//    @NotEmpty
//    @Size(min = 2,message = "Title is mandatory")
    private String title;
//    @NotEmpty
//    @Size(min=2,message = "Author is mandatory")
    private String author;
//    @NotEmpty
//    @Size(
//            min=2,
//            message = "Genre is mandatory"
//    )
    private String genre;

    private int year;

    public Book(String title, String author, String genre, int year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }


    @Override
    public int compareTo(Book o) {

      return this.getYear()-o.getYear();
    }

    @Override
    public boolean equals(Object o){

        Book b = (Book) o;

        return this.getTitle().equals(b.getTitle());
    }
}
