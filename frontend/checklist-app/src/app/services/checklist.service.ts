import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'


@Injectable({ providedIn: 'root' })
export class ChecklistService {
api = 'http://localhost:3000/checklist'


constructor(private http: HttpClient) {}


list() {
return this.http.get<any[]>(`${this.api}/items`)
}


create(data: any) {
return this.http.post(`${this.api}/items`, data)
}


update(id: number, data: any) {
return this.http.put(`${this.api}/items/${id}`, data)
}


remove(id: number) {
return this.http.delete(`${this.api}/items/${id}`)
}
}