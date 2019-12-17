import React from 'react';

import { MdAdd, MdChevronLeft } from 'react-icons/md';
import { FormContainer, Head, Actions } from './styles';
import { Card, FormGroup } from '~/styles/global';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

export default function Student() {
  return (
    <FormContainer>
      <Head>
        <h1>Cadastro de aluno</h1>
        <Actions>
          <Link className="btn btn-default" to="/students">
            <MdChevronLeft size="20" color="#fff" /> VOLTAR
          </Link>
          <Link className="btn btn-action" to="/students/form">
            <MdAdd size="20" color="#fff" /> SALVAR
          </Link>
        </Actions>
      </Head>
      <Card>
        <Form>
          <FormGroup>
            <label htmlFor="name">NOME COMPLETO</label>
            <Input name="name" placeholder="John Doe" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="name">ENDEREÇO DE E-MAIL</label>
            <Input name="email" placeholder="exemplo@email.com" />
          </FormGroup>

          <FormGroup className="col-third">
            <label htmlFor="age">IDADE</label>
            <Input name="age" placeholder="" />
          </FormGroup>
          <FormGroup className="col-third">
            <label htmlFor="weight">PESO (em kg)</label>
            <Input name="weight" placeholder="" />
          </FormGroup>
          <FormGroup className="col-third">
            <label htmlFor="height">Altura</label>
            <Input name="height" placeholder="" />
          </FormGroup>
        </Form>
      </Card>
    </FormContainer>
  );
}
