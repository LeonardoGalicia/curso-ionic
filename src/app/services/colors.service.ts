import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/environments/endpoints';
import { colorResponse, ColorsResponse } from '../model/colors.model'
import { LoginResponse } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }
  getColor():Observable<ColorsResponse>{
    return this.http.get<ColorsResponse>(Endpoints.colors);

  }
  getSingleColor(id:number):Observable<colorResponse>{
    return this.http.get<colorResponse>( `${Endpoints.colors}/${id}`)
  }
}
