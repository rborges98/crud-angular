import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsuarioModel } from './usuario/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  //chama do endpoint a lista de usuarios
  listaUsuarios() : Observable<any> {
    return this.http.get('http://localhost:3000/usuarios')
  }

  cadastrarUsuario(usuario:UsuarioModel) : Observable<any>{
    return this.http.post('http://localhost:3000/usuarios', usuario)
  }

  removerUsuario(id:any) : Observable<any>{
    return this.http.delete('http://localhost:3000/usuarios' + '/' + id)
  }

}
