package ro.mycode.crudmodel.model;

import lombok.Data;

import lombok.NoArgsConstructor;
import org.hibernate.annotations.SortComparator;


import javax.persistence.*;

import static java.lang.Integer.compare;

@Entity
@Table(name="books")
@Data
@NoArgsConstructor
public class Book implements Comparable<Book> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String author;
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
