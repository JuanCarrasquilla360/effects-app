import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = []
  loading: boolean = false
  error: any
  constructor(
    private usuarioService: UsuarioService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(({error, users, loading}) => {
      this.usuarios = users
      this.loading = loading
      this.error = error
    })
    this.store.dispatch(cargarUsuarios())
  }

}
