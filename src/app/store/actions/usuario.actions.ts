import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
    '[USUARIO] Cargar Usuarios',
    props<{id: string}>()
);
export const cargarUsuarioSuccess = createAction(
    '[USUARIO] Cargar Usuarios Success',
    props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
    '[USUARIO] Cargar Usuarios Error',
    props<{ payload: any }>()
);