import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from '../../services/usuario.service';
import * as usuarioActions from '../actions/usuario.actions';

@Injectable()
export class UsuarioEffect {
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }



    cargarUsuario$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(usuarioActions.cargarUsuario),
                mergeMap((action) => this.usuarioService.getUser(action.id)
                    .pipe(
                        map(users => usuarioActions.cargarUsuarioSuccess({usuario: users})),
                        catchError( err => of (usuarioActions.cargarUsuarioError({payload: err})))
                    )
                )
            )
    )
}