import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    user: Usuario
    id: string
    loaded: boolean
    loading: boolean
    error: any
}

export const usuarioInitialState: UsuarioState = {
    user: {},
    id: null,
    loaded: false,
    loading: false,
    error: null,
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(cargarUsuario, (state, { id }) => ({
        ...state,
        loading: true,
        id
    })),
    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...usuario },
        error: null
    })),
    on(cargarUsuarioError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            name: payload.name,
            url: payload.url,
            message: payload.message
        }
    })),


);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}