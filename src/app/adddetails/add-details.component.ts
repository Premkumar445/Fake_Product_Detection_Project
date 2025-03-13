import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Add ReactiveFormsModule here
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
      brand: ['', Validators.required],
      sku: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product Added:', this.productForm.value);
      this.router.navigate(['/result'], { state: { product: this.productForm.value } });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
