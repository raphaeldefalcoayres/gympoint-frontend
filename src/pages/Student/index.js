import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Head, Actions } from './styles';
import { InputGroup, Card, Table } from '~/styles/global';

import { MdAdd, MdSearch } from 'react-icons/md';

export default function Student() {
  return (
    <Container>
      <Head>
        <h1>Gerenciando alunos</h1>
        <Actions>
          <Link className="btn btn-action" to="/students/form">
            <MdAdd size="20" color="#fff" /> CADASTRAR
          </Link>
          <InputGroup>
            <MdSearch />
            <input type="text" placeholder="Buscar aluno" />
          </InputGroup>
        </Actions>
      </Head>
      <Card>
        <Table>
          <thead>
            <tr>
              <th width="450">NOME</th>
              <th>E-MAIL</th>
              <th width="400" className="text-center">
                IDADE
              </th>
              <th width="100"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cha Ji-hun</td>
              <td>exemplo@email.com.br</td>
              <td className="text-center">12</td>
              <td className="text-right">
                <Link className="link-blue" to="/">
                  editar
                </Link>
                <button className="link-red" type="button">
                  apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-hun</td>
              <td>exemplo@email.com.br</td>
              <td className="text-center">12</td>
              <td className="text-right">
                <Link className="link-blue" to="/">
                  editar
                </Link>
                <button className="link-red" type="button">
                  apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-hun</td>
              <td>exemplo@email.com.br</td>
              <td className="text-center">12</td>
              <td className="text-right">
                <Link className="link-blue" to="/">
                  editar
                </Link>
                <button className="link-red" type="button">
                  apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-hun</td>
              <td>exemplo@email.com.br</td>
              <td className="text-center">12</td>
              <td className="text-right">
                <Link className="link-blue" to="/">
                  editar
                </Link>
                <button className="link-red" type="button">
                  apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-hun</td>
              <td>exemplo@email.com.br</td>
              <td className="text-center">12</td>
              <td className="text-right">
                <Link className="link-blue" to="/">
                  editar
                </Link>
                <button className="link-red" type="button">
                  apagar
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
