import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiUrl = 'http://localhost:8080/sendContactInfo';
  constructor(private http: HttpClient) {}
  postContactForm(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
