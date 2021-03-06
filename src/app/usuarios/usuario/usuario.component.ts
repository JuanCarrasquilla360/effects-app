import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from '../../store/app.reducers';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario
  loading: boolean = false
  error: any
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({error, user, loading}) => {
      this.usuario = user
      this.loading = loading
      this.error = error
    })
    this.router.params.subscribe(({ id }) => this.store.dispatch(
      cargarUsuario({ id })
    ))
  }

}
