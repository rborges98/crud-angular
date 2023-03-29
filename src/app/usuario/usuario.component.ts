import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { UsuarioModel } from './usuario-model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  Usuarios:any[] = []
  //vai receber o array de usuarios vindo da api
  Usuario: UsuarioModel = new UsuarioModel()
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.listaUsuarios()
    //quando carregar a pagina o metodo eh chamado
  }


  listaUsuarios(){
    this.usuarioService.listaUsuarios().subscribe(usu => {
      this.Usuarios = usu
      //no html o for eh chamado pelo que tem maiusculo
    }, err =>{
          console.log('deu merda', err)
    })
  }


  cadastrar(){
    console.log(this.Usuario)
    
    if(this.Usuario.nome && this.Usuario.idade){
      this.usuarioService.cadastrarUsuario(this.Usuario).subscribe(usu =>{
        this.Usuario = new UsuarioModel()
        this.listaUsuarios()
      },err=>{

      })
    }
  }


  remover(id: number){
    this.usuarioService.removerUsuario(id).subscribe(usu => {
      this.Usuario = new UsuarioModel()
      this.listaUsuarios()
    }, err =>{

    })
  }

  

}
