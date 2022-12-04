import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: '.book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{


  @Input() book:Book={

    id:0,
    title:"",
    author:"",
    genre:"",
    year:0

  }

  ngOnInit(): void {
   
  }



}
