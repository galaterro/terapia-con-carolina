import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  formError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.pattern('[0-9]{9}')]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm() {
    this.formSubmitted = true;
    
    if (this.contactForm.valid) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado', this.contactForm.value);
      this.contactForm.reset();
      this.formSubmitted = false;
    } else {
      this.formError = true;
      setTimeout(() => {
        this.formError = false;
      }, 5000);
    }
  }
}
