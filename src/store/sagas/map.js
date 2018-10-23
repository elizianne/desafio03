import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MapActions } from '../ducks/map';
import { Creators as ModalActions } from '../ducks/modal';

export function* getGithubUserRequest(action) {
  try {
    const coordinates = yield select(state => state.modal.coordinates);
    const response = yield call(api.get, `users/${action.payload.user}`);

    yield put(ModalActions.hideModal());

    if (response.data) {
      yield put(MapActions.addGithubUserSuccess({ user: response.data, coordinates }));
    } else {
      alert('Esse usuário não foi encontrado!');
    }
  } catch (err) {
    yield put(MapActions.addGithubUserError({ message: 'Erro ao adicionar usuário' }));
  }
}
