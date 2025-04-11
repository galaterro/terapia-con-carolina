import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface MensajeContacto {
  nombre: string;
  telefono?: string;
  email: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  
  private readonly SERVICE_ID = environment.emailjs.serviceId;
  private readonly TEMPLATE_ID = environment.emailjs.templateId;
  private readonly PUBLIC_KEY = environment.emailjs.publicKey;

  constructor() { }
  
  async enviarMensaje(mensaje: MensajeContacto): Promise<any> {
    try {
      const templateParams = {
        from_name: mensaje.nombre,
        from_email: mensaje.email,
        phone: mensaje.telefono || 'No proporcionado',
        message: mensaje.mensaje
      };
      
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );
      
      return response;
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      throw error;
    }
  }
}