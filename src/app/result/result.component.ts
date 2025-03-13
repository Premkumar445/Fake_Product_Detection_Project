import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  currentDate: string = new Date().toLocaleDateString();

  product = {
    imageUrl: 'https://via.placeholder.com/150', // Replace with real product image URL
    name: 'Premium Laptop',
    category: 'Electronics',
    brand: 'TechBrand',
    price: 1200,
    quantity: 1,
    description: 'A high-performance laptop with 16GB RAM, 512GB SSD, and a powerful processor.'
  };

  // Print Invoice Function
  printInvoice() {
    window.print();
  }
}
