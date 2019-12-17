import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo2.png';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <NavLink to="/students">ALUNOS</NavLink>
          <NavLink to="/plans">PLANOS</NavLink>
          <NavLink to="/registrations">MATRÍCULAS</NavLink>
          <NavLink to="/help-orders">PEDIDOS DE AUXÍLIO</NavLink>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button onClick={handleLogout}>sair do sistema</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
