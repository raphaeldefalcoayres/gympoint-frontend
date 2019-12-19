import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import {
  createStudentSuccess,
  createStudentFailer,
  updateStudentSuccess,
  updateStudentFailer,
} from './actions';

export function* createStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;
    const response = yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    yield put(createStudentSuccess(response.data));

    yield toast.success('Aluno cadastrado com sucesso!');

    history.push('/');
  } catch (error) {
    yield put(createStudentFailer());
    toast.error('Erro ao cadastrar aluno, confira seus dados!');
  }
}

export function* updateStudent({ payload }) {
  try {
    const student = payload.data;
    const student_id = payload.id;
    const response = yield call(api.put, `students/${student_id}`, student);

    yield put(updateStudentSuccess(response.data));

    toast.success('Aluno atualizado com sucesso!');

    history.push('/');
  } catch (error) {
    yield put(updateStudentFailer());
    toast.error('Erro ao atualizar aluno, confira seus dados!');
  }
}

export function* cancelStudent({ payload }) {
  try {
    const student = payload.data;
    const response = yield call(api.delete, `students/${student.id}`, student);

    toast.success('Aluno cancelado com sucesso!');

    yield put(updateStudentSuccess(response.data));

    history.push('/');
  } catch (error) {
    yield put(updateStudentFailer());
    toast.error('Erro ao cancelar, tente novamente mais tarde!');
  }
}

export default all([
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
  takeLatest('@student/CANCEL_STUDENT_REQUEST', cancelStudent),
]);
