import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[USUARIOS] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
    '[USUARIOS] Cargar Usuarios Success',
    props<{usuarios: Usuario[]}>()
);
export const cargarUsuariosError = createAction(
    '[USUARIOS] Cargar Usuarios Error',
    props<{payload: any}>()
);