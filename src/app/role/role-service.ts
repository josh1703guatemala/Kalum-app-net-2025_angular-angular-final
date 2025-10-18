import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RoleService {
  endPointRole = enviroment.BASE_URL_KALUM_AUTH;
  
  constructor(private httpClient: HttpClient){
    
  }

  getListRole() : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPointRole}/roles`);
  }


}
