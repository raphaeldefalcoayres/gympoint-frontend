import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container, Head, Actions } from './styles';
import { InputGroup, Card, Table } from '~/styles/global';

import { MdAdd, MdSearch } from 'react-icons/md';

export default function Student() {
  const [students, setStudents] = useState([]);

  async function loadStudents() {
    const response = await api.get('users');

    const data = response.data.map(student => {
      return {
        ...student,
      };
    });

    setStudents(data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleFilterList(e) {
    const response = await api.get(`users?q=${e.target.value}`);
    const data = response.data.map(student => {
      return {
        ...student,
      };
    });

    setStudents(data);
  }

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
            <input
              type="text"
              placeholder="Buscar aluno"
              onChange={handleFilterList}
            />
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
              <th width="110"></th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="10">Nenhum registro encontrado...</td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td className="text-center">{student.age}</td>
                  <td className="text-right">
                    <Link className="link-blue" to="/">
                      editar
                    </Link>
                    <button className="link-red" type="button">
                      apagar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
