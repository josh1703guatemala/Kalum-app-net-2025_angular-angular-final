import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './model/role.model';

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

  createRole(role : Role) : Observable<any>{
    console.log('Lo que está llegando nombre de rol es: ' + role.name)
    return this.httpClient.post<any>(`${this.endPointRole}/roles`,{roleName: role.name});
  }

  updateRole(roleId: string, roleName: any) {
    return this.httpClient.put(`${this.endPointRole}/roles/${roleId}`, {roleName})
  }

  deleteRole(roleId: string) {
    return this.httpClient.delete(`${this.endPointRole}/roles/${roleId}`);
  }

  searchById(roleId: string) {
    return this.httpClient.get(`${this.endPointRole}/roles/${roleId}`);
  }


}
