import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ServiceBookService } from '../service-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public books: Array<Book> = [];
  constructor(private serviceBookService: ServiceBookService) {
  }

  public ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  public ngOnInit(): void {
    this.serviceBookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }
}
