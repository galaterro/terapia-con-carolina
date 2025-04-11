import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoService, MensajeContacto } from '../../services/contacto.service';

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
  isLoading = false;
  errorMessage = 'Por favor, completa todos los campos correctamente.';

  constructor(
    private fb: FormBuilder,
    private contactoService: ContactoService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.pattern('[0-9]{9}')]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async submitForm() {
    if (this.contactForm.invalid) {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      
      this.formError = true;
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      setTimeout(() => {
        this.formError = false;
      }, 5000);
      return;
    }
    
    // Si el formulario es válido, enviamos con EmailJS
    try {
      this.isLoading = true;
      
      const mensaje: MensajeContacto = {
        nombre: this.contactForm.value.nombre,
        telefono: this.contactForm.value.telefono,
        email: this.contactForm.value.email,
        mensaje: this.contactForm.value.mensaje
      };
      
      const response = await this.contactoService.enviarMensaje(mensaje);
      
      if (response.status === 200) {
        this.formSubmitted = true;
        this.contactForm.reset();
        
        // Resetear el estado después de 5 segundos
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      } else {
        throw new Error('Error en el envío del mensaje');
      }
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      this.formError = true;
      this.errorMessage = 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
      setTimeout(() => {
        this.formError = false;
      }, 5000);
    } finally {
      this.isLoading = false;
    }
  }
}
