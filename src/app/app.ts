import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './api/products.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly productsSvc = inject(ProductsService);
  products$ = this.productsSvc.getAllProducts();
}
