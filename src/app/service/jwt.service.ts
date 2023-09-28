import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'api/registrar', signRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'api/login', loginRequest);
  }

  hello(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      return this.http.get(BASE_URL + 'api/api/hola', { headers }).pipe(
        catchError((error: any) => {
          // Manejo de errores aquí
          return throwError(error);
        })
      );
    } else {
      console.log("No se pueden enviar encabezados de autorización.");
      return throwError("No se pueden enviar encabezados de autorización.");
    }
  }

  private createAuthorizationHeader(): HttpHeaders {
    const jwtToken = localStorage.getItem('jwt');
    const headers = new HttpHeaders();
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      headers.set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
    }
    return headers;
  }
}
