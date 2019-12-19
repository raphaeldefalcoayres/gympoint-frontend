import React from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd, MdChevronLeft } from 'react-icons/md';
import { FormContainer, Head, Actions } from './styles';
import { Card, FormGroup } from '~/styles/global';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { createStudentRequest } from '~/store/modules/student/actions';
import InputCustom from '~/components/InputCustom';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  age: Yup.number()
    .typeError('A idade é obrigatória')
    .required('A idade é obrigatória')
    .integer('A idade é obrigatória e do tipo inteiro'),
  weight: Yup.number()
    .typeError('O peso é obrigatório')
    .required('O peso é obrigatório'),
  height: Yup.number()
    .typeError('A altura é obrigatória')
    .required('A altura é obrigatória'),
});

export default function Student() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(createStudentRequest({ name, email, age, weight, height }));
  }

  return (
    <FormContainer>
      <Head>
        <h1>Cadastro de aluno</h1>
        <Actions>
          <Link className="btn btn-default" to="/students">
            <MdChevronLeft size="20" color="#fff" /> VOLTAR
          </Link>
          <button type="submit" form="studentForm" className="btn btn-action">
            <MdAdd size="20" color="#fff" /> SALVAR
          </button>
        </Actions>
      </Head>
      <Card>
        <Form id="studentForm" schema={schema} onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">NOME COMPLETO</label>
            <InputCustom name="name" placeholder="John Doe" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="name">ENDEREÇO DE E-MAIL</label>
            <InputCustom name="email" placeholder="exemplo@email.com" />
          </FormGroup>

          <FormGroup className="col-third">
            <label htmlFor="age">IDADE</label>
            <InputCustom mask="999" name="age" placeholder="" />
          </FormGroup>
          <FormGroup className="col-third">
            <label htmlFor="weight">PESO (em kg)</label>
            <InputCustom mask="999.99" name="weight" placeholder="" />
          </FormGroup>
          <FormGroup className="col-third">
            <label htmlFor="height">Altura</label>
            <InputCustom mask="999.99" name="height" placeholder="" />
          </FormGroup>
        </Form>
      </Card>
    </FormContainer>
  );
}
