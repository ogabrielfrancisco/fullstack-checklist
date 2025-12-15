import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'


@Injectable({ providedIn: 'root' })
export class AuthService {
api = 'http://localhost:3000/auth'


constructor(private http: HttpClient, private router: Router) {}


login(data: any) {
return this.http.post<any>(`${this.api}/login`, data)
}


register(data: any) {
return this.http.post(`${this.api}/register`, data)
}


saveToken(token: string) {
localStorage.setItem('token', token)
}


isLogged() {
return !!localStorage.getItem('token')
}


logout() {
localStorage.removeItem('token')
this.router.navigate(['/login'])
}
}